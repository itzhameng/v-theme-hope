<template><div><h1 id="java数据类型" tabindex="-1"><a class="header-anchor" href="#java数据类型" aria-hidden="true">#</a> Java数据类型</h1>
<p>Java是—种强类型语言。这就意味着必须为每一个变量声明一种类型，在内存中分配了不同大小的内存空间。在Java中，一共有8种基本类型(primitive type)，其中有4种整型、2种浮点类型、1种用于表示Unicode编码的字符单元的字符类型char和1种用于表示真值的boolean类型。</p>
<p><img src="http://img.itzhameng.com/blog/R4wlh6XRJEBX.png?imageslim" alt="Java数据类型" loading="lazy"></p>
<h2 id="_4-1-整型" tabindex="-1"><a class="header-anchor" href="#_4-1-整型" aria-hidden="true">#</a> 4.1 整型</h2>
<p>Java各整型类型有固定的数据范围和字段长度，不受操作系统OS的影响，以保证Java程序的可移植性。
并且Java提供四种整型(<code v-pre>byte</code>,<code v-pre>short</code>,<code v-pre>int</code>,<code v-pre>long</code>)用于表示没有小数部分的值，并且允许它们为负数。</p>
<p><img src="http://img.itzhameng.com/blog/ML0vucXQSGkP.png?imageslim" alt="mark" loading="lazy"></p>
<p>Java的整型默认为<code v-pre>int</code>类型，如果声明<code v-pre>long</code>型整型必须在数值后添加<code v-pre>l</code>或者<code v-pre>L</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> num2 <span class="token operator">=</span> <span class="token number">100L</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在通常情况下，int类型最常用。但如果表示星球上的居住人数，就需要使用long类型了,因为int类型数值范围最大的是 2的31次方(正好超过20亿)。这样的话如果使用int肯定会超过范围。</p>
<h2 id="_4-2-浮点型" tabindex="-1"><a class="header-anchor" href="#_4-2-浮点型" aria-hidden="true">#</a> 4.2 浮点型</h2>
<p>与整数类型类似，Java 浮点类型也有固定的表数范围和字段长度，不受具体OS的影响。
浮点类型通常用于表示有小数部分的数值。<em>float</em>表示单精度；<em>double</em>表示双精度，同时也是float的两倍
<img src="http://img.itzhameng.com/blog/CcGVr6AjcUd1.png?imageslim" alt="mark" loading="lazy"></p>
<p>Java 的浮点型常量默认为 double 型，声明 float 型常量，须后加 <code v-pre>‘f’</code> 或 <code v-pre>‘F’</code>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> d2 <span class="token operator">=</span> <span class="token number">10.5F</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>浮点数值不适用于无法接受舍入误差的金融计算中。例如，命令System.out.printIn(2.0-1.1）将打印出0.8999999999999999，而不是人们想象的0.9。</p>
<p>这种舍入误差的主要原因是浮点数值采用<strong>二进制系统</strong>表示，而在二进制系统中无法精确地表示分数1/10。</p>
<p>这 就好像十进制无法精确地表示分数1/3一样。如果在数值计算中不允许有任何舍入误差，就应该使用<code v-pre>BigDecimal</code>类，例如金额</p>
<h2 id="_4-3-char字符类型" tabindex="-1"><a class="header-anchor" href="#_4-3-char字符类型" aria-hidden="true">#</a> 4.3 char字符类型</h2>
<p>char 型数据用来表示通常意义上&quot;字符&quot;。
字符型常量的三种表现形式：</p>
<ul>
<li>字符常量是用单引号(‘ ’)括起来的单个字符，涵盖世界上所有书面语的字符。例如：char c1 = 'a'; char c2 = '中'; char c3 = '9';</li>
<li>Java中还允许使用转义字符‘\’来将其后的字符转变为特殊字符型常量。例如：char c3 = '\n'; -- '\n'表示换行符</li>
<li>直接使用 Unicode 值来表示字符型常量：‘\uXXXX’。其中，XXXX代表一个十六进制整数。如：\u000a 表示 \n。</li>
</ul>
<p>char 类型是可以进行运算的。因为它都对应有 Unicode 值。</p>
<h2 id="_4-4-boolean" tabindex="-1"><a class="header-anchor" href="#_4-4-boolean" aria-hidden="true">#</a> 4.4 boolean</h2>
<p>boolean 类型适于逻辑运算，一般用于程序流程控制：</p>
<ul>
<li>if条件控制语句；</li>
<li>while循环控制语句；</li>
<li>do-while循环控制语句；</li>
<li>for循环控制语句；</li>
</ul>
<p>boolean类型数据只允许取值true和false，不可以0或非 0 的整数替代true和false，这点和C语言不同。</p>
<h2 id="_4-5-基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#_4-5-基本数据类型转换" aria-hidden="true">#</a> 4.5 基本数据类型转换</h2>
<p>经常需要将一种数值类型转为另一种数值类型，但是在转换的过程中一定要注意可能会造成数据的精度丢失，例如:double类型转为int类型，那么小数点后面的数值就会丢失；
Java针对现实情况分别提高两种数值转换方式:<code v-pre>自动类型转换</code>和<code v-pre>强制类型转换</code></p>
<h3 id="_4-5-1-自动类型转换" tabindex="-1"><a class="header-anchor" href="#_4-5-1-自动类型转换" aria-hidden="true">#</a> 4.5.1 自动类型转换</h3>
<p>容量小的类型自动转换为容量大的数据类型。数据类型按容量大小排序为：
<img src="http://img.itzhameng.com/blog/z11qdGqt2PFO.png?imageslim" alt="Java数据类型转换" loading="lazy"></p>
<p>有多种类型的数据混合运算时，系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算。
byte,short,char之间不会相互转换，他们三者在计算时首先转换为int类型。
当把任何基本类型的值和字符串值进行连接运算时(+)，基本类型的值将自动转化为字符串类型。</p>
<h3 id="_4-5-2-强制类型转换" tabindex="-1"><a class="header-anchor" href="#_4-5-2-强制类型转换" aria-hidden="true">#</a> 4.5.2 强制类型转换</h3>
<p>将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符（<code v-pre>()</code>），但可能造成精度降低或溢出,格外要注意。
通常，字符串不能直接转换为基本类型，但通过基本类型对应的包装类则可以实现把字符串转换成基本类型。如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token string">"43"</span><span class="token punctuation">;</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>boolean类型不可以转换为其它的数据类型。</p>
<h2 id="_4-6-大数值" tabindex="-1"><a class="header-anchor" href="#_4-6-大数值" aria-hidden="true">#</a> 4.6 大数值</h2>
<p>如果基本的整数和浮点数精度不能够满足需求，那么可以使用java.math包中的两个很有用的类:<code v-pre>BigInteger</code>和<code v-pre>BigDecimal</code>。</p>
<p>这两个类可以处理包含任意长度数字序列的数值。</p>
<ul>
<li>BigInteger类实现了任意精度的整数运算，</li>
<li>BigDecimal实现了任意精度的浮点数运算。</li>
</ul>
<p>使用静态的valueOf方法可以将普通的数值转换为大数值:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BigInteger</span> bigInteger <span class="token operator">=</span> <span class="token class-name">BigInteger</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> bigDecimal <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>遗憾的是，不能使用人们熟悉的算术运算符（如:＋和*）处理大数值。而需要使用大数 值类中的add和multiply方法。</p>
<h3 id="_4-6-1-biginteger" tabindex="-1"><a class="header-anchor" href="#_4-6-1-biginteger" aria-hidden="true">#</a> 4.6.1 BigInteger</h3>
<p>BigIntcger类实现了任意精度的整数运算。常用方法如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">BigInteger方法名</th>
<th style="text-align:left">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">static valueOf()</td>
<td style="text-align:left">将参数转换为BigInteger</td>
</tr>
<tr>
<td style="text-align:left">add()</td>
<td style="text-align:left">相加</td>
</tr>
<tr>
<td style="text-align:left">subtract()</td>
<td style="text-align:left">相减</td>
</tr>
<tr>
<td style="text-align:left">multiply()</td>
<td style="text-align:left">相乘</td>
</tr>
<tr>
<td style="text-align:left">divide()</td>
<td style="text-align:left">相除取整</td>
</tr>
<tr>
<td style="text-align:left">remainder()</td>
<td style="text-align:left">取余</td>
</tr>
</tbody>
</table>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//int 转为 BigInteger</span>
    <span class="token class-name">BigInteger</span> num1 <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span>BigInteger</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigInteger</span> num2 <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span>BigInteger</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相加</span>
    <span class="token class-name">BigInteger</span> add <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相加:"</span> <span class="token operator">+</span> add<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相减</span>
    <span class="token class-name">BigInteger</span> subtract <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相减:"</span> <span class="token operator">+</span> subtract<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相乘</span>
    <span class="token class-name">BigInteger</span> multiply <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相乘:"</span> <span class="token operator">+</span> multiply<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相除 取整</span>
    <span class="token class-name">BigInteger</span> divide <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相除:"</span> <span class="token operator">+</span> divide<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//取摸|取余数</span>
    <span class="token class-name">BigInteger</span> remainder <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">remainder</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"取余:"</span> <span class="token operator">+</span> remainder<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终结果:</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>相加:112
相减:88
相乘:1200
相除:8
取余:4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-1-bigdecimal" tabindex="-1"><a class="header-anchor" href="#_4-6-1-bigdecimal" aria-hidden="true">#</a> 4.6.1 BigDecimal</h3>
<p>BigDecimal实现了任意精度的浮点数运算。常用方法如下:</p>
<table>
<thead>
<tr>
<th style="text-align:left">BigDecimal方法名</th>
<th style="text-align:left">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">static valueOf()</td>
<td style="text-align:left">将参数转换为BigDecimal</td>
</tr>
<tr>
<td style="text-align:left">add()</td>
<td style="text-align:left">相加</td>
</tr>
<tr>
<td style="text-align:left">subtract()</td>
<td style="text-align:left">相减</td>
</tr>
<tr>
<td style="text-align:left">multiply()</td>
<td style="text-align:left">相乘</td>
</tr>
<tr>
<td style="text-align:left">divide()</td>
<td style="text-align:left">相除取整</td>
</tr>
<tr>
<td style="text-align:left">remainder()</td>
<td style="text-align:left">取余</td>
</tr>
</tbody>
</table>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//int 转为 BigInteger</span>
    <span class="token class-name">BigDecimal</span> num1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> num2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">12.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//相加</span>
    <span class="token class-name">BigDecimal</span> add <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相加:"</span> <span class="token operator">+</span> add<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相减</span>
    <span class="token class-name">BigDecimal</span> subtract <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相减:"</span> <span class="token operator">+</span> subtract<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相乘</span>
    <span class="token class-name">BigDecimal</span> multiply <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相乘:"</span> <span class="token operator">+</span> multiply<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//相除 保留两位小数,最后一位四舍五入。当然也可以使用其他模式</span>
    <span class="token class-name">BigDecimal</span> divide <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>num2<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"相除两位小数/四舍五入:"</span> <span class="token operator">+</span> divide<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//取摸|取余数</span>
    <span class="token class-name">BigDecimal</span> remainder <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">remainder</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"取余:"</span> <span class="token operator">+</span> remainder<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终结果:</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>相加:112.8
相减:88.2
相乘:1236.15
相除两位小数/四舍五入:8.18
取余:2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
