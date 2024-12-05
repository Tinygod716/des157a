(function () {
    'use strict';

    function setupBackgroundMusic() {
        const music = document.getElementById('backgroundMusic');
        const toggleButton = document.getElementById('toggleMusic');

        let isPlaying = false;

        toggleButton.addEventListener('click', function() {
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

        // 动画结束后更新内容并触发渐显动画
        narritive.addEventListener('animationend', function onFadeOut() {
            if (narritive.classList.contains('text-fade-out')) {
                // 更新内容
                const paragraph = narritive.querySelector('p');
                if (paragraph) {
                    paragraph.textContent = newText;
                }

                // 移除渐隐类名，添加渐显类名
                narritive.classList.remove('text-fade-out');
                narritive.classList.add('text-fade-in');

                // 移除事件监听器，避免重复触发
                narritive.removeEventListener('animationend', onFadeOut);
            }
        });
    }

    // 添加缩放效果
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
                // 隐藏当前图片
                if (welcome) welcome.style.display = 'none';
                zoomImage.style.opacity = '0';
                zoomImage.style.visibility = 'hidden';

                // 显示下一张图片
                nextImage.classList.add('visible');

                // 更新 Narritive 内容
                updateNarritiveContent(narritive, newText);
            }
        });
    }

    const maxScale = 4;
    const narritive = document.querySelector('.tellstory');

    // 调用 addZoomEffect，为每张图片绑定事件
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
        '新的内容显示了'
    );

    addZoomEffect(
        document.querySelector('.street2'),
        document.querySelector('.overlay3'),
        narritive,
        maxScale,
        '更多的内容加载'
    );

    addZoomEffect(
        document.querySelector('.street3'),
        document.querySelector('.overlay4'),
        narritive,
        maxScale,
        '更多的内容加载'
    );

    addZoomEffect(
        document.querySelector('.street4'),
        document.querySelector('.overlay5'),
        narritive,
        maxScale,
        '更多的内容加载'
    );

    addZoomEffect(
        document.querySelector('.street5'),
        document.querySelector('.overlay6'),
        narritive,
        maxScale,
        '更多的内容加载'
    );

    addZoomEffect(
        document.querySelector('.street6'),
        document.querySelector('.overlay7'),
        narritive,
        maxScale,
        '更多的内容加载'
    );
    addZoomEffect(
        document.querySelector('.street7'),
        document.querySelector('.overlay8'),
        narritive,
        maxScale,
        '更多的内容加载'
    );
})();
