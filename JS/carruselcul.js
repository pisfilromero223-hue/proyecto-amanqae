const carousel = document.getElementById("agendaCarousel");
const dots = document.querySelectorAll(".agenda-dots .dot");

let index = 0;
const groupSize = 2; 
const totalViews = 3; 

function goTo(i) {
    index = i;
    const moveX = -(100 / totalViews) * i;
    carousel.style.transform = `translateX(${moveX}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[i].classList.add("active");
}

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        goTo(dot.dataset.i);
        resetAutoplay();
    });
});

let auto = setInterval(() => {
    index = (index + 1) % totalViews;
    goTo(index);
}, 4000);

function resetAutoplay() {
    clearInterval(auto);
    auto = setInterval(() => {
        index = (index + 1) % totalViews;
        goTo(index);
    }, 4000);
}

goTo(0);
