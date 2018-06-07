### ife 百度前端技术学院

### No1

[地址](http://ife.baidu.com/course/all)

---

``` bash
# html
<div class="main">
  <a class="toogle-text" href="">前端学院</a>
  <br>
  <a class="toogle-click" href="javascript:;">切换样式</a>
</div>

# css

.main{
    width: 200px;
    height: 200px;
    margin: 200px auto 0;
    text-align: center;
}

.toogle-text,
.toogle-click{
    height: 30px;
    line-height: 30px;
    display: inline-block;
    margin: 0 auto;
    text-decoration: none;
    color: #000;    
}
.toogle-text::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #333;
    margin-left: 50%;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
    
}
.toogle-click{
    border-radius: 16px;
    border: 1px solid #9a9a9a;
    margin-top: 60px;
    padding: 0px 20px;
    box-shadow: 0 2px 2px 0px #e6e6e6;
}

.toogle-line{
    color: rgb(0, 183, 255);
}
.toogle-line::after{
    width: 100%;
    margin-left: 0;
    background-color: rgb(0, 183, 255);
}
/* .toogle-text:hover::after{
    width: 100%;
    margin-left: 0;
} */

# js

$(function(){
    $('.toogle-click').on('click', function(){
        $('.toogle-text').toggleClass('toogle-line')
    })
})
```

[仓库地址](https://github.com/xiaotiandada/ife)

### No2

[地址](http://ife.baidu.com/course/all)

---

``` bash
# html
<div class="box0">
  box
</div>
......
# css
.box0,
.box1,
.box2,
.box3,
.box4,
.box5{
    width: 60px;
    height: 68px;
    background-color: #f7f6f6;
    border: solid 2px #ebebeb;
    text-align: center;
    line-height: 68px;
    float: left;
    margin: 20px;
}

.box1{
    transform: skew(10deg, 20deg);
    -ms-transform: skew(10deg, 20deg);
    -webkit-transform: skew(10deg, 20deg);
    -o-transform: skew(10deg, 20deg);
    -moz-transform: skew(10deg, 20deg);
}

.box2{
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
}

.box3{
    transform: scale(0.5,1);
    -ms-transform: scale(0.5,1);
    -webkit-transform: scale(0.5,1);
    -o-transform: scale(0.5,1);
    -moz-transform: scale(0.5,1);
}

.box4{
    transform: skewX(30deg);
    -ms-transform: skewX(30deg);
    -webkit-transform: skewX(30deg);
    -o-transform: skewX(30deg);
    -moz-transform: skewX(30deg);
}

.box4{
    transform: translate(50px, 100px);
    -ms-transform: translate(50px, 100px);
    -webkit-transform: translate(50px, 100px);
    -o-transform: translate(50px, 100px);
    -moz-transform: translate(50px, 100px);
}
# js
```

[仓库地址](https://github.com/xiaotiandada/ife)


### No3

[地址](http://ife.baidu.com/course/all)

---
[预览地址](https://xiaotiandada.github.io/ife/%E8%AE%BE%E8%AE%A1%E5%B8%88%E5%AD%A6%E9%99%A2/No.3/index.html)

[资料](http://ife.baidu.com/note/detail/id/418#)


### No4

[地址](http://ife.baidu.com/course/all)

---