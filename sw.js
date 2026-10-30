// Cambia el número de versión cada vez que publiques cambios importantes.
const V = "fesc-v1";
const SHELL = ["./", "index.html", "app.js", "manifest.json", "icon-180.png", "icon-192.png", "icon-512.png"];
const CDN = ["cdn.tailwindcss.com"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== V).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Responde desde caché y actualiza en segundo plano (stale-while-revalidate).
self.addEventListener("fetch", (e) => {
  const r = e.request;
  const u = new URL(r.url);
  if (r.method !== "GET") return;
  // Otros orígenes (Firebase, Supabase, etc.) van directo a la red, sin caché.
  if (u.origin !== location.origin && !CDN.includes(u.hostname)) return;
  e.respondWith(
    caches.match(r).then((hit) => {
      const net = fetch(r)
        .then((res) => {
          if (res && (res.ok || res.type === "opaque")) {
            const copy = res.clone();
            caches.open(V).then((c) => c.put(r, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
