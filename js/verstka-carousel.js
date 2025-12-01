document.addEventListener("DOMContentLoaded", function () {
    const verstkaTrack = document.getElementById("verstka-kards");
    const verstkaCard = document.querySelectorAll(".portfolio-carousel__card--verstka");
    const prevBtn = document.getElementById("verstka-btn--prev");
    const nextBtn = document.getElementById("verstka-btn--next");

    const cardWidth = verstkaCard[0].offsetWidth + 70;
    let index = 0;

    function updateCarousel() {
        verstkaTrack.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        index++;
        if (index > verstkaCard.length - 3) {
            index = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = verstkaCard.length - 3;
        }
        updateCarousel();
    });
});