<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import { t } from "svelte-i18n";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";

  // ── Font size control ─────────────────────────────────────────────────────
  let fontSize = 14; // px, base for report content
  const FONT_MIN = 11;
  const FONT_MAX = 20;

  // ── Prevent Presentation.svelte global styles from leaking in ────────────
  onMount(() => {
    document.documentElement.style.scrollSnapType = "none";
    document.documentElement.style.fontSize = "16px";
  });
  onDestroy(() => {
    document.documentElement.style.scrollSnapType = "";
    document.documentElement.style.fontSize = "";
  });

  // ── Report metadata ───────────────────────────────────────────────────────
  const meta = {
    week: "S01",
    start: "01/06/2026",
    end: "05/06/2026",
    generated: "2026-05-31",
    regime: "RISK-ON ESTREITO",
    methodology: "Triple Screen (Elder) + Sistema de Impulso",
    regimeNote:
      "Apetite a risco concentrado em large-cap US. Commodities e alt-risk corrigindo. Real estruturalmente forte.",
  };

  // ── Asset data ────────────────────────────────────────────────────────────
  type Bias = "SHORT" | "LONG";
  type Status = "ARMED" | "STANDBY" | "IN_POSITION";
  type Conviction = "FULL" | "HALF";
  type ImpulseKey = "red" | "green" | "blue_to_red";
  type ZoneKey =
    | "zone_neutral_up"
    | "zone_rising_overbought"
    | "zone_overbought"
    | "zone_low_k_below_d"
    | "zone_rising"
    | "zone_oversold";

  interface Asset {
    symbol: string;
    labelKey: "btc" | "xau" | "sp" | "bovespa" | "usdbrl" | "brent";
    roleKey: "role_primary" | "role_macro";
    bias: Bias;
    status: Status;
    conviction: Conviction;
    impulse: ImpulseKey;
    close: number;
    ma17: number | null;
    stochK: number;
    stochD: number;
    zoneKey: ZoneKey;
    atr: number | null;
    support: number;
    resistance: number;
    priority: number;
    noteKey: string;
    formatFn: (n: number) => string;
  }

  const fmt2 = (n: number) => n.toFixed(2);
  const fmt4 = (n: number) => n.toFixed(4);
  const fmtBR = (n: number) =>
    n.toLocaleString("pt-BR", { maximumFractionDigits: 2 });

  const assets: Asset[] = [
    {
      symbol: "BTC/USD", labelKey: "btc", roleKey: "role_primary",
      bias: "SHORT", status: "ARMED", conviction: "HALF", impulse: "blue_to_red",
      close: 75708.0, ma17: 76533.35, stochK: 42.08, stochD: 28.63,
      zoneKey: "zone_neutral_up", atr: null,
      support: 73936.0, resistance: 76606.5, priority: 3,
      noteKey: "btc_note", formatFn: fmtBR,
    },
    {
      symbol: "XAU/USD", labelKey: "xau", roleKey: "role_macro",
      bias: "SHORT", status: "ARMED", conviction: "FULL", impulse: "red",
      close: 4529.57, ma17: 4576.27, stochK: 68.77, stochD: 56.19,
      zoneKey: "zone_rising_overbought", atr: 101.35,
      support: 4500.0, resistance: 4632.41, priority: 1,
      noteKey: "xau_note", formatFn: fmtBR,
    },
    {
      symbol: "S&P 500", labelKey: "sp", roleKey: "role_macro",
      bias: "LONG", status: "STANDBY", conviction: "FULL", impulse: "green",
      close: 7580.06, ma17: 7088.78, stochK: 90.88, stochD: 90.08,
      zoneKey: "zone_overbought", atr: 68.83,
      support: 7369.23, resistance: 7599.38, priority: 6,
      noteKey: "sp_note", formatFn: fmtBR,
    },
    {
      symbol: "BOVESPA", labelKey: "bovespa", roleKey: "role_macro",
      bias: "SHORT", status: "ARMED", conviction: "FULL", impulse: "red",
      close: 173787.0, ma17: 177870.33, stochK: 18.94, stochD: 34.34,
      zoneKey: "zone_low_k_below_d", atr: 2606.67,
      support: 172686.0, resistance: 180055.0, priority: 2,
      noteKey: "bovespa_note", formatFn: fmtBR,
    },
    {
      symbol: "USD/BRL", labelKey: "usdbrl", roleKey: "role_macro",
      bias: "SHORT", status: "STANDBY", conviction: "HALF", impulse: "red",
      close: 5.0368, ma17: 5.1099, stochK: 64.81, stochD: 66.89,
      zoneKey: "zone_rising", atr: null,
      support: 4.995, resistance: 5.1099, priority: 4,
      noteKey: "usdbrl_note", formatFn: fmt4,
    },
    {
      symbol: "BRENT", labelKey: "brent", roleKey: "role_macro",
      bias: "SHORT", status: "STANDBY", conviction: "FULL", impulse: "red",
      close: 93.46, ma17: 94.37, stochK: 11.51, stochD: 13.07,
      zoneKey: "zone_oversold", atr: 5.45,
      support: 92.48, resistance: 101.06, priority: 5,
      noteKey: "brent_note", formatFn: fmt2,
    },
  ];

  const sortedByPriority = [...assets].sort((a, b) => a.priority - b.priority);

  // ── BTC scenarios ─────────────────────────────────────────────────────────
  const btcScenarios = [
    {
      id: "A",
      nameKey: "sc_a_name",
      conditionKey: "sc_a_condition",
      action: "EnterShort",
      stop: "76.800",
      target: "73.936",
      targetKey: "sc_a_target_label",
      invalidationKey: "sc_a_invalidation",
    },
    {
      id: "B",
      nameKey: "sc_b_name",
      conditionKey: "sc_b_condition",
      action: "EnterShort",
      stop: "74.100",
      target: "72.000 → 58.334",
      targetKey: "sc_b_target_label",
      invalidationKey: "sc_b_invalidation",
    },
  ];

  // ── Helpers ───────────────────────────────────────────────────────────────
  function levelPct(close: number, support: number, resistance: number): number {
    const range = resistance - support;
    if (range === 0) return 50;
    return Math.min(100, Math.max(0, ((close - support) / range) * 100));
  }

  function statusColor(s: Status): string {
    if (s === "ARMED") return "text-emerald-400";
    if (s === "IN_POSITION") return "text-[#00F0FF]";
    return "text-amber-400";
  }

  function statusGlow(s: Status): string {
    if (s === "ARMED")
      return "shadow-[0_0_8px_rgba(52,211,153,0.4)] border-emerald-500/40";
    if (s === "IN_POSITION")
      return "shadow-[0_0_8px_rgba(0,240,255,0.4)] border-[#00F0FF]/40";
    return "shadow-[0_0_6px_rgba(251,191,36,0.2)] border-amber-500/30";
  }

  function biasColor(b: Bias): string {
    return b === "SHORT" ? "text-rose-400" : "text-emerald-400";
  }

  function impulseKey(i: ImpulseKey): string {
    if (i === "red") return "report.impulse_red";
    if (i === "green") return "report.impulse_green";
    return "report.impulse_blue_red";
  }

  function impulseColor(i: ImpulseKey): string {
    if (i === "red") return "text-rose-500";
    if (i === "green") return "text-emerald-400";
    return "text-amber-400";
  }

  function stochColor(zk: ZoneKey): string {
    if (zk === "zone_overbought") return "text-rose-400";
    if (zk === "zone_oversold") return "text-amber-400";
    return "text-[#4CC9F0]";
  }

  // Asset label map — not translated (proper names)
  const assetLabels: Record<string, string> = {
    btc: "Bitcoin",
    xau: "Ouro / Gold",
    sp: "S&P 500",
    bovespa: "Ibovespa",
    usdbrl: "Dólar / Real",
    brent: "Petróleo Brent",
  };
</script>

<div
  class="min-h-screen bg-black text-white font-mono relative z-10"
  in:fade={{ duration: 300 }}
>
  <!-- ── Sticky Header ──────────────────────────────────────────────────────── -->
  <header
    class="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10"
  >
    <div
      class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3"
    >
      <!-- Left: breadcrumb -->
      <div class="flex items-center gap-3 flex-wrap">
        <a
          href="/"
          class="text-[#00F0FF]/60 hover:text-[#00F0FF] text-xs tracking-widest transition-colors"
        >
          {$t("report.nav_back")}
        </a>
        <span class="text-white/20">/</span>
        <span class="text-white text-xs tracking-widest font-bold"
          >{$t("report.nav_title")}</span
        >
        <span class="hidden md:inline text-white/20">/</span>
        <span class="hidden md:inline text-[#00F0FF]/70 text-xs">
          {$t("report.nav_week")}
          {meta.start} – {meta.end}
        </span>
      </div>

      <!-- Right: regime + font controls + lang switcher -->
      <div class="flex items-center gap-3 flex-wrap justify-end">
        <!-- Regime badge -->
        <div
          class="flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 rounded-sm"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
          <span class="text-amber-400 text-[10px] tracking-widest font-bold"
            >{meta.regime}</span
          >
        </div>

        <!-- Generated date (desktop) -->
        <span class="hidden lg:inline text-white/30 text-[10px]">
          {$t("report.generated_label")}
          {meta.generated}
        </span>

        <!-- Font size controls -->
        <div
          class="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden"
          aria-label="Font size controls"
        >
          <button
            on:click={() => (fontSize = Math.max(FONT_MIN, fontSize - 1))}
            disabled={fontSize <= FONT_MIN}
            class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Decrease font size"
          >
            {$t("report.font_decrease")}
          </button>
          <span class="text-[10px] text-white/30 px-1 tabular-nums"
            >{fontSize}</span
          >
          <button
            on:click={() => (fontSize = Math.min(FONT_MAX, fontSize + 1))}
            disabled={fontSize >= FONT_MAX}
            class="px-2 py-1 text-xs text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Increase font size"
          >
            {$t("report.font_increase")}
          </button>
        </div>

        <!-- Language switcher (compact) -->
        <div class="hidden md:block">
          <LanguageSwitcher only={["pt", "en"]} />
        </div>
      </div>
    </div>

    <!-- Language switcher (mobile row) -->
    <div class="md:hidden px-4 pb-2 border-t border-white/5">
      <LanguageSwitcher only={["pt", "en"]} />
    </div>
  </header>

  <!-- ── Content ────────────────────────────────────────────────────────────── -->
  <div
    class="max-w-7xl mx-auto px-4 py-8 space-y-10"
    style="font-size: {fontSize}px"
  >
    <!-- Page title -->
    <div class="space-y-3">
      <div class="flex items-baseline gap-3 flex-wrap">
        <span class="text-[#00F0FF]/40 tracking-[0.3em] uppercase" style="font-size: 0.72em">REL-OP</span>
        <span class="text-[#00F0FF]/40" style="font-size: 0.72em">·</span>
        <span class="text-white/20 tracking-widest" style="font-size: 0.72em">{meta.week}</span>
      </div>
      <h1 class="font-bold tracking-tight text-white leading-tight" style="font-size: clamp(1.6rem, 3vw + 1rem, 3rem)">
        {$t("report.page_title")}
        <span class="text-white/30 block md:inline" style="font-size: 0.75em">
          — {meta.start}–{meta.end}
        </span>
      </h1>
      <p class="text-[#4CC9F0]/70 max-w-2xl leading-relaxed" style="font-size: 0.9em">
        {meta.regimeNote}
      </p>
      <div class="flex gap-4 flex-wrap text-white/30 tracking-widest pt-1" style="font-size: 0.65em">
        <span>{$t("report.methodology_label")}: {meta.methodology}</span>
        <span>·</span>
        <span>{$t("report.indicators_label")}: MARÉ MME(17)+MACD · ONDA STOCH(5,3,3) · VOL ATR(14)</span>
      </div>
    </div>

    <!-- Warning banner -->
    <div
      class="border border-amber-500/20 bg-amber-500/5 p-4 rounded-sm flex gap-3"
    >
      <span class="text-amber-400 shrink-0 mt-0.5" style="font-size: 0.8em">⚠</span>
      <p class="text-amber-400/80 leading-relaxed" style="font-size: 0.8em">
        <strong class="text-amber-400">{$t("report.warning_title")}</strong>
        {@html $t("report.warning_text")}
      </p>
    </div>

    <!-- Priority queue -->
    <section>
      <h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em">
        {$t("report.priority_title")}
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {#each sortedByPriority as asset}
          <div
            class="border border-white/10 bg-white/[0.02] p-3 rounded-sm flex flex-col gap-1 hover:border-white/20 transition-colors"
          >
            <div class="flex items-center justify-between">
              <span class="text-white/30" style="font-size: 0.72em">#{asset.priority}</span>
              <span class="font-bold {statusColor(asset.status)}" style="font-size: 0.72em"
                >{asset.status}</span
              >
            </div>
            <div class="text-white font-bold" style="font-size: 0.9em">{asset.symbol}</div>
            <div class="text-white/40 leading-snug" style="font-size: 0.72em">{$t(`report.${asset.noteKey}`)}</div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Scoreboard -->
    <section>
      <h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em">
        {$t("report.scoreboard_title")}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {#each assets as asset}
          {@const pct = levelPct(asset.close, asset.support, asset.resistance)}
          <div
            class="border {statusGlow(asset.status)} bg-black/80 backdrop-blur p-5 rounded-sm flex flex-col gap-4 hover:bg-white/[0.02] transition-all"
          >
            <!-- Card header -->
            <div class="flex items-start justify-between gap-2">
              <div>
                <div class="flex items-center gap-2 mb-0.5">
                  <span class="text-white font-bold tracking-tight" style="font-size: 1.1em"
                    >{asset.symbol}</span
                  >
                  {#if asset.roleKey === "role_primary"}
                    <span
                      class="px-1.5 py-0.5 border border-[#00F0FF]/30 text-[#00F0FF]/70 tracking-widest rounded-sm"
                      style="font-size: 0.6em">{$t("report.role_primary")}</span
                    >
                  {:else}
                    <span
                      class="px-1.5 py-0.5 border border-white/10 text-white/30 tracking-widest rounded-sm"
                      style="font-size: 0.6em">{$t("report.role_macro")}</span
                    >
                  {/if}
                </div>
                <span class="text-white/30" style="font-size: 0.72em">{assetLabels[asset.labelKey]}</span>
              </div>
              <div class="text-right shrink-0">
                <div class="font-bold {biasColor(asset.bias)} tracking-widest" style="font-size: 0.8em"
                  >{asset.bias}</div
                >
                <div
                  class="tracking-widest {asset.conviction === 'FULL' ? 'text-white/70' : 'text-white/40'}"
                  style="font-size: 0.72em">{asset.conviction}</div
                >
              </div>
            </div>

            <!-- Status + impulse -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="w-1.5 h-1.5 rounded-full {asset.status === 'ARMED'
                    ? 'bg-emerald-400'
                    : asset.status === 'IN_POSITION'
                      ? 'bg-[#00F0FF]'
                      : 'bg-amber-400'} {asset.status !== 'STANDBY'
                    ? 'animate-pulse'
                    : ''}"
                ></div>
                <span class="font-bold {statusColor(asset.status)}" style="font-size: 0.8em"
                  >{asset.status}</span
                >
              </div>
              <span class="{impulseColor(asset.impulse)}" style="font-size: 0.72em"
                >{$t(impulseKey(asset.impulse))}</span
              >
            </div>

            <!-- Level bar -->
            <div>
              <div class="flex justify-between text-white/30 mb-1.5" style="font-size: 0.6em">
                <span>SUP {asset.formatFn(asset.support)}</span>
                <span class="text-white font-bold" style="font-size: 1.1em">
                  {asset.formatFn(asset.close)}
                </span>
                <span>RES {asset.formatFn(asset.resistance)}</span>
              </div>
              <div class="relative h-1 bg-white/10 rounded-full overflow-visible">
                <div
                  class="absolute top-0 left-0 h-full rounded-full {asset.bias === 'SHORT'
                    ? 'bg-rose-500/60'
                    : 'bg-emerald-500/60'}"
                  style="width: {pct}%"
                ></div>
                <div
                  class="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-black"
                  style="left: calc({pct}% - 4px)"
                ></div>
              </div>
            </div>

            <!-- Oscillators -->
            <div
              class="grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-3"
            >
              <div>
                <div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %K</div>
                <div class="font-bold {stochColor(asset.zoneKey)}" style="font-size: 0.8em"
                  >{asset.stochK.toFixed(1)}</div
                >
              </div>
              <div>
                <div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">Stoch %D</div>
                <div class="text-white/60" style="font-size: 0.8em">{asset.stochD.toFixed(1)}</div>
              </div>
              <div>
                <div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">MA(17)</div>
                <div class="text-[#4CC9F0]/70" style="font-size: 0.8em">
                  {#if asset.ma17 !== null}
                    {asset.formatFn(asset.ma17)}
                  {:else}
                    —
                  {/if}
                </div>
              </div>
            </div>

            <!-- Zone label -->
            <div class="text-white/25 tracking-wide -mt-2" style="font-size: 0.6em">
              {$t("report.zone_label")}:
              <span class="{stochColor(asset.zoneKey)}"
                >{$t(`report.${asset.zoneKey}`)}</span
              >
              {#if asset.atr !== null}
                <span class="ml-3"
                  >ATR: <span class="text-white/40">{asset.atr}</span></span
                >
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- BTC Primary Playbook -->
    <section>
      <div class="flex items-center gap-4 mb-4">
        <h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase" style="font-size: 0.65em">
          {$t("report.playbook_title")}
        </h2>
        <div class="flex-1 h-px bg-white/5"></div>
        <span class="text-rose-400/60 tracking-widest" style="font-size: 0.65em">SHORT · ARMED · HALF</span>
      </div>

      <!-- Context -->
      <div
        class="border border-white/10 bg-white/[0.02] p-5 rounded-sm mb-4 grid md:grid-cols-2 gap-6"
      >
        <div>
          <p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em">
            {$t("report.tide_label")}
          </p>
          <p class="text-white/70 leading-relaxed" style="font-size: 0.85em">
            {@html $t("report.tide_text")}
          </p>
        </div>
        <div>
          <p class="text-white/30 tracking-widest uppercase mb-3" style="font-size: 0.65em">
            {$t("report.wave_label")}
          </p>
          <p class="text-white/70 leading-relaxed" style="font-size: 0.85em">
            {@html $t("report.wave_text")}
          </p>
        </div>
      </div>

      <!-- Scenarios A & B -->
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        {#each btcScenarios as sc}
          <div
            class="border border-white/10 hover:border-rose-500/20 bg-black/60 p-5 rounded-sm flex flex-col gap-4 transition-colors"
          >
            <div class="flex items-center justify-between">
              <span class="text-rose-400 font-bold tracking-widest" style="font-size: 0.9em">
                CENÁRIO {sc.id}
              </span>
              <span class="text-white/30 tracking-widest" style="font-size: 0.65em"
                >{$t(`report.${sc.nameKey}`)}</span
              >
            </div>
            <div>
              <p class="text-white/30 tracking-widest uppercase mb-2" style="font-size: 0.65em">
                {$t("report.trigger_label")}
              </p>
              <p class="text-white/70 leading-relaxed" style="font-size: 0.8em">
                {$t(`report.${sc.conditionKey}`)}
              </p>
            </div>
            <div
              class="grid grid-cols-3 gap-3 border-t border-white/5 pt-4 text-center"
            >
              <div>
                <div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">
                  {$t("report.action_label")}
                </div>
                <div class="text-rose-400 font-bold" style="font-size: 0.8em">{sc.action}</div>
              </div>
              <div>
                <div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">
                  {$t("report.stop_label")}
                </div>
                <div class="text-amber-400 font-bold" style="font-size: 0.8em">{sc.stop}</div>
              </div>
              <div>
                <div class="text-white/30 uppercase tracking-wider mb-1" style="font-size: 0.6em">
                  {$t(`report.${sc.targetKey}`)}
                </div>
                <div class="text-emerald-400 font-bold" style="font-size: 0.8em">{sc.target}</div>
              </div>
            </div>
            <div class="text-white/25 border-t border-white/5 pt-3" style="font-size: 0.65em">
              INVALIDAÇÃO: <span class="text-amber-400/60"
                >{$t(`report.${sc.invalidationKey}`)}</span
              >
            </div>
          </div>
        {/each}
      </div>

      <!-- Scenario C -->
      <div
        class="border border-white/5 bg-white/[0.01] p-4 rounded-sm flex items-start gap-3"
      >
        <span class="text-white/30 font-bold shrink-0" style="font-size: 0.8em"
          >{$t("report.sc_c_label")}</span
        >
        <p class="text-white/50 leading-relaxed" style="font-size: 0.8em">
          {@html $t("report.sc_c_text")}
        </p>
      </div>

      <!-- Macro implication -->
      <div class="mt-4 p-4 border-l-2 border-[#00F0FF]/20 bg-[#00F0FF]/[0.02]">
        <p class="text-[#00F0FF]/50 uppercase tracking-widest mb-1" style="font-size: 0.65em">
          {$t("report.macro_implication_title")}
        </p>
        <p class="text-white/60 leading-relaxed" style="font-size: 0.8em">
          {@html $t("report.macro_implication_text")}
        </p>
      </div>
    </section>

    <!-- Risk rules -->
    <section>
      <h2 class="tracking-[0.3em] text-[#00F0FF]/50 uppercase mb-4" style="font-size: 0.65em">
        {$t("report.risk_title")}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
        {#each ["2pct", "6pct", "conv", "hier"] as ruleId}
          <div class="border border-white/10 bg-white/[0.01] p-4 rounded-sm">
            <div class="text-[#00F0FF]/40 tracking-widest mb-2" style="font-size: 0.6em">
              {$t(`report.rule_${ruleId}_id`)}
            </div>
            <div class="text-white font-bold mb-2" style="font-size: 0.8em">
              {$t(`report.rule_${ruleId}_title`)}
            </div>
            <p class="text-white/50 leading-relaxed" style="font-size: 0.72em">
              {$t(`report.rule_${ruleId}_body`)}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Legend + audit footer -->
    <section class="border-t border-white/5 pt-6">
      <div class="flex flex-wrap gap-6 text-white/30" style="font-size: 0.65em">
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
          <span
            ><strong class="text-emerald-400">ARMED</strong> —
            {$t("report.legend_armed")}</span
          >
        </div>
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
          <span
            ><strong class="text-amber-400">STANDBY</strong> —
            {$t("report.legend_standby")}</span
          >
        </div>
        <div class="flex items-center gap-2">
          <div class="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></div>
          <span
            ><strong class="text-[#00F0FF]">IN_POSITION</strong> —
            {$t("report.legend_in_position")}</span
          >
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white/40">FULL</span>
          <span>— {$t("report.legend_full")}</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white/40">HALF</span>
          <span>— {$t("report.legend_half")}</span>
        </div>
      </div>
      <p class="text-white/15 mt-4" style="font-size: 0.55em">
        NEXUS QUANT · REL-OP-{meta.week} · {$t("report.generated_label")}
        {meta.generated} · {$t("report.nav_week")}
        {meta.start}–{meta.end} · {meta.methodology}
      </p>
    </section>
  </div>
</div>
