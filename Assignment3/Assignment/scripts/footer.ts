"use strict";

export async function LoadFooter() {
    return fetch("views/componets/footer.html")
        .then(response => response.text())
        .then(html => {
            const footerElement = document.querySelector("footer");
            if(footerElement) {
                footerElement.innerHTML = html;
            }else{
                console.warn("[WARNING] No footer found");
            }
        })
        .catch(error => console.error("error", error));
}