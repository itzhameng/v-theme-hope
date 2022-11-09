<template><div><h1 id="java数组" tabindex="-1"><a class="header-anchor" href="#java数组" aria-hidden="true">#</a> Java数组</h1>
<p><img src="http://img.itzhameng.com/blog/arr.png?imageslim" alt="image-20210713152724370" loading="lazy"></p>
<h1 id="一、数组简介" tabindex="-1"><a class="header-anchor" href="#一、数组简介" aria-hidden="true">#</a> 一、数组简介</h1>
<p>作用：用来存储相同数据类型的多个数据</p>
<p>关键字：[]  中括号</p>
<blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">03</span><span class="token punctuation">,</span><span class="token number">06</span><span class="token punctuation">,</span><span class="token number">07</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<ul>
<li>数组是多个相同类型数据的组合，实现对这些数据的统一管理</li>
<li>数组属引用类型，数组型数据是对象(Object)</li>
<li>数组中的元素可以是任何数据类型，包括基本类型和引用类型</li>
<li>数组类型是单一，只能存放相同类型的数据</li>
<li>数组一旦创建，大小就是固定的</li>
<li>数组中每个元素都有自己的位置(下标),从0开始</li>
</ul>
<p>所以数组一般用来存放大小固定的数据：例如存放班级学生成绩</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> scores <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">98</span><span class="token punctuation">,</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、创建数组" tabindex="-1"><a class="header-anchor" href="#二、创建数组" aria-hidden="true">#</a> 二、创建数组</h1>
<p>关键数组的关键字:<code v-pre>[]</code></p>
<p><code v-pre>int [] a</code> 和 <code v-pre>int a[]</code>含义是一样的，<code v-pre>[]</code>和<code v-pre>变量名</code>前后是没有关系的。</p>
<h3 id="_2-1-只申明不赋值" tabindex="-1"><a class="header-anchor" href="#_2-1-只申明不赋值" aria-hidden="true">#</a> 2.1 只申明不赋值</h3>
<blockquote>
<p>type [] var;或者 type var [] ;</p>
</blockquote>
<p>例如:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> score<span class="token punctuation">;</span>
<span class="token class-name">Object</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> obj<span class="token punctuation">;</span>  <span class="token comment">//Object是java语法中老祖宗</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-申明并赋值" tabindex="-1"><a class="header-anchor" href="#_2-2-申明并赋值" aria-hidden="true">#</a> 2.2 申明并赋值</h3>
<blockquote>
<p>type [] var = new type[size];  //创建的是数据，数组的元素为空。值默认的就是该类型的默认值</p>
<p>type [] var = {elm,elem2,elem3,...} //创建的同时，把数据也赋值了</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 申明 默认值</span>
    <span class="token keyword">int</span> score<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>score<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>score<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//创建并且赋值</span>
    <span class="token keyword">int</span> score2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>score2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>score2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20200821091300927.png?imageslim" alt="image-20200821091300927" loading="lazy"></p>
<h3 id="_2-3-new数组内存模型" tabindex="-1"><a class="header-anchor" href="#_2-3-new数组内存模型" aria-hidden="true">#</a> 2.3 new数组内存模型</h3>
<blockquote>
<p>new:java中的关键字，主要作用用来在内存中，开辟新的空间，从而创建新的对象</p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20200821093935851.png?imageslim" alt="image-20200821093935851" loading="lazy"></p>
<h3 id="_2-4-下标操作元素" tabindex="-1"><a class="header-anchor" href="#_2-4-下标操作元素" aria-hidden="true">#</a> 2.4 下标操作元素</h3>
<h4 id="_2-4-1-通过下标给元素赋值" tabindex="-1"><a class="header-anchor" href="#_2-4-1-通过下标给元素赋值" aria-hidden="true">#</a> 2.4.1 通过下标给元素赋值</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//指定元素赋值</span>
score<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
score<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>

<span class="token comment">//结果</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">//赋值</span>
<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-通过下标获取元素内容" tabindex="-1"><a class="header-anchor" href="#_2-4-2-通过下标获取元素内容" aria-hidden="true">#</a> 2.4.2 通过下标获取元素内容</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> num2 <span class="token operator">=</span> score<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2="</span><span class="token operator">+</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>score<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>score<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-注意事项" tabindex="-1"><a class="header-anchor" href="#_2-5-注意事项" aria-hidden="true">#</a> 2.5 注意事项</h3>
<ul>
<li>Java中使用关键字 new  创建数组对象</li>
<li>定义并用运算符 new 为之分配空间后，才可以引用数组中的每个元素；</li>
<li>数组元素的引用方式：数组名[数组元素下标]
<ul>
<li>数组元素下标可以是整型常量或整型表达式。如a[3] , b[i] , c[6*i];</li>
<li>数组元素下标从0开始；长度为n的数组合法下标取值范围: 0 - n-1；如int a[]=new int[3];  可引用的数组元素为a[0]、a[1]、a[2]</li>
</ul>
</li>
<li>每个数组都有一个属性 length 指明它的长度，例如：a.length 指明数组 a 的长度(元素个数)</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/image-20200821094832884.png?imageslim" alt="image-20200821094832884" loading="lazy"></p>
<h1 id="三、遍历数组" tabindex="-1"><a class="header-anchor" href="#三、遍历数组" aria-hidden="true">#</a> 三、遍历数组</h1>
<p>遍历数组可以通过下标，或者增强foreach循环来进行元素的遍历</p>
<h2 id="_3-1-普通for循环" tabindex="-1"><a class="header-anchor" href="#_3-1-普通for循环" aria-hidden="true">#</a> 3.1 普通for循环</h2>
<p>因为可以使用<code v-pre>arr[index]</code>方式访问元素，所以我们可以通过<code v-pre>arr.length</code>来循环获取不同索引的值；</p>
<p>但是注意:索引的范围是:<code v-pre>0-(length-1)</code>,不能大于等于<code v-pre>length</code>因为下标是从<code v-pre>0</code>开始计算。不然抛出数组越界异常</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>score<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>score2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是将score数组中所有的元素遍历了一次，并打印出来</p>
<h2 id="_3-2-增强for循环" tabindex="-1"><a class="header-anchor" href="#_3-2-增强for循环" aria-hidden="true">#</a> 3.2 增强for循环</h2>
<p>Java有一种功能很强的循环结构，可以用来依次处理数组中的每个元素而不必为指定下标值而分心。
这种增强的for循环的语句格式为：</p>
<p><code v-pre>for(variable : arr)statement</code></p>
<p>例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">85</span><span class="token punctuation">,</span><span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> ele<span class="token operator">:</span>score<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ele<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种语法和上面普通的for循环达到的效果是一样的。这种<code v-pre>for each</code>循环语句显得更加简洁、更不易出错</p>
<h1 id="四、数组拷贝" tabindex="-1"><a class="header-anchor" href="#四、数组拷贝" aria-hidden="true">#</a> 四、数组拷贝</h1>
<p>如果希望将一个数组的所有值拷贝到一个新的数组中去，就要使用Arrays类的copyOf方法：</p>
<p>第2个参数是新数组的长度。这个方法通常用来增加数组的大小</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> score<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//长度超过原数据的部分：使用默认0替代</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr01 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>score<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//长度不足的，从前往后取对应的数据</span>
<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArr02 <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>score<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"原数组 = "</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"新数组1 = "</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr01<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"新数组2 = "</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>newArr02<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20210713155112696.png?imageslim" alt="image-20210713155112696" loading="lazy"></p>
<p>注意事项：</p>
<ul>
<li>如果数组元素是数值型，那么多余的元素将被赋值为0；</li>
<li>如果数组元素是布尔型，则将赋值为false。</li>
<li>相反，如果长度小于原始数组的长度，则只拷贝最前面的数据元素。</li>
</ul>
<h1 id="五、数组排序" tabindex="-1"><a class="header-anchor" href="#五、数组排序" aria-hidden="true">#</a> 五、数组排序</h1>
<h3 id="_5-1-arrays工具类排序" tabindex="-1"><a class="header-anchor" href="#_5-1-arrays工具类排序" aria-hidden="true">#</a> 5.1 Arrays工具类排序</h3>
<blockquote>
<p>java.util.Arrays：属于工具类，所以在使用之前，必须先导包</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> score <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">,</span><span class="token number">78</span><span class="token punctuation">,</span><span class="token number">88</span><span class="token punctuation">,</span><span class="token number">69</span><span class="token punctuation">,</span><span class="token number">70</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> ch<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"B"</span><span class="token punctuation">,</span><span class="token string">"C"</span><span class="token punctuation">,</span><span class="token string">"A"</span><span class="token punctuation">,</span><span class="token string">"F"</span><span class="token punctuation">,</span><span class="token string">"D"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"排序前:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//进行排序</span>
    <span class="token comment">//1.只提供了升序排序 从小到大  没有提供降序。自己去实现</span>
    <span class="token comment">//2.也叫做自然顺序。 A(65) B(66) C(67) D(68)</span>
    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"排序后:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ch<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ch<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20200821134539385.png?imageslim" alt="image-20200821134539385" loading="lazy"></p>
<h3 id="_4-2-通过算法实现排序-冒泡" tabindex="-1"><a class="header-anchor" href="#_4-2-通过算法实现排序-冒泡" aria-hidden="true">#</a> 4.2 通过算法实现排序(冒泡)</h3>
<p>升序为例：</p>
<ol>
<li>将相邻的两个数，进行比较，将大的数据往后移动。依次循环进行比较，从而找到最大的数据</li>
<li>由于每一次循环只能确定一个数据，所以需要多次嵌套循环来完成最终的排序</li>
<li>详细如下图</li>
</ol>
<p><img src="http://img.itzhameng.com/blog/冒泡排序.jpg?imageslim" alt="冒泡排序" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

 
    <span class="token comment">//i=0 {89,78,88,69,70,99};</span>
    <span class="token comment">//i=1 {78,88,69,70,89,99};</span>
    <span class="token comment">//i=2 {78,69,70,88,89,99};</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"第原始的结果:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> score<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>score<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//排序：把前面几次排好了，最后一个自动确定了位置 。少排序一次</span>
    <span class="token comment">//每次选一个最大的</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> score<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//相邻的两个进行比较，把大的往后移</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> score<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果说 前面比后面的大，两者更换位置</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>score<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>score<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//两两互换，通过临时变量</span>
                <span class="token keyword">int</span> temp <span class="token operator">=</span> score<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
                score<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> score<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                score<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"第"</span><span class="token operator">+</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"次执行的结果:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> score<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>score<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">"\t"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
