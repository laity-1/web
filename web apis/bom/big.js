window.addEventListener('load', function () {
    var div = document.querySelector('.div');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    div.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    //鼠标离开
    div.addEventListener('mouseout', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })

    div.addEventListener('mouseover', function (e) {
        //计算盒子内的鼠标坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // maskMax遮挡层的最大移动距离
        var maskMax = div.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
            //div.offsetHeight - mask.offsetHeight 都是正方形 宽高一样
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        //大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层的最大移动距离
        // 未知位置=maskX* bigMax /maskMax
        var bigImg = document.querySelector('.pic')
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大图片移动距离
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })

})