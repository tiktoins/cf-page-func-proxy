export default {
    async fetch(request, env, event) {
      let url=new URL(event.request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="cdntik.netlify.app";
        let request=new Request(url,event.request);
        event. respondWith(
            fetch(request)
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
