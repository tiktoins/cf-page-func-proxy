addEventListener(
    "fetch",event => {
        let url=new URL(event.request.url);
        url.hostname="cdntik.netlify.app";
        let request=new Request(url,event.request);
        event. respondWith(
            fetch(request)
        )
    }
)
