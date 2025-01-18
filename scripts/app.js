"use strict";

//IIFE - Immediately Invoked Function Expression
(function () {

    function DisplayHomePage() {
        console.log("Call DisplayHomePage...");

        let aboutUsBtn = document.getElementById("AboutUsBtn");
        aboutUsBtn.addEventListener("click", function () {
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];
        //<p></p>
        let MainParagraph = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my first paragraph";

        // attach to the dom
        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} is my second paragraph`;
        MainParagraph.textContent = SecondString;

        // attach to the dom
        MainContent.appendChild(MainParagraph);


        let DocumentBody = document.body;
        //<article></p></article>
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayProductsPage() {
        console.log("Call DisplayProductPage...");
    }
    function DisplayServicesPage() {
        console.log("Call DisplayServicesPage...");
    }
    function DisplayAboutPage() {
        console.log("Call DisplayAboutPage...");
    }
    function DisplayContactPage() {
        console.log("Call DisplayContactPage...");
    }

    function Start() {
        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }

    }window.addEventListener("load", Start);

})()