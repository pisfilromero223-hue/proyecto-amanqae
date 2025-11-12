const containerTestimonials = document.querySelector('.container-testimonials');
const allCardTestimonials = document.querySelectorAll('.testimonial');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

// constantes
const totalCardTestimonials = allCardTestimonials.length;

// variables
let currentIndex = 0;
let autoPlayInterval;

const updateCarousel = () => {
    const offset = currentIndex * containerTestimonials.clientWidth;
    containerTestimonials.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
};

// botón siguiente
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCardTestimonials;
    updateCarousel();
    resetAutoPlay();
});

// botón anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCardTestimonials) % totalCardTestimonials;
    updateCarousel();
    resetAutoPlay();
});

// función para el autoplay cada 5 segundos
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCardTestimonials;
        updateCarousel();
    }, 5000);
}

// reiniciar autoplay cuando se navega manualmente
function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

startAutoPlay();
