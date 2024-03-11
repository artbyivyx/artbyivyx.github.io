document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = lightbox.querySelector(".lightbox-content");
  const lightboxCloseBtn = lightbox.querySelector(".close-btn");
  const lightboxLinks = document.querySelectorAll(".lightbox-link");
  const body = document.body;

  // Open the lightbox when a lightbox link is clicked
  lightboxLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the link
      const imgSrc = link.getAttribute("href");
      lightboxContent.setAttribute("src", imgSrc);
      lightbox.style.display = "flex"; // Show the lightbox
      body.style.overflow = "hidden"; // Disable scrolling
    });
  });

  // Close the lightbox when the close button is clicked
  lightboxCloseBtn.addEventListener("click", closeLightbox);

  // Close the lightbox when clicking anywhere on the overlay
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Function to close the lightbox
  function closeLightbox() {
    lightbox.style.display = "none"; // Hide the lightbox
    body.style.overflow = "auto"; // Enable scrolling
  }
});
