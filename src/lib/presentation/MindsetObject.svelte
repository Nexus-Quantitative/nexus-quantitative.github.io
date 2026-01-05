<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";

    let container: HTMLDivElement;
    let canvas: HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let frameId: number;

    // Objects
    let wireframeMesh: THREE.Mesh;
    let solidMesh: THREE.Mesh;

    // Mouse interaction
    let mouse = new THREE.Vector2(100, 100); // Start far away
    let targetMouse = new THREE.Vector2(100, 100);

    // Drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };

    onMount(() => {
        init();
        animate();
        window.addEventListener("mousemove", onDocumentMouseMove);
        window.addEventListener("resize", onWindowResize);
        container.addEventListener("mousedown", onMouseDown);
        container.addEventListener("mouseup", onMouseUp);
        container.addEventListener("mouseleave", onMouseUp);
    });

    onDestroy(() => {
        if (frameId) cancelAnimationFrame(frameId);
        window.removeEventListener("mousemove", onDocumentMouseMove);
        window.removeEventListener("resize", onWindowResize);
        if (container) {
            container.removeEventListener("mousedown", onMouseDown);
            container.removeEventListener("mouseup", onMouseUp);
            container.removeEventListener("mouseleave", onMouseUp);
        }
        if (renderer) renderer.dispose();
    });

    function init() {
        // Scene Setup (Transparent background)
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000,
        );
        camera.position.z = 50;

        renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0); // Transparent

        // Lighting (Crucial for the solid object look)
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xf97316, 2, 100); // Orange light
        pointLight1.position.set(10, 20, 30);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 100); // Blue light filler
        pointLight2.position.set(-10, -20, -10);
        scene.add(pointLight2);

        // --- THE OBJECTS ---
        // Complex Geometry representing "Logic"
        const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32, 2, 3);

        // 1. The "Backend Logic" (Wireframe)
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xf97316, // Orange
            wireframe: true,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide,
        });
        wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
        scene.add(wireframeMesh);

        // 2. The "Pixel Perfect Delivery" (Solid, metallic)
        const solidMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.0, // Start invisible
            side: THREE.DoubleSide,
            envMapIntensity: 1,
        });

        solidMesh = new THREE.Mesh(geometry, solidMaterial);
        scene.add(solidMesh);
    }

    function onMouseDown(event: MouseEvent) {
        isDragging = true;
        previousMousePosition = {
            x: event.clientX,
            y: event.clientY,
        };
    }

    function onMouseUp() {
        isDragging = false;
    }

    function onDocumentMouseMove(event: MouseEvent) {
        // Normalize mouse coordinates based on the container position
        const rect = container.getBoundingClientRect();
        targetMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        targetMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Handle drag rotation
        if (isDragging) {
            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y,
            };

            rotationVelocity.x = deltaMove.y * 0.01;
            rotationVelocity.y = deltaMove.x * 0.01;

            rotation.x += rotationVelocity.x;
            rotation.y += rotationVelocity.y;

            previousMousePosition = {
                x: event.clientX,
                y: event.clientY,
            };
        }
    }

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animate() {
        frameId = requestAnimationFrame(animate);
        render();
    }

    function render() {
        // Smooth mouse movement
        mouse.x += (targetMouse.x - mouse.x) * 0.05;
        mouse.y += (targetMouse.y - mouse.y) * 0.05;

        // Apply rotation based on drag or automatic rotation
        if (isDragging) {
            // User is dragging - use manual rotation
            wireframeMesh.rotation.x = rotation.x;
            wireframeMesh.rotation.y = rotation.y;
            solidMesh.rotation.x = rotation.x;
            solidMesh.rotation.y = rotation.y;
        } else {
            // Auto-rotate slowly when not dragging
            const time = Date.now() * 0.0005;

            // Gradually blend from manual rotation to auto rotation
            rotationVelocity.x *= 0.95;
            rotationVelocity.y *= 0.95;

            rotation.x += (time * 0.2 - rotation.x) * 0.02;
            rotation.y += (time * 0.5 - rotation.y) * 0.02;

            wireframeMesh.rotation.x = rotation.x;
            wireframeMesh.rotation.y = rotation.y;
            solidMesh.rotation.x = rotation.x;
            solidMesh.rotation.y = rotation.y;
        }

        // Calculate distance from center of screen to mouse interaction point
        // The closer to the center (where the object is), the more solid it becomes.
        const dist = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);

        // Invert interaction: Closer mouse = higher opacity for solid, lower for wireframe
        // Adjust thresholds (0.8, 0.3) to control the size of the "reveal bubble"
        let interactionFactor = Math.max(0, 1 - dist / 0.8);

        // Wireframe fades out as mouse gets close
        (wireframeMesh.material as THREE.MeshBasicMaterial).opacity =
            0.2 + (1 - interactionFactor) * 0.6;

        // Solid fades in as mouse gets close
        (solidMesh.material as THREE.MeshPhysicalMaterial).opacity =
            interactionFactor;

        // Subtle camera movement follows mouse
        camera.position.x += (mouse.x * 10 - camera.position.x) * 0.02;
        camera.position.y += (mouse.y * 10 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }
</script>

<div class="w-full h-full min-h-[400px] relative" bind:this={container}>
    <canvas
        bind:this={canvas}
        class="absolute inset-0 z-10 outline-none"
        class:cursor-grab={!isDragging}
        class:cursor-grabbing={isDragging}
    ></canvas>
    <div
        class="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 rounded-full blur-[100px] z-0 transform scale-75 opacity-50"
    ></div>
</div>
