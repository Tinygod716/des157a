(function () {
    'use strict';

    function setupBackgroundMusic() {
        const music = document.querySelector('.backgroundMusic');
        const playmusic = document.querySelector('.toggleMusic');

        let isPlaying = false;

        window.addEventListener('load', function() {
            music.play().catch((error) => {
                console.warn('error', error);
            });
        });

        playmusic.addEventListener('click', function() {
            if (isPlaying) {
                music.pause();
            } else {
                music.play();
            }
            isPlaying = !isPlaying;
        })
    }


        //narrtive change
    function updateNarritiveContent(narritive, newText) {
        if (!narritive) return;

        narritive.style.visibility = 'visible';
        narritive.classList.remove('text-fade-in');
        narritive.classList.add('text-fade-out');

        
        narritive.addEventListener('animationend', function onFadeOut() {
            if (narritive.classList.contains('text-fade-out')) {
               
                const paragraph = narritive.querySelector('p');
                if (paragraph) {
                    paragraph.textContent = newText;
                }

               
                narritive.classList.remove('text-fade-out');
                narritive.classList.add('text-fade-in');

                
                narritive.removeEventListener('animationend', onFadeOut);
            }
        });
    }

    
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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    );

    addZoomEffect(
        document.querySelector('.street1'),
        document.querySelector('.overlay2'),
        narritive,
        maxScale,
        'are you real?areyou real? are you real?areyouuuuuuuureallllllll? are you real? ARE YOU REAL? are you real?'
    );

    addZoomEffect(
        document.querySelector('.street2'),
        document.querySelector('.overlay3'),
        narritive,
        maxScale,
        'do you think this dream has a meaning?'
    );

    addZoomEffect(
        document.querySelector('.street3'),
        document.querySelector('.overlay4'),
        narritive,
        maxScale,
        'ℹ Į⚉⋎ല ᵧ⚉ㄩ I love you'
    );

    addZoomEffect(
        document.querySelector('.street4'),
        document.querySelector('.overlay5'),
        narritive,
        maxScale,
        'new message 4'
    );

    addZoomEffect(
        document.querySelector('.street5'),
        document.querySelector('.overlay6'),
        narritive,
        maxScale,
        'new messsage 5'
    );

    addZoomEffect(
        document.querySelector('.street6'),
        document.querySelector('.overlay7'),
        narritive,
        maxScale,
        'new message 5'
    );
    addZoomEffect(
        document.querySelector('.street7'),
        document.querySelector('.overlay8'),
        narritive,
        maxScale,
        'new message 6'
    );

    setupBackgroundMusic();
})();
