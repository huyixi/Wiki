---
created: 2023-12-27T15:27:56 (UTC +08:00)
tags: []
source: https://www.oschina.net/question/12_44255?sort=default&p=4
author: 红薯                    
                        最近登录：11/24 12:33
---

# 为您详细比较三个 CSS 预处理器（框架）：Sass、LESS 和 Stylus - OSCHINA - 中文开源技术交流社区

> ## Excerpt
> CSS 预处理器技术已经非常的成熟，而且也涌现出了越来越多的 CSS 的预处理器框架。本文向你介绍使用最为普遍的三款 CSS 预处理器框架，分别是 Sass、Less CSS、Stylus。 首先我们来简单介绍下什么是 CSS 预处理器...

---
CSS 预处理器技术已经非常的成熟，而且也涌现出了越来越多的 CSS 的预处理器框架。本文向你介绍使用最为普遍的三款 CSS 预处理器框架，分别是 Sass、Less CSS、Stylus。

首先我们来简单介绍下什么是 CSS 预处理器，CSS 预处理器是一种语言用来为 CSS 增加一些编程的的特性，无需考虑浏览器的兼容性问题，例如你可以在 CSS 中使用变量、简单的程序逻辑、函数等等在编程语言中的一些基本技巧，可以让你的 CSS 更见简洁，适应性更强，代码更直观等诸多好处。

不要再停留在石器时代了，下面让我们开始 CSS 预处理器之旅。

我们将会从语法、变量、嵌套、混入 (Mixin)、继承、导入、函数和操作符等方面分别对这三个框架进行比较介绍。

语法

在使用 CSS 预处理器之前最重要的是理解语法，幸运的是基本上大多数预处理器的语法跟 CSS 都差不多。

首先 Sass 和 Less 都使用的是标准的 CSS 语法，因此如果你可以很方便的将已有的 CSS 代码转为预处理器代码，默认 Sass 使用 .sass 扩展名，而 Less 使用 .less 扩展名。

下面是这二者的语法：

```
<span>h1</span> {
  <span>color</span>: <span>#0982C1</span>;
}
```

你注意到了，这是一个再普通不过的，不过 Sass 同时也支持老的语法，就是不包含花括号和分号的方式：

```
<span>h1</span>
  <span>color</span>: <span>#0982c1</span>
```

而 Stylus 支持的语法要更多样性一点，它默认使用 .styl 的文件扩展名，下面是 Stylus 支持的语法：

```
<span>h1</span> {
  <span>color</span>: <span>#0982C1</span>;
}
 

<span>h1</span>
  <span>color</span>: <span>#0982C1</span>;
 

<span>h1</span>
  <span>color</span> <span>#0982C1</span>
```

你也可以在同一个样式单中使用不同的变量，例如下面的写法也不会报错：

```
<span>h1</span> <span>{</span>
  <span>color</span> 
<span>}</span>
<span>h2</span>
  <span>font-size:</span> <span>1.</span><span>2em</span>
```

变量

你可以在 CSS 预处理器中声明变量，并在整个样式单中使用，支持任何类型的变量，例如颜色、数值（不管是否包括单位）、文本。然后你可以任意引用该变量。

Sass 的变量必须是 $ 开始，然后变量名和值使用冒号隔开，跟 CSS 的属性一致：

```
<span>$mainColor</span>: <span>#0982c1</span>;
<span>$siteWidth</span>: <span>1024px</span>;
<span>$borderStyle</span>: dotted;
 
<span>body</span> {
  <span>color</span>: <span>$mainColor</span>;
  <span>border</span>: <span>1px</span> <span>$borderStyle</span> <span>$mainColor</span>;
  <span>max-width</span>: <span>$siteWidth</span>;
}
```

而 Less 的变量名使用 @ 符号开始：

```
<span>@mainColor:</span> <span>#0982c1</span>;
<span>@siteWidth:</span> <span>1024px</span>;
<span>@borderStyle:</span> dotted;
 
<span>body</span> {
  <span>color</span>: <span>@mainColor</span>;
  <span>border</span>: <span>1px</span> <span>@borderStyle</span> <span>@mainColor</span>;
  <span>max-width</span>: <span>@siteWidth</span>;
}
```

Stylus 对变量名没有任何限定，你可以是 $ 开始，也可以是任意的字符，而且与变量值之间可以用冒号、空格隔开，需要注意的是 Stylus (0.22.4) 将会编译 @ 开始的变量，但其对应的值并不会赋予该变量，换句话说，在 Stylus 的变量名不要用 @ 开头。

```
mainColor = 
siteWidth = 1024px
$borderStyle = dotted
 
body
  color mainColor
  border 1px $borderStyle mainColor
  max-width siteWidth
```

上面的三种不同的 CSS 预处理器的写法，最终都将产生相同的结果：

```
<span>body</span> {
  <span>color</span>: <span>#0982c1</span>;
  <span>border</span>: <span>1px</span> dotted <span>#0982c1</span>;
  <span>max-width</span>: <span>1024px</span>;
}
```

你可以想象，加入你的 CSS 中使用了某个颜色的地方多达数十次，那么要修改颜色时你必须找到这数十次的地方并一一修改，而有了 CSS 预处理器，修改一个地方就够了！

嵌套

如果我们需要在 CSS 中相同的 parent 引用多个元素，这将是非常乏味的，你需要一遍又一遍地写 parent。例如：

```
<span>section</span> {
  <span>margin</span>: <span>10px</span>;
}
<span>section</span> <span>nav</span> {
  <span>height</span>: <span>25px</span>;
}
<span>section</span> <span>nav</span> <span>a</span> {
  <span>color</span>: <span>#0982C1</span>;
}
<span>section</span> <span>nav</span> <span>a</span><span>:hover</span> {
  <span>text-decoration</span>: underline;
}
```

而如果用 CSS 预处理器，就可以少些很多单词，而且父子节点关系一目了然。我们这里提到的三个 CSS 框架都是允许嵌套语法：

```
<span>section</span> {
  <span>margin</span>: <span>10px</span>;
 
  <span>nav</span> {
    <span>height</span>: <span>25px</span>;
 
    <span>a</span> {
      <span>color</span>: <span>#0982C1</span>;
 
      &amp;amp;:hover {
        <span>text-decoration</span>: underline;
      }
    }
  }
}
```

最终生成的 CSS 结果是：

```
<span>section</span> {
  <span>margin</span>: <span>10px</span>;
}
<span>section</span> <span>nav</span> {
  <span>height</span>: <span>25px</span>;
}
<span>section</span> <span>nav</span> <span>a</span> {
  <span>color</span>: <span>#0982C1</span>;
}
<span>section</span> <span>nav</span> <span>a</span><span>:hover</span> {
  <span>text-decoration</span>: underline;
}
```

非常之方便！

Mixins (混入)

Mixins 有点像是函数或者是宏，当你某段 CSS 经常需要在多个元素中使用时，你可以为这些共用的 CSS 定义一个 Mixin，然后你只需要在需要引用这些 CSS 地方调用该 Mixin 即可。

Sass 的混入语法：

```
@<span>mixin</span> error(<span>$borderWidth</span>: 2px) {
  <span>border</span>: <span>$borderWidth</span> solid <span>#F00</span>;
  <span>color</span>: <span>#F00</span>;
}
 
<span>.generic-error</span> {
  <span>padding</span>: <span>20px</span>;
  <span>margin</span>: <span>4px</span>;
  @ include error(); 
}
<span>.login-error</span> {
  <span>left</span>: <span>12px</span>;
  <span>position</span>: absolute;
  <span>top</span>: <span>20px</span>;
  @ include error(<span>5px</span>); 
}
```

Less CSS 的混入语法：

```
<span>.error</span>(<span>@borderWidth</span>: <span>2px</span>) {
  <span>border</span>: <span>@borderWidth</span> solid <span>#F00</span>;
  <span>color</span>: <span>#F00</span>;
}
 
<span>.generic-error</span> {
  <span>padding</span>: <span>20px</span>;
  <span>margin</span>: <span>4px</span>;
  <span>.error</span>(); 
}
<span>.login-error</span> {
  <span>left</span>: <span>12px</span>;
  <span>position</span>: absolute;
  <span>top</span>: <span>20px</span>;
  <span>.error</span>(<span>5px</span>); 
}
```

Stylus 的混入语法：

```
<span>error</span>(borderWidth= <span>2px</span>) {
  <span>border</span>: borderWidth solid <span>#F00</span>;
  <span>color</span>: <span>#F00</span>;
}
 
<span>.generic-error</span> {
  <span>padding</span>: <span>20px</span>;
  <span>margin</span>: <span>4px</span>;
  <span>error</span>(); 
}
<span>.login-error</span> {
  <span>left</span>: <span>12px</span>;
  <span>position</span>: absolute;
  <span>top</span>: <span>20px</span>;
  <span>error</span>(<span>5px</span>); 
}
```

最终它们都将编译成如下的 CSS 样式：

```
<span>.generic-error</span> {
  <span>padding</span>: <span>20px</span>;
  <span>margin</span>: <span>4px</span>;
  <span>border</span>: <span>2px</span> solid <span>#f00</span>;
  <span>color</span>: <span>#f00</span>;
}
<span>.login-error</span> {
  <span>left</span>: <span>12px</span>;
  <span>position</span>: absolute;
  <span>top</span>: <span>20px</span>;
  <span>border</span>: <span>5px</span> solid <span>#f00</span>;
  <span>color</span>: <span>#f00</span>;
}
```

继承

当我们需要为多个元素定义相同样式的时候，我们可以考虑使用继承的做法。例如我们经常需要：

```
<span>p</span>,
<span>ul</span>,
<span>ol</span> {
  
}
```

在 Sass 和 Stylus 我们可以这样写：

```
<span>.block</span> {
  <span>margin</span>: <span>10px</span> <span>5px</span>;
  <span>padding</span>: <span>2px</span>;
}
 
<span>p</span> {
  @<span>extend</span> .block; 
  <span>border</span>: <span>1px</span> solid <span>#EEE</span>;
}
<span>ul</span>, <span>ol</span> {
  @<span>extend</span> .block; 
  <span>color</span>: <span>#333</span>;
  <span>text-transform</span>: uppercase;
}
```

在这里首先定义 .block 块，然后让 p 、ul 和 ol 元素继承 .block ，最终生成的 CSS 如下：

```
<span>.block</span>, <span>p</span>, <span>ul</span>, <span>ol</span> {
  <span>margin</span>: <span>10px</span> <span>5px</span>;
  <span>padding</span>: <span>2px</span>;
}
<span>p</span> {
  <span>border</span>: <span>1px</span> solid <span>#EEE</span>;
}
<span>ul</span>, <span>ol</span> {
  <span>color</span>: <span>#333</span>;
  <span>text-transform</span>: uppercase;
}
```

在这方面 Less 表现的稍微弱一些，更像是混入写法：

```
<span>.block</span> {
  <span>margin</span>: <span>10px</span> <span>5px</span>;
  <span>padding</span>: <span>2px</span>;
}
 
<span>p</span> {
  <span>.block</span>; 
  <span>border</span>: <span>1px</span> solid <span>#EEE</span>;
}
<span>ul</span>, <span>ol</span> {
  <span>.block</span>; 
  <span>color</span>: <span>#333</span>;
  <span>text-transform</span>: uppercase;
}
```

生成的 CSS 如下：

```
<span>.block</span> {
  <span>margin</span>: <span>10px</span> <span>5px</span>;
  <span>padding</span>: <span>2px</span>;
}
<span>p</span> {
  <span>margin</span>: <span>10px</span> <span>5px</span>;
  <span>padding</span>: <span>2px</span>;
  <span>border</span>: <span>1px</span> solid <span>#EEE</span>;
}
<span>ul</span>,
<span>ol</span> {
  <span>margin</span>: <span>10px</span> <span>5px</span>;
  <span>padding</span>: <span>2px</span>;
  <span>color</span>: <span>#333</span>;
  <span>text-transform</span>: uppercase;
}
```

你所看到的上面的代码中，.block 的样式将会被插入到相应的你想要继承的选择器中，但需要注意的是优先级的问题。

导入 (Import)

很多 CSS 开发者对导入的做法都不太感冒，因为它需要多次的 HTTP 请求。但是在 CSS 预处理器中的导入操作则不同，它只是在语义上包含了不同的文件，但最终结果是一个单一的 CSS 文件，如果你是通过 `@ import "file.css";` 导入 CSS 文件，那效果跟普通的 CSS 导入一样。注意：导入文件中定义的混入、变量等信息也将会被引入到主样式文件中，因此需要避免它们互相冲突。

reset.css:

```
<span>body</span> {
  <span>background</span>: <span>#EEE</span>;
}
```

main.xxx:

```
@ import <span>"reset.css"</span>;
@ import <span>"file.{type}"</span>;
 
<span>p</span> {
  <span>background</span>: <span>#0982C1</span>;
}
```

最终生成的 CSS：

```
@ import <span>"reset.css"</span>;
<span>body</span> {
  <span>background</span>: <span>#EEE</span>;
}
<span>p</span> {
  <span>background</span>: <span>#0982C1</span>;
}
```

颜色函数

CSS 预处理器一般都会内置一些颜色处理函数用来对颜色值进行处理，例如加亮、变暗、颜色梯度等。

Sass：

```
lighten(<span>$color</span>, 10%); 
darken(<span>$color</span>, 10%);  
 
saturate(<span>$color</span>, 10%);   
desaturate(<span>$color</span>, 10%); 
 
grayscale(<span>$color</span>);  
complement(<span>$color</span>); 
invert(<span>$color</span>);     
 
mix(<span>$color1</span>, <span>$color2</span>, 50%); 
```

上面只是简单列了 Sass 的一些基本颜色处理函数，完整的列表请看 [Sass Documentation](https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Fsass-lang.com%2Fdocs%2Fyardoc%2FSass%2FScript%2FFunctions.html).

下面是一个具体的例子：

```
<span>$color</span>: <span>#0982C1</span>;
 
<span>h1</span> {
  <span>background</span>: <span>$color</span>;
  <span>border</span>: <span>3px</span> solid darken(<span>$color</span>, <span>50%</span>);
}
```

Less CSS:

```
<span>lighten</span>(<span>@color</span>, <span>10%</span>); 
<span>darken</span>(<span>@color</span>, <span>10%</span>);  
 
<span>saturate</span>(<span>@color</span>, <span>10%</span>);   
<span>desaturate</span>(<span>@color</span>, <span>10%</span>); 
 
<span>spin</span>(<span>@color</span>, <span>10</span>);  
<span>spin</span>(<span>@color</span>, -<span>10</span>); 
 
<span>mix</span>(<span>@color1</span>, <span>@color2</span>); 
```

LESS 完整的颜色函数列表请看 [LESS Documentation](https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Flesscss.org%2F%23-color-functions).

LESS 使用颜色函数的例子：

```
<span>@color:</span> <span>#0982C1</span>;
 
<span>h1</span> {
  <span>background</span>: <span>@color</span>;
  <span>border</span>: <span>3px</span> solid darken(<span>@color</span>, <span>50%</span>);
}
```

Stylus:

```
<span>lighten</span>(color, <span>10%</span>); 
<span>darken</span>(color, <span>10%</span>);  
 
<span>saturate</span>(color, <span>10%</span>);   
<span>desaturate</span>(color, <span>10%</span>); 
```

完整的颜色函数列表请阅读 [Stylus Documentation](https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Flearnboost.github.com%2Fstylus%2Fdocs%2Fbifs.html).

实例：

```
<span>color</span> = <span>#0982C1</span>
 
<span>h1</span>
  <span>background</span> <span>color</span>
  <span>border</span> <span>3px solid darken(color, 50%)</span>
```

运算符

你可以直接在 CSS 预处理器中进行样式的计算，例如：

```
<span>body</span> {
  <span>margin</span>: (<span>14px</span>/<span>2</span>);
  <span>top</span>: <span>50px</span> + <span>100px</span>;
  <span>right</span>: <span>100px</span> - <span>50px</span>;
  <span>left</span>: <span>10</span> * <span>10</span>;
}
```

一些跟具体浏览器相关的处理

这是宣传使用预处理的原因之一，并且是一个很好的理由，这样可以节省的大量的时间和汗水。创建一个 mixin 来处理不同浏览器的 CSS 写法是很简单的，节省了大量的重复工作和痛苦的代码编辑。

Sass

```
@<span>mixin</span> border-radius(<span>$values</span>) {
  -webkit-<span>border-radius</span>: <span>$values</span>;
     -moz-<span>border-radius</span>: <span>$values</span>;
          <span>border-radius</span>: <span>$values</span>;
}
 
<span>div</span> {
  @ include border-radius(<span>10px</span>);
}
```

Less CSS

```
<span>.border-radius</span>(<span>@values</span>) {
  <span>-webkit-border-radius</span>: <span>@values</span>;
     <span>-moz-border-radius</span>: <span>@values</span>;
          <span>border-radius</span>: <span>@values</span>;
}
 
<span>div</span> {
  <span>.border-radius</span>(<span>10px</span>);
}
```

Stylus

```
<span>border-radius</span>(values) {
  -webkit-<span>border-radius</span>: values;
     -moz-<span>border-radius</span>: values;
          <span>border-radius</span>: values;
}
 
<span>div</span> {
  <span>border-radius</span>(10px);
}
```

编译结果：

```
<span>div</span> {
  <span>-webkit-border-radius</span>: <span>10px</span>;
     <span>-moz-border-radius</span>: <span>10px</span>;
          <span>border-radius</span>: <span>10px</span>;
}
```

3D 文本

要生成具有 3D 效果的文本可以使用 `text-shadows` ，唯一的问题就是当要修改颜色的时候就非常的麻烦，而通过 mixin 和颜色函数可以很轻松的实现：

Sass

```
@<span>mixin</span> text3d(<span>$color</span>) {
  <span>color</span>: <span>$color</span>;
  <span>text-shadow</span>: <span>1px</span> <span>1px</span> <span>0px</span> darken(<span>$color</span>, <span>5%</span>),
               <span>2px</span> <span>2px</span> <span>0px</span> darken(<span>$color</span>, <span>10%</span>),
               <span>3px</span> <span>3px</span> <span>0px</span> darken(<span>$color</span>, <span>15%</span>),
               <span>4px</span> <span>4px</span> <span>0px</span> darken(<span>$color</span>, <span>20%</span>),
               <span>4px</span> <span>4px</span> <span>2px</span> <span>#000</span>;
}
 
<span>h1</span> {
  <span>font-size</span>: <span>32pt</span>;
  @ include text3d(<span>#0982c1</span>);
}
```

Less CSS

```
<span>.text3d</span>(<span>@color</span>) {
  <span>color</span>: <span>@color</span>;
  <span>text-shadow</span>: <span>1px</span> <span>1px</span> <span>0px</span> darken(<span>@color</span>, <span>5%</span>),
               <span>2px</span> <span>2px</span> <span>0px</span> darken(<span>@color</span>, <span>10%</span>),
               <span>3px</span> <span>3px</span> <span>0px</span> darken(<span>@color</span>, <span>15%</span>),
               <span>4px</span> <span>4px</span> <span>0px</span> darken(<span>@color</span>, <span>20%</span>),
               <span>4px</span> <span>4px</span> <span>2px</span> <span>#000</span>;
}
 
<span>span</span> {
  <span>font-size</span>: <span>32pt</span>;
  <span>.text3d</span>(<span>#0982c1</span>);
}
```

Stylus

```
<span>text3d</span>(color)
  <span>color</span>: <span>color</span>
  <span>text-shadow</span>: <span>1px</span> <span>1px</span> <span>0px</span> <span>darken</span>(color, <span>5%</span>), <span>2px</span> <span>2px</span> <span>0px</span> <span>darken</span>(color, <span>10%</span>), <span>3px</span> <span>3px</span> <span>0px</span> <span>darken</span>(color, <span>15%</span>), <span>4px</span> <span>4px</span> <span>0px</span> <span>darken</span>(color, <span>20%</span>), <span>4px</span> <span>4px</span> <span>2px</span> <span>#000</span>
<span>span</span>
  <span>font-size</span>: <span>32pt</span>
  <span>text3d</span>(<span>#0982c1</span>)
```

生成的 CSS

```
<span>span</span> {
  <span>font-size</span>: <span>32pt</span>;
  <span>color</span>: <span>#0982c1</span>;
  <span>text-shadow</span>: <span>1px</span> <span>1px</span> <span>0px</span> <span>#097bb7</span>,
               <span>2px</span> <span>2px</span> <span>0px</span> <span>#0875ae</span>,
               <span>3px</span> <span>3px</span> <span>0px</span> <span>#086fa4</span>,
               <span>4px</span> <span>4px</span> <span>0px</span> <span>#07689a</span>,
               <span>4px</span> <span>4px</span> <span>2px</span> <span>#000</span>;
}
```

效果图：

![](http://static.oschina.net/uploads/img/201203/13222932_fIcm.png)

列 (Columns)

使用数值操作和变量可以很方便的实现适应屏幕大小的布局处理。

Sass

```
<span>$siteWidth</span>: <span>1024px</span>;
<span>$gutterWidth</span>: <span>20px</span>;
<span>$sidebarWidth</span>: <span>300px</span>;
 
<span>body</span> {
  <span>margin</span>: <span>0</span> auto;
  <span>width</span>: <span>$siteWidth</span>;
}
<span>.content</span> {
  <span>float</span>: left;
  <span>width</span>: <span>$siteWidth</span> - (<span>$sidebarWidth</span>+<span>$gutterWidth</span>);
}
<span>.sidebar</span> {
  <span>float</span>: left;
  <span>margin-left</span>: <span>$gutterWidth</span>;
  <span>width</span>: <span>$sidebarWidth</span>;
}
```

Less CSS

```
<span>@siteWidth:</span> <span>1024px</span>;
<span>@gutterWidth:</span> <span>20px</span>;
<span>@sidebarWidth:</span> <span>300px</span>;
 
<span>body</span> {
  <span>margin</span>: <span>0</span> auto;
  <span>width</span>: <span>@siteWidth</span>;
}
<span>.content</span> {
  <span>float</span>: left;
  <span>width</span>: <span>@siteWidth</span> - (<span>@sidebarWidth</span>+<span>@gutterWidth</span>);
}
<span>.sidebar</span> {
  <span>float</span>: left;
  <span>margin-left</span>: <span>@gutterWidth</span>;
  <span>width</span>: <span>@sidebarWidth</span>;
}
```

Stylus

```
<span>siteWidth</span> = <span>1024px;</span>
<span>gutterWidth</span> = <span>20px;</span>
<span>sidebarWidth</span> = <span>300px;</span>
 
<span>body</span> <span>{</span>
  <span>margin</span>: <span>0 auto;</span>
  <span>width</span>: <span>siteWidth;</span>
<span>}</span>
<span>.content</span> <span>{</span>
  <span>float</span>: <span>left;</span>
  <span>width</span>: <span>siteWidth - (sidebarWidth+gutterWidth);</span>
<span>}</span>
<span>.sidebar</span> <span>{</span>
  <span>float</span>: <span>left;</span>
  <span>margin-left</span>: <span>gutterWidth;</span>
  <span>width</span>: <span>sidebarWidth;</span>
<span>}</span>
```

实际效果

```
<span>body</span> {
  <span>margin</span>: <span>0</span> auto;
  <span>width</span>: <span>1024px</span>;
}
<span>.content</span> {
  <span>float</span>: left;
  <span>width</span>: <span>704px</span>;
}
<span>.sidebar</span> {
  <span>float</span>: left;
  <span>margin-left</span>: <span>20px</span>;
  <span>width</span>: <span>300px</span>;
}
```

错误报告

如果你经常 CSS 你会发现很难找到 CSS 中错误的地方，这也是预处理框架的好处，它会报告错误，你可以从这篇[文章](https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Ftjholowaychuk.com%2Fpost%2F5002088731%2Fstylus-vs-sass-vs-less-error-reporting)中学习如何让 CSS 框架错误报告。

注释

以上三种框架都支持形如 /\* \*/ 的多行注释以及 // 的单行注释。

[英文原文](https://www.oschina.net/action/GoToLink?url=http%3A%2F%2Fnet.tutsplus.com%2Ftutorials%2Fhtml-css-techniques%2Fsass-vs-less-vs-stylus-a-preprocessor-shootout%2F)，OSCHINA 原创翻译
