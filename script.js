document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Typing Effect ---
    const headline = document.getElementById('hero-headline');
    const textToType = "Find Top-Tier Web Developers.";
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            headline.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 80); // Adjust typing speed here (milliseconds)
        } else {
            // Remove cursor blinking after typing is done
            headline.style.borderRight = 'none';
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // --- 2. Fade-in on Scroll Effect ---
    const cards = document.querySelectorAll('.dev-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the card is in the viewport, add the 'is-visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
    });

});