"use strict";

// Setting the diff type of images
interface GalleryImage {
    src: string;
    alt: string;
}

// Funcation for loadin the images from the JSON File
async function loadGallery(): Promise<void>{
    try {
        const response = await fetch('gallery.json');
        const data: GalleryImage[] = await response.json();

        let galleryHTML = "";

        // HTML for thr gallery items
        data.forEach((img) => {
            galleryHTML += `
            <div class="gallery-item" data-bs-toggle="modal" data-bs-target="#lightboxModal" onclick="showImage('${img.src}', '${img.alt}')">
                <img src="${img.src}" alt="${img.alt}">
                </div>
        `;
        });

        // Have the gallery HTML append to the gallery container
        const galleryContainer = document.getElementById('gallery');
        if (galleryContainer) {
            galleryContainer.innerHTML = galleryHTML;
        } else {
            console.error("Gallery not found.");
        }
    } catch (error) {
        console.error("Error loading gallery images:", error);
    }
}

// Function to show the image in the lightbox modal
function showImage(src: string, alt: string):void {
    const lightboxImg = document.getElementById('lightboxModal') as HTMLImageElement;
    if (lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
    } else {
        console.error("Gallery not found.");
    }
}

// Initalizing the gallery page when loading
document.addEventListener("DOMContentLoaded", loadGallery);
