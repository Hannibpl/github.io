"use strict";

export function LoadHeader() {
    console.log("Loading Header...");

    return fetch("./views/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            updateActiveNewLink();
        })
        .catch(error => {console.error("Unable to load header.", error)});
}

export function updateActiveNewLink() {
    console.log("updateActiveNewLink....");

    const currentPath = location.hash.slice(1);
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {

        const linkPath = link.getAttribute("href").replace("#", "");

        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

}