<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import * as THREE from "three";
    import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
    import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
    import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

    let canvas: HTMLCanvasElement;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let material: THREE.ShaderMaterial;
    let composer: EffectComposer;
    let animationId: number;

    const colors = {
        void: new THREE.Color("#000000"),
        purple: new THREE.Color("#240046"), // Much Darker Purple
        cyan: new THREE.Color("#003F4C"), // Much Darker Cyan (Teal)
    };

    onMount(() => {
        if (!canvas) return;

        // SCENE
        scene = new THREE.Scene();
        scene.background = colors.void;

        // CAMERA
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        // Position the camera to look at the plane from an angle
        camera.position.set(0, -10, 10);
        camera.lookAt(0, 0, 0);

        // RENDERER
        renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // GEOMETRY
        const geometry = new THREE.PlaneGeometry(60, 60, 128, 128); // Increased size to push edges out

        // MATERIAL (SHADER)
        material = new THREE.ShaderMaterial({
            wireframe: true,
            uniforms: {
                uTime: { value: 0 },
                uColorStart: { value: new THREE.Color("#5a189a") }, // Mid-tone for bloom
                uColorEnd: { value: new THREE.Color("#00b4d8") }, // Mid-tone for bloom
                uHover: { value: new THREE.Vector2(0.5, 0.5) },
                uHoverState: { value: 0.0 },
            },
            vertexShader: `
        uniform float uTime;
        uniform vec2 uHover;
        uniform float uHoverState;
        varying vec2 vUv;
        varying float vElevation;

        // Classic Perlin 3D Noise 
        // by Stefan Gustavson
        //
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

        float cnoise(vec3 P){
          vec3 Pi0 = floor(P); // Integer part for indexing
          vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
          Pi0 = mod(Pi0, 289.0);
          Pi1 = mod(Pi1, 289.0);
          vec3 Pf0 = fract(P); // Fractional part for interpolation
          vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.y, Pi0.y, Pi1.y, Pi1.y);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;

          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);

          vec4 gx0 = ixy0 / 7.0;
          vec4 gy0 = fract(floor(gx0) * 1.0 / 7.0) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);

          vec4 gx1 = ixy1 / 7.0;
          vec4 gy1 = fract(floor(gx1) * 1.0 / 7.0) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);

          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;

          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.y, Pf0.z));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.x, Pf1.y, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.x, Pf0.y, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.y, Pf1.z));
          float n111 = dot(g111, Pf1);

          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
          return 2.2 * n_xyz;
        }

        void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Create the animated topography
            float noiseFreq = 0.4; 
            float noiseAmp = 2.5; 
            // Slowed down animation (uTime * 0.05 instead of 0.3)
            float elevation = cnoise(vec3(pos.x * noiseFreq + uTime * 0.05, pos.y * noiseFreq, 0.0)) * noiseAmp;
            
            // Mouse Gravity Interaction
            // Calculate distance to mouse position (using UVs for simplicity in mapping)
            float dist = distance(vUv, uHover);
            
            // Create a gravity well (depression) only when hovering
            // We use a smooth Gaussian curve for the well
            // Reduced area (0.3 -> 0.1) and intensity (5.0 -> 1.0)
            float gravity = (1.0 - smoothstep(0.0, 0.1, dist)) * 1.0 * uHoverState;
            
            // Apply gravity (downwards pull)
            elevation -= gravity;

            pos.z += elevation;
            vElevation = elevation;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;
        varying vec2 vUv;
        varying float vElevation;

        void main() {
            // Gradient from Left to Right
            vec3 mixedColor = mix(uColorStart, uColorEnd, vUv.x);
            
            // Peak brightness logic
            float peaks = smoothstep(1.5, 3.5, vElevation); 

            // Add Starlight White to peaks - subtle
            mixedColor += vec3(peaks * 0.3);

            // Alpha Mask - Make it clear in the center for text, visible on edges/bottom
            // We want a "Floor" effect, so meaningful opacity at higher YUV or specific areas?
            // Actually let's just make it a global gentle fade with a hole in the absolute center if needed.
            // Current Approach: Global low opacity + distance fade.
            
            float dist = distance(vUv, vec2(0.5));
            // 0 at center, 0.7 at corners.
            // We want center to be visible but DIM.
            
            float alpha = smoothstep(0.0, 0.8, 1.0 - dist); // Edges fade out
            
            // Final opacity modifier: VERY LOW
            gl_FragColor = vec4(mixedColor, alpha * 0.15);
        }
      `,
            transparent: true,
            side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(geometry, material);
        // Tilted slightly to close the gap at the bottom of screen (Perspective adjustment)
        mesh.rotation.x = -Math.PI / 2 - 0.4;
        scene.add(mesh);

        // Raycaster for mouse interaction
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // POST PROCESSING
        const renderScene = new RenderPass(scene, camera);

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.2, // Strength - Very Low
            0.5, // Radius
            0.2, // Threshold
        );

        composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // ANIMATION
        const clock = new THREE.Clock();

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            // Update Uniforms
            material.uniforms.uTime.value = elapsedTime;

            // Smoothly interpolate hover state
            // If we decide to use raycaster every frame:
            // But raycasting every frame is fine for desktop.

            // Scroll Interaction - Subtle rotation based on scroll position
            const scrollY = window.scrollY;
            if (mesh) {
                // Slightly adjust tilt to enhance the "diving in" feeling, preserving the base gap fix
                mesh.rotation.x = -Math.PI / 2 - 0.4 - scrollY * 0.0002;
            }

            composer.render();
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            composer.setSize(window.innerWidth, window.innerHeight);
        };

        const handleMouseMove = (event: MouseEvent) => {
            // Normalized Device Coordinates
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Raycast
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(mesh);

            if (intersects.length > 0) {
                // UV is available on intersect for PlaneGeometry
                const uv = intersects[0].uv;
                if (uv) {
                    material.uniforms.uHover.value.set(uv.x, uv.y);
                    // Smooth transition target could be done in GSAP, but linear here is fine
                    material.uniforms.uHoverState.value = 1.0;
                }
            } else {
                material.uniforms.uHoverState.value = 0.0;
            }
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
            composer.dispose();
        };
    });
</script>

<canvas
    bind:this={canvas}
    class="fixed inset-0 w-full h-full pointer-events-none z-0"
    style="background-color: #000000;"
></canvas>
