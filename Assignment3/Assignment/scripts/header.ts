"use strict";

// Load the header dynamically
export async function LoadHeader(): Promise<void> {
    console.log("Loading Header...");

    try {
        const response = await fetch("./views/components/header.html");
        const data = await response.text();
        const headerElement = document.querySelector('header');

        if (!headerElement) {
            console.error("[ERROR] header element not found");
            return;
        }

        // Inject the loaded header HTML into the header element
        headerElement.innerHTML = data;

        // Update active link and check login status
        updateActiveNewLink();
        CheckLogin();
    } catch (error) {
        console.error("Unable to load header.", error);
    }
}

// Update active navigation link based on current path
export function updateActiveNewLink(): void {
    console.log("updateActiveNewLink....");

    const currentPath = location.hash.slice(1);
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href")?.replace("#", '') || '';
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Handle user logout
function handleLogout(event: Event): void {
    event.preventDefault();
    sessionStorage.removeItem("user");
    console.log("Logout successful, updating the UI...");

    // Reload the header to reflect the new login state
    LoadHeader().then(() => {
        location.hash = "/"; // Navigate to the home page
    });
}

// Check if user is logged in and update the navigation accordingly
function CheckLogin(): void {
    console.log("Checking user login status...");

    const loginNav = document.getElementById("loginNav") as HTMLAnchorElement;
    if (!loginNav) {
        console.warn("loginNav element not found, skipping CheckLogin().");
        return;
    }

    const userSession = sessionStorage.getItem("user");
    if (userSession) {
        // Update loginNav to display logout option
        loginNav.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout`;
        loginNav.href = "#";
        loginNav.addEventListener("click", handleLogout);
    } else {
        // If no user session, show the login link
        loginNav.innerHTML = `<i class="fas fa-sign-in-alt"></i> Login`;
        loginNav.href = "#login"; // Navigate to login page
    }
}
