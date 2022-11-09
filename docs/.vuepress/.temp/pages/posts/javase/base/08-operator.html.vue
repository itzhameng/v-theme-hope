<template><div><h1 id="java运算符" tabindex="-1"><a class="header-anchor" href="#java运算符" aria-hidden="true">#</a> Java运算符</h1>
<p>Java提供了多种运算符来满足正常的需求，我们可以将运算符分为以下几类：</p>
<ul>
<li>算术运算符</li>
<li>赋值运算符</li>
<li>比较运算符(关系运算符)</li>
<li>逻辑运算符</li>
<li>位运算符</li>
<li>三元运算符</li>
</ul>
<h2 id="_5-1-算术运算符" tabindex="-1"><a class="header-anchor" href="#_5-1-算术运算符" aria-hidden="true">#</a> 5.1 算术运算符</h2>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>运算符</strong></th>
<th style="text-align:left"><strong>运算</strong></th>
<th style="text-align:left"><strong>范例</strong></th>
<th style="text-align:left"><strong>结果</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>+</strong></td>
<td style="text-align:left">正号</td>
<td style="text-align:left">+3</td>
<td style="text-align:left">3</td>
</tr>
<tr>
<td style="text-align:left"><strong>-</strong></td>
<td style="text-align:left">负号</td>
<td style="text-align:left">b=4; -b</td>
<td style="text-align:left">-4</td>
</tr>
<tr>
<td style="text-align:left"><strong>+</strong></td>
<td style="text-align:left">加</td>
<td style="text-align:left">5+5</td>
<td style="text-align:left">10</td>
</tr>
<tr>
<td style="text-align:left"><strong>-</strong></td>
<td style="text-align:left">减</td>
<td style="text-align:left">6-4</td>
<td style="text-align:left">2</td>
</tr>
<tr>
<td style="text-align:left">*****</td>
<td style="text-align:left">乘</td>
<td style="text-align:left">3*4</td>
<td style="text-align:left">12</td>
</tr>
<tr>
<td style="text-align:left"><strong>/</strong></td>
<td style="text-align:left">除</td>
<td style="text-align:left">5/5</td>
<td style="text-align:left">1</td>
</tr>
<tr>
<td style="text-align:left"><strong>%</strong></td>
<td style="text-align:left">取模、取余</td>
<td style="text-align:left">5%5</td>
<td style="text-align:left">0</td>
</tr>
<tr>
<td style="text-align:left"><strong>++</strong> <strong>++</strong></td>
<td style="text-align:left">自增（前）：先运算后取值 自增（后）：先取值后运算</td>
<td style="text-align:left">a=2;b=++a; a=2;b=a++;</td>
<td style="text-align:left">a=3;b=3 a=3;b=2</td>
</tr>
<tr>
<td style="text-align:left"><strong>- -</strong> <strong>- -</strong></td>
<td style="text-align:left">自减（前）：先运算后取值 自减（后）：先取值后运算</td>
<td style="text-align:left">a=2;b=- -a a=2;b=a- -</td>
<td style="text-align:left">a=1;b=1 a=1;b=2</td>
</tr>
<tr>
<td style="text-align:left"><strong>+</strong></td>
<td style="text-align:left">字符串相加</td>
<td style="text-align:left">“He”+”llo”</td>
<td style="text-align:left">“Hello”</td>
</tr>
</tbody>
</table>
<h2 id="_5-2-赋值运算符" tabindex="-1"><a class="header-anchor" href="#_5-2-赋值运算符" aria-hidden="true">#</a> 5.2  赋值运算符</h2>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">运算</th>
<th style="text-align:left">范例</th>
<th style="text-align:left">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">=</td>
<td style="text-align:left">赋值</td>
<td style="text-align:left">b=5</td>
<td style="text-align:left">5</td>
</tr>
<tr>
<td style="text-align:left">+=, -=, *=, /=, %=</td>
<td style="text-align:left">计算完再赋值</td>
<td style="text-align:left">b = 5;b+=2</td>
<td style="text-align:left">7</td>
</tr>
</tbody>
</table>
<h2 id="_5-3-比较运算符-关系运算符" tabindex="-1"><a class="header-anchor" href="#_5-3-比较运算符-关系运算符" aria-hidden="true">#</a> 5.3 比较运算符（关系运算符）</h2>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>运算符</strong></th>
<th style="text-align:left">**运算 **</th>
<th style="text-align:left">范例</th>
<th style="text-align:left">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>==</strong></td>
<td style="text-align:left">相等于</td>
<td style="text-align:left">4==3</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">!=</td>
<td style="text-align:left">不等于</td>
<td style="text-align:left">4!=3</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">&lt;</td>
<td style="text-align:left">小于</td>
<td style="text-align:left">4&lt;3</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">&gt;</td>
<td style="text-align:left">大于</td>
<td style="text-align:left">4&gt;3</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">&lt;=</td>
<td style="text-align:left">小于等于</td>
<td style="text-align:left">4&lt;=3</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">&gt;=</td>
<td style="text-align:left">大于等于</td>
<td style="text-align:left">4&gt;=3</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left"><strong>instanceof</strong></td>
<td style="text-align:left">检查是否是类的对象</td>
<td style="text-align:left">“Hello” instanceof String</td>
<td style="text-align:left">true</td>
</tr>
</tbody>
</table>
<h2 id="_5-4-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_5-4-逻辑运算符" aria-hidden="true">#</a> 5.4 逻辑运算符</h2>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>运算符</strong></th>
<th style="text-align:left"><strong>运算</strong></th>
<th style="text-align:left"><strong>范例</strong></th>
<th style="text-align:left"><strong>结果</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">&amp;</td>
<td style="text-align:left">AND(与)</td>
<td style="text-align:left">false &amp; true</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">|</td>
<td style="text-align:left">OR(或)</td>
<td style="text-align:left">false|true</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">^</td>
<td style="text-align:left">XOR(异或)</td>
<td style="text-align:left">true^false</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left"><strong>!</strong></td>
<td style="text-align:left">Not(非)</td>
<td style="text-align:left">!true</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left"><strong>&amp;&amp;</strong></td>
<td style="text-align:left">AND(<strong>短路</strong>)</td>
<td style="text-align:left">false&amp;&amp;true</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left"><strong>||</strong></td>
<td style="text-align:left">OR(<strong>短路</strong>)</td>
<td style="text-align:left">false||true</td>
<td style="text-align:left">true</td>
</tr>
</tbody>
</table>
<h2 id="_5-5-三元运算符" tabindex="-1"><a class="header-anchor" href="#_5-5-三元运算符" aria-hidden="true">#</a> 5.5 三元运算符</h2>
<p>三元运算符，主要是根据条件表达式的不同，选择不能的结果</p>
<p>就类型if...else分支语句一样，可以到达二选一结果。</p>
<p>例如：成绩大于等于60分表示**<u>及格</u><strong>，否则就是</strong><u>不及格</u>**</p>
<blockquote>
<p>//语法
(条件表达式)?表达式1：表达式2
-如果条件表达式为true,运算后的结果是表达式1；
-如果条件表达式为false,运算后的结果是表达式2；</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//范例     </span>
<span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token number">666</span><span class="token operator">:</span><span class="token number">250</span><span class="token punctuation">;</span>
因为<span class="token number">100</span><span class="token operator">></span><span class="token number">1</span>返回的是<span class="token boolean">true</span><span class="token punctuation">,</span>所以最终num1的结果是<span class="token number">666</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6-位运算符-了解" tabindex="-1"><a class="header-anchor" href="#_5-6-位运算符-了解" aria-hidden="true">#</a> 5.6 位运算符(了解)</h2>
<h3 id="_5-6-1-进制简介" tabindex="-1"><a class="header-anchor" href="#_5-6-1-进制简介" aria-hidden="true">#</a> 5.6.1 进制简介</h3>
<ul>
<li>所有数字在计算机底层都以二进制形式存在。 最终结果：0 或者 1</li>
<li>对于整数，有四种表示方式：
<ul>
<li><span style="color: red">二进制(binary)：</span>0,1 ，满2进1.以<mark>0b</mark>或<mark>0B</mark>开头。</li>
<li><span style="color: red">十进制(decimal)：</span>0-9 ，满10进1。</li>
<li><span style="color: red">八进制(octal)：</span>0-7 ，满8进1. 以数字<mark>0</mark>开头表示。</li>
<li><span style="color: red">十六进制(hex)：</span>0-9及A-F，满16进1. 以<mark>0x</mark>或<mark>0X</mark>开头表示。此处的A-F不区分大小写。 如： 0x21AF +1= 0X21B0</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th><strong>十进制</strong></th>
<th><strong>十六进制</strong></th>
<th><strong>八进制</strong></th>
<th><strong>二进制</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>1</td>
<td>1</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>2</td>
<td>2</td>
<td>10</td>
</tr>
<tr>
<td>3</td>
<td>3</td>
<td>3</td>
<td>11</td>
</tr>
<tr>
<td>4</td>
<td>4</td>
<td>4</td>
<td>100</td>
</tr>
<tr>
<td>5</td>
<td>5</td>
<td>5</td>
<td>101</td>
</tr>
<tr>
<td>6</td>
<td>6</td>
<td>6</td>
<td>110</td>
</tr>
<tr>
<td>7</td>
<td>7</td>
<td>7</td>
<td>111</td>
</tr>
<tr>
<td>8</td>
<td>8</td>
<td>10</td>
<td>1000</td>
</tr>
<tr>
<td>9</td>
<td>9</td>
<td>11</td>
<td>1001</td>
</tr>
<tr>
<td>10</td>
<td>A</td>
<td>12</td>
<td>1010</td>
</tr>
<tr>
<td>11</td>
<td>B</td>
<td>13</td>
<td>1011</td>
</tr>
<tr>
<td>12</td>
<td>C</td>
<td>14</td>
<td>1100</td>
</tr>
<tr>
<td>13</td>
<td>D</td>
<td>15</td>
<td>1101</td>
</tr>
<tr>
<td>14</td>
<td>E</td>
<td>16</td>
<td>1110</td>
</tr>
<tr>
<td>15</td>
<td>F</td>
<td>17</td>
<td>1111</td>
</tr>
<tr>
<td>16</td>
<td>10</td>
<td>20</td>
<td>10000</td>
</tr>
<tr>
<td>17</td>
<td>11</td>
<td>21</td>
<td>10001</td>
</tr>
</tbody>
</table>
<h3 id="_5-6-2-二进制" tabindex="-1"><a class="header-anchor" href="#_5-6-2-二进制" aria-hidden="true">#</a> 5.6.2 二进制</h3>
<p><img src="http://img.itzhameng.com/blog/wps7333.tmp.jpg?imageslim" alt="img" loading="lazy">Java整数常量默认是int类型，当用二进制定义整数时，其第32位是符号位； 当是long类型时，二进制默认占64位，第64位是符号位</p>
<p><img src="http://img.itzhameng.com/blog/wps7333.tmp.jpg?imageslim" alt="img" loading="lazy">二进制的整数有如下三种形式：</p>
<p>​	<img src="http://img.itzhameng.com/blog/wps7334.tmp.jpg?imageslim" alt="img" loading="lazy">原码：直接将一个数值换成二进制数。最高位是符号位</p>
<p>​	<img src="http://img.itzhameng.com/blog/wps7345.tmp.jpg?imageslim" alt="img" loading="lazy">负数的反码：是对原码按位取反，只是最高位（符号位）确定为1。</p>
<p>​	<img src="http://img.itzhameng.com/blog/wps7346.tmp.jpg?imageslim" alt="img" loading="lazy">负数的补码：其反码加1。</p>
<p><img src="http://img.itzhameng.com/blog/wps7347.tmp.jpg?imageslim" alt="img" loading="lazy">计算机以二进制补码的形式保存所有的整数。</p>
<p>​	<img src="http://img.itzhameng.com/blog/wps7348.tmp.jpg?imageslim" alt="img" loading="lazy">正数的原码、反码、补码都相同</p>
<p>​	<img src="http://img.itzhameng.com/blog/wps7349.tmp.jpg?imageslim" alt="img" loading="lazy">负数的补码是其反码+1</p>
<p><img src="http://img.itzhameng.com/blog/wps7347.tmp.jpg?imageslim" alt="img" loading="lazy">计算机以二进制补码的形式保存所有的整数。</p>
<p>​	<img src="http://img.itzhameng.com/blog/wps7334.tmp.jpg?imageslim" alt="img" loading="lazy">计算机辨别“符号位”显然会让计算机的基础电路设计变得十分复杂! 于是 人们想出了将符号位也参与运算的方法. 我们知道, 根据运算法则减去一个正 数等于加上一个负数, 即: 1-1 = 1 + (-1) = 0 , 所以机器可以只有加法而没有 减法, 这样计算机运算的设计就更简单了。</p>
<p><img src="http://img.itzhameng.com/blog/image-20211216100001364.png?imageslim" alt="image-20211216100001364" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20211216095857602.png?imageslim" alt="image-20211216095857602" loading="lazy"></p>
<h3 id="_5-6-3-进制转换" tabindex="-1"><a class="header-anchor" href="#_5-6-3-进制转换" aria-hidden="true">#</a> 5.6.3 进制转换</h3>
<p><img src="http://img.itzhameng.com/blog/wpsD7C0.tmp.jpg?imageslim" alt="img" loading="lazy">进制的基本转换</p>
<p><img src="http://img.itzhameng.com/blog/wpsD7C1.tmp.jpg?imageslim" alt="img" loading="lazy">十进制 二进制互转</p>
<p>​	<img src="http://img.itzhameng.com/blog/wpsD7C2.tmp.jpg?imageslim" alt="img" loading="lazy"> 二进制转成十进制 乘以<strong>2</strong>的幂数</p>
<p>​	<img src="http://img.itzhameng.com/blog/wpsD7C3.tmp.jpg?imageslim" alt="img" loading="lazy"> 十进制转成二进制 除以<strong>2</strong>取余数</p>
<p><img src="http://img.itzhameng.com/blog/wpsD7D3.tmp.jpg?imageslim" alt="img" loading="lazy">二进制 八进制互转</p>
<p><img src="http://img.itzhameng.com/blog/wpsD7D4.tmp.jpg?imageslim" alt="img" loading="lazy">二进制 十六进制互转</p>
<p><img src="http://img.itzhameng.com/blog/wpsD7D5.tmp.jpg?imageslim" alt="img" loading="lazy">十进制 八进制互转</p>
<p><img src="http://img.itzhameng.com/blog/wpsD7D6.tmp.jpg?imageslim" alt="img" loading="lazy">十进制十六进制互转</p>
<p><img src="http://img.itzhameng.com/blog/image-20211216100556331.png?imageslim" alt="image-20211216100556331" loading="lazy"></p>
<blockquote>
<p>不同进制之间转换，可以使用二进制作为中转站</p>
</blockquote>
<h3 id="_5-6-4-位运算" tabindex="-1"><a class="header-anchor" href="#_5-6-4-位运算" aria-hidden="true">#</a> 5.6.4 位运算</h3>
<p>位运算是直接对整数的二进制进行的运算</p>
<table>
<thead>
<tr>
<th></th>
<th>位运算符</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>运算符</td>
<td>运算</td>
<td>范例</td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>左移</td>
<td>3 &lt;&lt; 2 = 12 --&gt; 3<em>2</em>2=12</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>右移</td>
<td>3 &gt;&gt; 1 = 1 --&gt; 3/2=1</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>无符号右移</td>
<td>3 &gt;&gt;&gt; 1 = 1 --&gt; 3/2=1</td>
</tr>
<tr>
<td>&amp;</td>
<td>与运算</td>
<td>6 &amp; 3 = 2</td>
</tr>
<tr>
<td>|</td>
<td>或运算</td>
<td>6 | 3 = 7</td>
</tr>
<tr>
<td>^</td>
<td>异或运算</td>
<td>6 ^ 3 = 5</td>
</tr>
<tr>
<td>~</td>
<td>取反运算</td>
<td>~6 = -7</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>位运算符的细节</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;&lt;</td>
<td>空位补0，被移除的高位丢弃，空缺位补0。</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>被移位的二进制最高位是0，右移后， 空缺位补0；最高位是1，空缺位补1。</td>
</tr>
<tr>
<td>&gt;&gt;&gt;</td>
<td>被移位二进制最高位无论是0或者是1，空缺位都用0补。</td>
</tr>
<tr>
<td>&amp;</td>
<td>二进制位进行&amp;运算，只有1&amp;1时结果是1，否则是0;</td>
</tr>
<tr>
<td>|</td>
<td>二进制位进行 | 运算，只有0 | 0时结果是0，否则是1;</td>
</tr>
<tr>
<td>^</td>
<td>相同二进制位进行 ^ 运算，结果是0；1^1=0 , 0^0=0不相同二进制位 ^ 运算结果是1 。1^0=1 , 0^1=1</td>
</tr>
<tr>
<td>~</td>
<td>正数取反，各二进制码按补码各位取反负数取反，各二进制码按补码各位取反</td>
</tr>
</tbody>
</table>
</div></template>
