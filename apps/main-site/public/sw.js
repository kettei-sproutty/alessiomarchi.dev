if (!self.define) {
  let e,
    s = {}
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (t, a) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[c]) return
    let i = {}
    const r = e => n(e, c),
      o = { module: { uri: c }, exports: i, require: r }
    s[c] = Promise.all(t.map(e => o[e] || r(e))).then(e => (a(...e), i))
  }
}
define(['./workbox-b777c91b'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/31-b6d215bd25b1fe27.js', revision: 'ynhR90HuFHIBTDYt9l6Ie' },
        { url: '/_next/static/chunks/443.0078d66fd2d01792.js', revision: '0078d66fd2d01792' },
        { url: '/_next/static/chunks/87.acf85b2bddbcf382.js', revision: 'acf85b2bddbcf382' },
        {
          url: '/_next/static/chunks/app/about/head-1688dac5d0f0c607.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/about/page-20508e7161778e21.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/design/head-9df6ab4d8c54875b.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/design/page-980ffcce75982e6b.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/head-1064d87953474797.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/layout-3130999537518ed3.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/page-51cbc30c89dbe168.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/projects/head-f2dfabad63ba67ef.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/app/projects/page-389c132ed9c19b95.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        { url: '/_next/static/chunks/main-405c2eb7ff5bda52.js', revision: 'ynhR90HuFHIBTDYt9l6Ie' },
        {
          url: '/_next/static/chunks/main-app-f71f37ec0038b307.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/pages/_app-f8920616ab31aec1.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/pages/_error-eeb938cb82e156f0.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-b72e8eee7f0e8df2.js',
          revision: 'ynhR90HuFHIBTDYt9l6Ie',
        },
        { url: '/_next/static/css/7fc59cba139db263.css', revision: '7fc59cba139db263' },
        { url: '/_next/static/css/ac8e530fc12e1e40.css', revision: 'ac8e530fc12e1e40' },
        { url: '/_next/static/css/f800c4e59452e0a9.css', revision: 'f800c4e59452e0a9' },
        {
          url: '/_next/static/ynhR90HuFHIBTDYt9l6Ie/_buildManifest.js',
          revision: '518aed79b6d2e86b7cf2e4b3a8a5c46d',
        },
        {
          url: '/_next/static/ynhR90HuFHIBTDYt9l6Ie/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers })
                : e,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (self.origin !== e.origin) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => self.origin === e.origin && !e.pathname.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    )
})
