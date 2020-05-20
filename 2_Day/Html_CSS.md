HTML 是用来描述网页的一种标记语言,标记语言是一套标记标签 (markup tag)
通过一对对的标签来表示展示页面的内容

CSS 指层叠样式表 (Cascading Style Sheets),样式定义如何显示 HTML 元素

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明

其中每条声明由属性和值构成，属性和值之间由冒号隔开，每条声明之间由分号隔开
```
selector {declaration1; declaration2; ... declarationN }
```
选择器通常是需要改变样式的 HTML 元素
```
h1 {color:red;font-size:14px}
```

id选择器和类选择器都可以为指定的标签元素指定样式，但是id选择器在同一份html中只能使用一次，因此指定样式时可以优先使用类选择器

<img alt="CSS边框模型a" src="https://www.w3school.com.cn/i/ct_boxmodel.gif" height="400"/>

每个元素都有自己的边框，外边框margin就是border之外的距离，margin的4个值分别为上，右，下，左；其中上下和左右分别是两组复制值。