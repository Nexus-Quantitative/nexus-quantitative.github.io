<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";

    let container: HTMLDivElement;
    let canvas: HTMLCanvasElement;
    let animationId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    // Configuration
    const PARTICLE_COUNT = 150; // Total particles in the system
    const CHAOS_COLOR = 0xff4500; // Orange Red for Chaos
    const REFINERY_COLOR = 0x86198f; // Purple for Processing
    const VALUE_COLOR = 0x06b6d4; // Cyan for Value

    interface Particle {
        mesh: THREE.Mesh;
        state: "chaos" | "refining" | "value";
        velocity: THREE.Vector3;
        rotVelocity: THREE.Vector3;
        targetScale: number;
    }

    let particles: Particle[] = [];
    let refineryRings: THREE.Group;

    onMount(() => {
        if (!canvas) return;

        // 1. Setup Scene
        scene = new THREE.Scene();
        // scene.fog = new THREE.FogExp2(0x000000, 0.05); // Optional depth

        // 2. Camera
        const fov = 45;
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.1;
        const far = 100;
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 0, 15);
        camera.lookAt(0, 0, 0);

        // 3. Renderer
        renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);

        // 4. Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const coreLight = new THREE.PointLight(REFINERY_COLOR, 2, 10);
        coreLight.position.set(0, 0, 0);
        scene.add(coreLight);

        // 5. Create Objects
        createRefineryBeast();
        initParticles();

        // 6. Animation Loop
        const clock = new THREE.Clock();

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const delta = clock.getDelta();
            const time = clock.getElapsedTime();

            updateRefinery(time);
            updateParticles(delta, time);

            renderer.render(scene, camera);
        };

        animate();

        // 7. Resize Handler
        const handleResize = () => {
            if (!container) return;
            const w = container.clientWidth;
            const h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            // Dispose geometries/materials to avoid leaks? (Simplified for brevity)
        };
    });

    function createRefineryBeast() {
        refineryRings = new THREE.Group();

        // Inner Ring
        const geo1 = new THREE.TorusGeometry(1.5, 0.05, 16, 50);
        const mat1 = new THREE.MeshBasicMaterial({
            color: REFINERY_COLOR,
            transparent: true,
            opacity: 0.8,
            wireframe: true,
        });
        const ring1 = new THREE.Mesh(geo1, mat1);
        refineryRings.add(ring1);

        // Outer Ring
        const geo2 = new THREE.TorusGeometry(2.2, 0.02, 16, 50);
        const mat2 = new THREE.MeshBasicMaterial({
            color: 0x4c1d95,
            transparent: true,
            opacity: 0.5,
        });
        const ring2 = new THREE.Mesh(geo2, mat2);
        ring2.rotation.x = Math.PI / 2;
        refineryRings.add(ring2);

        // Core Octahedron
        const geo3 = new THREE.OctahedronGeometry(0.8, 0);
        const mat3 = new THREE.MeshPhongMaterial({
            color: REFINERY_COLOR,
            flatShading: true,
            emissive: 0x2e1065,
        });
        const core = new THREE.Mesh(geo3, mat3);
        refineryRings.add(core);

        scene.add(refineryRings);
    }

    function initParticles() {
        // Shared Geometries
        const chaosGeos = [
            new THREE.TetrahedronGeometry(0.2),
            new THREE.BoxGeometry(0.2, 0.2, 0.2),
            new THREE.DodecahedronGeometry(0.15),
        ];

        const chaosMat = new THREE.MeshPhongMaterial({
            color: CHAOS_COLOR,
            flatShading: true,
        });

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const mesh = new THREE.Mesh(
                chaosGeos[Math.floor(Math.random() * chaosGeos.length)],
                chaosMat.clone(),
            );

            // Revert pre-warm to restore "sense of time"
            // Start everyone on the far left, creating a "filling the pipe" visual
            mesh.position.set(
                -15 - Math.random() * 10, // Spread out behind the curtain
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
            );

            // Default Chaos State
            resetParticle(mesh, "chaos");
            // Ensure position override (resetParticle also sets position but we want a wider spread here)
            mesh.position.x = -15 - Math.random() * 10;

            scene.add(mesh);

            particles.push({
                mesh,
                state: "chaos",
                velocity: new THREE.Vector3(),
                rotVelocity: new THREE.Vector3(),
                targetScale: 1,
            });
        }
    }

    function resetParticle(mesh: THREE.Mesh, type: "chaos" | "value") {
        if (type === "chaos") {
            // Start from left (-10)
            mesh.position.set(
                -10 - Math.random() * 5,
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
            );
            // Random Chaos Rotation
            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI,
            );
            // Material update if needed (we are cloning so strictly we should swap meshes or materials, but let's just color tint for perf simplicity in this conceptual demo)
            (mesh.material as THREE.MeshPhongMaterial).color.setHex(
                CHAOS_COLOR,
            );
            (mesh.material as THREE.MeshPhongMaterial).emissive.setHex(
                0x000000,
            );
            (mesh.material as THREE.MeshPhongMaterial).wireframe = false;
        } else {
            // Shouldn't happen in reset usually, but logic exists in update
        }
    }

    function updateRefinery(time: number) {
        if (!refineryRings) return;
        refineryRings.rotation.y = time * 0.5;
        refineryRings.rotation.x = Math.sin(time * 0.3) * 0.2;

        // Pulse Effect
        const scale = 1 + Math.sin(time * 2) * 0.05;
        refineryRings.scale.set(scale, scale, scale);
    }

    function updateParticles(delta: number, time: number) {
        // Dynamics: Start slow, then vary speed
        const rampUp = Math.min(1, time / 5); // 0 to 1 over 5 seconds
        const variation = 1 + Math.sin(time * 0.8) * 0.3; // Breathing speed effect
        const currentSpeed = 3.5 * rampUp * variation;

        particles.forEach((p) => {
            const { mesh } = p;

            // Rotation
            mesh.rotation.x += p.rotVelocity.x * delta;
            mesh.rotation.y += p.rotVelocity.y * delta;

            // Movement: Driven by variable speed
            mesh.position.x += currentSpeed * delta;

            // STATE MACHINE

            // 1. Entering Refinery (Near x=0)
            if (p.state === "chaos" && mesh.position.x > -2) {
                // Suck into center
                const dist = mesh.position.length();
                if (dist > 0.5) {
                    mesh.position.lerp(new THREE.Vector3(0, 0, 0), delta * 3);
                }

                // If very close to center, transmute
                if (mesh.position.x > -0.5 && mesh.position.x < 0.5) {
                    p.state = "value";
                    // Change Appearance
                    (mesh.material as THREE.MeshPhongMaterial).color.setHex(
                        VALUE_COLOR,
                    );
                    (mesh.material as THREE.MeshPhongMaterial).emissive.setHex(
                        0x06b6d4,
                    );
                    // Reset random rotations to steady
                    mesh.rotation.set(0, 0, 0);
                    p.rotVelocity.set(0, 0, 0);
                }
            }
            // 2. Value Flow (Right of x=0)
            else if (p.state === "value") {
                // Flow nicely but wider for "progressive" feel
                mesh.position.y =
                    Math.sin(time * 2 + mesh.position.x) *
                    1.5 *
                    Math.exp(-mesh.position.x * 0.05); // Reduced dampening for longer tail visibility

                // Align to center line
                const targetY = 0;
                mesh.position.y += (targetY - mesh.position.y) * delta * 2;
                mesh.position.z += (0 - mesh.position.z) * delta * 2;
            }
            // 3. Chaos Flow (Left of x=-2)
            else {
                // Jittery chaos
                mesh.position.y += Math.sin(time * 10 + mesh.id) * 0.02;
                p.rotVelocity.set(Math.random(), Math.random(), Math.random());
            }

            // Reset if off screen (Extended to 20 for longer trail)
            if (mesh.position.x > 20) {
                p.state = "chaos";
                resetParticle(mesh, "chaos");
            }
        });
    }
</script>

<div
    class="w-full h-[400px] relative rounded-xl overflow-hidden border border-zinc-800 bg-black/60"
    bind:this={container}
>
    <canvas bind:this={canvas} class="w-full h-full block"></canvas>

    <!-- Optional: Overlay Labels -->
    <div
        class="absolute top-4 left-8 text-orange-500 font-mono text-xs tracking-widest pointer-events-none"
    >
        INPUT: HIGH ENTROPY
    </div>
    <div
        class="absolute top-4 left-1/2 -translate-x-1/2 text-purple-500 font-mono text-xs tracking-widest pointer-events-none"
    >
        INGESTION LAYER
    </div>
    <div
        class="absolute top-4 right-8 text-cyan-500 font-mono text-xs tracking-widest pointer-events-none"
    >
        OUTPUT: SIGNAL
    </div>
</div>
