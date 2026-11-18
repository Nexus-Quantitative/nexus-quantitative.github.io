<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import { locale } from "svelte-i18n";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import {
    oosSignals,
    oosSummary,
    type OOSSignalRecord,
    type OOSCoreSymbol,
  } from "./oosSignalsData";

  // ── Font size control ─────────────────────────────────────────────────────
  let fontSize = 15;
  const FONT_MIN = 12;
  const FONT_MAX = 20;

  // ── Cascade filter state ──────────────────────────────────────────────────
  type CascadeFilter = "all" | "mega" | "climax" | "moderate";
  let cascadeFilter: CascadeFilter = "all";

  // ── OOS Proof ledger filter state ─────────────────────────────────────────
  type OosStatusFilter = "filled" | "all" | "full" | "partial" | "expired";
  type OosSymbolFilter = "ALL" | OOSCoreSymbol;
  let oosStatusFilter: OosStatusFilter = "filled";
  let oosSymbolFilter: OosSymbolFilter = "ALL";

  $: isPt = ($locale ?? "").startsWith("pt");

  onMount(() => {
    document.documentElement.style.scrollSnapType = "none";
    document.documentElement.style.fontSize = "16px";
    window.scrollTo({ top: 0 });
  });
  onDestroy(() => {
    document.documentElement.style.scrollSnapType = "";
    document.documentElement.style.fontSize = "";
  });

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ── Report metadata ───────────────────────────────────────────────────────
  const meta = {
    code: "QUANT-RES-2026-11",
    date: "2026-11-18 · 16:18 UTC",
    commit: "505dfa6",
    prs: "PRs #78 / #79 / #80",
  };

  // ── Section jump links ────────────────────────────────────────────────────
  const sections = [
    { id: "sec-cenario", num: "01", pt: "CENÁRIO ATUAL", en: "MARKET SCENARIO" },
    { id: "sec-fisica", num: "02", pt: "FÍSICA & RÉGUA 30D", en: "LIQUIDATION PHYSICS" },
    { id: "sec-cronologia", num: "03", pt: "24 CASCATAS", en: "24 CASCADES" },
    { id: "sec-sistema", num: "04", pt: "ARK STREAMS", en: "SYSTEM ARCHITECTURE" },
    { id: "sec-oos-proof", num: "04B", pt: "PROVA OOS (133 SINAIS)", en: "OOS PROOF (133 SIGNALS)" },
    { id: "sec-hardening", num: "05", pt: "HARDENING PROD", en: "PROD HARDENING" },
    { id: "sec-doutrina", num: "06", pt: "DOUTRINA QUANT", en: "QUANT DOCTRINE" },
  ];

  // ── Section 1: Live Futures Snapshot (Bitget USDT-FUTURES @ 16:17 UTC) ───
  interface MarketSnap {
    symbol: string;
    last: string;
    low24h: number;
    high24h: number;
    lastNum: number;
    funding: string;
    fundingPos: boolean;
    notePt: string;
    noteEn: string;
  }

  const marketSnaps: MarketSnap[] = [
    {
      symbol: "BTCUSDT",
      last: "$62,656.8",
      low24h: 62645.7,
      high24h: 65236.6,
      lastNum: 62656.8,
      funding: "+0.0067%",
      fundingPos: true,
      notePt: "Novo teste da mínima semanal ($62,6k) após repique pós-14:40 UTC ceder; liquidação individual abaixo do P99 ($1,18M).",
      noteEn: "Retesting weekly low zone ($62.6k) after post-14:40 UTC bounce faded; own 5m liqs still below 30d P99 ($1.18M).",
    },
    {
      symbol: "ETHUSDT",
      last: "$1,758.01",
      low24h: 1755.01,
      high24h: 1835.19,
      lastNum: 1758.01,
      funding: "+0.0007%",
      fundingPos: true,
      notePt: "Funding praticamente zerado (+0,0007%); liderou o flush de 14:40 UTC com $2,01M liquidados em 5m (> 2,4x P99).",
      noteEn: "Funding near flat (+0.0007%); led the 14:40 UTC flush with $2.01M liquidated in 5m (> 2.4x P99).",
    },
    {
      symbol: "SOLUSDT",
      last: "$72.957",
      low24h: 71.649,
      high24h: 75.739,
      lastNum: 72.957,
      funding: "-0.0046%",
      fundingPos: false,
      notePt: "Acionou gatilho F1 Shadow ao vivo às 16:12 UTC: liq5m=$417.877 >= P95=$144.217 (2,90x), bid a $70,8416 (-313 bps).",
      noteEn: "Fired live F1 Shadow trigger at 16:12 UTC: liq5m=$417,877 >= P95=$144,217 (2.90x), passive limit $70.8416 (-313 bps).",
    },
    {
      symbol: "XRPUSDT",
      last: "$0.9712",
      low24h: 0.9518,
      high24h: 1.0073,
      lastNum: 0.9712,
      funding: "-0.0040%",
      fundingPos: false,
      notePt: "Funding negativo (-0,0040%); monitorado tanto no motor Major P99 ($313,8k) quanto no Alt F1 P95 ($125,3k).",
      noteEn: "Negative funding (-0.0040%); tracked on both Major P99 ($313.8k) and Alt F1 P95 ($125.3k) engines.",
    },
    {
      symbol: "XAUUSDT",
      last: "$3,756.36",
      low24h: 3749.57,
      high24h: 3878.72,
      lastNum: 3756.36,
      funding: "+0.0101%",
      fundingPos: true,
      notePt: "Contágio recorrente de margem cruzada cripto↔ouro ($1,38M em 14/11; $1,20M em 05/11); 100% WR no OOS.",
      noteEn: "Recurring cross-margin crypto↔gold contagion ($1.38M on 14/11; $1.20M on 05/11); 100% OOS win rate.",
    },
  ];

  function rangePct(last: number, low: number, high: number): number {
    if (high <= low) return 50;
    return Math.max(0, Math.min(100, ((last - low) / (high - low)) * 100));
  }

  // ── Section 2: 30-Day Production Warmup Thresholds (from ark_stream boot) ─
  interface ThresholdRow {
    symbol: string;
    role: "MAJOR P99" | "ALT F1 P95";
    msgs: string;
    nonZero5m: string;
    threshold: string;
  }

  const liveThresholds: ThresholdRow[] = [
    { symbol: "BTCUSDT", role: "MAJOR P99", msgs: "16,369", nonZero5m: "4,854", threshold: "$1,182,477" },
    { symbol: "ETHUSDT", role: "MAJOR P99", msgs: "18,871", nonZero5m: "5,741", threshold: "$823,525" },
    { symbol: "XAUUSDT", role: "MAJOR P99", msgs: "3,908", nonZero5m: "2,500", threshold: "$655,443" },
    { symbol: "XRPUSDT", role: "MAJOR P99", msgs: "5,294", nonZero5m: "3,931", threshold: "$313,787" },
    { symbol: "SOLUSDT", role: "ALT F1 P95", msgs: "8,389", nonZero5m: "4,602", threshold: "$143,925" },
    { symbol: "ZECUSDT", role: "ALT F1 P95", msgs: "12,077", nonZero5m: "5,103", threshold: "$136,311" },
    { symbol: "XRPUSDT", role: "ALT F1 P95", msgs: "5,294", nonZero5m: "3,931", threshold: "$125,266" },
    { symbol: "DOGEUSDT", role: "ALT F1 P95", msgs: "3,540", nonZero5m: "2,137", threshold: "$112,886" },
    { symbol: "HYPEUSDT", role: "ALT F1 P95", msgs: "2,283", nonZero5m: "1,889", threshold: "$112,117" },
    { symbol: "PEPEUSDT", role: "ALT F1 P95", msgs: "4,432", nonZero5m: "3,127", threshold: "$75,963" },
    { symbol: "NEARUSDT", role: "ALT F1 P95", msgs: "2,314", nonZero5m: "2,228", threshold: "$68,122" },
    { symbol: "UNIUSDT", role: "ALT F1 P95", msgs: "1,890", nonZero5m: "1,932", threshold: "$64,710" },
    { symbol: "BNBUSDT", role: "ALT F1 P95", msgs: "829", nonZero5m: "816", threshold: "$61,869" },
    { symbol: "SUIUSDT", role: "ALT F1 P95", msgs: "1,268", nonZero5m: "1,335", threshold: "$59,363" },
    { symbol: "LINKUSDT", role: "ALT F1 P95", msgs: "658", nonZero5m: "802", threshold: "$57,799" },
    { symbol: "ADAUSDT", role: "ALT F1 P95", msgs: "791", nonZero5m: "986", threshold: "$46,563" },
    { symbol: "FILUSDT", role: "ALT F1 P95", msgs: "1,605", nonZero5m: "1,810", threshold: "$44,107" },
    { symbol: "WLDUSDT", role: "ALT F1 P95", msgs: "2,622", nonZero5m: "2,318", threshold: "$40,980" },
    { symbol: "TRUMPUSDT", role: "ALT F1 P95", msgs: "2,597", nonZero5m: "2,260", threshold: "$40,935" },
    { symbol: "LTCUSDT", role: "ALT F1 P95", msgs: "699", nonZero5m: "806", threshold: "$39,516" },
    { symbol: "BCHUSDT", role: "ALT F1 P95", msgs: "1,174", nonZero5m: "1,293", threshold: "$36,479" },
    { symbol: "AVAXUSDT", role: "ALT F1 P95", msgs: "724", nonZero5m: "1,041", threshold: "$32,600" },
    { symbol: "ENAUSDT", role: "ALT F1 P95", msgs: "1,173", nonZero5m: "1,617", threshold: "$31,538" },
    { symbol: "AAVEUSDT", role: "ALT F1 P95", msgs: "955", nonZero5m: "1,274", threshold: "$26,499" },
    { symbol: "ARBUSDT", role: "ALT F1 P95", msgs: "1,451", nonZero5m: "1,943", threshold: "$22,369" },
  ];

  // ── Section 3: Complete 24-Event Systemic Cascade Chronology ──────────────
  interface CascadeEvent {
    id: number;
    ts: string;
    totalUsd: string;
    mkRatio: number;
    breadth: number;
    btc: string;
    eth: string;
    epicenter: string;
    notePt: string;
    noteEn: string;
  }

  const cascades: CascadeEvent[] = [
    { id: 24, ts: "2026-11-18 14:40", totalUsd: "$3.15M", mkRatio: 3.53, breadth: 16, btc: "$63,059", eth: "$1,767", epicenter: "ETH $2.01M · SOL $272k · XRP $178k · BTC $153k", notePt: "Hoje: ETH > P99; repique imediato a $63,8k+ / $1.785+ antes de ceder.", noteEn: "Today: ETH > P99; immediate bounce to $63.8k+ / $1,785+ before fading." },
    { id: 23, ts: "2026-11-17 15:50", totalUsd: "$4.19M", mkRatio: 4.69, breadth: 15, btc: "$63,366", eth: "$1,752", epicenter: "ETH $1.78M · BTC $1.08M · DOGE $305k · SOL $188k", notePt: "Cravou o fundo exato do dia antes do squeeze até $65.236 / $1.835.", noteEn: "Marked exact intraday bottom prior to squeeze up to $65,236 / $1,835." },
    { id: 22, ts: "2026-11-16 15:03", totalUsd: "$2.04M", mkRatio: 2.28, breadth: 7, btc: "$64,801", eth: "$1,822", epicenter: "SOL $735k · ETH $619k · ZEC $345k · BTC $270k", notePt: "Flush concentrado em SOL/ETH/ZEC na perda da faixa de $65k.", noteEn: "Localized SOL/ETH/ZEC flush as $65k support gave way." },
    { id: 21, ts: "2026-11-15 01:04", totalUsd: "$1.91M", mkRatio: 2.14, breadth: 15, btc: "$62,812", eth: "$1,733", epicenter: "BTC $1.16M · DOGE $113k · SOL $102k · ETH $83k", notePt: "Varredura da mínima de domingo ($62.812) seguida de reversão em V.", noteEn: "Sunday low sweep ($62,812) followed by V-shaped rebound." },
    { id: 20, ts: "2026-11-14 22:11", totalUsd: "$3.97M", mkRatio: 4.44, breadth: 15, btc: "$63,818", eth: "$1,751", epicenter: "BTC $1.52M · ETH $1.11M · SOL $347k · DOGE $320k", notePt: "2ª perna do clímax noturno; exauriu vendedores em $63,8k.", noteEn: "2nd leg of overnight climax; exhausted forced sellers at $63.8k." },
    { id: 19, ts: "2026-11-14 20:55", totalUsd: "$5.97M", mkRatio: 6.69, breadth: 23, btc: "$64,842", eth: "$1,794", epicenter: "XAU $1.38M · SOL $848k · ETH $661k · BTC $626k", notePt: "100% da cesta atingida; forte contágio cripto + ouro (XAU $1,38M).", noteEn: "100% basket breadth; severe crypto + gold (XAU $1.38M) margin contagion." },
    { id: 18, ts: "2026-11-14 16:13", totalUsd: "$3.05M", mkRatio: 3.42, breadth: 23, btc: "$65,084", eth: "$1,821", epicenter: "BTC $785k · ETH $447k · SOL $319k · ZEC $221k", notePt: "Varredura sincronizada nos 23 ativos no teste dos $65k.", noteEn: "Synchronized 23-asset sweep testing the $65k floor." },
    { id: 17, ts: "2026-11-14 03:33", totalUsd: "$3.19M", mkRatio: 3.57, breadth: 15, btc: "$66,221", eth: "$1,855", epicenter: "BTC $1.79M · ETH $645k · XRP $209k · SOL $167k", notePt: "Continuação da perda de $67k durante sessão asiática.", noteEn: "Asian-session continuation leg below $67k." },
    { id: 16, ts: "2026-11-14 02:31", totalUsd: "$2.18M", mkRatio: 2.44, breadth: 7, btc: "$67,338", eth: "$1,897", epicenter: "BTC $1.32M · ETH $472k · XAU $232k · SOL $75k", notePt: "Onda precursora rompendo suporte técnico de $67,5k.", noteEn: "Precursor wave breaking $67.5k structural support." },
    { id: 15, ts: "2026-11-13 03:23", totalUsd: "$6.42M", mkRatio: 7.19, breadth: 19, btc: "$69,347", eth: "$1,962", epicenter: "BTC $4.38M · BNB $762k · ETH $235k · SOL $225k", notePt: "3ª maior do mês: capitulação na perda psicológica de $70k / $2.000.", noteEn: "3rd largest of month: psychological $70k / $2,000 capitulation." },
    { id: 14, ts: "2026-11-13 00:40", totalUsd: "$4.39M", mkRatio: 4.91, breadth: 3, btc: "$70,664", eth: "$2,006", epicenter: "BTC $4.25M · ETH $102k · ZEC $17k", notePt: "Onda precursora concentrada quase 100% em grandes posições BTC.", noteEn: "Precursor wave almost exclusively sweeping large BTC longs." },
    { id: 13, ts: "2026-11-12 16:59", totalUsd: "$1.92M", mkRatio: 2.15, breadth: 10, btc: "$70,517", eth: "$2,007", epicenter: "ETH $689k · SOL $329k · XAU $275k · BTC $267k", notePt: "Primeiro teste de estresse sobre a zona psicológica de $70,5k.", noteEn: "Initial stress test along $70.5k support shelf." },
    { id: 12, ts: "2026-11-11 23:10", totalUsd: "$1.99M", mkRatio: 2.23, breadth: 12, btc: "$73,514", eth: "$2,078", epicenter: "PEPE $881k · ETH $431k · SOL $251k · BTC $132k", notePt: "Réplica 38m depois com forte desalavancagem de memecoins (PEPE).", noteEn: "Aftershock 38m later led by memecoin deleveraging (PEPE)." },
    { id: 11, ts: "2026-11-11 22:32", totalUsd: "$4.15M", mkRatio: 4.64, breadth: 5, btc: "$74,163", eth: "$2,119", epicenter: "BTC $3.87M · ETH $122k · LINK $61k · SOL $38k", notePt: "Liquidação concentrada em BTC ($3,87M em 5 minutos).", noteEn: "BTC-concentrated liquidation burst ($3.87M inside 5m)." },
    { id: 10, ts: "2026-11-10 16:37", totalUsd: "$1.99M", mkRatio: 2.23, breadth: 9, btc: "$73,633", eth: "$2,055", epicenter: "BTC $1.33M · ETH $216k · XRP $141k · DOGE $98k", notePt: "Réplica final da tarde que marcou exaustão vendedora intradiária.", noteEn: "Late-session aftershock marking intraday seller exhaustion." },
    { id: 9, ts: "2026-11-10 15:44", totalUsd: "$4.38M", mkRatio: 4.90, breadth: 21, btc: "$73,232", eth: "$2,022", epicenter: "ETH $1.64M · SOL $672k · BTC $469k · DOGE $437k", notePt: "Clímax NY em 21 ativos na defesa da faixa de $2.000 do ETH.", noteEn: "NY climax across 21 assets defending ETH $2,000 level." },
    { id: 8, ts: "2026-11-10 13:34", totalUsd: "$2.12M", mkRatio: 2.37, breadth: 5, btc: "$74,749", eth: "$2,094", epicenter: "BTC $1.66M · ETH $290k · XAU $100k", notePt: "Abertura americana rompendo suporte de $75k.", noteEn: "US session open flushing the $75k shelf." },
    { id: 7, ts: "2026-11-09 15:39", totalUsd: "$2.19M", mkRatio: 2.45, breadth: 12, btc: "$73,927", eth: "$2,118", epicenter: "ETH $878k · SOL $391k · BTC $220k · PEPE $212k", notePt: "Varredura dominical puxada por ETH, SOL e PEPE.", noteEn: "Sunday afternoon flush led by ETH, SOL, and PEPE." },
    { id: 6, ts: "2026-11-09 07:14", totalUsd: "$4.01M", mkRatio: 4.49, breadth: 12, btc: "$73,875", eth: "$2,113", epicenter: "BTC $2.84M · ETH $571k · ZEC $157k · XAU $124k", notePt: "Réplica asiática pós-colapso de 08/11.", noteEn: "Asian-session aftershock following the 08/11 mega-flush." },
    { id: 5, ts: "2026-11-08 21:55", totalUsd: "$10.12M", mkRatio: 11.33, breadth: 23, btc: "$74,292", eth: "$2,125", epicenter: "ETH $4.36M · BTC $1.48M · ZEC $731k · XAU $496k", notePt: "MAIOR CASCATA DO MÊS (11,33x P95): 23/23 ativos varridos juntos.", noteEn: "LARGEST CASCADE OF MONTH (11.33x P95): all 23 assets swept together." },
    { id: 4, ts: "2026-11-08 18:10", totalUsd: "$1.94M", mkRatio: 2.17, breadth: 15, btc: "$75,605", eth: "$2,186", epicenter: "ETH $653k · BTC $568k · SOL $141k · UNI $117k", notePt: "Tremor precursor 3h45 antes do mega-flush de $10,12M.", noteEn: "Precursor tremor 3h45 ahead of the $10.12M mega-flush." },
    { id: 3, ts: "2026-11-05 15:54", totalUsd: "$9.57M", mkRatio: 10.71, breadth: 23, btc: "$76,120", eth: "$2,257", epicenter: "ETH $2.26M · BTC $1.94M · XAU $1.20M · SOL $882k", notePt: "2ª MAIOR DO MÊS (10,71x P95): choque multimercado cripto + ouro.", noteEn: "2ND LARGEST (10.71x P95): cross-asset crypto + gold margin liquidation." },
    { id: 2, ts: "2026-10-22 16:51", totalUsd: "$4.43M", mkRatio: 4.96, breadth: 21, btc: "$80,905", eth: "$2,390", epicenter: "BTC $1.48M · ETH $926k · SOL $448k · DOGE $314k", notePt: "Perda estrutural dos $81k em 21 ativos simultaneamente.", noteEn: "Structural breakdown of the $81k band across 21 symbols." },
    { id: 1, ts: "2026-10-20 15:15", totalUsd: "$3.19M", mkRatio: 3.56, breadth: 13, btc: "$82,204", eth: "$2,444", epicenter: "BTC $1.43M · ETH $1.08M · SOL $246k · DOGE $125k", notePt: "Primeiro grande flush sistêmico no topo de $82,2k.", noteEn: "First major systemic cascade marking the $82.2k top." },
  ];

  $: filteredCascades = cascades.filter((c) => {
    if (cascadeFilter === "mega") return c.mkRatio >= 5.0;
    if (cascadeFilter === "climax") return c.mkRatio >= 3.0 && c.mkRatio < 5.0;
    if (cascadeFilter === "moderate") return c.mkRatio >= 2.0 && c.mkRatio < 3.0;
    return true;
  });

  function ratioBadgeClass(r: number): string {
    if (r >= 5.0) return "border-rose-500/50 bg-rose-500/15 text-rose-300";
    if (r >= 3.0) return "border-amber-400/40 bg-amber-400/10 text-amber-300";
    return "border-[#00F0FF]/35 bg-[#00F0FF]/10 text-[#00F0FF]";
  }

  // ── Section 4: Core 4 OOS Audit Matrices (from MAJOR_CASCADE_STINK_BID.md) ─
  const oosSymbols = [
    { symbol: "BTCUSDT", fills: 18, net: "+2.41%", avg: "+0.134%", wr: "66.7%" },
    { symbol: "ETHUSDT", fills: 22, net: "+6.02%", avg: "+0.274%", wr: "63.6%" },
    { symbol: "XRPUSDT", fills: 13, net: "+7.74%", avg: "+0.595%", wr: "76.9%" },
    { symbol: "XAUUSDT", fills: 2, net: "+0.73%", avg: "+0.363%", wr: "100.0%" },
  ];

  const oosStress = [
    { labelPt: "Base (Spread Pessimista + Taxas)", labelEn: "Baseline (Pessimistic Spread + Fees)", n: 55, ret: "+18.20%", sharpe: "+5.34", pf: "6.31" },
    { labelPt: "Sem os Top 5 Melhores Trades", labelEn: "Excluding Top 5 Outliers", n: 50, ret: "+7.97%", sharpe: "—", pf: "—" },
    { labelPt: "Estresse -5 bps Extras / Perna", labelEn: "Extra -5 bps Stress per Leg", n: 55, ret: "+15.76%", sharpe: "+4.84", pf: "4.85" },
    { labelPt: "Estresse -10 bps Extras / Perna", labelEn: "Extra -10 bps Stress per Leg", n: 55, ret: "+13.37%", sharpe: "+4.29", pf: "3.78" },
  ];

  // ── Section 4B: OOS 133-Signal / 55-Trade Proof Ledger Helpers & Equity SVG ─
  const filledOosTrades = oosSignals.filter((r) => r.tradeId !== null);

  function buildEquityCurvePoints(trades: OOSSignalRecord[]) {
    const W = 800;
    const H = 200;
    const PAD_L = 44;
    const PAD_R = 54;
    const PAD_T = 16;
    const PAD_B = 26;
    const plotW = W - PAD_L - PAD_R;
    const plotH = H - PAD_T - PAD_B;
    const minY = -2;
    const maxY = 20;

    const toX = (i: number) => PAD_L + (i / trades.length) * plotW;
    const toY = (v: number) => PAD_T + ((maxY - v) / (maxY - minY)) * plotH;

    let sumSimple = 0;
    const compPts: string[] = [`${toX(0).toFixed(1)},${toY(0).toFixed(1)}`];
    const simplePts: string[] = [`${toX(0).toFixed(1)},${toY(0).toFixed(1)}`];

    trades.forEach((tr, idx) => {
      sumSimple += tr.netRet;
      compPts.push(`${toX(idx + 1).toFixed(1)},${toY(tr.cumCompPct).toFixed(1)}`);
      simplePts.push(`${toX(idx + 1).toFixed(1)},${toY(sumSimple).toFixed(1)}`);
    });

    const lastComp = trades[trades.length - 1]?.cumCompPct ?? 0;
    const areaPts = [
      ...compPts,
      `${toX(trades.length).toFixed(1)},${toY(0).toFixed(1)}`,
      `${toX(0).toFixed(1)},${toY(0).toFixed(1)}`,
    ].join(" ");

    return {
      W,
      H,
      PAD_L,
      PAD_R,
      zeroY: toY(0),
      yTicks: [0, 5, 10, 15, 18.2].map((v) => ({ v, y: toY(v) })),
      compPolyline: compPts.join(" "),
      simplePolyline: simplePts.join(" "),
      areaPolygon: areaPts,
      endX: toX(trades.length),
      endY: toY(lastComp),
      endPct: lastComp,
    };
  }

  const equitySvg = buildEquityCurvePoints(filledOosTrades);

  $: filteredOosSignals = oosSignals.filter((r) => {
    if (oosSymbolFilter !== "ALL" && r.symbol !== oosSymbolFilter) return false;
    if (oosStatusFilter === "filled") return r.tradeId !== null;
    if (oosStatusFilter === "full") return r.status === "FULL";
    if (oosStatusFilter === "partial") return r.status === "PARTIAL";
    if (oosStatusFilter === "expired") return r.status === "EXPIRED";
    return true;
  });

  $: filteredOosStats = (() => {
    const filled = filteredOosSignals.filter((r) => r.tradeId !== null);
    const wins = filled.filter((r) => r.netRet > 0).length;
    const sumPct = filled.reduce((acc, r) => acc + r.netRet, 0);
    const takerSum = filteredOosSignals.reduce((acc, r) => acc + r.takerNet30, 0);
    return {
      signals: filteredOosSignals.length,
      filled: filled.length,
      wins,
      losses: filled.length - wins,
      wr: filled.length > 0 ? (wins / filled.length) * 100 : 0,
      sumPct,
      takerSum,
    };
  })();

  function fmtOosPrice(sym: OOSCoreSymbol, p: number): string {
    return sym === "XRPUSDT"
      ? `$${p.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`
      : `$${p.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function fmtUsdInt(v: number): string {
    return `$${Math.round(v).toLocaleString("en-US")}`;
  }

  function fmtSignedPct(v: number, decimals = 3): string {
    return `${v >= 0 ? "+" : ""}${v.toFixed(decimals)}%`;
  }

  function statusBadgeClass(st: OOSSignalRecord["status"]): string {
    if (st === "FULL") return "border-[#00FF94]/40 bg-[#00FF94]/10 text-[#00FF94]";
    if (st === "PARTIAL") return "border-[#00F0FF]/40 bg-[#00F0FF]/10 text-[#00F0FF]";
    return "border-white/15 bg-white/5 text-white/45";
  }
</script>

<div class="min-h-screen bg-black/85 text-white font-mono relative z-10" in:fade={{ duration: 300 }}>
  <!-- ── Sticky Top Header ───────────────────────────────────────────────── -->
  <header class="sticky top-0 z-30 bg-black/95 backdrop-blur border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3 flex-wrap">
        <a
          href="#/"
          class="text-[#00F0FF]/70 hover:text-[#00F0FF] text-xs tracking-widest transition-colors"
        >
          ← NEXUS QUANT
        </a>
        <span class="text-white/20">/</span>
        <span class="text-white text-xs tracking-widest font-bold">
          {isPt ? "PESQUISA & RELATÓRIO QUANT" : "QUANT RESEARCH REPORT"}
        </span>
        <span class="hidden lg:inline text-white/20">·</span>
        <span class="hidden lg:inline text-[#00FF94]/80 text-xs">{meta.code}</span>
      </div>

      <div class="flex items-center gap-3 flex-wrap justify-end">
        <a
          href="#/terminal"
          class="px-2.5 py-1 border border-[#00FF94]/40 text-[#00FF94] hover:bg-[#00FF94]/10 text-[10px] tracking-widest rounded-sm transition-colors"
        >
          {isPt ? "[ TERMINAL AO VIVO ]" : "[ LIVE TERMINAL ]"}
        </a>
        <a
          href="#/ark-streams"
          class="hidden sm:inline-block px-2.5 py-1 border border-white/15 text-white/60 hover:text-[#00F0FF] hover:border-[#00F0FF]/40 text-[10px] tracking-widest rounded-sm transition-colors"
        >
          [ ARK STREAMS ]
        </a>

        <!-- Font size stepper -->
        <div class="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden" aria-label="Font size controls">
          <button
            on:click={() => (fontSize = Math.max(FONT_MIN, fontSize - 1))}
            disabled={fontSize <= FONT_MIN}
            class="px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-20"
            aria-label="Decrease font size"
          >A−</button>
          <span class="text-[10px] text-white/40 px-1 tabular-nums">{fontSize}</span>
          <button
            on:click={() => (fontSize = Math.min(FONT_MAX, fontSize + 1))}
            disabled={fontSize >= FONT_MAX}
            class="px-2 py-1 text-xs text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-20"
            aria-label="Increase font size"
          >A+</button>
        </div>

        <div class="hidden md:block">
          <LanguageSwitcher only={["pt", "en"]} />
        </div>
      </div>
    </div>

    <!-- Mobile lang switcher + Quick Section Jump Bar -->
    <div class="max-w-7xl mx-auto px-4 py-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
      <div class="flex flex-wrap items-center gap-1.5">
        {#each sections as sec}
          <button
            on:click={() => scrollToSection(sec.id)}
            class="px-2 py-0.5 text-[10px] tracking-wider border border-white/10 hover:border-[#00F0FF]/50 hover:text-[#00F0FF] text-white/55 bg-white/[0.02] rounded-sm transition-colors"
          >
            <span class="text-[#00F0FF]/60 mr-1">{sec.num}</span>{isPt ? sec.pt : sec.en}
          </button>
        {/each}
      </div>
      <div class="md:hidden">
        <LanguageSwitcher only={["pt", "en"]} />
      </div>
    </div>
  </header>

  <!-- ── Article Canvas ──────────────────────────────────────────────────── -->
  <article class="max-w-7xl mx-auto px-4 py-10 space-y-14" style="font-size: {fontSize}px">
    <!-- Hero Title & Executive KPI Strip -->
    <section class="space-y-6">
      <div class="flex flex-wrap items-center gap-3 text-xs tracking-widest">
        <span class="px-2.5 py-1 border border-amber-400/35 bg-amber-400/10 text-amber-300 font-bold rounded-sm">
          ● {isPt ? "REGIME: DESALAVANCAGEM EM ESCADA · MAKER PASSIVO" : "REGIME: STAIRCASE DELEVERAGING · PASSIVE MAKER"}
        </span>
        <span class="text-white/40">{meta.date}</span>
        <span class="text-white/20">·</span>
        <span class="text-[#00F0FF]/70">{meta.prs} ({meta.commit})</span>
      </div>

      <h1
        class="font-bold tracking-tight text-white leading-tight max-w-5xl"
        style="font-size: clamp(1.75rem, 3.2vw + 0.9rem, 3.25rem)"
      >
        {#if isPt}
          Cascatas Sistêmicas, Provisão Passiva de Liquidez e o Proceder do Operador Quant
        {:else}
          Systemic Cascades, Passive Liquidity Provision & Automated Quant Doctrine
        {/if}
      </h1>

      <p class="font-sans text-[#4CC9F0]/85 max-w-4xl leading-relaxed" style="font-size: 1.05em">
        {#if isPt}
          Radiografia empírica completa da desalavancagem de <strong class="text-white">$82.204 → $62.646</strong> no Bitcoin
          (<strong class="text-white">20/Out → 18/Nov/2026</strong>), a física das liquidações forçadas nos
          <strong class="text-white">279.783 eventos</strong> arquivados da OKX, a arquitetura de produção
          <strong class="text-[#00F0FF]">Ark Streams</strong> (<code class="text-[#00FF94]">MajorCascadeStinkBid</code> +
          <code class="text-[#00FF94]">AltCascadeDeepBid</code> F1) e o nosso proceder operacional diante do mercado atual.
        {:else}
          Empirical anatomy of Bitcoin's <strong class="text-white">$82,204 → $62,646</strong> deleveraging staircase
          (<strong class="text-white">Oct 20 → Nov 18, 2026</strong>), forced liquidation microstructure across
          <strong class="text-white">279,783 archived events</strong> on OKX, the <strong class="text-[#00F0FF]">Ark Streams</strong>
          production architecture (<code class="text-[#00FF94]">MajorCascadeStinkBid</code> +
          <code class="text-[#00FF94]">AltCascadeDeepBid</code> F1), and our automated trading doctrine.
        {/if}
      </p>

      <!-- Headline KPI Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        <div class="border border-[#00F0FF]/30 bg-black/70 p-4 rounded-sm">
          <div class="text-[10px] text-[#00F0FF]/70 tracking-widest uppercase mb-1">
            {isPt ? "RETORNO OOS · CORE 4 MAJORS" : "OOS NET RETURN · CORE 4"}
          </div>
          <div class="text-2xl font-bold text-[#00FF94] tabular-nums">+18.20%</div>
          <div class="text-[11px] text-white/50 mt-1">
            Sharpe <span class="text-white">+5.34</span> · WR <span class="text-white">69.1%</span> · MaxDD <span class="text-white">0.89%</span>
          </div>
        </div>

        <div class="border border-rose-500/30 bg-black/70 p-4 rounded-sm">
          <div class="text-[10px] text-rose-400/80 tracking-widest uppercase mb-1">
            {isPt ? "CASCATAS SISTÊMICAS (30D)" : "SYSTEMIC CASCADES (30D)"}
          </div>
          <div class="text-2xl font-bold text-white tabular-nums">24 + 1 <span class="text-xs text-rose-400">LIVE</span></div>
          <div class="text-[11px] text-white/50 mt-1">
            {isPt ? "Pico:" : "Peak:"} <span class="text-rose-300">$10.12M (11.33x P95)</span> @ 08/11
          </div>
        </div>

        <div class="border border-white/15 bg-black/70 p-4 rounded-sm">
          <div class="text-[10px] text-white/50 tracking-widest uppercase mb-1">
            {isPt ? "ARQUIVO REPLAY NO BOOT" : "BOOT ARCHIVE WARMUP"}
          </div>
          <div class="text-2xl font-bold text-[#00F0FF] tabular-nums">279,783</div>
          <div class="text-[11px] text-white/50 mt-1">
            <span class="text-white">1,061</span> {isPt ? "ativos · P95 global" : "symbols · global P95"} <span class="text-white">$521.4k</span>
          </div>
        </div>

        <div class="border border-[#00FF94]/30 bg-black/70 p-4 rounded-sm">
          <div class="text-[10px] text-[#00FF94]/80 tracking-widest uppercase mb-1">
            {isPt ? "MOTORES AUTÔNOMOS 1M" : "AUTONOMOUS 1M ENGINES"}
          </div>
          <div class="text-2xl font-bold text-white tabular-nums">25 <span class="text-xs text-[#00FF94]">ONLINE</span></div>
          <div class="text-[11px] text-white/50 mt-1">
            4 Majors (Live) + 21 Alts (F1 Shadow)
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 01: Market Scenario ───────────────────────────────────────── -->
    <section id="sec-cenario" class="scroll-mt-28 space-y-6">
      <div class="flex items-center gap-4">
        <span class="text-[#00F0FF] font-bold tracking-widest text-xs">01 //</span>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
          {isPt ? "Cenário Atual de Mercado (18 de Novembro de 2026)" : "Current Market Scenario (Nov 18, 2026)"}
        </h2>
        <div class="flex-1 h-px bg-white/10"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-4 font-sans">
        <div class="md:col-span-2 border border-white/10 bg-white/[0.02] p-6 rounded-sm space-y-4 leading-relaxed text-white/80">
          {#if isPt}
            <p>
              Nas últimas quatro semanas, o Bitcoin recuou de <strong class="text-white">$82.204</strong> (<code class="text-[#00F0FF]">20/10</code>)
              até <strong class="text-white">$62.645,7</strong> (<code class="text-[#00F0FF]">18/11 16:17 UTC</code>), enquanto o Ethereum cedeu de
              <strong class="text-white">$2.444</strong> para <strong class="text-white">$1.758,01</strong>. O dado decisivo revelado pelos fluxos da OKX é que
              essa correção ocorreu em <strong class="text-white">degraus discretos de desalavancagem</strong> — e não por venda orgânica linear.
            </p>
            <p>
              Após o flush das <strong class="text-white">14:40 UTC</strong> de hoje (<code class="text-amber-300">$3,15M</code> em 5m,
              <code class="text-amber-300">MKRatio 3,53x</code> na cesta Core, puxado por <code class="text-white">ETH $2,01M</code>) produzir um repique imediato
              para <code class="text-white">$63.800+ / $1.785+</code>, o mercado voltou a pressionar a mínima semanal no fim da manhã BRT. Ás
              <strong class="text-[#00FF94]">16:12 UTC</strong>, apenas 9 minutos após o deploy do nosso warmup completo em produção, o
              <code class="text-[#00F0FF]">SystemicLiquidationTracker</code> detectou nova aceleração global (<strong class="text-[#00FF94]">MKRatio = 2,77x</strong>),
              disparando ordens passivas F1 Shadow em <strong class="text-white">SOLUSDT</strong> (<code class="text-[#00FF94]">$417.877 &gt;= $144.217 P95</code>,
              bid a <code class="text-[#00FF94]">$70,8416 / -313 bps</code>) e <strong class="text-white">NEARUSDT</strong> (<code class="text-[#00FF94]">$70.595 &gt;= $68.122 P95</code>).
            </p>
          {:else}
            <p>
              Over the past four weeks, Bitcoin declined from <strong class="text-white">$82,204</strong> (<code class="text-[#00F0FF]">Oct 20</code>)
              to <strong class="text-white">$62,645.7</strong> (<code class="text-[#00F0FF]">Nov 18, 16:17 UTC</code>), while Ethereum fell from
              <strong class="text-white">$2,444</strong> to <strong class="text-white">$1,758.01</strong>. Exchange liquidation telemetry demonstrates
              that this drawdown unfolded in <strong class="text-white">discrete deleveraging staircases</strong> rather than continuous spot selling.
            </p>
            <p>
              After today's <strong class="text-white">14:40 UTC</strong> flush (<code class="text-amber-300">$3.15M</code> in 5m,
              <code class="text-amber-300">MKRatio 3.53x</code>, led by <code class="text-white">ETH $2.01M</code>) rebounded toward
              <code class="text-white">$63.8k+ / $1,785+</code>, sellers pressed BTC back to fresh intraday lows at <code class="text-white">$62,645.7</code>. At
              <strong class="text-[#00FF94]">16:12 UTC</strong> — just 9 minutes after deploying our 30d cold-start warmup fix — the
              <code class="text-[#00F0FF]">SystemicLiquidationTracker</code> detected a live global wave (<strong class="text-[#00FF94]">MKRatio = 2.77x</strong>),
              triggering passive F1 Shadow deep bids on <strong class="text-white">SOLUSDT</strong> (<code class="text-[#00FF94]">$417,877 &gt;= $144,217 P95</code>,
              limit <code class="text-[#00FF94]">$70.8416 / -313 bps</code>) and <strong class="text-white">NEARUSDT</strong> (<code class="text-[#00FF94]">$70,595 &gt;= $68,122 P95</code>).
            </p>
          {/if}
        </div>

        <!-- Live Shadow Excerpt Box -->
        <div class="border border-[#00FF94]/30 bg-black/80 p-5 rounded-sm flex flex-col justify-between space-y-3">
          <div>
            <div class="text-[10px] text-[#00FF94] tracking-widest uppercase font-bold mb-2">
              ● {isPt ? "PROVA AO VIVO · ALPHA_SHADOW.JSONL (16:12 UTC)" : "LIVE PRODUCTION PROOF · ALPHA_SHADOW (16:12 UTC)"}
            </div>
            <pre class="text-[11px] leading-relaxed text-[#4CC9F0]/90 overflow-x-auto bg-white/[0.02] p-3 border border-white/10 rounded-sm">{`SOLUSDT | Strat: AltCascadeDeepBid (F1)
Side: LONG (Maker BUY) vs LONG LIQ (SELL)
MKRatio: 2.77x | liq5m: $417,877 >= $144,217
close: $73.131 -> bid: $70.8416 (-313 bps)
───────────────────────────────────────────
NEARUSDT | Strat: AltCascadeDeepBid (F1)
Side: LONG (Maker BUY) vs LONG LIQ (SELL)
MKRatio: 2.77x | liq5m: $70,595 >= $68,122
close: $3.1975 -> bid: $3.0974 (-313 bps)`}</pre>
          </div>
          <p class="font-sans text-xs text-white/55 leading-relaxed">
            {isPt
              ? "Enquanto Altcoins elegíveis armaram bids profundos sob MKRatio 2,77x, BTC e ETH permaneceram em WATCHING sem overtrading por não atingirem seu P99 individual."
              : "While eligible Altcoins armed volatility-scaled deep bids under MKRatio 2.77x, BTC and ETH cleanly stayed in WATCHING because own 5m liquidations remained below P99."}
          </p>
        </div>
      </div>

      <!-- Market Snapshot Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
        {#each marketSnaps as snap}
          {@const pct = rangePct(snap.lastNum, snap.low24h, snap.high24h)}
          <div class="border border-white/10 bg-black/75 p-4 rounded-sm flex flex-col gap-3 hover:border-[#00F0FF]/40 transition-colors">
            <div class="flex items-start justify-between">
              <div>
                <div class="font-bold text-white text-sm">{snap.symbol}</div>
                <div class="text-lg font-bold text-[#00F0FF] tabular-nums">{snap.last}</div>
              </div>
              <span class="text-[11px] font-bold tabular-nums {snap.fundingPos ? 'text-amber-300' : 'text-emerald-400'}">
                FR {snap.funding}
              </span>
            </div>

            <div>
              <div class="flex justify-between text-[10px] text-white/35 mb-1 tabular-nums">
                <span>24H L {snap.low24h}</span>
                <span>H {snap.high24h}</span>
              </div>
              <div class="relative h-1.5 bg-white/10 rounded-full">
                <div class="h-full bg-[#00F0FF]/60 rounded-full" style="width: {pct}%"></div>
                <div class="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" style="left: calc({pct}% - 4px)"></div>
              </div>
            </div>

            <p class="font-sans text-xs text-white/60 leading-snug">
              {isPt ? snap.notePt : snap.noteEn}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <!-- ── Section 02: Physics & 30d Causal Ruler ───────────────────────────── -->
    <section id="sec-fisica" class="scroll-mt-28 space-y-6">
      <div class="flex items-center gap-4">
        <span class="text-[#00F0FF] font-bold tracking-widest text-xs">02 //</span>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
          {isPt ? "A Física das Liquidações & A Régua Causal de 30 Dias" : "Microstructure Physics & 30-Day Causal Thresholds"}
        </h2>
        <div class="flex-1 h-px bg-white/10"></div>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div class="border border-white/10 bg-white/[0.02] p-6 rounded-sm space-y-4">
          <div class="text-xs text-[#00F0FF] tracking-widest uppercase font-bold">
            {isPt ? "POR QUE MEDIR VELOCIDADE (5M) E NÃO SOMA DE 24H?" : "WHY 5-MINUTE VELOCITY BEATS 24-HOUR VOLUME"}
          </div>
          <div class="font-sans text-sm text-white/75 space-y-3 leading-relaxed">
            {#if isPt}
              <p>
                Um registro <code class="text-rose-300">Liquidado Long (SELL)</code> significa que a engine de risco da corretora
                encerrou compulsoriamente um comprador alavancado emitindo uma <strong class="text-white">ordem de venda a mercado</strong> contra o livro.
              </p>
              <p>
                Somatórios de 24 horas (como <em>“BTCUSDT $3,82M em 24h”</em>) misturam centenas de pequenas liquidações esparsas que os market makers
                absorvem sem distorção de preço. O sinal de microestrutura surge apenas quando o fluxo concentrado em <strong class="text-white">5 minutos
                (<code class="text-[#00F0FF]">liq_long_5m</code>)</strong> supera a cauda causal dos últimos 30 dias (<code class="text-white">P99</code> ou <code class="text-white">P95</code>),
                abrindo um vácuo mecânico do perpétuo contra o mercado Spot/ETF.
              </p>
            {:else}
              <p>
                A <code class="text-rose-300">Long Liquidation (SELL)</code> event is a forced market sell order fired by the exchange's margin engine
                to close an insolvent leveraged buyer — price-insensitive selling directly into resting bids.
              </p>
              <p>
                24-hour aggregates (e.g., <em>"$3.82M BTC liquidated in 24h"</em>) dilute micro-events across 1,440 minutes and fail to capture book impact.
                Tradable mispricing appears strictly when 5-minute arrival velocity (<code class="text-[#00F0FF]">liq_long_5m</code>) pierces the rolling 30-day
                causal <code class="text-white">P99</code> / <code class="text-white">P95</code>, disconnecting perp price from deeper Spot/ETF liquidity.
              </p>
            {/if}
          </div>
        </div>

        <!-- Dual 30d Ruler Card -->
        <div class="border border-white/10 bg-black/75 p-6 rounded-sm space-y-4">
          <div class="text-xs text-[#00FF94] tracking-widest uppercase font-bold">
            {isPt ? "DISTRIBUIÇÃO EMPÍRICA DE 30 DIAS (OKX · 19/OUT → 18/NOV)" : "30-DAY EMPIRICAL DISTRIBUTION (OKX · OCT 19 → NOV 18)"}
          </div>
          <div class="space-y-2.5 text-xs">
            <div class="flex justify-between items-center border-b border-white/10 pb-2">
              <span class="text-white/60">{isPt ? "Mediana 5m (P50 · Cesta 23 Ativos)" : "5m Median (P50 · 23-Asset Basket)"}</span>
              <span class="text-white font-bold tabular-nums">$23,424 <span class="text-white/35 font-normal">(0.03x)</span></span>
            </div>
            <div class="flex justify-between items-center border-b border-white/10 pb-2">
              <span class="text-white/60">{isPt ? "Percentil 90 (P90 · Cesta 23 Ativos)" : "90th Percentile (P90 · 23-Asset Basket)"}</span>
              <span class="text-[#4CC9F0] font-bold tabular-nums">$448,229 <span class="text-white/35 font-normal">(0.50x)</span></span>
            </div>
            <div class="flex justify-between items-center border-b border-white/10 pb-2">
              <span class="text-white/60">{isPt ? "Percentil 95 (P95 Base · Cesta 23)" : "95th Percentile (P95 Base · 23-Asset)"}</span>
              <span class="text-amber-300 font-bold tabular-nums">$893,554 <span class="text-amber-300/60">(1.00x MKRatio)</span></span>
            </div>
            <div class="flex justify-between items-center border-b border-white/10 pb-2">
              <span class="text-white/80 font-bold">{isPt ? "Gatilho Sistêmico Cesta 23 (2,0x P95)" : "23-Asset Systemic Trigger (2.0x P95)"}</span>
              <span class="text-rose-400 font-bold tabular-nums">&gt;= $1,787,108</span>
            </div>
            <div class="flex justify-between items-center border-b border-white/10 pb-2">
              <span class="text-white/60">{isPt ? "Percentil 99 (P99 Capitulação · Cesta 23)" : "99th Percentile (P99 Capitulation)"}</span>
              <span class="text-rose-300 font-bold tabular-nums">$3,022,857 <span class="text-white/35 font-normal">(3.38x)</span></span>
            </div>
            <div class="flex justify-between items-center pt-1">
              <span class="text-[#00FF94]">{isPt ? "Universo Completo 1.061 Ativos (P95 Live)" : "Full 1,061-Symbol Live P95 (21,548 wins)"}</span>
              <span class="text-[#00FF94] font-bold tabular-nums">$521,458 <span class="text-[#00FF94]/60">(2x = ~$1.04M)</span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Individual Warmed-Up Thresholds Grid -->
      <div class="border border-white/10 bg-white/[0.015] p-5 rounded-sm space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="text-xs text-white/80 font-bold tracking-widest uppercase">
            {isPt ? "LIMIARES INDIVIDUAIS AQUECIDOS DO LIQUIDATIONS_ARCHIVE (25 MOTORES EM PRODUÇÃO)" : "INDIVIDUAL CAUSAL THRESHOLDS WARMED FROM LIQUIDATIONS_ARCHIVE (25 LIVE ENGINES)"}
          </div>
          <span class="text-[10px] text-[#00FF94] tracking-widest">SOURCE: ARK_STREAM BOOT LOG @ 18/11 13:03 BRT</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {#each liveThresholds as row}
            <div class="border {row.role === 'MAJOR P99' ? 'border-[#00F0FF]/35 bg-[#00F0FF]/[0.03]' : 'border-white/10 bg-black/60'} p-2.5 rounded-sm">
              <div class="flex items-center justify-between gap-1">
                <span class="text-xs font-bold text-white">{row.symbol}</span>
                <span class="text-[9px] px-1 py-0.5 rounded-sm {row.role === 'MAJOR P99' ? 'bg-[#00F0FF]/15 text-[#00F0FF]' : 'bg-white/5 text-white/50'}">
                  {row.role}
                </span>
              </div>
              <div class="text-sm font-bold text-[#00FF94] mt-1 tabular-nums">{row.threshold}</div>
              <div class="text-[10px] text-white/35 tabular-nums">{row.msgs} msgs · {row.nonZero5m} w5m</div>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <!-- ── Section 03: Complete 24-Cascade Chronology & 3 Laws ─────────────── -->
    <section id="sec-cronologia" class="scroll-mt-28 space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-4">
          <span class="text-[#00F0FF] font-bold tracking-widest text-xs">03 //</span>
          <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
            {isPt ? "Cronologia Completa das 24 Cascatas Sistêmicas (20/Out → 18/Nov)" : "Complete 24-Event Systemic Cascade Chronology (Oct 20 → Nov 18)"}
          </h2>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-1.5 text-[11px]">
          {#each [
            { id: "all", label: isPt ? "TODAS (24)" : "ALL (24)" },
            { id: "mega", label: "MEGA >= 5.0x (4)" },
            { id: "climax", label: "CLIMAX 3.0–5.0x (10)" },
            { id: "moderate", label: isPt ? "MODERADA 2.0–3.0x (10)" : "MODERATE 2.0–3.0x (10)" },
          ] as f}
            <button
              on:click={() => (cascadeFilter = f.id as CascadeFilter)}
              class="px-2.5 py-1 rounded-sm border transition-colors {cascadeFilter === f.id
                ? 'border-[#00F0FF] bg-[#00F0FF]/15 text-[#00F0FF] font-bold'
                : 'border-white/10 text-white/50 hover:text-white'}"
            >
              {f.label}
            </button>
          {/each}
        </div>
      </div>

      <!-- Live Event #25 Highlight Banner -->
      <div class="border border-[#00FF94]/40 bg-[#00FF94]/[0.04] p-4 rounded-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse shrink-0"></span>
          <span class="font-bold text-[#00FF94]">#25 · 2026-11-18 16:12 UTC (LIVE)</span>
          <span class="text-white/80">
            {isPt
              ? "Nova onda global capturada em tempo real pelo SystemicLiquidationTracker (1.061 ativos): MKRatio 2,77x — acionou bids passivos F1 em SOLUSDT (-313 bps) e NEARUSDT (-313 bps)."
              : "Live systemic wave captured across 1,061 symbols by SystemicLiquidationTracker: MKRatio 2.77x — armed passive F1 deep bids in SOLUSDT (-313 bps) and NEARUSDT (-313 bps)."}
          </span>
        </div>
      </div>

      <!-- Table -->
      <div class="border border-white/10 bg-black/80 rounded-sm overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-white/10 text-[10px] text-[#00F0FF]/75 uppercase tracking-wider bg-white/[0.02]">
              <th class="py-3 px-3">#</th>
              <th class="py-3 px-3">{isPt ? "Data / Hora (UTC)" : "Timestamp (UTC)"}</th>
              <th class="py-3 px-3">{isPt ? "Vol 5m (Longs)" : "5m Long Liqs"}</th>
              <th class="py-3 px-3">MKRatio</th>
              <th class="py-3 px-3">{isPt ? "Ativos >=$10k" : "Breadth"}</th>
              <th class="py-3 px-3">BTC / ETH</th>
              <th class="py-3 px-3">{isPt ? "Epicentro (Top 5m)" : "Epicenter (Top 5m)"}</th>
              <th class="py-3 px-3">{isPt ? "Morfologia & Reação" : "Morphology & Reaction"}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            {#each filteredCascades as c}
              <tr class="hover:bg-white/[0.03] transition-colors align-top">
                <td class="py-2.5 px-3 text-white/35 tabular-nums">{c.id}</td>
                <td class="py-2.5 px-3 whitespace-nowrap text-white font-semibold tabular-nums">{c.ts}</td>
                <td class="py-2.5 px-3 whitespace-nowrap font-bold text-white tabular-nums">{c.totalUsd}</td>
                <td class="py-2.5 px-3 whitespace-nowrap">
                  <span class="px-1.5 py-0.5 border rounded-sm font-bold tabular-nums {ratioBadgeClass(c.mkRatio)}">
                    {c.mkRatio.toFixed(2)}x
                  </span>
                </td>
                <td class="py-2.5 px-3 whitespace-nowrap tabular-nums {c.breadth === 23 ? 'text-rose-300 font-bold' : 'text-white/70'}">
                  {c.breadth}/23
                </td>
                <td class="py-2.5 px-3 whitespace-nowrap text-white/75 tabular-nums">{c.btc} / {c.eth}</td>
                <td class="py-2.5 px-3 text-[#4CC9F0]/85 min-w-[230px]">{c.epicenter}</td>
                <td class="py-2.5 px-3 font-sans text-white/65 min-w-[240px]">{isPt ? c.notePt : c.noteEn}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <!-- 3 Empirical Laws -->
      <div class="grid md:grid-cols-3 gap-4">
        <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm space-y-2">
          <div class="text-[10px] text-[#00F0FF] tracking-widest font-bold">LEI 01 // MAJORS vs ALTCOINS</div>
          <h3 class="text-white font-bold text-sm">
            {isPt ? "Assimetria Estatística (684 Clusters OOS)" : "Statistical Asymmetry (684 OOS Clusters)"}
          </h3>
          <p class="font-sans text-xs text-white/65 leading-relaxed">
            {isPt
              ? "Nos 189 clusters OOS de Majors (<0,05% spread), o repique pós-cascata teve t-stat = +7,81 (+15m) e +6,22 (+30m) graças à arbitragem Spot/ETF. Em altcoins (Mid n=451, Microcap n=44), bids rasos sofrem seleção adversa — exigindo gate sistêmico (>=2,0x) + bid profundo z=7."
              : "Across 189 OOS Major clusters (<0.05% spread), post-cascade bounce achieved t = +7.81 (+15m) and +6.22 (+30m) via Spot/ETF arbitrage. Shallow altcoin bids suffer adverse selection, requiring systemic gating (MKRatio >= 2.0x) plus volatility-scaled depth (z=7)."}
          </p>
        </div>

        <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm space-y-2">
          <div class="text-[10px] text-amber-300 tracking-widest font-bold">LEI 02 // DUPLA ONDA</div>
          <h3 class="text-white font-bold text-sm">
            {isPt ? "Morfologia Precursor → Clímax" : "Precursor → Climax Double-Wave Pattern"}
          </h3>
          <p class="font-sans text-xs text-white/65 leading-relaxed">
            {isPt
              ? "Nos dias 08/11 (18:10→21:55), 11/11 (22:32→23:10), 13/11 (00:40→03:23) e 14/11 (20:55→22:11), ondas iniciais rompem suportes e uma 2ª descarga final varre compradores precoces. O cooldown de 30m e o No-Chase de 5m filtram entradas prematuras."
              : "On Nov 08, 11, 13 and 14, initial cascades broke structural floors while a 2nd wave 30m–3h45 later liquidated premature buyers. Our 30m cooldown and 5m No-Chase window systematically guard against chasing the first wave."}
          </p>
        </div>

        <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm space-y-2">
          <div class="text-[10px] text-rose-400 tracking-widest font-bold">LEI 03 // XAU CONTAGION</div>
          <h3 class="text-white font-bold text-sm">
            {isPt ? "Contágio Cruzado Cripto ↔ Ouro (XAU)" : "Cross-Margin Crypto ↔ Gold Contagion"}
          </h3>
          <p class="font-sans text-xs text-white/65 leading-relaxed">
            {isPt
              ? "Nos eventos mais severos (05/11 $1,20M; 08/11 $496k; 14/11 $1,38M), XAUUSDT figurou no Top 4 de liquidações. Contas em margem unificada sofrem desalavancagem forçada do ouro pelo risco em BTC/ETH — deslocamento puramente mecânico (100% WR no OOS)."
              : "In the largest market shocks (Nov 05 $1.20M, Nov 08 $496k, Nov 14 $1.38M), XAUUSDT ranked Top 4 in forced sell flow due to unified cross-margin calls — creating mechanical discounts unrelated to bullion fundamentals (100% OOS win rate)."}
          </p>
        </div>
      </div>
    </section>

    <!-- ── Section 04: Ark Streams Current Architecture ─────────────────────── -->
    <section id="sec-sistema" class="scroll-mt-28 space-y-6">
      <div class="flex items-center gap-4">
        <span class="text-[#00F0FF] font-bold tracking-widest text-xs">04 //</span>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
          {isPt ? "O Sistema Atual: Arquitetura Dual em Produção (Ark Streams)" : "The Production System: Dual-Engine Ark Streams Architecture"}
        </h2>
        <div class="flex-1 h-px bg-white/10"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-4">
        <!-- Engine A -->
        <div class="border border-[#00F0FF]/40 bg-black/80 p-6 rounded-sm space-y-4">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <span class="px-2 py-0.5 bg-[#00F0FF]/15 text-[#00F0FF] text-[10px] font-bold tracking-widest rounded-sm">
              MOTOR A · LIVE / PAPER EXECUTION
            </span>
            <span class="text-xs text-white/40">BTC · ETH · XRP · XAU (1m)</span>
          </div>
          <h3 class="text-lg font-bold text-white">MajorCascadeStinkBidStrategy</h3>
          <ul class="font-sans text-xs text-white/75 space-y-2 leading-relaxed">
            <li>• <strong class="text-white">{isPt ? "Gatilho Causal:" : "Causal Trigger:"}</strong> <code class="text-[#00F0FF]">liq_long_5m &gt;= causal_30d_P99</code> + cooldown 30m.</li>
            <li>• <strong class="text-white">{isPt ? "Escada Back-Loaded:" : "Back-Loaded Maker Ladder:"}</strong> Tranche 1 (<code class="text-white">35% @ -15 bps</code>) + Tranche 2 (<code class="text-white">65% @ -30 bps</code> ou bolsão CoinGlass entre -15 e -45 bps + invalidação 12h <code class="text-[#00F0FF]">ARK-201</code>).</li>
            <li>• <strong class="text-white">{isPt ? "Conviction Sizing:" : "Conviction Sizing:"}</strong> <code class="text-[#00FF94]">1,50x</code> quando <code class="text-white">liq5m &gt;= 2,0x P99</code>.</li>
            <li>• <strong class="text-white">{isPt ? "Execução No-Chase:" : "No-Chase Window:"}</strong> monitora velas 1m + BBO 1Hz; tranches não preenchidas até <code class="text-amber-300">t+5m</code> são canceladas a custo zero.</li>
            <li>• <strong class="text-white">{isPt ? "Saída:" : "Exit Policy:"}</strong> Time-stop <code class="text-white">+30m</code> (<code class="text-white">t+31m</code>) + stop de emergência <code class="text-rose-300">-250 bps</code>.</li>
          </ul>

          <!-- OOS Decomp Mini-Table -->
          <div class="grid grid-cols-4 gap-2 border-t border-white/10 pt-3 text-center">
            {#each oosSymbols as sym}
              <div class="bg-white/[0.02] p-2 rounded-sm border border-white/5">
                <div class="text-[10px] text-white/50">{sym.symbol}</div>
                <div class="text-xs font-bold text-[#00FF94] tabular-nums">{sym.net}</div>
                <div class="text-[10px] text-white/40 tabular-nums">{sym.fills} tr · {sym.wr}</div>
              </div>
            {/each}
          </div>

          <div class="border-t border-white/10 pt-3 space-y-1.5">
            <div class="text-[10px] text-white/40 uppercase tracking-widest">
              {isPt ? "AUDITORIA DE ESTRESSE NO OOS DE 111 DIAS" : "111-DAY OOS STRESS AUDIT"}
            </div>
            {#each oosStress as st}
              <div class="flex justify-between text-[11px] tabular-nums">
                <span class="text-white/60">{isPt ? st.labelPt : st.labelEn}</span>
                <span class="text-[#00FF94] font-bold">{st.ret} <span class="text-white/40 font-normal">(Sharpe {st.sharpe}, PF {st.pf})</span></span>
              </div>
            {/each}
          </div>
        </div>

        <!-- Engine B -->
        <div class="border border-[#00FF94]/35 bg-black/80 p-6 rounded-sm space-y-4">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <span class="px-2 py-0.5 bg-[#00FF94]/15 text-[#00FF94] text-[10px] font-bold tracking-widest rounded-sm">
              MOTOR B · STRATEGY F1 SHADOW
            </span>
            <span class="text-xs text-white/40">21 Altcoins + 1,061 Tracker</span>
          </div>
          <h3 class="text-lg font-bold text-white">AltCascadeDeepBid + SystemicTracker</h3>
          <ul class="font-sans text-xs text-white/75 space-y-2 leading-relaxed">
            <li>• <strong class="text-white">{isPt ? "Dupla Condição:" : "Dual Gate:"}</strong> <code class="text-white">own liq5m &gt;= causal_30d_P95</code> <strong>E</strong> <code class="text-[#00FF94]">MKRatio_global &gt;= 2,0x</code>.</li>
            <li>• <strong class="text-white">{isPt ? "Bid Profundo Dinâmico:" : "Volatility-Scaled Deep Bid:"}</strong> Ordem única 100% em <code class="text-[#4CC9F0]">depth_bps = 7 × sigma_1m × sqrt(5)</code> (ex.: -313 bps no boot ou calibrado por retorno log 1m).</li>
            <li>• <strong class="text-white">{isPt ? "Preenchimento Estrito:" : "Strict Cross-Fill:"}</strong> exige <code class="text-white">low &lt; P_limit</code> (elimina viés de toque de fila); janela passiva <code class="text-white">30m</code>, hold horizon <code class="text-white">60m</code>, sem price-stop.</li>
            <li>• <strong class="text-white">{isPt ? "Contabilidade Forense:" : "Shadow Accounting:"}</strong> registra <code class="text-[#00FF94]">alpha_shadow.jsonl</code> com tiers de atrito de <code class="text-white">12 bps</code> e <code class="text-white">20 bps</code> em alocações nocionais de <code class="text-white">$1k / $10k / $50k</code>.</li>
          </ul>

          <!-- FSM Flow Diagram -->
          <div class="border border-white/10 bg-white/[0.02] p-3.5 rounded-sm text-[11px] leading-relaxed text-[#4CC9F0] overflow-x-auto">
            <div class="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">FINITE STATE MACHINE (FSM)</div>
            <pre class="m-0">{`[WATCHING] ──(liq5m >= Pxx & cooldown >= 30m & MKRatio >= gate)──▶ [BIDDING]
    ▲                                                                  │
    │   (t > window & filled == 0 : No-Chase Cancel @ $0 fee) ─────────┤
    │                                                                  ▼
    └────────(t >= HoldHorizon + 1m : Time-Stop Exit)───────── [IN_POSITION]`}</pre>
          </div>
        </div>
      </div>

      <!-- ── Sub-section 04B: Forensic OOS Proof Ledger (All 133 Signals & 55 Trades) ── -->
      <div id="sec-oos-proof" class="scroll-mt-28 pt-6 space-y-5">
        <div class="flex flex-wrap items-center gap-3">
          <span class="px-2 py-0.5 bg-[#00FF94]/15 border border-[#00FF94]/40 text-[#00FF94] text-[10px] font-bold tracking-widest rounded-sm">
            04B // {isPt ? "PROVA AUDITÁVEL DO +18,20% OOS" : "AUDITABLE +18.20% OOS PROOF"}
          </span>
          <h3 class="text-lg md:text-xl font-bold text-white">
            {isPt
              ? "Ledger Completo dos 133 Sinais Emitidos & 55 Trades Executados (Core 4 Majors · Jul–Out/2026)"
              : "Complete 133 Emitted Signals & 55 Executed Trades Ledger (Core 4 Majors · Jul–Oct 2026)"}
          </h3>
        </div>

        <!-- Visual Polarity Callout: Operation vs Strategy vs Target Liquidation -->
        <div class="grid md:grid-cols-3 gap-3 border border-[#00F0FF]/25 bg-[#00F0FF]/[0.03] p-4 rounded-sm text-xs">
          <div class="space-y-1">
            <div class="text-[10px] text-rose-400 tracking-widest uppercase font-bold">
              {isPt ? "1. LIQUIDAÇÃO ALVO (FLUXO DA CORRETORA)" : "1. TARGET LIQUIDATION FLOW"}
            </div>
            <div class="font-bold text-white">LONG LIQ · <span class="text-rose-300">Forced Market SELL</span></div>
            <p class="font-sans text-[11px] text-white/60 leading-snug">
              {isPt
                ? "Compradores alavancados liquidados à força pela engine de margem da OKX via venda a mercado."
                : "Over-leveraged longs forcibly closed by OKX's risk engine via market SELL orders."}
            </p>
          </div>
          <div class="space-y-1 md:border-l md:border-white/10 md:pl-4">
            <div class="text-[10px] text-[#00F0FF] tracking-widest uppercase font-bold">
              {isPt ? "2. ESTRATÉGIA ACIONADA" : "2. TRIGGERED STRATEGY"}
            </div>
            <div class="font-bold text-white">MajorCascadeStinkBid <span class="text-[#00F0FF]/80">(>= P99 30d)</span></div>
            <p class="font-sans text-[11px] text-white/60 leading-snug">
              {isPt
                ? "Monitoramento causal de 30 dias nos Core 4 Majors (BTC, ETH, XRP, XAU) com deduplicação 30m."
                : "Causal 30-day rolling P99 monitor across Core 4 Majors (BTC, ETH, XRP, XAU) with 30m cooldown."}
            </p>
          </div>
          <div class="space-y-1 md:border-l md:border-white/10 md:pl-4">
            <div class="text-[10px] text-[#00FF94] tracking-widest uppercase font-bold">
              {isPt ? "3. NOSSA OPERAÇÃO (CONTRAPARTE)" : "3. OUR EXECUTED TRADE SIDE"}
            </div>
            <div class="font-bold text-[#00FF94]">LONG · Post-Only Limit BUY <span class="text-white/75">(-15/-30 bps → +30m)</span></div>
            <p class="font-sans text-[11px] text-white/60 leading-snug">
              {isPt
                ? "Compramos passivamente contra o pânico de venda forçada e encerramos no repique de equilíbrio."
                : "Passively absorb forced long-liquidation selling and exit 30 minutes later into equilibrium."}
            </p>
          </div>
        </div>

        <!-- Formula + Compounded vs Taker Comparison -->
        <div class="grid lg:grid-cols-3 gap-4">
          <div class="border border-white/10 bg-white/[0.02] p-5 rounded-sm space-y-3 font-sans text-xs text-white/75 leading-relaxed">
            <div class="font-mono text-[10px] text-[#00F0FF] tracking-widest font-bold uppercase">
              {isPt ? "METODOLOGIA EXATA DO SCRIPT WALK-FORWARD" : "EXACT WALK-FORWARD METHODOLOGY"}
            </div>
            <p>
              {#if isPt}
                Cada linha abaixo vem diretamente do dataset causal virgem (<code class="text-[#00FF94]">bounce_oos_clusters_p99.csv</code>) e reproduz bit-a-bit o validador <code class="text-white">major_cascade_stink_bid_walkforward.py</code>:
              {:else}
                Every row below comes directly from the virgin causal OOS dataset (<code class="text-[#00FF94]">bounce_oos_clusters_p99.csv</code>) and reproduces <code class="text-white">major_cascade_stink_bid_walkforward.py</code> bit-for-bit:
              {/if}
            </p>
            <ul class="space-y-1.5 text-[11px]">
              <li>• <strong class="text-white">133</strong> {isPt ? "clusters >= P99 (dedup 30m): " : "deduplicated P99 triggers: "} <span class="text-[#4CC9F0]">BTC 40 · ETH 49 · XRP 25 · XAU 19</span></li>
              <li>• <strong class="text-white">55</strong> {isPt ? "trades preenchidos (41,4%): " : "executed trades (41.4%): "} <span class="text-[#00FF94]">29 FULL (-15 & -30 bps) + 26 PARTIAL (-15 bps)</span></li>
              <li>• <strong class="text-white">78</strong> {isPt ? "sinais expirados sem toque (58,6%): " : "No-Chase expirations (58.6%): "} <span class="text-white/60">custo $0,00 · impacto 0,00%</span></li>
              <li>• <strong class="text-white">{isPt ? "Contrafactual Taker nos 133 sinais:" : "Counterfactual Taker (all 133):"}</strong> <span class="text-amber-300 font-bold">+{oosSummary.takerAll133SumPct.toFixed(2)}%</span> vs <span class="text-[#00FF94] font-bold">+{oosSummary.compoundedNetPct.toFixed(2)}%</span> Stink-Bid</li>
            </ul>
          </div>

          <!-- SVG Compounded Equity Curve -->
          <div class="lg:col-span-2 border border-white/10 bg-black/80 p-5 rounded-sm space-y-2">
            <div class="flex flex-wrap items-center justify-between gap-2 text-[10px] tracking-widest uppercase">
              <span class="text-[#00FF94] font-bold">
                {isPt ? "CURVA DE EQUITY OOS (55 TRADES PREENCHIDOS · CAPITAL 1X)" : "OOS EQUITY CURVE (55 FILLED TRADES · 1X CAPITAL)"}
              </span>
              <div class="flex items-center gap-4 text-[10px]">
                <span class="text-[#00FF94]">━━ Composto: +18.20%</span>
                <span class="text-[#4CC9F0]/75">╌╌ Soma Simples: +16.90%</span>
                <span class="text-white/45">MaxDD: 0.89%</span>
              </div>
            </div>

            <svg viewBox="0 0 {equitySvg.W} {equitySvg.H}" class="w-full h-44 overflow-visible">
              {#each equitySvg.yTicks as tick}
                <line
                  x1={equitySvg.PAD_L}
                  y1={tick.y}
                  x2={equitySvg.W - equitySvg.PAD_R}
                  y2={tick.y}
                  stroke={tick.v === 0 ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.07)"}
                  stroke-dasharray={tick.v === 0 ? undefined : "3 4"}
                />
                <text
                  x={equitySvg.PAD_L - 8}
                  y={tick.y + 3}
                  text-anchor="end"
                  fill="rgba(255,255,255,0.45)"
                  font-size="10"
                  font-family="monospace"
                >
                  +{tick.v.toFixed(tick.v === 18.2 ? 1 : 0)}%
                </text>
              {/each}

              <polygon points={equitySvg.areaPolygon} fill="rgba(0,255,148,0.08)" />
              <polyline
                points={equitySvg.simplePolyline}
                fill="none"
                stroke="rgba(76,201,240,0.65)"
                stroke-width="1.5"
                stroke-dasharray="4 3"
              />
              <polyline
                points={equitySvg.compPolyline}
                fill="none"
                stroke="#00FF94"
                stroke-width="2.2"
              />
              <circle cx={equitySvg.endX} cy={equitySvg.endY} r="4" fill="#00FF94" />
              <text
                x={equitySvg.endX + 6}
                y={equitySvg.endY + 3}
                fill="#00FF94"
                font-size="11"
                font-weight="bold"
                font-family="monospace"
              >
                +{equitySvg.endPct.toFixed(2)}%
              </text>
            </svg>
          </div>
        </div>

        <!-- Filters Row -->
        <div class="flex flex-wrap items-center justify-between gap-3 border border-white/10 bg-white/[0.015] p-3 rounded-sm text-[11px]">
          <div class="flex flex-wrap gap-1.5">
            {#each [
              { id: "filled", label: isPt ? "EXECUTADOS (55)" : "FILLED TRADES (55)" },
              { id: "all", label: isPt ? "TODOS SINAIS (133)" : "ALL SIGNALS (133)" },
              { id: "full", label: "FULL -15 & -30 (29)" },
              { id: "partial", label: "PARTIAL -15 (26)" },
              { id: "expired", label: "NO-CHASE EXPIRED (78)" },
            ] as sf}
              <button
                on:click={() => (oosStatusFilter = sf.id as OosStatusFilter)}
                class="px-2.5 py-1 rounded-sm border transition-colors {oosStatusFilter === sf.id
                  ? 'border-[#00FF94] bg-[#00FF94]/15 text-[#00FF94] font-bold'
                  : 'border-white/10 text-white/55 hover:text-white'}"
              >
                {sf.label}
              </button>
            {/each}
          </div>

          <div class="flex flex-wrap gap-1.5">
            {#each [
              { id: "ALL", label: "ALL CORE 4" },
              { id: "BTCUSDT", label: "BTC (18/40)" },
              { id: "ETHUSDT", label: "ETH (22/49)" },
              { id: "XRPUSDT", label: "XRP (13/25)" },
              { id: "XAUUSDT", label: "XAU (2/19)" },
            ] as symF}
              <button
                on:click={() => (oosSymbolFilter = symF.id as OosSymbolFilter)}
                class="px-2.5 py-1 rounded-sm border transition-colors {oosSymbolFilter === symF.id
                  ? 'border-[#00F0FF] bg-[#00F0FF]/15 text-[#00F0FF] font-bold'
                  : 'border-white/10 text-white/55 hover:text-white'}"
              >
                {symF.label}
              </button>
            {/each}
          </div>
        </div>

        <!-- Audit Ledger Table -->
        <div class="border border-white/10 bg-black/85 rounded-sm overflow-x-auto max-h-[560px] overflow-y-auto">
          <table class="w-full text-left border-collapse text-[11px] tabular-nums">
            <thead class="sticky top-0 z-10 bg-black/95 border-b border-white/15 text-[10px] text-[#00F0FF]/80 uppercase tracking-wider">
              <tr>
                <th class="py-2.5 px-2.5">Trade #</th>
                <th class="py-2.5 px-2.5">Sig #</th>
                <th class="py-2.5 px-2.5">UTC</th>
                <th class="py-2.5 px-2.5">{isPt ? "Ativo" : "Asset"}</th>
                <th class="py-2.5 px-2.5">{isPt ? "Estratégia" : "Strategy"}</th>
                <th class="py-2.5 px-2.5">{isPt ? "Liquidação Alvo" : "Target Liq"}</th>
                <th class="py-2.5 px-2.5">{isPt ? "Operação" : "Side"}</th>
                <th class="py-2.5 px-2.5 text-right">Liq 5m</th>
                <th class="py-2.5 px-2.5 text-right">P99 Causal</th>
                <th class="py-2.5 px-2.5 text-right">Mult</th>
                <th class="py-2.5 px-2.5 text-right">L1 (-15) / L2 (-30)</th>
                <th class="py-2.5 px-2.5">Status</th>
                <th class="py-2.5 px-2.5 text-right">L1 / L2 Net</th>
                <th class="py-2.5 px-2.5 text-right">Taker +30m</th>
                <th class="py-2.5 px-2.5 text-right">Trade Net</th>
                <th class="py-2.5 px-2.5 text-right">Equity Comp.</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              {#each filteredOosSignals as r (r.sigId)}
                <tr class="hover:bg-white/[0.03] transition-colors {r.tradeId === null ? 'opacity-65' : ''}">
                  <td class="py-2 px-2.5 font-bold {r.tradeId !== null ? 'text-white' : 'text-white/30'}">
                    {r.tradeId !== null ? `#${r.tradeId}` : "—"}
                  </td>
                  <td class="py-2 px-2.5 text-white/45">#{r.sigId}</td>
                  <td class="py-2 px-2.5 whitespace-nowrap text-white/85">{r.ts}</td>
                  <td class="py-2 px-2.5 font-bold text-[#00F0FF]">{r.symbol}</td>
                  <td class="py-2 px-2.5 whitespace-nowrap text-white/75">{r.strategy}</td>
                  <td class="py-2 px-2.5 whitespace-nowrap text-rose-300/90">{r.liqType}</td>
                  <td class="py-2 px-2.5 whitespace-nowrap">
                    <span class="px-1.5 py-0.5 rounded-sm border font-bold text-[10px] {r.tradeId !== null
                      ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-white/45'}">
                      {r.tradeId !== null ? r.tradeSide : isPt ? "LONG (Cancelada)" : "LONG (Cancelled)"}
                    </span>
                  </td>
                  <td class="py-2 px-2.5 text-right text-white">{fmtUsdInt(r.usd5m)}</td>
                  <td class="py-2 px-2.5 text-right text-white/55">{fmtUsdInt(r.p99)}</td>
                  <td class="py-2 px-2.5 text-right font-semibold {r.ratio >= 2.0 ? 'text-amber-300' : 'text-white/75'}">
                    {r.ratio.toFixed(2)}x
                  </td>
                  <td class="py-2 px-2.5 text-right whitespace-nowrap text-[#4CC9F0]/80">
                    {fmtOosPrice(r.symbol, r.limit1)} / {fmtOosPrice(r.symbol, r.limit2)}
                  </td>
                  <td class="py-2 px-2.5">
                    <span class="px-1.5 py-0.5 border rounded-sm text-[10px] font-bold {statusBadgeClass(r.status)}">
                      {r.status}
                    </span>
                  </td>
                  <td class="py-2 px-2.5 text-right whitespace-nowrap text-white/70">
                    {#if r.tradeId !== null}
                      {fmtSignedPct(r.retL1, 2)} / {fmtSignedPct(r.retL2, 2)}
                    {:else}
                      0.00% / 0.00%
                    {/if}
                  </td>
                  <td class="py-2 px-2.5 text-right {r.takerNet30 >= 0 ? 'text-emerald-400/70' : 'text-rose-400/75'}">
                    {fmtSignedPct(r.takerNet30, 2)}
                  </td>
                  <td class="py-2 px-2.5 text-right font-bold {r.tradeId === null ? 'text-white/35' : r.netRet >= 0 ? 'text-[#00FF94]' : 'text-rose-400'}">
                    {r.tradeId !== null ? fmtSignedPct(r.netRet, 3) : "0.000%"}
                  </td>
                  <td class="py-2 px-2.5 text-right font-bold {r.cumCompPct >= 0 ? 'text-[#00FF94]' : 'text-rose-400'}">
                    {fmtSignedPct(r.cumCompPct, 2)}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>

        <!-- Summary bar for filtered selection -->
        <div class="border border-white/10 bg-white/[0.02] px-4 py-3 rounded-sm flex flex-wrap items-center justify-between gap-3 text-xs tabular-nums">
          <div class="flex flex-wrap gap-4 text-white/75">
            <span>{isPt ? "Exibindo:" : "Showing:"} <strong class="text-white">{filteredOosStats.signals}</strong> {isPt ? "sinais" : "signals"}</span>
            <span>{isPt ? "Preenchidos:" : "Filled:"} <strong class="text-white">{filteredOosStats.filled}</strong> ({filteredOosStats.wins}W / {filteredOosStats.losses}L · WR <strong class="text-[#00FF94]">{filteredOosStats.wr.toFixed(1)}%</strong>)</span>
            <span>{isPt ? "Soma Líquida:" : "Net Sum:"} <strong class={filteredOosStats.sumPct >= 0 ? 'text-[#00FF94]' : 'text-rose-400'}>{fmtSignedPct(filteredOosStats.sumPct, 2)}</strong></span>
            <span>{isPt ? "Contrafactual Taker:" : "Taker Counterfactual:"} <strong class="text-amber-300">{fmtSignedPct(filteredOosStats.takerSum, 2)}</strong></span>
          </div>
          <div class="text-[11px] text-white/45">
            {isPt ? "Carteira Completa (111 dias):" : "Full Portfolio (111 days):"} <strong class="text-[#00FF94]">+18.20%</strong> (Sharpe +5.34 · PF 6.31 · MaxDD 0.89%)
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 05: Production Hardening ────────────────────────────────── -->
    <section id="sec-hardening" class="scroll-mt-28 space-y-6">
      <div class="flex items-center gap-4">
        <span class="text-[#00F0FF] font-bold tracking-widest text-xs">05 //</span>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
          {isPt ? "Engenharia de Produção & Hardening (Deploy 18/Nov/2026)" : "Production Engineering & Hardening (Deployed Nov 18, 2026)"}
        </h2>
        <div class="flex-1 h-px bg-white/10"></div>
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
        {#each [
          {
            tag: "ARK-115 · ANTI-REPLAY",
            titlePt: "Bloqueio de Backlog Obsoleto",
            titleEn: "Stale-Candle Replay Guard",
            bodyPt: "MaxBarAgeMs = 120.000ms na entrada da estratégia + supressão de publicação no FractalEngine durante replay durável do JetStream — elimina sinais fantasma após restart.",
            bodyEn: "MaxBarAgeMs = 120,000ms guard plus FractalEngine replay suppression eliminates phantom post-restart cascade signals from historical backlog.",
          },
          {
            tag: "ARK-110..114 · DEDUP",
            titlePt: "Unificação 1m & Ring-Buffer",
            titleEn: "1m Bucket Alignment & Dedup",
            bodyPt: "Normalização CloseTime = Start + 59.999ms garante equivalência bit-a-bit entre caminhos Live e Fallback, com deduplicação O(1) contra coletores paralelos.",
            bodyEn: "Canonical CloseTime = Start + 59,999ms keeps Live and Fallback buckets identical, paired with O(1) ring-buffer deduplication.",
          },
          {
            tag: "PR #79 & #80 · COLD-START",
            titlePt: "Warmup O(N) Instantâneo 30d",
            titleEn: "Instant O(N) 30d Warmup",
            bodyPt: "PullMaxMessages(5000) + SeedHistoricalMinutes drenou 279.783 eventos em ~12s no boot de hoje, aquecendo P99, P95 e MKRatio antes da 1ª vela ao vivo.",
            bodyEn: "PullMaxMessages(5000) + SeedHistoricalMinutes drained 279,783 archive events in ~12s on boot, warming P99/P95/MKRatio before live trading.",
          },
          {
            tag: "PR #78 · UNIVERSE",
            titlePt: "21 Altcoins 1m Provisionadas",
            titleEn: "Full 21-Altcoin 1m Pipeline",
            bodyPt: "Instanciação automática de coletores Bitget 1m e FractalEngines dedicados para os ativos da cesta F1, além de permissões graváveis em /app/logs/shadow.",
            bodyEn: "Dedicated Bitget 1m collectors and FractalEngines provisioned for all 21 F1 basket symbols with writable /app/logs/shadow persistence.",
          },
        ] as card}
          <div class="border border-white/10 bg-black/75 p-4 rounded-sm space-y-2">
            <div class="text-[10px] text-[#00FF94] tracking-widest font-bold">{card.tag}</div>
            <h3 class="text-sm font-bold text-white">{isPt ? card.titlePt : card.titleEn}</h3>
            <p class="font-sans text-xs text-white/65 leading-relaxed">{isPt ? card.bodyPt : card.bodyEn}</p>
          </div>
        {/each}
      </div>
    </section>

    <!-- ── Section 06: Quant Operator Doctrine ─────────────────────────────── -->
    <section id="sec-doutrina" class="scroll-mt-28 space-y-6">
      <div class="flex items-center gap-4">
        <span class="text-[#00F0FF] font-bold tracking-widest text-xs">06 //</span>
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">
          {isPt ? "Nosso Proceder e Considerações como Operadores Quant Automatizados" : "Operating Doctrine & Considerations as Automated Quant Operators"}
        </h2>
        <div class="flex-1 h-px bg-white/10"></div>
      </div>

      <div class="border border-[#00F0FF]/25 bg-white/[0.02] p-6 rounded-sm space-y-5">
        {#each [
          {
            num: "01",
            titlePt: "Prover Liquidez no Pânico Alheio, Nunca Perseguir Tendência Esticada",
            titleEn: "Provide Passive Liquidity in Panic — Never Chase Stretched Breakouts",
            bodyPt: "Nosso alpha não tenta prever fundos macro. Alugamos liquidez passiva Post-Only por exatos 30–60 minutos quando motores de margem forçam vendas insensíveis a preço contra arbitradores Spot/ETF.",
            bodyEn: "Our edge does not forecast macro bottoms. We rent passive Post-Only liquidity for deterministic 30–60 minute horizons when risk engines dump forced market sells against deeper Spot/ETF arbitrage.",
          },
          {
            num: "02",
            titlePt: "O Axioma No-Chase (Perder um Repique Custa $0; Perseguir Destrói o Sharpe)",
            titleEn: "The No-Chase Axiom (Missing a Bounce Costs $0; Chasing Destroys Edge)",
            bodyPt: "Mais de 50% das cascatas não retornam para preencher -15 ou -30 bps dentro de 5 minutos. Cancelar sem custo preserva o Profit Factor (6,31) que entradas Taker dissipam em taxas e spread.",
            bodyEn: "Over 50% of cascades rebound before touching -15/-30 bps within 5 minutes. Cancelling unfilled bids at zero fee preserves the 6.31 Profit Factor that Taker entries lose to fees and spread.",
          },
          {
            num: "03",
            titlePt: "Microestrutura Causal Auto-Calibrada em Vez de Osciladores Discretos",
            titleEn: "Self-Calibrating Causal Microstructure Over Lagging Discretionary Oscillators",
            bodyPt: "Substituímos limiares nominais fixos e leituras subjetivas semanais por percentis móveis de 30 dias (P99 nos Majors, P95 + MKRatio >= 2,0x nas Altcoins), adaptando automaticamente o sistema ao regime de liquidez vigente.",
            bodyEn: "Nominal USD thresholds and discretionary weekly checklists are replaced by rolling 30-day causal quantiles (P99 on Majors, P95 + MKRatio >= 2.0x on Altcoins) that adapt seamlessly as market depth shifts.",
          },
          {
            num: "04",
            titlePt: "Simetria Bit-Exata entre Pesquisa Walk-Forward, Shadow e Execução",
            titleEn: "Bit-Exact Parity Across Research, Shadow Ledger & Production Runtime",
            bodyPt: "Cada correção de warmup, alinhamento de timestamp e deduplicação garante que o motor ao vivo avalie exatamente a mesma distribuição que produziu Sharpe +5,34 fora da amostra.",
            bodyEn: "Every cold-start warmup, bucket normalization, and dedup guard enforces strict mathematical equivalence between the OOS walk-forward validator and the live Go binary.",
          },
          {
            num: "05",
            titlePt: "Governança Escalonada de Capital (Majors Live → Altcoins Shadow → Caixa em Calmaria)",
            titleEn: "Tiered Capital Governance (Majors Live → Altcoins Shadow → Flat in Calm Regimes)",
            bodyPt: "Alocação prioritária nos Core 4 Majors validados; Altcoins mantidas estritamente em Shadow Mode até comprovação estatística líquida pós-atrito (como validado ao vivo em SOL e NEAR às 16:12 UTC); e postura flat/caixa quando MKRatio < 0,5x.",
            bodyEn: "Priority allocation on validated Core 4 Majors; Altcoins strictly gated in Shadow Mode (capturing live fills like SOL and NEAR at 16:12 UTC) until post-friction significance clears; zero forced trades during calm sessions.",
          },
        ] as rule}
          <div class="flex gap-4 items-start border-b border-white/5 last:border-b-0 pb-4 last:pb-0">
            <span class="text-[#00F0FF] font-bold text-sm shrink-0">[{rule.num}]</span>
            <div class="space-y-1">
              <h3 class="text-white font-bold text-sm">{isPt ? rule.titlePt : rule.titleEn}</h3>
              <p class="font-sans text-xs text-white/70 leading-relaxed">{isPt ? rule.bodyPt : rule.bodyEn}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- Footer Note -->
    <footer class="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/35">
      <div>NEXUS QUANT · {meta.code} · COMMIT {meta.commit} · {meta.date}</div>
      <div class="flex gap-4">
        <a href="#/terminal" class="text-[#00FF94]/80 hover:text-[#00FF94]">[ LIVE TERMINAL ]</a>
        <a href="#/ark-streams" class="text-[#00F0FF]/80 hover:text-[#00F0FF]">[ ARK STREAMS ]</a>
        <a href="#/" class="hover:text-white">[ HOME ]</a>
      </div>
    </footer>
  </article>
</div>
