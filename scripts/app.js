// Shane Walker
// 100929693
// 2025-02-23
"use strict";

//IIFE - Immediately Invoked Function Expression
(function () {

    function fetchAndDisplayEvents() {
        fetch('events.json')
            .then(response => response.json())
            .then(events => {
                dispatchEvent(events);
                addEventFilterListener(events);
            })
            .catch(error => console.error("ERROR: An error occurred while fetching events.", error));
    }

    function dispatchEvent(events) {
        const eventsContainer = document.getElementById("events");
        eventsContainer.innerHTML = ""; // Replacing the existing content

        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("card", "mb-3");

            eventCard.innerHTML = `
            <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text"><strong>Date:</strong> ${event.date} | <strong>Time:</strong> ${event.time}</p>
            <p class="card-text"><strong>Location:</strong> ${event.location}</p>
            <p class="card-text">${event.description}</p>
            <span class="badge bg-success">${event.category}</span>
</div>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }

    function addEventFilterListener(events) {
        const eventFilter = document.getElementById("eventFilter");

        eventFilter.addEventListener("change", function () {
            const selectedCategory = this.value;
            const filteredEvents = selectedCategory === "all"
                ? events
                : events.filter(event => event.category === selectedCategory);

            dispatchEvent(filteredEvents);
        });
    }

    document.addEventListener("DOMContentLoaded", fetchAndDisplayEvents);
})();

    function DisplayHomePage() {
        console.log("Call DisplayHomePage...");

        let OpportunitiesBtn = document.getElementById("OpportunitiesBtn");
        OpportunitiesBtn.addEventListener("click", function () {
            location.href = "opportunities.html";

        });
    }

    // Java Array for volunteer opportunities
    const opportunities = [
        {title: 'Food Drive', description: 'A Food Drive event at whitby food bank', dateAndTime: '2025-01-27 12:00 AM', category: 'Fundraiser'},
        {title: 'Cleanups', description: 'Clean up high park', dateAndTime: '2025-01-25 12:00 AM', category: 'Cleanup'},
        {title: 'Workshop', description: 'Kids and community art workshop', dateAndTime: '2025-02-10 12:00 AM', category: 'Workshop'},
        {title: 'Fundraiser', description: 'Fundraiser for letting the dogs wear wigs', dateAndTime: '2025-02-15 12:00 AM', category: 'Fundraiser'},
    ];
    // Dynamically showcases the volunteer opportunities
    function showOpportunities() {
        const opportunitiesList = document.getElementById("opportunities-list");

        opportunities.forEach((opportunity, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add('col-md-4', 'mb-3');

            // Inner content for the opportunity card
            const listContent = ` 
            <div class="card">
                 <div class="card-body">
                <strong>${opportunity.title}</strong> <small class="text-muted">${opportunity.dateAndTime}</small>
                  <p>${opportunity.description}</p> 
                <button class="btn btn-primary" id="signup-btn-${index}">Sign Up</button>
                 </div>
            </div>
            `;
            listItem.innerHTML = listContent;
            opportunitiesList.appendChild(listItem);

            // Adding event for the sign up button
            const signUpBtn = document.getElementById(`signup-btn-${index}`);
            signUpBtn.addEventListener("click", function () {
                // Call the modal page
                const signupModal = new bootstrap.Modal(document.getElementById('signUpModal'));
                signupModal.show();
            });
        });
    }

    // From submission for signing up
    document.getElementById('signUpForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Stopping the form from submitting

        // Getting Uses Inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;

        // Validation for the inputs
        if (name && email && role) {
            // displaying the confirmation message
            const confirmationMessage = document.getElementById("confirmation");
            confirmationMessage.classList.remove('d-none'); // Showing the confirmation message

            // Resetting the form after submission
            document.getElementById('signUpForm').reset();

            // An timeout functiom to hide the modal
            setTimeout(function () {
                const signupModal = bootstrap.Modal.getInstance(document.getElementById('signUpModal'));
                signupModal.hide();

            }, 2000);
        } else {
            alert("Please fill in all fields");
        }
    });
    // calls funtion the opportunities when the page loads
    document.addEventListener("DOMContentLoaded", showOpportunities);

    function DisplayProductsPage() {
        console.log("Call DisplayProductPage...");
    }
    function DisplayEventPage() {
        console.log("Call DisplayEventPage...");
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
            case "events":
                DisplayEventPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }

    }window.addEventListener("load", Start);

