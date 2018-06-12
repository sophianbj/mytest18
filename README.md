一、jQuery入口函数及选择器

1、jQuery入口函数 

  	1）$(document).ready(function(){//jQuery代码})；确保在文档完全加载完之后执行内部代码
     	简写形式：$(function(){});
  	2）JavaScript的入口函数：window.onload = function(){ //执行代码}
  	3）二者的区别
  		JavaScript的入口函数必须要等到所有内容，包括外部图片之类的文件加载完之后，才会去执行。而jQuery是等到所有标签加载完成就会执行。另外，JS的入口函数window.onload函数存在覆盖问题，当文档中出现2个window.onload函数时，后者会覆盖前者。但是JQuery没有这样的问题，主要是因为JQuery入口函数只是对封装好了的方法的一个调用，只不过传的参数不同而已。

2、 jQuery的选择器 —— 基于已经存在的CSS选择器，添加了自定义的选择器。（基本选择器、层次选择器、伪类选择器、伪元素、属性选择器）
	
		1）基本选择器：
			通配符选择器$("*"):选择页面中的所有元素;
			元素/标签选择器 「Element」 ：$("p")选择页面中所有的<p>元素，$("h1")选择页面中所有的<h1>元素······
			ID选择器 「#id」: $("#idName")选择页面中id="idName"的元素
			类选择器 「.class」：$(".className")选择页面中class="className"的所有元素
			群组选择器 「selector1，...，selectorN」 $("h1","#idName",".className")选择页面中的所有<h1>元素、id="idName"的元素，以及class="className"的所有元素
		2）层次选择器
			后代选择器「E F」：$("ul li")选择页面中<ul>元素下面的所有<li>元素
			子选择器「E > F」：$("ul>li")选择页面中<ul>元素下面的子元素中的所有<li>元素
			相邻兄弟元素选择器「E + F」:E和F是同辈元素，具有相同的父元素，并且F元素紧邻在E元素的后面，此时可以使用相邻兄弟选择器。$("p+em")选择页面中所有的<p>元素中后面紧挨着的<em>元素
			通用兄弟选择器「E ~ F」：E和F是同辈元素，具有相同的父元素，并且F元素在E元素之后，E ~ F将选中E元素后面的所有F元素。$("p~em")选择页面中<p>元素后面所有的<em>元素
		3）伪类选择器
			目标伪类选择器「E:target」：
			语言伪类选择器「E:lang(language)」：
			状态伪类选择器「E:checked,E:enabled,E:disabled」：
			结构伪类选择器「E:first-child, E:last-child, E:root, E:nth-child(n), E:nth-last-child(n), E:nth-of-type(n), E:nth-last-of-type(n), E:first-of-type, E:last-of-type, E:only-child, E:only-of-type, E:empty」
				[E:first-child] ：用来选取有孩子的第一个子元素，并且类型是E。$("ul li:first-child")	选取每个 <ul> 元素的第一个 <li> 元素。
					另外一种写法--$("ul li:first")选取第一个 <ul> 元素的第一个 <li> 元素。
				[E:last-child] ：用来选取特定元素的最后一个子元素。$("ul li:last-child")	选取每个 <ul> 元素的最后一个 <li> 元素。
					另外一种写法--$("ul li:last")选取第一个 <ul> 元素的最后一个 <li> 元素。
				[E:nth-child()] ：用来选取某个父元素的一个或多个特定的子元素，其中的n可以是数值(从1开始)，也可以是包含n的表达式，也可以是odd(奇数)，even(偶数)。
					$("ul li:nth-child(even)")选取<ul>元素中偶数位置的 <li> 元素。$("ul li:nth-child(odd)")	选取<ul>元素中奇数位置的 <li> 元素
					同样$("ul li:even")	选取<ul>元素中偶数位置的 <li> 元素。$("ul li:odd")	选取<ul>元素中奇数位置的 <li> 元素。
				[E:nth-last-child()] ：选择器的使用方法于E:nth-child()是相同的，不同的是E:nth-last-child()选择的元素是从父元素的最后一个子元素开始算起。
				[E:root]：用来匹配元素E所在的文档中的根元素，在html文档中根元素就始终是html。
				[E:nth-of-type()] ：只计算父元素中指定的某种类型的子元素，当某个元素的子元素类型不只是一种时，使用nth-of-type来选择会比较有用。
				[E:nth-last-of-type()] ：的用法同[E:nth-of-type()]相同，不同的是:nth-last-of-type()也是从父元素的最后一个子元素开始算起。



					



				
			
