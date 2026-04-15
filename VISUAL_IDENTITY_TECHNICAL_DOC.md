# Nexus Quantitative — Technical Visual Identity Document

> **Purpose:** This document gives a future AI agent or developer session enough context to replicate (not copy) the visual effect and identity of this website. It covers the animated background system, visual language, shader logic, color system, and component architecture.

---

## 1. Core Visual Concept

The site's visual identity is built around a **"quantum/event-horizon" aesthetic**: the feeling of staring into deep space or at the edge of a gravitational singularity. Key design decisions all serve this concept:

- Pure black void as the base layer
- Very low-opacity, glowing topographic mesh floating in the background
- Neon cyan and violet as the primary accent colors
- Slow, meditative animation — nothing is fast or distracting
- Scientific / monospace typography to reinforce a quant/tech persona

The name **"Event Horizon"** is literal — the animated background is named `EventHorizonBackground` and represents the undulating surface of spacetime.

---

## 2. Background Animation — `EventHorizonBackground`

**File:** `src/lib/EventHorizonBackground.svelte`  
**Renderer:** Three.js WebGL with custom ShaderMaterial  
**Effect:** Animated wireframe topography using Perlin 3D noise

### 2.1 Scene Setup

```typescript
// Scene
scene.background = new THREE.Color("#000000"); // void black

// Camera — positioned to look at the plane from a low angle
camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.set(0, -10, 10); // slightly below and forward
camera.lookAt(0, 0, 0);

// Geometry — large plane, high subdivision for smooth deformation
const geometry = new THREE.PlaneGeometry(60, 60, 128, 128);

// Mesh tilt — angled like a floor/horizon
mesh.rotation.x = -Math.PI / 2 - 0.4; // ~112.9 degrees
```

The plane is large (60x60 units) with 128x128 subdivisions to allow smooth, fine-grained vertex displacement by the noise function. The mesh is rotated to appear as a flat surface viewed from a low angle.

### 2.2 Vertex Shader — Perlin Noise Displacement

The vertex shader uses **Classic Perlin 3D Noise** to displace vertices along the Z axis, creating the animated topographic wave effect.

```glsl
// Key parameters drives the animation — extremely slow (0.05 multiplier)
float elevation = cnoise(vec3(
    pos.x * noiseFreq + uTime * 0.05,  // X scrolls slowly with time
    pos.y * noiseFreq,                  // Y is static (no Y drift)
    0.0                                 // Z fixed (2D slice of 3D noise)
)) * noiseAmp;
```

**Why uTime * 0.05?** The slow speed makes the animation feel geological rather than liquid. This is critical for the "meditative, cosmic" feeling.

#### Mouse Gravity Well

```glsl
// Distance from current UV to mouse UV position
float dist = distance(vUv, uHover);

// Gaussian-shaped depression — pulls surface down under cursor
float gravity = (1.0 - smoothstep(0.0, 0.1, dist)) * 1.0 * uHoverState;

// Subtract = push down (gravity well / depression)
elevation -= gravity;
```

### 2.3 Fragment Shader — Color and Opacity

```glsl
void main() {
    // Horizontal gradient: purple (left) → cyan (right)
    vec3 mixedColor = mix(uColorStart, uColorEnd, vUv.x);
    
    // Final: VERY low global opacity
    gl_FragColor = vec4(mixedColor, alpha * 0.15);
}
```

Key values:
- `uColorStart`: `#5a189a` (medium purple)
- `uColorEnd`: `#00b4d8` (medium cyan)
- Global alpha: **0.15** — the mesh is nearly transparent.

---

## 3. Secondary Background — `ThreeBackground` (Particle Stars)

**File:** `src/lib/ThreeBackground.svelte`  
**Effect:** 1500 particles distributed in a sphere of radius 40, cyan points, semi-transparent.

---

## 4. Color System

### Design Token Palette

| Token | Hex | Role |
|---|---|---|
| `--color-void-black` | `#000000` | Background base |
| `--color-deep-abyss` | `#050508` | Slightly elevated black |
| `--color-quantum-cyan` | `#00F0FF` | Primary accent, glow, highlights |
| `--color-electric-blue` | `#4CC9F0` | Secondary text, secondary accent |
| `--color-synth-violet` | `#7209B7` | Gradient left anchor |
| `--color-magenta-neon` | `#F72585` | Gradient middle, hover states |
| `--color-starlight-white` | `#FFFFFF` | Primary text |

### Signature Gradient

The **Nexus gradient** flows: purple → magenta → cyan (left to right).

```css
.text-gradient-nexus {
    background: linear-gradient(to right, #7209B7, #F72585, #00F0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

---

## 5. Typography

### Fonts

| Font | Use |
|---|---|
| **JetBrains Mono** | H1–H6, `.font-mono`, all headings |
| **Inter** | Body text, paragraphs, UI labels |

The monospace font signals technical precision.

---

## 6. Component Architecture

### Routing (hash-based)

```svelte
<!-- App.svelte — simplified -->
<EventHorizonBackground />  <!-- always behind everything -->

{#if hash === "#/presentation"}
    <Presentation />
{:else}
    <Hero />
    <Philosophy />
    <Stack />
    <Metrics />
    <Footer />
{/if}
```

Two distinct page modes:
1. **Default** — hero/portfolio landing.
2. **#/presentation** — slide deck with technical deep dives.

### Interactive Components

Used in the platform:

| Component | Effect |
|---|---|
| `ReactorCore` | Real-time simulation of the Ark Engine architecture |
| `DataRefinery3D` | Particle state machine — chaos → order |
| `MindsetObject` | Torus knot — wireframe that reveals solid on hover |

---

## 7. Key Design Decisions

- **Ambient Speed:** Slow animations (`uTime * 0.05`) for a meditative feel.
- **Visual Hierarchy:** Background alpha is kept low (0.15) to ensure text readability.
- **Monospace Priority:** Monospace font for headings is a core identity signal for a quantitative firm.
- **Additive Blending:** Used for glow effects to create a luminous, spectral feel.

---

*Generated from codebase analysis on 2026-04-15.*
