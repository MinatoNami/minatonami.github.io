<template>
  <figure class="fleet">
    <svg viewBox="0 0 520 340" role="img" aria-labelledby="fleet-title fleet-desc">
      <title id="fleet-title">How the fleet middleware fits together</title>
      <desc id="fleet-desc">
        Vendor A robots, vendor B robots, and lifts and doors connect through adapters to Open-RMF.
        Open-RMF talks ROS 2 to Python services, which stream to monitoring and teleoperation over
        WebSockets and send telemetry and video to analytics and AI training data.
      </desc>

      <g class="edges">
        <path v-for="e in edges" :id="e.id" :key="e.id" :d="e.d" />
      </g>

      <g class="packets" aria-hidden="true">
        <circle v-for="(e, i) in edges" :key="e.id" r="3.5">
          <animateMotion :dur="`${2.2 + (i % 3) * 0.4}s`" :begin="`${i * 0.35}s`" repeatCount="indefinite">
            <mpath :href="`#${e.id}`" />
          </animateMotion>
        </circle>
      </g>

      <g class="edge-labels" aria-hidden="true">
        <text x="168" y="104" text-anchor="middle">adapters</text>
        <text x="322" y="172" text-anchor="middle">ROS 2</text>
        <text x="418" y="124" text-anchor="end">WebSockets</text>
        <text x="418" y="246" text-anchor="end">telemetry · video</text>
      </g>

      <g v-for="n in robots" :key="n.label" class="node">
        <rect :x="16" :y="n.y" width="130" height="44" rx="8" />
        <circle class="light" :cx="32" :cy="n.y + 22" r="4" :style="{ animationDelay: n.delay }" />
        <text :x="44" :y="n.y + 26">{{ n.label }}</text>
      </g>

      <g class="node hub">
        <rect x="190" y="150" width="110" height="64" rx="10" />
        <text x="245" y="180" text-anchor="middle" class="hub-title">Open-RMF</text>
        <text x="245" y="198" text-anchor="middle" class="hub-sub">orchestration</text>
      </g>

      <g class="node">
        <rect x="345" y="160" width="160" height="44" rx="8" />
        <text x="425" y="186" text-anchor="middle">Python services</text>
      </g>
      <g class="node">
        <rect x="345" y="40" width="160" height="44" rx="8" />
        <text x="425" y="66" text-anchor="middle">Ops &amp; teleoperation</text>
      </g>
      <g class="node">
        <rect x="345" y="280" width="160" height="44" rx="8" />
        <text x="425" y="306" text-anchor="middle">Analytics &amp; AI data</text>
      </g>
    </svg>
  </figure>
</template>

<script setup lang="ts">
const robots = [
  { label: 'Vendor A robots', y: 40, delay: '0s' },
  { label: 'Vendor B robots', y: 160, delay: '0.6s' },
  { label: 'Lifts & doors', y: 280, delay: '1.2s' },
]

const edges = [
  { id: 'e-a', d: 'M146 62 C172 62 166 170 190 170' },
  { id: 'e-b', d: 'M146 182 L190 182' },
  { id: 'e-l', d: 'M146 302 C172 302 166 194 190 194' },
  { id: 'e-svc', d: 'M300 182 L345 182' },
  { id: 'e-ops', d: 'M425 160 L425 84' },
  { id: 'e-data', d: 'M425 204 L425 280' },
]
</script>

<style scoped>
.fleet {
  margin: 0;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background:
    radial-gradient(circle at 1px 1px, var(--grid) 1px, transparent 0) 0 0 / 18px 18px,
    var(--surface);
}
svg { display: block; width: 100%; height: auto; }
.edges path { fill: none; stroke: var(--line); stroke-width: 1.5; stroke-dasharray: 4 4; }
.packets circle { fill: var(--accent); }
.edge-labels text { font: 500 10.5px var(--mono); fill: var(--muted); }
.node rect { fill: var(--surface-2); stroke: var(--border-strong); stroke-width: 1; }
.node text { font: 500 12px var(--mono); fill: var(--text); }
.hub rect { fill: var(--accent-soft); stroke: var(--accent); stroke-width: 1.5; }
.hub-title { font: 600 14px var(--display) !important; fill: var(--text); }
.hub-sub { font: 500 10px var(--mono) !important; fill: var(--muted) !important; }
.light { fill: var(--signal); animation: blink 1.8s ease-in-out infinite; }
@keyframes blink { 50% { opacity: 0.25; } }
@media (prefers-reduced-motion: reduce) {
  .packets { display: none; }
  .light { animation: none; }
}
</style>
