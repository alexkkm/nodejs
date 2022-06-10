import http from "http";
import url from "url";

export function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
        console.log("End response")
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
