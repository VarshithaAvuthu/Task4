document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
        });

        // Show the selected testimonial
        testimonials[index].classList.add('active');
    }

    prevButton.addEventListener('click', () => {
        // Decrement index and loop back to the last testimonial if necessary
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        // Increment index and loop back to the first testimonial if necessary
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    // Initialize the first testimonial
    showTestimonial(currentIndex);
});

