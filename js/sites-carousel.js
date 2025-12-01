document.addEventListener("DOMContentLoaded", function () {
    const sitesTrack = document.getElementById("sites-kards");
    const sitesCard = document.querySelectorAll(".portfolio-carousel__card--sites");
    const sitesprevBtn = document.getElementById("sites-btn--prev");
    const sitesnextBtn = document.getElementById("sites-btn--next");

    const cardWidth = sitesCard[0].offsetWidth + 70;
    let index = 0;

    function updateCarousel() {
        sitesTrack.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    sitesnextBtn.addEventListener("click", () => {
        index++;
        if (index > sitesCard.length - 3) {
            index = 0;
        }
        updateCarousel();
    });

    sitesprevBtn.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = sitesCard.length - 3;
        }
        updateCarousel();
    });
});