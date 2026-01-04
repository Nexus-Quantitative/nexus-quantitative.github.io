<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";

    let canvas: HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let particles: THREE.Points;
    let animationId: number;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    };

    onMount(() => {
        if (!canvas) return;

        // Scene Setup
        scene = new THREE.Scene();

        // Camera Setup
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        camera.position.z = 20;

        // Renderer Setup
        renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Particles
        const geometry = new THREE.BufferGeometry();
        const count = 1500;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 40; // Spread heavily
        }

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );

        // Get accent color from standard tailwind config or hardcoded for now
        // Using a cyan/blueish tint common in the design
        const material = new THREE.PointsMaterial({
            size: 0.05,
            color: 0x00f0ff, // Quantum Cyan
            transparent: true,
            opacity: 0.6,
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Animation Loop
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (particles) {
                // Gentle rotation
                particles.rotation.y += 0.001;
                particles.rotation.x += 0.0005;

                // Mouse interaction (parallax)
                const targetX = mouseX * 0.5;
                const targetY = mouseY * 0.5;

                particles.rotation.y += 0.05 * (targetX - particles.rotation.y);
                particles.rotation.x += 0.05 * (targetY - particles.rotation.x);
            }

            renderer.render(scene, camera);
        };

        animate();

        // Resize Handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    });
</script>

<canvas
    bind:this={canvas}
    class="fixed inset-0 w-full h-full pointer-events-none z-0"
></canvas>
