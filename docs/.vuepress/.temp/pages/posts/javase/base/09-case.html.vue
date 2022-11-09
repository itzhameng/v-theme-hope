<template><div><h1 id="java分支语句" tabindex="-1"><a class="header-anchor" href="#java分支语句" aria-hidden="true">#</a> Java分支语句</h1>
<h2 id="_1-1-分支语句简介" tabindex="-1"><a class="header-anchor" href="#_1-1-分支语句简介" aria-hidden="true">#</a> 1.1 分支语句简介</h2>
<ul>
<li>分支语句根据一定的条件有选择地执行或跳过特定的语句</li>
<li>从而来完成根据不同的条件，得到不同的结果，来满足现实生活中的需求</li>
<li>Java中提供了多种实现分支语句的方式
<ul>
<li>1）<code v-pre>if</code> :  单分支语句，如果满足进入该语句块</li>
<li>2）<code v-pre>if...else</code>:  如果满足进入该if语句块,否则进入else语句块，二选一</li>
<li>3）<code v-pre>if...else if...else if...else</code>:多分支语句，条件满足进入一个分支，如果都不满足进入 else</li>
<li>4）<code v-pre>switch...case</code>: 实现语句块</li>
</ul>
</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/image-20210711175108919.png?imageslim" alt="Java分支语句" loading="lazy"></p>
<h2 id="_1-2-if单分支语句" tabindex="-1"><a class="header-anchor" href="#_1-2-if单分支语句" aria-hidden="true">#</a> 1.2 if单分支语句</h2>
<p><code v-pre>if</code>单分支语句，表示只要条件满足，就会进入语句块内容，否则直接跳过。</p>
<p>上图左侧部分就是表示<code v-pre>if</code>单分支语句</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//语法</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>条件表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//如果条件为true，执行到该语句。否则跳过该语句</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：</strong></p>
<p>如果成绩score大于等于90，将grade等级设置有<code v-pre>优秀</code>，否则忽略</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">91</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> grade <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>score<span class="token operator">>=</span><span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        grade <span class="token operator">=</span> <span class="token string">"优秀"</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"小明获得鸡腿一只"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"end..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意:以后代码过程中，注意测试。否则条件特别容易被漏掉</p>
</blockquote>
<h2 id="_1-3-if-else双分支语句" tabindex="-1"><a class="header-anchor" href="#_1-3-if-else双分支语句" aria-hidden="true">#</a> 1.3 if...else双分支语句</h2>
<p><code v-pre>if...else</code>称为双分支语句，如果条件满足则进入<code v-pre>if</code>语句块，否则进入<code v-pre>else</code>语句块；</p>
<p>也就是说<code v-pre>if</code>或<code v-pre>else</code>语句块必须会进入其中的一个分支；同时也不存在两个分支同时进入；</p>
<p>如上图右侧，就是<code v-pre>if...else</code>的使用场景</p>
<p><strong>语法:</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 格式  双分支语句   if 或者else 永远进入一个分支</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//条件为真，进入</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token comment">//否则进入else</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：</strong></p>
<p>如果小明成绩不低于90分，奖励一只鸡腿，否则只能吃青菜</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">89</span><span class="token punctuation">;</span>
    <span class="token comment">//注意:以后代码过程中，注意测试。否则条件特别容易被漏掉</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>score<span class="token operator">>=</span><span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"小明获得鸡腿一只"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"小明被罚只能吃青菜"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"end..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-if-else-if-else语法" tabindex="-1"><a class="header-anchor" href="#_1-4-if-else-if-else语法" aria-hidden="true">#</a> 1.4  if...else if...else语法</h2>
<p><code v-pre> if...else if...else</code>也被称为多分支语句，可以指定多个条件。</p>
<p>但是能够进入分支的只有一个</p>
<p><img src="http://img.itzhameng.com/blog/image-20210711185515878.png?imageslim" alt="image-20210711185515878" loading="lazy"></p>
<p><strong>语法：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//语法</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//满足进入</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//满足进入</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//满足进入</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   	<span class="token comment">//都不满足，进入else</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例:</strong></p>
<p>不同的条件进入不同的分支，例如：成绩为88，奖励麻辣鸡爪一个</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> score <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
    <span class="token comment">// 注意:以后代码过程中，注意测试。否则条件特别容易被漏掉</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"小明获得鸡腿一只"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"麻辣鸡爪一个!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"奖励练习题一打！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"小明被暴打了一顿"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"end..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：如果多个条件同时满足，那么会从上而下，自动匹配。当进入一个分支之后，就不会在进入其他分支。</p>
</blockquote>
<h2 id="_1-5-switch-case语句" tabindex="-1"><a class="header-anchor" href="#_1-5-switch-case语句" aria-hidden="true">#</a> 1.5 switch...case语句</h2>
<p>在处理多个选项的时候，除了可以使用<code v-pre>if...else</code>，Java还提供了另外一种分支语句，那就是<code v-pre>switch...case</code></p>
<p><code v-pre>switch</code>语句将从选项值相匹配的<code v-pre>case</code>标签处开始执行，直到语句结束或者遇到<code v-pre>break</code>关键字</p>
<p><img src="http://img.itzhameng.com/blog/image-20210711215008423.png?imageslim" alt="image-20210711215008423" loading="lazy"></p>
<p><strong>语法结构：</strong></p>
<ul>
<li>switch(表达式)中表达式的返回值必须是下述几种类型之一：<code v-pre>int</code>,<code v-pre> byte</code>, <code v-pre>char</code>, <code v-pre>short</code>, <code v-pre>枚举</code>, <code v-pre>字符串</code>不支持long 类型的数据</li>
<li>case子句中的值必须是<code v-pre>常量</code>，且所有case子句中的值应是不同的；</li>
<li>default子句是最终执行</li>
<li><code v-pre>break</code>语句用来在执行完一个case分支后使程序跳出switch语句块；</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 给固定的内容</span>
<span class="token keyword">switch</span><span class="token punctuation">(</span>表达式<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span>
        <span class="token comment">//语句块</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span>
        <span class="token comment">//语句块</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span>
        <span class="token comment">//语句块</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token comment">//语句块：类似else</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：</strong></p>
<p>根据不同的值，获取不同的级别</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> top <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"恭喜总冠军!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"恭喜亚军!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"恭喜季军!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"恭喜第四!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"恭喜第五!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"墊底"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<p>①表达式的值如果和常量的内容保持一致，表示会进入该代码块
②break,跳出当前的语句快，否则会一直往下执行</p>
</blockquote>
</div></template>
