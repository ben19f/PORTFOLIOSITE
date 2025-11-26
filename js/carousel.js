document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-cards");
    const cards = document.querySelectorAll(".portfolio-carousel__card");
    const prevBtn = document.querySelector(".portfolio-carousel-btn--prev");
    const nextBtn = document.querySelector(".portfolio-carousel-btn--next");

    const cardWidth = cards[0].offsetWidth + 10;
    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if (index > cards.length - 3) {
            index = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = cards.length - 3;
        }
        updateCarousel();
    });
});