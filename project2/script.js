(function () {
    'use strict';
    
    function addZoomEffect(zoomImage, nextImage, narritive, maxScale, newText) {
        if (!zoomImage || !nextImage || !narritive) return;

        let scale = 1;
        const welcome = document.querySelector('.text-container');

        zoomImage.addEventListener('wheel', (event) => {
            event.preventDefault();

            scale += event.deltaY * 0.001;
            scale = Math.min(Math.max(scale, 1), maxScale);

            zoomImage.style.transform = `scale(${scale})`;

            if (scale >= maxScale) {
               
                if (welcome) welcome.style.display = 'none';
                zoomImage.style.opacity = '0';
                zoomImage.style.visibility = 'hidden';

               
                nextImage.classList.add('visible');

              
                updateNarritiveContent(narritive, newText);
            }
        });
    }

    const maxScale = 4;
    const narritive = document.querySelector('.tellstory');

    
    addZoomEffect(
        document.querySelector('.Snowman1'),
        document.querySelector('.overlay1'),
        narritive,
        maxScale,
    );

    addZoomEffect(
        document.querySelector('.street1'),
        document.querySelector('.overlay2'),
        narritive,
        maxScale,
    );

    addZoomEffect(
        document.querySelector('.street2'),
        document.querySelector('.overlay3'),
        narritive,
        maxScale,
    );

    addZoomEffect(
        document.querySelector('.street3'),
        document.querySelector('.overlay4'),
        narritive,
        maxScale,
    );

    addZoomEffect(
        document.querySelector('.street4'),
        document.querySelector('.overlay5'),
        narritive,
        maxScale,
    );

    addZoomEffect(
        document.querySelector('.street5'),
        document.querySelector('.overlay6'),
        narritive,
        maxScale,
    );

    addZoomEffect(
        document.querySelector('.street6'),
        document.querySelector('.overlay7'),
        narritive,
        maxScale,
    );
    addZoomEffect(
        document.querySelector('.street7'),
        document.querySelector('.overlay8'),
        narritive,
        maxScale,
    );

    setupBackgroundMusic();
})();
