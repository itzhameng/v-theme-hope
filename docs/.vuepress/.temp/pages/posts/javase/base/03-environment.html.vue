<template><div><h1 id="java环境搭建" tabindex="-1"><a class="header-anchor" href="#java环境搭建" aria-hidden="true">#</a> Java环境搭建</h1>
<h1 id="三、java环境搭建" tabindex="-1"><a class="header-anchor" href="#三、java环境搭建" aria-hidden="true">#</a> 三、Java环境搭建</h1>
<h2 id="_1、什么是jdk-jre" tabindex="-1"><a class="header-anchor" href="#_1、什么是jdk-jre" aria-hidden="true">#</a> 1、什么是JDK, JRE</h2>
<ul>
<li><strong>JDK(<span style="color: red">J</span>ava <span style="color: red">D</span>evelopment <span style="color: red">K</span>it  Java开发工具包)</strong>
<ul>
<li>JDK是提供给 Java 开发人员使用的，其中包含了 java 的开发工具，也包括了JRE。所以安装了JDK，就不用在单独安装JRE了</li>
</ul>
</li>
<li><strong>JRE(<span style="color: red">J</span>ava <span style="color: red">R</span>untime <span style="color: red">E</span>nvironment  Java运行环境) ：</strong>
<ul>
<li>包括Java虚拟机(JVM：<span style="color: red">J</span>ava <span style="color: red">V</span>irtual <span style="color: red">M</span>achine)和 Java 程序所需的核心类库等，如果想要<span style="color: red">运行</span>一个开发好的Java程序，计算机中只需要安装JRE即可。</li>
</ul>
</li>
</ul>
<blockquote>
<p>简单而言，使用  JDK  的提供的开发工具完成 java 程序的开发，使用 JRE 运行开发好的 Java 应用程序。</p>
</blockquote>
<h2 id="_2、jdk-jre-jvm-关系sss" tabindex="-1"><a class="header-anchor" href="#_2、jdk-jre-jvm-关系sss" aria-hidden="true">#</a> 2、JDK , JRE ,JVM 关系sss</h2>
<p>JDK = JRE + 开发工具集（例如 Javac 编译工具 等）
JRE = JVM + Java SE 标准类库</p>
<p><img src="http://img.itzhameng.com/blog/image-20211214103722267.png?imageslim" alt="image-20211214103722267" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20211214103711179.png?imageslim" alt="image-20211214103711179" loading="lazy"></p>
<h2 id="_3、下载及安装-jdk" tabindex="-1"><a class="header-anchor" href="#_3、下载及安装-jdk" aria-hidden="true">#</a> 3、下载及安装 JDK</h2>
<h3 id="_3-1下载地址" tabindex="-1"><a class="header-anchor" href="#_3-1下载地址" aria-hidden="true">#</a> 3.1下载地址</h3>
<p><strong>下载：</strong> 官方网址：</p>
<p><a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html%E3%80%81" target="_blank" rel="noopener noreferrer">https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html、<ExternalLinkIcon/></a></p>
<p>根据版本和平台现在对应的下载链接。</p>
<p>这里以<code v-pre>jdk8</code>和 <code v-pre>Windows</code>系统为例</p>
<p><img src="http://img.itzhameng.com/blog/jdk.png?imageslim" alt="1552234653725" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20211214104625526.png?imageslim" alt="image-20211214104625526" loading="lazy"></p>
<h3 id="_3-2-安装jdk" tabindex="-1"><a class="header-anchor" href="#_3-2-安装jdk" aria-hidden="true">#</a> 3.2 安装JDK</h3>
<p><strong>傻瓜式安装</strong>，下一步即可。</p>
<ul>
<li>建议：安装路径不要有<code v-pre>中文</code>或者特殊符号如空格等。</li>
<li>如果操作系统是 64 位的，软件尽量选择支持 64 位的（除非软件本身不区分 。</li>
<li>当 提示安装 JRE 时，正常在 JDK 安装时已经装过了，但是为了后续使用 Eclipse 等开发
工具不报错，建议也根据提示安装 JRE 。</li>
</ul>
<blockquote>
<p>默认安装路径: <code v-pre>C:\Program Files\Java</code></p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20211214105326055.png?imageslim" alt="image-20211214105326055" loading="lazy"></p>
<h3 id="_3-2-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-2-配置环境变量" aria-hidden="true">#</a> 3.2 配置环境变量</h3>
<p>每次执行java 的工具都要进入到 bin 目录下，是非常麻烦的。可不可以在<mark>任何目录下</mark>都可以执行 java 的工具呢？</p>
<p><img src="http://img.itzhameng.com/blog/image-20211214110309781.png?imageslim" alt="image-20211214110309781" loading="lazy"></p>
<p>根据 windows 系统在<span style="color: red">查找可执行程序的原理</span>，可以将 java 工具所在路径定义到<span style="color: red">path</span> 环境变量中，让系统帮我们去找运行执行的程序。</p>
<p>配置方法：</p>
<ul>
<li>第一步:打开-计算机-属性-高级系统设置-环境变量-系统变量</li>
<li>第二步:进行配置（JAVA_HOME,PATH,CLASSPATH）
<ul>
<li>JAVA_HOME:另似给jdk全路径取一个别名。然后使用的时候直接使用别名</li>
<li>PATH:通过PATH,在DOS命令行找到对应的命令。java  javac</li>
<li>CLASSPATH:JDK1.5之后，可以选择性安装，建议安装。最前面一定要配置一个.(点)</li>
</ul>
</li>
<li>编辑 path 环境变量，在变量值开始处加上 java 工具所在目录，后面用 ““; 和其他值分隔开即可。</li>
</ul>
<p>参考配置如下:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token constant">JAVA_HOME</span> <span class="token operator">=</span> <span class="token class-name">C</span><span class="token operator">:</span>\<span class="token class-name">Program</span> <span class="token class-name">Files</span>\<span class="token class-name">Java</span>\jdk1<span class="token punctuation">.</span><span class="token number">8.0_73</span>
<span class="token constant">PATH</span> <span class="token operator">=</span> <span class="token operator">%</span><span class="token constant">JAVA_HOME</span><span class="token operator">%</span>\bin<span class="token punctuation">;</span><span class="token operator">%</span><span class="token constant">JAVA_HOME</span><span class="token operator">%</span>\jre\bin<span class="token punctuation">;</span>
<span class="token constant">CLASSPATH</span> <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">;</span><span class="token operator">%</span><span class="token constant">JAVA_HOME</span><span class="token operator">%</span>\lib\dt<span class="token punctuation">.</span>jar<span class="token punctuation">;</span><span class="token operator">%</span><span class="token constant">JAVA_HOME</span><span class="token operator">%</span>\lib\tools<span class="token punctuation">.</span>jar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 DOS 命令行，任意目录下敲入 <code v-pre>javac</code> 。如果出现 javac 的参数信息，配置成功。</p>
<p><img src="http://img.itzhameng.com/blog/image-20211214112504346.png?imageslim" alt="image-20211214112504346" loading="lazy"></p>
<p>如果出现如下错误，证明环境变量没有配置成功：注意检查是否有多余的<span style="color: red">分号</span></p>
<p><img src="http://img.itzhameng.com/blog/image-20211214112818604.png?imageslim" alt="image-20211214112818604" loading="lazy"></p>
<h1 id="四、helloworld入门程序" tabindex="-1"><a class="header-anchor" href="#四、helloworld入门程序" aria-hidden="true">#</a> 四、HelloWorld入门程序</h1>
<p>步骤：</p>
<ol>
<li>将 Java 代码 <span style="color: red">编写</span> 到扩展名为 .java 的文件中。</li>
<li>通过 javac 命令对该 java 文件进行 <span style="color: red">编译</span> 。</li>
<li>通过 java 命令对生成的 class 文件进行 <span style="color: red">运行</span> 。</li>
</ol>
<p><img src="http://img.itzhameng.com/blog/image-20211214114253093.png?imageslim" alt="image-20211214114253093" loading="lazy"></p>
<h2 id="_1、-显示已知文件的扩展名" tabindex="-1"><a class="header-anchor" href="#_1、-显示已知文件的扩展名" aria-hidden="true">#</a> 1、 显示已知文件的扩展名</h2>
<p>如果电脑默认没有显示后缀名，我们是无法去修改对应的名称。<br/>所以一定要将后缀名显示出来，避免造成文件和文件类型不一致的情况。</p>
<p>查看本地地方文件夹</p>
<p><img src="http://img.itzhameng.com/blog/file.png?imageslim" alt="1552234976867" loading="lazy"></p>
<h2 id="_2、编写源代码" tabindex="-1"><a class="header-anchor" href="#_2、编写源代码" aria-hidden="true">#</a> 2、编写源代码</h2>
<h3 id="_2-1-创建文件" tabindex="-1"><a class="header-anchor" href="#_2-1-创建文件" aria-hidden="true">#</a> 2.1 创建文件</h3>
<p>创建文本文件修改后缀为.java；<strong>例如:HelloWrold.java</strong></p>
<p><img src="http://img.itzhameng.com/blog/image-20211214114348688.png?imageslim" alt="image-20211214114348688" loading="lazy"></p>
<blockquote>
<p>如果没有出现Java文件，请检查 后缀名是否真的改变了。还有就是文件后缀名是否显示出来了。</p>
</blockquote>
<h3 id="_2-2-代码" tabindex="-1"><a class="header-anchor" href="#_2-2-代码" aria-hidden="true">#</a> 2.2.代码</h3>
<p>文件名必须和源代码中的class类名保持一致</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//HelloWorld由于被public 修饰，所有必须和文件名保持一致</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>
<span class="token comment">//程序的入口</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//打印信息到控制台</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello Java....."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-具体细节" tabindex="-1"><a class="header-anchor" href="#_2-3-具体细节" aria-hidden="true">#</a> 2.3.具体细节</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>- main的方法：
	Java应用程序的执行入口是main()方法。它有固定的书写格式：
	public static void main(String[] args)  {...}
     如果没有 main 方法则在运行时会抛出如下异常
	【java.lang.NoSuchMethodError:main】
- 想要和JVM来个互动，只要在main方法中加入一句System.out.println(“Hello World”);  
- 一个 Java 源文件中最多只能有一个 public  类。其它类的个数不限，
	如果源文件文件包含一个 public 类，它必	须是该类名命名。
- Java 语言严格区分大小写。
- Java方法由一条条语句构成，每个语句以分号结束。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-编译" tabindex="-1"><a class="header-anchor" href="#_2-4-编译" aria-hidden="true">#</a> 2.4 编译</h3>
<p>java提供了javac命令用于编译：</p>
<p>编译命令：<code v-pre>javac HelloWorld.java </code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>编译<span class="token class-name">HelloWorld</span><span class="token punctuation">.</span>java文件，编译成功会生成<span class="token class-name">HelloWorld</span><span class="token punctuation">.</span><span class="token keyword">class</span>文件
 <span class="token operator">-</span> javac <span class="token class-name">HelloWorld</span><span class="token punctuation">.</span>java

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20211215104601428.png?imageslim" alt="image-20211215104601428" loading="lazy"></p>
<h3 id="_2-5-运行" tabindex="-1"><a class="header-anchor" href="#_2-5-运行" aria-hidden="true">#</a> 2.5 运行</h3>
<p>运行命令<code v-pre>java HelloWorld</code></p>
<ul>
<li>java HelloWorld</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/image-20211215104714051.png?imageslim" alt="image-20211215104714051" loading="lazy"></p>
<h3 id="_2-6-java注释" tabindex="-1"><a class="header-anchor" href="#_2-6-java注释" aria-hidden="true">#</a> 2.6 java注释</h3>
<p>注释：用于解释说明程序的文字、提高了代码的阅读性</p>
<p>Java中的注释类型：</p>
<ul>
<li>
<p>单行注释：格式： //注释文字</p>
</li>
<li>
<p>多行注释：格式： 	/*  注释文字 */</p>
</li>
<li>
<p>文档注释（java 特有）</p>
<ul>
<li>
<p>注释内容可以被 JDK 提供的工具 javadoc 所解析，生成一套以网页文件形式体现的该程序的说明文档。</p>
</li>
<li>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#生成文档命令</span>
javadoc <span class="token parameter variable">-d</span> mydoc <span class="token parameter variable">-author</span> <span class="token parameter variable">-version</span> HelloWorld.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p>注释是一个程序员必须要具有的良好编程习惯。将自己的思想通过注释先整理出来，再用代码去体现</p>
<p>对于单行和多行注释，被注释的文字，不会被JVM（java虚拟机）解释执行。多行注释里面不允许有多行注释嵌套。</p>
<p><img src="http://img.itzhameng.com/blog/image-20211214142314068.png?imageslim" alt="image-20211214142314068" loading="lazy"></p>
<h3 id="_2-7-常见问题" tabindex="-1"><a class="header-anchor" href="#_2-7-常见问题" aria-hidden="true">#</a> 2.7 常见问题</h3>
<p>学习编程最容易犯的错是语法错误 。 Java 要求你必须按照语法规则编写代码。
如果你的程序违反了语法规则，例如：忘记了分号、大括号、引号，或者拼错了单词， java 编译器都会报语法错误。
<mark><span style="color: red">尝试着去看懂编译器会报告的错误信息。</span></mark></p>
<h3 id="_2-8-小结" tabindex="-1"><a class="header-anchor" href="#_2-8-小结" aria-hidden="true">#</a> 2.8 小结</h3>
<ul>
<li>
<p>Java 源文件以<code v-pre>java</code>为扩展名。源文件的基本组成部分是类 class 如本 例 中 的 <code v-pre>HelloWorld</code> 类。</p>
</li>
<li>
<p>Java 应用程序的执行入口是 main() 方法。它有固定的书写 格式</p>
<ul>
<li>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>Java 语言严格区分大小写。</p>
</li>
<li>
<p>Java 方法由一条条语句构成，每个语句以<code v-pre>;</code>结束。</p>
</li>
<li>
<p>大括号 都是成对出现的， 缺一不可。</p>
</li>
<li>
<p>一个源文件中最多只能有一个 <code v-pre>public</code> 类。其它类的个数不限，<strong>如果源文件包含一个 <code v-pre>public</code> 类，则文件名必须按该类名命名。</strong></p>
</li>
</ul>
<h2 id="_3、良好的编程风格" tabindex="-1"><a class="header-anchor" href="#_3、良好的编程风格" aria-hidden="true">#</a> 3、良好的编程风格</h2>
<p><strong>正确的注释和注释风格</strong></p>
<ul>
<li>使用文档注释来注释整个类或整个方法。</li>
<li>如果注释方法中的某一个步骤，使用单行或多行注释。</li>
</ul>
<p><strong>正确的缩进和空白</strong></p>
<ul>
<li>使用一次 tab 操作，实现缩进</li>
<li>运算符两边习惯性各加一个空格。比如： <code v-pre>2 + 4  =  6</code> 。</li>
</ul>
<p><strong>块的风格</strong></p>
<ul>
<li>Java API 源代码选择了<span style="color: red">行尾风格</span></li>
<li><img src="http://img.itzhameng.com/blog/image-20211214144812724.png?imageslim" alt="image-20211214144812724" loading="lazy"></li>
</ul>
<h1 id="五、java运行机制" tabindex="-1"><a class="header-anchor" href="#五、java运行机制" aria-hidden="true">#</a> 五、Java运行机制</h1>
<h2 id="_1、java-两种核心机制" tabindex="-1"><a class="header-anchor" href="#_1、java-两种核心机制" aria-hidden="true">#</a> 1、Java 两种核心机制</h2>
<ul>
<li>Java 虚拟机  (Java Virtal Machine)   简称：JVM</li>
<li>垃圾收集机制 (Garbage Collection) 简称：GC</li>
</ul>
<h2 id="_2、java虚拟机" tabindex="-1"><a class="header-anchor" href="#_2、java虚拟机" aria-hidden="true">#</a> 2、Java虚拟机</h2>
<ul>
<li>JVM 是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器 。</li>
<li>对于不同的平台，有不同的 虚拟机。</li>
<li>只有某平台提供了对应的 java 虚拟机， java 程序才可在此平台运行</li>
<li>Java 虚拟机机制屏蔽了底层运行平台的差别，实现了“ 一次编译，到处 运行</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/jvm.png?imageslim" alt="1552235860599" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20211214143738303.png?imageslim" alt="image-20211214143738303" loading="lazy"></p>
<h2 id="_3、垃圾回收gc" tabindex="-1"><a class="header-anchor" href="#_3、垃圾回收gc" aria-hidden="true">#</a> 3、垃圾回收GC</h2>
<ul>
<li>不再使用的内存空间应回收-----垃圾回收。
<ul>
<li>在 C/C++ 等语言中，由程序员负责回收无用内存。</li>
<li>Java 语言消除了程序员回收无用内存空间的责任：它提供一种系统级线程跟踪存储空间的分配情况。并在 JVM 空闲时，检查并释放那些可被释放的存储空间。</li>
</ul>
</li>
<li>垃圾回收在 Java 程序运行过程中自动进行，程序员无法 精确控制 和 干预。</li>
<li>Java 程序还会出现内存泄漏和内存溢出问题吗？ Yes!</li>
</ul>
<blockquote>
<p><strong>内存泄漏</strong>：是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄漏似乎不会有大的影响，但内存泄漏堆积后的后果就是内存溢出</p>
<p>**内存溢出：**指程序申请内存时，没有足够的内存供申请者使用，或者说，给了你一块存储int类型数据的存储空间，但是你却存储long类型的数据，那么结果就是内存不够用，此时就会报错OOM,即所谓的内存溢出</p>
</blockquote>
</div></template>
