(function() {
    'use strict';

    function addZoomEffect(zoomImage, nextImage, maxScale) {
        let scale = 1;
        const welcome = document.querySelector('.text-container');
        zoomImage.addEventListener('wheel', (event) => {
            event.preventDefault();
            if (scale < maxScale) {
                scale += event.deltaY * 0.001;
                scale = Math.min(scale, maxScale);
                zoomImage.style.transform = `scale(${scale})`;

                if (scale >= maxScale) {
                    welcome.style.display = 'none';
                    zoomImage.style.opacity = '0';
                    zoomImage.style.visibility = 'hidden';
                    nextImage.classList.add('visible');
                    
                }
            }
        });
    }

    const maxScale = 4;
    addZoomEffect(document.querySelector('.Snowman1'), document.querySelector('.overlay1'), maxScale);
    addZoomEffect(document.querySelector('.street1'), document.querySelector('.overlay2'), maxScale);
    addZoomEffect(document.querySelector('.street2'), document.querySelector('.overlay3'), maxScale);
    addZoomEffect(document.querySelector('.street3'), document.querySelector('.overlay4'), maxScale);
    addZoomEffect(document.querySelector('.street4'), document.querySelector('.overlay5'), maxScale);
    addZoomEffect(document.querySelector('.street5'), document.querySelector('.overlay6'), maxScale);
    addZoomEffect(document.querySelector('.street6'), document.querySelector('.overlay7'), maxScale);
    addZoomEffect(document.querySelector('.street7'), document.querySelector('.overlay8'), maxScale);
    addZoomEffect(document.querySelector('.street8'), document.querySelector('.overlay9'), maxScale);

    // rotate
    function applyScrollEffect() {
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            const rect = paragraph.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;

            if (inView) {
                paragraph.classList.add('scroll-rotate');
            } else {
                paragraph.classList.remove('scroll-rotate');
            }
        });
    }

    window.addEventListener('scroll', applyScrollEffect);

})();
