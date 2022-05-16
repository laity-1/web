function animate(object, target, callback) {
    // callback=function(){}  调用的时候 callback();
    //当我们不断点击按钮时，这个元素的速度会越来越快，因为开启了太多的定时器
    //解决方案是 让我们元素只有一个定时器
    clearInterval(object.timer);
    object.timer = setInterval(function () {
        //步长值写到定时器里面
        //步长值改为整数，不要出现小数的问题
        // var step = Math.ceil((target - object.offsetLeft) / 10);
        var step = (target - object.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (object.offsetLeft == target) {
            clearInterval(object.timer);
            //回调函数写到定时器里面
            /*  if (callback) {
                 callback();
             } */
            callback && callback(); //短路运算 与

        } else {
            //把每次加的值改成慢慢变小的值：(目标值-现在的位置)/10
            object.style.left = object.offsetLeft + step + 'px';  //offsetLeft用于获取，style赋值
        }

    }, 15)
}