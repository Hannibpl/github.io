"use strict";

export class Router{
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init(){
        window.addEventListener("popstate", () => {
            console.log("[info] Nav too")
        });

    }

    navigate(path){
        location.hash = path;
    }

    loadRoute(path){
        console.log(`[info] Loading route: ${path}`);

        const basePath = path.split("#")[0];

        if(!this.routes[basePath]){
            console.warn(`[WARNING] not found: ${basePath}, redirecting to 404`);
            location.hash = "/404";
            path = "/404";
        }

        fetch(this.routes[basePath])
        .then(response => {
            if (response.ok) throw new Error(`Failed to load ${this.routes[basePath]}`);
            return response.text();
        })
            .then(html => {
            document.querySelector("main").innerHTML = html;

            loadHeader().then(() => {
                //TODO
            });

        })
            .catch(error => {

            });
    }
}