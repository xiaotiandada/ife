### MDN 定位

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/%E5%AE%9A%E4%BD%8D


### MDN 定位实战

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Practical_positioning_examples

### MDN Flexbox

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox

### 布局

> 这个基础需要恶补

> 圣杯布局

``` bash
# css
body {
    margin: 0;
    padding: 0;
}

.header,
.footer {
    background: red;
    padding: 20px 0;
}

.container {
    padding-left: 200px;
    padding-right: 200px;
    /* min-width: 600px; */
}

.content,
.left,
.right {
    height: 200px;
    float: left;
    position: relative;
}


.content {
    width: 100%;
    background: gold;
}

.left {
    width: 200px;
    height: 200px;
    background: #333;
    margin-left: -100%;
    right: 200px;
}

.right {
    width: 200px;
    height: 200px;
    background: #eee;
    margin-right: -200px;
}

.footer {
    clear: both;
}

* html .left {
    left: 200px;
}
# html
<div class="header">
    header
</div>

<div class="container">
    <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto cumque quibusdam quis qui sit quisquam iure repellat perferendis. Tempora accusantium dignissimos, magnam est placeat enim dicta dolores nam distinctio!</div>
    <div class="left"></div>
    <div class="right"></div>
</div>

<div class="footer">
    footer
</div>
```

> 双飞翼布局

``` bash
#css 

.left,
.main,
.right {
    float: left;
    min-height: 200px;
}
.left {
    background: gray;
    width: 200px;
    margin-left: -100%;
}
.main {
    background: rgb(252, 102, 102);
    width: 100%;
}
.right {
    background: #333;
    width: 200px;
    margin-left: -200px;
}
.content {
    margin: 0 200px;
    overflow: hidden;
}

#html 
<div class="container">

    <div class="main">
        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos labore, ad officiis animi libero ipsam dolorum explicabo placeat facere fuga ex suscipit porro nesciunt quod mollitia corrupti voluptatem a?</div>
    </div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
```

圣杯布局和双飞翼布局的作用和区别

> http://www.cnblogs.com/woodk/p/5147085.html

> http://www.cnblogs.com/imwtr/p/4441741.html


flex 布局

``` bash
#css
.container {
    -webkit-display:flex;
    display: flex;
    min-height: 200px;
}
.left {
    order: -1;
    background: red;
    flex-basis: 200px;
}
.main {
    background: forestgreen;
    flex-grow: 1;
}
.right{
    background: gold;
    flex-basis: 300px;
}
#html
<div class="container">

    <div class="main">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae, veritatis dignissimos laborum debitis id accusantium dolore inventore odit sed! Sunt officiis temporibus esse eum ab fuga ad sequi officia?</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>
```

> 绝对定位布局

```bash
# css 

.container {
    position: relative;
}

.main,
.right,
.left {
    top: 0;
    height: 130px;
}

.main {
    background: gray;
    margin: 0 300px 0 200px;
}

.right {
    position: absolute;
    width: 300px;
    right: 0;
    background: red;
}

.left {
    width: 200px;
    position: absolute;
    left: 0;
    background: green;
}

#html
<div class="container">
    <div class="main">man</div>
    <div class="left">left</div>
    <div class="right">right</div>
</div>

```