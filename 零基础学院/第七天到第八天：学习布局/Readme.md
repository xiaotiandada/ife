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