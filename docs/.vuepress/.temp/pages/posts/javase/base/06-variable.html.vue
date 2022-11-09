<template><div><h1 id="java变量" tabindex="-1"><a class="header-anchor" href="#java变量" aria-hidden="true">#</a> Java变量</h1>
<h2 id="_3-1-概念" tabindex="-1"><a class="header-anchor" href="#_3-1-概念" aria-hidden="true">#</a> 3.1 概念</h2>
<ul>
<li>内存中的一个存储区域;</li>
<li>该区域有自己的名称（变量名）和类型（数据类型）;</li>
<li>Java中每个变量必须先声明，后使用;</li>
<li>该区域的数据可以在同一类型范围内不断变化;</li>
<li>变量是通过使用变量名来访问这块区域的;</li>
<li>变量的作用域：一对{ }之间有效</li>
</ul>
<h2 id="_3-2-定义格式" tabindex="-1"><a class="header-anchor" href="#_3-2-定义格式" aria-hidden="true">#</a> 3.2 定义格式</h2>
<blockquote>
<p>数据类型 变量名 = [初始值];</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//例如</span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-变量的分类" tabindex="-1"><a class="header-anchor" href="#_3-3-变量的分类" aria-hidden="true">#</a> 3.3 变量的分类</h2>
<h3 id="a-按照申明-创建-的位置划分" tabindex="-1"><a class="header-anchor" href="#a-按照申明-创建-的位置划分" aria-hidden="true">#</a> a.按照申明(创建)的位置划分</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>1.成员变量|全局变量|属性
	a.定义在方法的外部，类的内部;
	b.范围在该类下所有的地方都可以使用,包括里面多个方法内部;
2.局部变量
	a.定义在方法或者代码块的内容;
	b.只在定义的方法或者代码块的{}里面使用;

之间的区别:
	a.定义位置不一样;
	b.局部变量在使用之前必须赋值。全局变量会生成对应数据类型的默认值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-按照数据类型划分" tabindex="-1"><a class="header-anchor" href="#b-按照数据类型划分" aria-hidden="true">#</a> b.按照数据类型划分</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token number">1.</span>基本数据类型
	数值型<span class="token operator">:</span>	
			整数型<span class="token operator">:</span>
				<span class="token keyword">byte</span><span class="token operator">:</span> 
				<span class="token keyword">short</span><span class="token operator">:</span> 
				<span class="token keyword">int</span><span class="token operator">:</span> 
				<span class="token keyword">long</span><span class="token operator">:</span> 
				默认的类型是<span class="token keyword">int</span>
			浮点型<span class="token operator">:</span>
				<span class="token keyword">float</span>
				<span class="token keyword">double</span><span class="token operator">:</span>
				<span class="token class-name">Java</span> 的浮点型常量默认为 <span class="token keyword">double</span> 型，声明 <span class="token keyword">float</span> 型常量，须后加 ‘f’ 或 ‘<span class="token class-name">F</span>’。
	字符型<span class="token operator">:</span>
		<span class="token keyword">char</span><span class="token operator">:</span>
			a<span class="token punctuation">.</span>使用 '' 单引号定义内容<span class="token punctuation">;</span>
			b<span class="token punctuation">.</span>可以存放一个中文
			c<span class="token punctuation">.</span>可以存放<span class="token class-name">Java</span>中还允许使用转义字符‘\’来将其后的字符转变为特殊字符型常量。例如：<span class="token keyword">char</span> c3 <span class="token operator">=</span> 				<span class="token char">'\n'</span><span class="token punctuation">;</span>  <span class="token operator">--</span> <span class="token char">'\n'</span>表示换行符
			d<span class="token punctuation">.</span>直接使用 <span class="token class-name">Unicode</span> 值来表示字符型常量：‘\uXXXX’。其中，<span class="token constant">XXXX</span>代表一个十六进制整数。如：				  \u000a 表示 \n。
			e<span class="token punctuation">.</span><span class="token keyword">char</span> 类型是可以进行运算的。因为它都对应有 <span class="token class-name">Unicode</span> 值。

	布尔型<span class="token operator">:</span>
		<span class="token keyword">boolean</span><span class="token operator">:</span>
		<span class="token keyword">boolean</span>类型数据只允许取值<span class="token boolean">true</span>和<span class="token boolean">false</span>

<span class="token number">2.</span>引用数据类型
	除了以上<span class="token number">8</span>种基本类型之外，其余的都是引用数据类型。包括：<span class="token class-name">String</span>、<span class="token class-name">Object</span>包装类等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-变量初始化" tabindex="-1"><a class="header-anchor" href="#_3-4-变量初始化" aria-hidden="true">#</a> 3.4 变量初始化</h2>
<p>声明一个变量之后，必须用赋值语句对变量进行显式初始化，千万不要使用未初始化的局部变量。</p>
<p>例如，Java编译器认为下面的语句序列是错误的：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> username<span class="token punctuation">;</span> <span class="token comment">//Variable 'username' might not have been initialized</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"username = "</span> <span class="token operator">+</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要想对一个已经声明过的变量进行赋值，就需要将变量名放在等号（=）左侧，相应取值的Java表达式放在等号的右侧</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    username <span class="token operator">=</span> <span class="token string">"猪小明"</span><span class="token punctuation">;</span> <span class="token comment">//赋值</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"username = "</span> <span class="token operator">+</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将变量的声明和初始化放在同一行中。例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> username  <span class="token operator">=</span> <span class="token string">"猪小明"</span><span class="token punctuation">;</span> <span class="token comment">//赋值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-5-常量" tabindex="-1"><a class="header-anchor" href="#_3-5-常量" aria-hidden="true">#</a> 3.5 常量</h2>
<p>在Java中，利用关键字<code v-pre>final</code>指示常量。例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">double</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
    <span class="token comment">//PI = 3.10; //异常  Cannot assign a value to final variable 'PI'</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"PI = "</span> <span class="token operator">+</span> <span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键字final表示这个变量只能被赋值一次。一旦被赋值之后，就不能够再更改了。习惯上，常量名使用全大写。</p>
</div></template>
