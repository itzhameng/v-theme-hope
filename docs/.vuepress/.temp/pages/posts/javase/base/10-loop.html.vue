<template><div><h1 id="java循环语句" tabindex="-1"><a class="header-anchor" href="#java循环语句" aria-hidden="true">#</a> Java循环语句</h1>
<h2 id="_2-1-循环语句简介" tabindex="-1"><a class="header-anchor" href="#_2-1-循环语句简介" aria-hidden="true">#</a> 2.1 循环语句简介</h2>
<p>在满足指定条件下，反复执行特定的代码。</p>
<p>例如：将<code v-pre>1-100</code>之间的和进行累加；</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">=</span> sum<span class="token operator">+</span>i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"sum="</span> <span class="token operator">+</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java中提供了三种基本的循环：</p>
<ul>
<li>for循环
<ul>
<li>1）普通for循环</li>
<li>2）增强for循环</li>
</ul>
</li>
<li>while</li>
<li>do...while</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/image-20210711222528933.png?imageslim" alt="image-20210711222528933" loading="lazy"></p>
<h2 id="_2-2-for循环" tabindex="-1"><a class="header-anchor" href="#_2-2-for循环" aria-hidden="true">#</a> 2.2 for循环</h2>
<p><code v-pre>for </code>循环语句是支持迭代的一种通用结构， 利用每次迭代之后更新的计数器或类似的变量来控制迭代次数</p>
<p><code v-pre>for</code>一般用来明确循环次数的情况使用，更加的方便</p>
<h3 id="_1、循环组成部分" tabindex="-1"><a class="header-anchor" href="#_1、循环组成部分" aria-hidden="true">#</a> <strong>1、循环组成部分:</strong></h3>
<p>​	a.初始化
​	b.循环条件
​	c.循环体,循环的内容
​	d.迭代(改变原来的值)</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//语法:</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>初始化<span class="token punctuation">;</span>条件判断<span class="token punctuation">;</span>迭代<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//循环体 具体反复执行的代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、案例" tabindex="-1"><a class="header-anchor" href="#_2、案例" aria-hidden="true">#</a> 2、<strong>案例</strong></h3>
<p>打印1-100之间的偶数列</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、for执行顺序" tabindex="-1"><a class="header-anchor" href="#_3、for执行顺序" aria-hidden="true">#</a> 3、for执行顺序</h3>
<ol>
<li>第一步，对<code v-pre>i</code>进行初始化为1</li>
<li>第二步，判断<code v-pre>i</code>是否小于100</li>
<li>第三步，如果返回<code v-pre>true</code>,执行对应语句块内容</li>
<li>第四步，执行语句块内容，进行迭代，将<code v-pre>i</code>进行++操作</li>
<li>第五步，迭代完毕之后在进行判断，执行<code v-pre>第二步</code>操作</li>
<li>第六步，如果满足继续进入代码块，如果<code v-pre>不满足，则跳出循环</code></li>
</ol>
<p><img src="http://img.itzhameng.com/blog/image-20210711221205176.png?imageslim" alt="image-20210711221205176" loading="lazy"></p>
<h2 id="_2-3-while循环" tabindex="-1"><a class="header-anchor" href="#_2-3-while循环" aria-hidden="true">#</a> 2.3 while循环</h2>
<p>当条件为 true 时，while 循环执行一条语句（也可以是一个语句块）。一般格式为</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>语法格式<span class="token punctuation">(</span>先判断，再执行<span class="token punctuation">)</span><span class="token operator">:</span>
<span class="token punctuation">[</span>初始值<span class="token punctuation">]</span>
<span class="token keyword">while</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//语句块</span>
    <span class="token comment">// 迭代[更改初始值]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果开始循环条件的值就为 false, 则 while 循环体一次也不执行</p>
<p><strong>案例：</strong></p>
<p>将1-100之间的和进行累加操作</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 判断条件</span>
        <span class="token comment">// 语句块</span>
        result <span class="token operator">+=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">" result="</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-4-do-while" tabindex="-1"><a class="header-anchor" href="#_2-4-do-while" aria-hidden="true">#</a> 2.4 do...while</h2>
<p>如果希望循环体至少执行一次， 则应该将检测条件放在最后。 使用 do/while 循环语句可以实现这种操作方式;</p>
<p><code v-pre>while</code>和<code v-pre>do...while</code> 最大的区别就是：</p>
<ul>
<li>while：先判断，再执行</li>
<li>do...while:先执行，再判断，所以do...while至少都会执行一次</li>
</ul>
<p><strong>语法格式：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>语法格式<span class="token operator">:</span><span class="token punctuation">(</span>先执行，在判断<span class="token operator">:</span>不管条件如何，都会至少执行一次<span class="token punctuation">)</span>
<span class="token punctuation">[</span>初始化内容<span class="token punctuation">]</span>
<span class="token keyword">do</span><span class="token punctuation">{</span>
    <span class="token comment">//语句块 </span>
    <span class="token punctuation">[</span>迭代<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token keyword">while</span><span class="token punctuation">(</span>判断条件<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：</strong></p>
<p>将1-100之间的和进行累加操作</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        result <span class="token operator">+=</span> i<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"i="</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">" result="</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-中断循环" tabindex="-1"><a class="header-anchor" href="#_2-5-中断循环" aria-hidden="true">#</a> 2.5 中断循环</h2>
<p>Java提供了<code v-pre>continue</code>和<code v-pre>break</code>  关键字用来终止循环继续执行。</p>
<ul>
<li><code v-pre>continue</code>用来终止本次循环，该<code v-pre>continue</code>关键字后面的所有内容都不会被执行；然而<code v-pre>continue</code>会迭代，然后执行下一次循环；</li>
<li><code v-pre>break</code> 用来跳出当前所在的循环，属于该循环下所有的内容都会终止执行；</li>
</ul>
<p>以下是两者的使用注意事项：</p>
<ul>
<li>break只能用于switch语句和循环语句中。</li>
<li>continue 只能用于循环语句中。</li>
<li>标号语句必须紧接在循环的头部。标号语句不能用在非循环语句的前面。</li>
<li>break和continue之后不能有其他的语句，因为程序永远不会执行break 和 continue之后的语句。</li>
</ul>
<p><strong>案例：</strong></p>
<p>当i=5是，使用不同关键字，所得到结果</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//break; //1 2 3 4</span>
        <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">//1 2 3 4  6 7 8 9 10</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"continue==>i = "</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20210711223525061.png?imageslim" alt="image-20210711223525061" loading="lazy"></p>
<h2 id="_2-6-嵌套循环" tabindex="-1"><a class="header-anchor" href="#_2-6-嵌套循环" aria-hidden="true">#</a> 2.6 嵌套循环</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 1. 外层: 控制行数 1-9行</span>
    <span class="token comment">// 2.内层 :控制每一行 有多少个列（需要计算多杀次）</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// aa:标号 使用:分割 必须写在循环的头部</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>j <span class="token operator">+</span> <span class="token string">"*"</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> <span class="token punctuation">(</span>j <span class="token operator">*</span> i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 换行</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20210711173100749.png?imageslim" alt="image-20210711173100749" loading="lazy"></p>
<h2 id="_2-7-实战题" tabindex="-1"><a class="header-anchor" href="#_2-7-实战题" aria-hidden="true">#</a> 2.7 实战题</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>第<span class="token number">1</span>题：
实现一个查询月天数的程序键盘输入年月 判断这年这个月有多少天。<span class="token operator">&lt;</span>闰年条件<span class="token operator">:</span>能被<span class="token number">4</span>整除且不能被<span class="token number">100</span>整除或者能被<span class="token number">400</span>整除<span class="token operator">></span>
    
第<span class="token number">2</span>题：
国家税务局规定不同行业的税收数额度不一样   
    	税收<span class="token operator">=</span><span class="token punctuation">(</span>工资<span class="token operator">-</span>起征点<span class="token punctuation">)</span><span class="token operator">*</span>税率
       行业有
       <span class="token number">1.</span>服务行业  <span class="token number">2.</span>制造业  <span class="token number">3.</span>农业
       <span class="token number">1.</span>服务行业税收的起征点是<span class="token number">2000</span> 元  <span class="token number">2000</span>元以上需要缴纳<span class="token number">10</span><span class="token operator">%</span>的个人所得税
       <span class="token number">2.</span>制造业税收的起征点是<span class="token number">3000</span>元  <span class="token number">3000</span>元以上需要缴纳<span class="token number">5</span><span class="token operator">%</span>的个人所得税
       <span class="token number">3.</span>农业税收的起征点是<span class="token number">1500</span>元  <span class="token number">1500</span>元以上需要缴纳<span class="token number">2</span><span class="token operator">%</span>的个人所得税
	   提示用户选择行业，输入工资 ，输出税后工资。
   
第三题：
运费计算器<span class="token operator">:</span>运输公司对用户计算运费<span class="token punctuation">.</span>路程越远每公里运费越低<span class="token punctuation">.</span>每公里每吨货物的基本运费为p<span class="token punctuation">,</span>货物重为w<span class="token punctuation">,</span>距离为s<span class="token punctuation">,</span>折扣为d<span class="token punctuation">,</span>则总运费f的计算公式为
f<span class="token operator">=</span>p<span class="token operator">*</span>w<span class="token operator">*</span>s<span class="token operator">*</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>d<span class="token punctuation">)</span>
       s<span class="token operator">&lt;</span><span class="token number">250</span>没有折扣
       <span class="token number">250</span><span class="token operator">&lt;=</span>s <span class="token operator">&lt;</span><span class="token number">500</span> <span class="token number">2</span><span class="token operator">%</span>折扣
       <span class="token number">500</span><span class="token operator">&lt;=</span>s<span class="token operator">&lt;</span><span class="token number">1000</span> <span class="token number">5</span><span class="token operator">%</span>折扣
       <span class="token number">1000</span><span class="token operator">&lt;=</span>s<span class="token operator">&lt;</span><span class="token number">2000</span>  <span class="token number">8</span><span class="token operator">%</span>折扣
       <span class="token number">2000</span>以上 <span class="token number">15</span><span class="token operator">%</span>折扣。
                    
第四题：
编写一个某年第一天是星期几的查询器：程序输出<span class="token operator">:</span><span class="token constant">XXXX</span>年一月一日是 星期<span class="token class-name">X</span>
提示<span class="token operator">:</span><span class="token number">1900</span>年一月一日是星期一

第五题：
根据流程图完成银行取钱业务程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20210711224141038.png?imageslim" alt="image-20210711224141038" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>第六题：
编写一个日历程序<span class="token operator">:</span>输入年月 按照格式输出该年月的日历
提示<span class="token operator">:</span><span class="token number">1900</span>年一月一日是星期一
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20210711224236987.png?imageslim" alt="image-20210711224236987" loading="lazy"></p>
</div></template>
