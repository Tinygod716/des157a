(function() {
    'use strict';
    const zoomImage = document.querySelector('.Snowman1');
    const nextImage = document.querySelector('.overlay1');
    let scale = 1;
    const maxScale = 2.5;
    const scaleStep = 0.05; 

    zoomImage.addEventListener('wheel', (event) => {
        if (scale < maxScale) {
            
            scale += event.deltaY * 0.001;
            scale = Math.min(scale, maxScale); 
            zoomImage.style.transform = `scale(${scale})`;

            
            if (scale >= maxScale) {
                zoomImage.style.display = 'none'; 
                nextImage.style.display = 'block'; 
            }
        }
    });
})();