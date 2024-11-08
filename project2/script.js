(function() {
    'use strict';

    // 第一部分：缩放 Snowman1 图片
    const zoomImage = document.querySelector('.Snowman1');
    const nextImage = document.querySelector('.overlay1');
    let scale1 = 1;
    const maxScale = 4;

    
    zoomImage.addEventListener('wheel', (event) => {
        event.preventDefault();
        
        if (scale1 < maxScale) {
            scale1 += event.deltaY * 0.001;
            scale1 = Math.min(scale1, maxScale);
            zoomImage.style.transform = `scale(${scale1})`;

            if (scale1 >= maxScale) {
                zoomImage.style.display = 'none';
                nextImage.style.display = 'block';
            }
        }
    });

    // 第二部分：缩放 overlay1 中的 2p1 图片
    const image2 = document.querySelector('.street1');
    const nextImage1 = document.querySelector('.overlay2'); 
    let scale2 = 1; 
    
    image2.addEventListener('wheel', function(event) {
        event.preventDefault();
        
        if (scale2 < maxScale) {
            scale2 += event.deltaY * 0.001;
            scale2 = Math.min(scale2, maxScale);
            image2.style.transform = `scale(${scale2})`;

            if (scale2 >= maxScale) {
                nextImage.style.display = 'none';
                nextImage1.style.display = 'block';
            }
        }
    });

    // section3 overlay2 and street2
    const image3 = document.querySelector('.street2');
    const nextImage2 = document.querySelector('.overlay3'); 
    let scale3 = 1; 
    
    image3.addEventListener('wheel', function(event) {
        event.preventDefault();
        
        if (scale3 < maxScale) {
            scale3 += event.deltaY * 0.001;
            scale3 = Math.min(scale2, maxScale);
            image3.style.transform = `scale(${scale3})`;

            if (scale3 >= maxScale) {
                image2.style.display = 'none';
                nextImage2.style.display = 'block';
            }
        }
    });
})();