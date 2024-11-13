document.querySelectorAll('.carousel').forEach(carousel => {
    const imagesContainer = carousel.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    let currentIndex = 0;

    function autoScroll() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        const offset = -carousel.offsetWidth * currentIndex;
        imagesContainer.style.transform = `translateX(${offset}px)`;
    }

    // Set interval for auto-scroll (e.g., every 3 seconds)
    setInterval(autoScroll, 3000);

    // Optional: Reset to prevent transition issues on window resize
    window.addEventListener('resize', () => {
        imagesContainer.style.transition = 'none'; // Disable transition
        imagesContainer.style.transform = `translateX(0px)`; // Reset position
        currentIndex = 0; // Reset index
        setTimeout(() => imagesContainer.style.transition = 'transform 0.5s ease-in-out', 50); // Re-enable transition
    });
});