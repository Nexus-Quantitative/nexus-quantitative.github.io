<script lang="ts">
    // Footer Section
    const year = new Date().getFullYear();
</script>

<footer class="py-12 px-4 border-t border-white/5 text-center bg-transparent">
    <div class="font-mono text-xs text-secondary space-y-6">
        <div class="flex justify-center gap-8">
            <a
                href="https://linkedin.com/company/nexus-quant"
                aria-label="LinkedIn"
                class="hover:text-accent transition-colors duration-300"
                >[ LINKEDIN ]</a
            >
            <a
                href="https://github.com/nexus-quantitative"
                aria-label="GitHub"
                class="hover:text-accent transition-colors duration-300"
                >[ GITHUB ]</a
            >
        </div>

        <div class="h-px w-12 bg-white/10 mx-auto"></div>

        <div class="opacity-40 font-sans tracking-wide">
            © {year} Nexus Quant. All rights reserved.<br />
            Rio de Janeiro, BR // Global Operations
        </div>
    </div>
</footer>
