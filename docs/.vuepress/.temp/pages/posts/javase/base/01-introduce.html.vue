<template><div><h1 id="java简介" tabindex="-1"><a class="header-anchor" href="#java简介" aria-hidden="true">#</a> Java简介</h1>
<h1 id="一、计算机编程语言介绍" tabindex="-1"><a class="header-anchor" href="#一、计算机编程语言介绍" aria-hidden="true">#</a> 一、计算机编程语言介绍</h1>
<p><img src="http://img.itzhameng.com/blog/aa.jpeg?imageslim" alt="img" loading="lazy"></p>
<h2 id="_1、软件开发简介" tabindex="-1"><a class="header-anchor" href="#_1、软件开发简介" aria-hidden="true">#</a> 1、软件开发简介</h2>
<p>软件，即一系列按照特定顺序组织的计算机数据和 指令的 集合。有<strong>系统软件</strong>和<strong>应用软件</strong> 之分。</p>
<p>软件开发的主要目的：就是为了解决现实生活中的问题。</p>
<p>例如：12306解决卖票问题，微信解决通信问题等。</p>
<h2 id="_2、软件交互方式" tabindex="-1"><a class="header-anchor" href="#_2、软件交互方式" aria-hidden="true">#</a> 2、软件交互方式</h2>
<p><code v-pre>图形化界面</code>(GraphicalUser Interface GUI)这种方式简单直观，使用者易于接受，容易上手操作。</p>
<p><strong><code v-pre>命令行方式</code></strong>(Command Line Interface CLI)：需要有一个控制台，输入特定的指令，让计算机完成一些操作。较为麻烦，需要记录住一些命令。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>常用的DOS命令
dir（directory） :    列出当前目录下的文件以及文件夹
md（make directory） :   创建目录
rd（remove  directory） :     删除目录
cd（change directory）:    进入指定目录
cd.. :  退回到上一级目录
cd \:    退回到根目录
exit :   退出 dos 命令行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://img.itzhameng.com/blog/image-20211214162326263.png?imageslim" alt="image-20211214162326263" loading="lazy"></p>
<h2 id="_3、什么是计算机语言" tabindex="-1"><a class="header-anchor" href="#_3、什么是计算机语言" aria-hidden="true">#</a> 3、什么是计算机语言</h2>
<p>**语言：**是人与人之间用于沟通的一种方式。例如：中国人与中国人用普通话沟通。而中国人要和英国人交流，就要学习英语。</p>
<p>**计算机语言（编程语言）：**人与计算机交流的方式。</p>
<p>如果人要与计算机交流，那么就要学习计算机语言。计算机语言有很多种，如：<strong>C，C++，Java，Python，PHP</strong>等。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>步骤(记事本):
	1.安装java运行环境(JDK)
	2.编写源代码
	3.编译源代码  javac
	4.运行编译后的class文件 java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、为什么选择java" tabindex="-1"><a class="header-anchor" href="#_4、为什么选择java" aria-hidden="true">#</a> 4、为什么选择java</h2>
<p>java可以说是无处不在，其市场占有率也在不断攀升。他已经吸收了全球最大的开发者队伍---500W+开发者这是全球最大最具活力的开发团队。</p>
<p>目前采用java的设备已经超过45亿，其中报告8亿台个人计算机、15亿部移动电话及其其他手持设备、22亿智能卡，以及机顶盒、打印机、网络照相机、游戏、汽车导航系统、彩票终端、医疗设备、收费站等。</p>
<p>以下是最新的编程语言排行榜：</p>
<p><strong>2019年03月编程语言排行榜TOP 10 榜单</strong></p>
<p><a href="https://hellogithub.com/report/tiobe/?url=/" target="_blank" rel="noopener noreferrer">https://hellogithub.com/report/tiobe/?url=/<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>排名</th>
<th>编程语言</th>
<th>流行度</th>
<th>对比上月</th>
<th>年度明星语言</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Java</td>
<td>14.880%</td>
<td>0.996%</td>
<td>2015, 2005</td>
</tr>
<tr>
<td>2</td>
<td>C</td>
<td>13.305%</td>
<td>0.881%</td>
<td>2017, 2008</td>
</tr>
<tr>
<td>3</td>
<td>Python</td>
<td>8.262%</td>
<td>0.688%</td>
<td>2010, 2007, 2018</td>
</tr>
<tr>
<td>4</td>
<td>C++</td>
<td>8.126%</td>
<td>0.682%</td>
<td>2003</td>
</tr>
<tr>
<td>5</td>
<td>Visual Basic .NET</td>
<td>6.429%</td>
<td>0.666%</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td>C#</td>
<td>3.267%</td>
<td>0.421%</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>JavaScript</td>
<td>2.426%</td>
<td>0.422%</td>
<td>2014</td>
</tr>
<tr>
<td>8</td>
<td>PHP</td>
<td>2.420%</td>
<td>0.149%</td>
<td>2004</td>
</tr>
<tr>
<td>9</td>
<td>SQL</td>
<td>1.926%</td>
<td>0.026%</td>
<td></td>
</tr>
<tr>
<td>10</td>
<td>Objective-C</td>
<td>1.681%</td>
<td>0.234%</td>
<td>2012, 2011</td>
</tr>
</tbody>
</table>
<h1 id="二、java语言概述" tabindex="-1"><a class="header-anchor" href="#二、java语言概述" aria-hidden="true">#</a> 二、Java语言概述</h1>
<h2 id="_1、java是什么" tabindex="-1"><a class="header-anchor" href="#_1、java是什么" aria-hidden="true">#</a> 1、java是什么</h2>
<p>学习之前需要了解,java是什么。</p>
<ul>
<li>java是sun公司推出的面向对象程序设计语言，特别适用于Interent应用程序开发,它的最大特点就是“一次编译，到处运行”。</li>
<li>并且能够在各种操作系统上运行,例如:windows，linux，mac等。</li>
</ul>
<p>从 Java 的应用领域来分， Java 语言的应用方向主要表现在以下几个方面：</p>
<ul>
<li><span style="color: red">企业级应用 </span>：主要指复杂的大企业的软件系统、各种类型的网站。 Java 的安全机制以及它的跨平台的优势，使它在分布式系统领域开发中有广泛应用。应用领域包括金融、电信、交通、电子商务等。</li>
<li><span style="color: red">Android 平台应用</span>: Android 应用程序使用 Java 语言编写。 Android 开发水平的高低很大程度上取决于 Java 语言核心能力是否扎实</li>
<li><span style="color: red">大数据平台开发 </span>：各类框架有 Hadoop spark storm flink 等，就这类技术生态圈来讲，还有各种中间件如 flume kafka sqoop 等等 ，这些框架以及工具大多数是用 Java 编写而成，但提供诸如 Java scala Python R 等各种语言 API 供编程。</li>
<li>移动 领域 应用：主要 表现在消费和嵌入式领域， 是 指在 各种小型设备上的应用，包括手机、 PDA 、机顶盒、汽车通信设备等。</li>
</ul>
<h2 id="_2、java-语言的诞生" tabindex="-1"><a class="header-anchor" href="#_2、java-语言的诞生" aria-hidden="true">#</a> 2、Java 语言的诞生</h2>
<p><img src="http://img.itzhameng.com/blog/abc.jpeg?imageslim" alt="img" loading="lazy"></p>
<p>java之 父 James Gosling 团队在开发 ” 项目时，发现 C 缺少垃圾回收系统，还有可移植的安全性、 分布 程序设计和 多线程功能。最后，他们想要一种易于移植到各种设备上的平台。Java确实是从 C 语言和 C++ 语言继承了许多成份，甚至可以将 Java 看成是 类 C 语言 发展和衍生的产物。比如 Java 语言的变量声明，操作符形式，参数传递，流程控制等方面和 C 语言、 C++ 语言完全相同。但同时， Java 是一个 纯粹的面向对象 的程序设计语言，它 继承 了 C 语言面向对象技术的核心。 Java 舍弃了 C 语言中容易引起错误的指针 （以引用取）、运算符重载（ operator overloading ）、多重继承（以接口取代）等特性 增加了垃圾回收器功能 用于回收不再被引用的对象所占据的内存空间。 JDK1.5 又引入了泛型编程（ GenericProgramming ）、类型安全的枚举、不定长参数和自动装 拆箱</p>
<p>**名称的由来：**Java是印度尼西亚爪哇岛的英文名称，因盛产咖啡而闻名。Java语言中的许多库类名称，多与咖啡有关，如JavaBeans(咖啡豆)、NetBeans(网络豆)以及ObjectBeans (对象豆)等等。SUN和JAVA的标识也正是一杯正冒着热气的咖啡。Java自1995诞生，至今已经20多年的历史。</p>
<h2 id="_3、java发展史" tabindex="-1"><a class="header-anchor" href="#_3、java发展史" aria-hidden="true">#</a> 3、java发展史</h2>
<p><img src="http://img.itzhameng.com/blog/java.jpg?imageslim" alt="" loading="lazy"></p>
<ul>
<li>
<p><strong>1991 年 Green 项目，开发语言最初命名为 Oak ( 橡树</strong></p>
</li>
<li>
<p>1994 年，开发组意识到 Oak 非常适合于互联网</p>
</li>
<li>
<p>19 9 6 年，发布 JDK 1 0 ，约 8.3 万个网页应用 Java 技术来制作</p>
</li>
<li>
<p>1997 年，发布 JDK 1.1 JavaOne 会议召开，创当时全球同类会议规模之最</p>
</li>
<li>
<p>19 98 年，发布 JDK 1. 2 ，同年发布企业平台 J2EE</p>
</li>
<li>
<p>1999 年 Java 分成 J2SE 、 J2EE 和 J2ME JSP/Servlet 技术诞生</p>
</li>
<li>
<p><strong>2004 年， 发布里程碑式版本： JDK 1.5 为突出此 版本的重要性，更名为 JDK 5.0</strong></p>
</li>
<li>
<p>2005 年 J2SE --&gt; JavaSE J2EE --&gt; JavaEE J2ME --&gt; JavaME</p>
</li>
<li>
<p><strong>2009 年， Oracle 公司收购 SUN ，交易价格 74 亿美元</strong>，Java版权一并归Oracle所有</p>
</li>
<li>
<p>2011 年，发布 JDK 7.0</p>
</li>
<li>
<p><strong>2014 年，发布 JDK 8.0 ，是继 JDK 5.0 以来变化最大的版本</strong></p>
</li>
<li>
<p>2017 年，发布 JDK 9.0 ，最大限度实现模块化</p>
</li>
<li>
<p>2018 年 3 月， 发布 JDK 10.0 ，版本号也称为 18.3</p>
</li>
<li>
<p>2018 年 9 月，发布 JDK 11.0 ，版本号也称为 18.9</p>
</li>
<li>
<p>2019 年 3 月，Java 12发布</p>
</li>
<li>
<p>2019 年 9 月，Java 13发布</p>
</li>
<li>
<p>2020 年 3 月，Java 14发布</p>
</li>
<li>
<p>2020 年 9 月，Java 15发布</p>
</li>
<li>
<p>2021 年 3 月，Java 16发布</p>
</li>
<li>
<p>2021 年 9 月，Java 17发布</p>
</li>
</ul>
<h2 id="_4、java语言特性" tabindex="-1"><a class="header-anchor" href="#_4、java语言特性" aria-hidden="true">#</a> 4、Java语言特性</h2>
<p>​	Sun公司在1995年推出java时，发布了一个java白皮书，并这样定义java语言：java是一种简单的（Simple）、面向对象（Object-Oriented）、分布式的（Distributed）、解释的（Interpreted）、健壮的（Robust）、安全的（Secure）、结构中立的（Architecture-neutral）、可移植的（Portable）、高性能的（High-Performance）、多线程的（Multi-Threaded）、动态的（Dynamic）的语言。</p>
<p>通过这11个词语来概括java语言的特性，下面来看下每个词语所代表的含义。</p>
<p><strong>1.简单的（Simple）</strong>
风格和C++很像，基本语法和C很像，但是摒弃了C++容易引发错误的地方，如指针、内存管理、头文件等。
提供了丰富的类库。</p>
<p><strong>2.面向对象（Object-Oriented）</strong></p>
<p>简单的来说，面向对象设计就是一种程序设计技术。它将重点放在了数据（也就是对象）和对象的接口上。</p>
<p><strong>3.分布式的（Distributed）</strong></p>
<p>Java是针对Internet的分布式环境而设计的，所以它包含了一个支持HTTP和FTP等基于TCP/IP协议的子库，它能处理TCP/IP协议。Java应用程序可以凭借URL打开并访问网络上的对象。实际上使用URL访问资源与访问文件没有什么太大的区别。</p>
<p><strong>4.解释的（Interpreted）</strong></p>
<p>Java解释器可以在任何移植了解释器的机器上Java字节码。现在使用即时编译器将字节码翻译成机器码。</p>
<p><strong>5.健壮的（Robust）</strong></p>
<p>Java是强制类型的语言，它不仅在运行时检查代码，还在编译时就检查代码，消除有出错倾向的状态。
Java自己操纵内存，减少了内存出错的可能性。（垃圾回收功能）
实现了真数组，避免了覆盖数据的可能。</p>
<p><strong>6.安全性（Secure）</strong></p>
<p>指针和释放内存等C++功能被删除，避免了非法内存操作。
当Java用来创建浏览器时，语言功能和一些浏览器本身提供的功能结合起来，使它更安全。</p>
<p><strong>7.结构中立的（Architecture-neutral）</strong></p>
<p>编译器生成一个体系结构中立的高层次的与机器无关的byte-code格式语言，被设计在Java虚拟机上运行。这是一种编译过的代码，只要有Java运行时系统，就可以在许多处理机上运行。解释字节码会比全速运行机器指令慢很多，但是虚拟机有一个选项，可以将使用最频繁的字节码序列翻译成机器码，这一过程被称为及时翻译。</p>
<p><strong>8.可移植的（Portable）</strong></p>
<p>Java定义了独立于平台的基本数据类型及其运算，消除了代码移植时让人头痛的主要问题。二进制数据以固定的格式进行存储和传输，消除了字节顺序的困扰。</p>
<p><strong>9.高性能的（High-Performance）</strong></p>
<p>Java通过使用及时编译器，可以很容易的将字节码转换为运行这个应用程序的特定CPU的机器码。</p>
<p><strong>10.多线程的（Multi-Threaded）</strong></p>
<p>多线程可以提供更好的交互性能和实时控制性能。Java的设计目标之一是满足对创建交互式、网络化程序的现实需求。只需要考虑程序的特定行为，而不需要考虑多任务子系统。</p>
<p><strong>11.动态的（Dynamic）</strong></p>
<p>Java的动态性是其面向对象设计方法的拓展，它允许程序动态地装入运行过程中所需要的类。</p>
<h2 id="_5、java-技术体系平台" tabindex="-1"><a class="header-anchor" href="#_5、java-技术体系平台" aria-hidden="true">#</a> 5、Java 技术体系平台</h2>
<ul>
<li><strong>Java SE</strong> (Java Standard Edition) 标准版
<ul>
<li>支持面向桌面级应用（如Windows 下的应用程序）的 Java 平台，提供了完整的 Java 核心 API ，此版本以前称为 J2SE</li>
</ul>
</li>
<li><strong>Java EE</strong>(Java Enterprise Edition) 企业版
<ul>
<li>是为开发企业环境下的应用程序提供的一套解决方案。该技术体系中包含的技术如Servlet 、 Jsp 等，主要针对于 Web 应用程序开发。版本以前称为 J2EE</li>
</ul>
</li>
<li><strong>Java ME</strong>(Java Micro Edition) 小型版
<ul>
<li>支持Java 程序运行在移动终端（手机、 PDA ）上的 平台，对 Java API 有所精简，并加入了针对移动终端的支持，此版本以前称为 J2ME</li>
</ul>
</li>
</ul>
<h2 id="_6、java语言的构成" tabindex="-1"><a class="header-anchor" href="#_6、java语言的构成" aria-hidden="true">#</a> 6、java语言的构成</h2>
<p>所谓java的构成，就是指java运行环境的组成，从核心到外围包括 <strong>JIT、JVM、JRE、JDK</strong>，四种区别如下：</p>
<ul>
<li><strong>JDK</strong>:是<strong>J</strong>ava <strong>D</strong>evelop Tool<strong>K</strong>it的缩写，它里面有很多java所编写的开发工具(如:javac.exe、jar.exe),还包括了一个jre的调试环境。</li>
<li><strong>JRE</strong>:是<strong>J</strong>ava <strong>R</strong>untime <strong>E</strong>nvironment的缩写，是java运行的基础，它提供了java运行的API,Java程序必须有JRE才能正常运行。</li>
<li><strong>JVM</strong>:是<strong>J</strong>ava <strong>V</strong>itual <strong>M</strong>achine的缩写，它是java运行的虚拟机环境.</li>
<li><strong>JIT</strong>:是<strong>J</strong>ava <strong>I</strong>n <strong>T</strong>ime的缩写，即java即时编译器，是JVM的一部分，属于内核部分。</li>
</ul>
<p>其中的JVM是java运行的虚拟机环境，它是Java运行环境的重要一环</p>
<h2 id="_7、java-语言的特点" tabindex="-1"><a class="header-anchor" href="#_7、java-语言的特点" aria-hidden="true">#</a> 7、Java 语言的特点</h2>
<h3 id="_7-1-特点一-面向对象" tabindex="-1"><a class="header-anchor" href="#_7-1-特点一-面向对象" aria-hidden="true">#</a> 7.1 特点一： 面向对象</h3>
<p>两个基本概念：<span style="color: red">类、对象</span>
三大特性：<span style="color: red">封装、继承、多态</span>（抽象）</p>
<h3 id="_7-1-特点二-健壮性" tabindex="-1"><a class="header-anchor" href="#_7-1-特点二-健壮性" aria-hidden="true">#</a> 7.1 特点二： 健壮性</h3>
<p>吸收了 C/C++ 语言的优点，但去掉了其影响程序健壮性的部分（如指针、内存的申请与释放等），</p>
<p>提供了一个相对安全的内存管理和访问机制</p>
<h3 id="_7-1-特点三-跨平台性" tabindex="-1"><a class="header-anchor" href="#_7-1-特点三-跨平台性" aria-hidden="true">#</a> 7.1 特点三： 跨平台性</h3>
<p><strong>跨平台性</strong>：通过 Java 语言编写的应用程序在不同的系统平台上都可以运行。 Writeonce , Run Anywhere
<strong>原理</strong>：只要在需要运行 java 应用程序的操作系统上，先安装一个 Java 虚拟机 (JVM Java Virtual Machine) 即可,由 JVM 来负责 Java 程序在该系统中的运行。</p>
<p><img src="http://img.itzhameng.com/blog/image-20211214090853620.png?imageslim" alt="image-20211214090853620" loading="lazy"></p>
<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
</div></template>
