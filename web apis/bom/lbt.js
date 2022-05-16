window.addEventListener('load', function () {
    var arrow_l = this.document.querySelector('.arrow-l');
    var arrow_r = this.document.querySelector('.arrow-r');
    var focus = this.document.querySelector('.focus');
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //实际上就是右侧按钮
            arrow_r.click(); //手动调用事件
        }, 2000);
    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    //点击圆圈，移动图片 ;圆圈索引号乘以图片的宽度 是负值
    var focusWidth = focus.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);

        ol.appendChild(li); //不加单引号，li是变量
        //直接绑定事件 排他思想
        li.addEventListener('click', function () {
            //干掉所有人
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //留下自己
            this.className = 'current';

            //获取索引值
            var index = this.getAttribute('index');
            //点击某个小li ,索引值给num
            num = index;
            circle = index;
            console.log(focusWidth);
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    //克隆第一张放最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;

    //控制小圆圈的变量
    var circle = 0;
    //flag 节流阀 (连续点击造成播放过快，节流阀就像一个开关，让一张图片播放完再进行下一张)
    var flag = true;
    //右侧按钮
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            circle++;
            animate(ul, -num * focusWidth, function () {
                flag = true; //打开节流阀
            }); //移动到最后，无缝滚动
            if (circle == ol.children.length) {
                circle = 0;
            }
            //调用函数
            circleChange();
        }
    })
    //左侧按钮
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';  //加像素
            }
            num--;
            circle--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            }); //移动到最后，无缝滚动
            /*  if (circle < 0) {
                 circle = ol.children.length - 1;
             } */
            circle = circle < 0 ? ol.children.length - 1 : circle;
            //调用函数
            circleChange();
        }
    })

    function circleChange() {
        //干掉所有人
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        //留下自己
        ol.children[circle].className = 'current';
    }


    //定时器 自动播放
    var timer = setInterval(function () {
        //实际上就是右侧按钮
        arrow_r.click(); //手动调用事件
    }, 2000);
})