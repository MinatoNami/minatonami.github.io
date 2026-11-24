// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Lionel Chong — Robotics & real-time backend engineer'
const description =
  'Full-stack engineer in Singapore building Open-RMF fleet middleware, on-robot ROS 2 software, real-time Django/FastAPI backends and self-hosted AI tools.'
const url = 'https://minatonami.github.io/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#0a1114', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#f6f8f8', media: '(prefers-color-scheme: light)' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&family=Space+Grotesk:wght@500;600;700&display=swap',
        },
      ],
    },
  },
})
