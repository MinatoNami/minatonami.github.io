<template>
  <div>
    <a class="skip" href="#main">Skip to content</a>

    <header class="topbar">
      <div class="wrap topbar-inner">
        <a href="#top" class="mark" aria-label="Lionel Chong, back to top">LC<span>.</span></a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main id="main">
      <!-- Hero -->
      <section id="top" class="hero wrap">
        <div class="hero-copy">
          <p class="status"><span class="dot" aria-hidden="true" />Software Engineer · Singapore</p>
          <h1>Lionel Chong</h1>
          <p class="lede">
            I build the software that lets <strong>robot fleets</strong>, people and AI work together —
            in real time.
          </p>
          <p class="sub">
            Full-stack engineer at <strong>LionsBot</strong> and its subsidiary <strong>Griffin Labs</strong>,
            working on Open-RMF fleet middleware, on-robot ROS 2 software and the real-time Python backends between them.
          </p>
          <div class="cta">
            <a class="btn primary" :href="`mailto:${links.email}`">Get in touch</a>
            <a class="btn" :href="links.github" rel="me">GitHub</a>
            <a class="btn" :href="links.linkedin" rel="me">LinkedIn</a>
          </div>
        </div>
        <FleetDiagram class="hero-figure" />
      </section>

      <!-- Work -->
      <section id="work" class="section wrap">
        <header class="section-head">
          <p class="kicker">01 · At work</p>
          <h2>Robots from different vendors speak different APIs.</h2>
          <p class="section-lede">I build the layer that puts them on one map, one task queue and one ops dashboard.</p>
        </header>
        <div class="grid four">
          <article v-for="w in work" :key="w.title" class="card">
            <p class="label">{{ w.label }}</p>
            <h3>{{ w.title }}</h3>
            <p>{{ w.body }}</p>
          </article>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="section wrap">
        <header class="section-head">
          <p class="kicker">02 · Side projects</p>
          <h2>A self-hosted, privacy-first homelab.</h2>
          <p class="section-lede">
            AI and data apps I run for myself, reachable over Tailscale and routed under one address by
            <a href="https://github.com/MinatoNami/alena-gateway">alena-gateway</a>.
          </p>
        </header>
        <div class="grid two">
          <article v-for="p in projects" :key="p.name" class="card project">
            <div class="project-top">
              <h3><a :href="p.repo">{{ p.name }}<span aria-hidden="true"> ↗</span></a></h3>
              <span class="metric">{{ p.metric }}</span>
            </div>
            <p class="tagline">{{ p.tagline }}</p>
            <p>{{ p.body }}</p>
            <ul class="chips" :aria-label="`${p.name} stack`">
              <li v-for="s in p.stack" :key="s">{{ s }}</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="section wrap">
        <header class="section-head">
          <p class="kicker">03 · Experience</p>
          <h2>Where I've shipped.</h2>
        </header>
        <ol class="timeline">
          <li v-for="e in experience" :key="e.org + e.when">
            <p class="when">{{ e.when }}</p>
            <div>
              <h3>{{ e.role }} <span class="org">· {{ e.org }}</span></h3>
              <p>{{ e.body }}</p>
            </div>
          </li>
        </ol>
        <p class="edu">
          <strong>National University of Singapore</strong> — B.Eng. Engineering Science (Hons), Minor in Statistics
        </p>

        <div class="stack">
          <div v-for="s in stack" :key="s.group" class="stack-row">
            <p class="label">{{ s.group }}</p>
            <ul class="chips">
              <li v-for="i in s.items" :key="i">{{ i }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="section wrap contact">
        <p class="kicker">04 · Contact</p>
        <h2>Ask me about real-time robot telemetry, Open-RMF fleet adapters, or running LLMs locally.</h2>
        <div class="cta">
          <a class="btn primary" :href="`mailto:${links.email}`">{{ links.email }}</a>
          <a class="btn" :href="links.linkedin">LinkedIn</a>
          <a class="btn" :href="links.github">GitHub</a>
        </div>
      </section>
    </main>

    <footer class="wrap footer">
      <p>© {{ year }} Lionel Chong · Built with Nuxt, deployed on GitHub Pages</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { links, work, projects, experience, stack } from '~/data/profile'

const year = new Date().getFullYear()
</script>
