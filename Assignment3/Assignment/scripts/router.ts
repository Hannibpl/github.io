"use strict";

/*
Handling the page routing
*/

export class Router {
    private routes: Record<string, string>;
    private pageTitles: Record<string, string>;

    /**
     * Constructs a Router instance
     * @param routes - A record of routes with their corresponding URL
     * @param pageTitles - A record of page titles for each route
     */
    constructor(routes: Record<string, string>, pageTitles: Record<string, string>) {
        this.routes = routes;
        this.pageTitles = pageTitles;
    }

    /*
    Loading the content based on the route
    */
    async loadPage(route: string): Promise<void> {
        const pageUrl = this.routes[route] || this.routes["/home"];
        const pageTitle = this.pageTitles[route] || this.pageTitles["/home"];

        // Update the title for the page
        document.title = pageTitle;

        try {
            const response = await fetch(pageUrl);
            if (!response.ok) {
                throw new Error(`Page not found: ${route}`);
            }
            const pageContent = await response.text();

            // Replacing the page content
            const mainElement = document.querySelector("main");
            if (mainElement) {
                mainElement.innerHTML = pageContent;
            }

            this.triggerPageSpecificLogic(route);
        } catch (error) {
            console.error(error);
            // Load the home page in case of error
            this.loadPage("/home");
        }
    }

    /**
     * Triggers page-specific logic based on the route
     * @param route - The current route
     */
    private triggerPageSpecificLogic(route: string): void {
        if (route === "/gallery") {
            console.log("Gallery page loaded. Initialize gallery functionality here.");
        } else if (route === "/events") {
            console.log("Events page loaded. Initialize events functionality here.");
        } else if (route === "/opportunities") {
            console.log("Opportunities page loaded. Initialize opportunities functionality here.");
        }
    }
}

