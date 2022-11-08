# Java环境搭建

# 三、Java环境搭建

## 1、什么是JDK, JRE

- **JDK(<span style="color: red">J</span>ava <span style="color: red">D</span>evelopment <span style="color: red">K</span>it  Java开发工具包)**
  - JDK是提供给 Java 开发人员使用的，其中包含了 java 的开发工具，也包括了JRE。所以安装了JDK，就不用在单独安装JRE了
- **JRE(<span style="color: red">J</span>ava <span style="color: red">R</span>untime <span style="color: red">E</span>nvironment  Java运行环境) ：**
  - 包括Java虚拟机(JVM：<span style="color: red">J</span>ava <span style="color: red">V</span>irtual <span style="color: red">M</span>achine)和 Java 程序所需的核心类库等，如果想要<span style="color: red">运行</span>一个开发好的Java程序，计算机中只需要安装JRE即可。

> 简单而言，使用  JDK  的提供的开发工具完成 java 程序的开发，使用 JRE 运行开发好的 Java 应用程序。



## 2、JDK , JRE ,JVM 关系sss

JDK = JRE + 开发工具集（例如 Javac 编译工具 等）
JRE = JVM + Java SE 标准类库

![image-20211214103722267](http://img.itzhameng.com/blog/image-20211214103722267.png?imageslim)

![image-20211214103711179](http://img.itzhameng.com/blog/image-20211214103711179.png?imageslim)



## 3、下载及安装 JDK

### 3.1下载地址

**下载：** 官方网址：

https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html、

根据版本和平台现在对应的下载链接。

这里以`jdk8`和 `Windows`系统为例

![1552234653725](http://img.itzhameng.com/blog/jdk.png?imageslim)

![image-20211214104625526](http://img.itzhameng.com/blog/image-20211214104625526.png?imageslim)



### 3.2 安装JDK

 **傻瓜式安装**，下一步即可。

- 建议：安装路径不要有`中文`或者特殊符号如空格等。
- 如果操作系统是 64 位的，软件尽量选择支持 64 位的（除非软件本身不区分 。
- 当 提示安装 JRE 时，正常在 JDK 安装时已经装过了，但是为了后续使用 Eclipse 等开发
  工具不报错，建议也根据提示安装 JRE 。

> 默认安装路径: `C:\Program Files\Java`

![image-20211214105326055](http://img.itzhameng.com/blog/image-20211214105326055.png?imageslim)



### 3.2 配置环境变量

每次执行java 的工具都要进入到 bin 目录下，是非常麻烦的。可不可以在<mark>任何目录下</mark>都可以执行 java 的工具呢？

![image-20211214110309781](http://img.itzhameng.com/blog/image-20211214110309781.png?imageslim)

根据 windows 系统在<span style="color: red">查找可执行程序的原理</span>，可以将 java 工具所在路径定义到<span style="color: red">path</span> 环境变量中，让系统帮我们去找运行执行的程序。

配置方法：

- 第一步:打开-计算机-属性-高级系统设置-环境变量-系统变量
- 第二步:进行配置（JAVA_HOME,PATH,CLASSPATH）
  - JAVA_HOME:另似给jdk全路径取一个别名。然后使用的时候直接使用别名
  - PATH:通过PATH,在DOS命令行找到对应的命令。java  javac 
  - CLASSPATH:JDK1.5之后，可以选择性安装，建议安装。最前面一定要配置一个.(点)
- 编辑 path 环境变量，在变量值开始处加上 java 工具所在目录，后面用 ““; 和其他值分隔开即可。

参考配置如下:

```java
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_73
PATH = %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
CLASSPATH = .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
```

打开 DOS 命令行，任意目录下敲入 `javac` 。如果出现 javac 的参数信息，配置成功。

![image-20211214112504346](http://img.itzhameng.com/blog/image-20211214112504346.png?imageslim)



如果出现如下错误，证明环境变量没有配置成功：注意检查是否有多余的<span style="color: red">分号</span>

![image-20211214112818604](http://img.itzhameng.com/blog/image-20211214112818604.png?imageslim)



# 四、HelloWorld入门程序

步骤：

1. 将 Java 代码 <span style="color: red">编写</span> 到扩展名为 .java 的文件中。
2. 通过 javac 命令对该 java 文件进行 <span style="color: red">编译</span> 。
3. 通过 java 命令对生成的 class 文件进行 <span style="color: red">运行</span> 。

![image-20211214114253093](http://img.itzhameng.com/blog/image-20211214114253093.png?imageslim)



## 1、 显示已知文件的扩展名

如果电脑默认没有显示后缀名，我们是无法去修改对应的名称。<br/>所以一定要将后缀名显示出来，避免造成文件和文件类型不一致的情况。

查看本地地方文件夹

![1552234976867](http://img.itzhameng.com/blog/file.png?imageslim)



## 2、编写源代码

### 2.1 创建文件

创建文本文件修改后缀为.java；**例如:HelloWrold.java**

![image-20211214114348688](http://img.itzhameng.com/blog/image-20211214114348688.png?imageslim)

> 如果没有出现Java文件，请检查 后缀名是否真的改变了。还有就是文件后缀名是否显示出来了。

### 2.2.代码

文件名必须和源代码中的class类名保持一致

```java
//HelloWorld由于被public 修饰，所有必须和文件名保持一致
public class HelloWorld{
//程序的入口
 public static void main(String[] args){
	//打印信息到控制台
	System.out.println("Hello Java.....");
 }
}
```

### 2.3.具体细节

``` xml
- main的方法：
	Java应用程序的执行入口是main()方法。它有固定的书写格式：
	public static void main(String[] args)  {...}
     如果没有 main 方法则在运行时会抛出如下异常
	【java.lang.NoSuchMethodError:main】
- 想要和JVM来个互动，只要在main方法中加入一句System.out.println(“Hello World”);  
- 一个 Java 源文件中最多只能有一个 public  类。其它类的个数不限，
	如果源文件文件包含一个 public 类，它必	须是该类名命名。
- Java 语言严格区分大小写。
- Java方法由一条条语句构成，每个语句以分号结束。
```




### 2.4 编译

java提供了javac命令用于编译：

编译命令：`javac HelloWorld.java `

```java
编译HelloWorld.java文件，编译成功会生成HelloWorld.class文件
 - javac HelloWorld.java

```

![image-20211215104601428](http://img.itzhameng.com/blog/image-20211215104601428.png?imageslim)

### 2.5 运行

运行命令`java HelloWorld`

 - java HelloWorld

![image-20211215104714051](http://img.itzhameng.com/blog/image-20211215104714051.png?imageslim)



### 2.6 java注释

注释：用于解释说明程序的文字、提高了代码的阅读性

Java中的注释类型：

- 单行注释：格式： //注释文字

- 多行注释：格式： 	/*  注释文字 */

- 文档注释（java 特有）

  - 注释内容可以被 JDK 提供的工具 javadoc 所解析，生成一套以网页文件形式体现的该程序的说明文档。

  - ``` shell
    #生成文档命令
    javadoc -d mydoc -author -version HelloWorld.java
    ```

注释是一个程序员必须要具有的良好编程习惯。将自己的思想通过注释先整理出来，再用代码去体现

对于单行和多行注释，被注释的文字，不会被JVM（java虚拟机）解释执行。多行注释里面不允许有多行注释嵌套。

![image-20211214142314068](http://img.itzhameng.com/blog/image-20211214142314068.png?imageslim)






### 2.7 常见问题

学习编程最容易犯的错是语法错误 。 Java 要求你必须按照语法规则编写代码。
如果你的程序违反了语法规则，例如：忘记了分号、大括号、引号，或者拼错了单词， java 编译器都会报语法错误。 
<mark><span style="color: red">尝试着去看懂编译器会报告的错误信息。</span></mark>



### 2.8 小结

- Java 源文件以`java`为扩展名。源文件的基本组成部分是类 class 如本 例 中 的 `HelloWorld` 类。

- Java 应用程序的执行入口是 main() 方法。它有固定的书写 格式

  - ``` java 
    public static void main(String[] args )
    ```

- Java 语言严格区分大小写。

- Java 方法由一条条语句构成，每个语句以`;`结束。

- 大括号 都是成对出现的， 缺一不可。

- 一个源文件中最多只能有一个 `public` 类。其它类的个数不限，**如果源文件包含一个 `public` 类，则文件名必须按该类名命名。**



## 3、良好的编程风格

**正确的注释和注释风格**

- 使用文档注释来注释整个类或整个方法。
- 如果注释方法中的某一个步骤，使用单行或多行注释。

**正确的缩进和空白**

- 使用一次 tab 操作，实现缩进
- 运算符两边习惯性各加一个空格。比如： `2 + 4  =  6` 。

**块的风格**

- Java API 源代码选择了<span style="color: red">行尾风格</span>
- ![image-20211214144812724](http://img.itzhameng.com/blog/image-20211214144812724.png?imageslim)



# 五、Java运行机制

## 1、Java 两种核心机制

- Java 虚拟机  (Java Virtal Machine)   简称：JVM
- 垃圾收集机制 (Garbage Collection) 简称：GC



## 2、Java虚拟机

- JVM 是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器 。
- 对于不同的平台，有不同的 虚拟机。
- 只有某平台提供了对应的 java 虚拟机， java 程序才可在此平台运行
- Java 虚拟机机制屏蔽了底层运行平台的差别，实现了“ 一次编译，到处 运行

![1552235860599](http://img.itzhameng.com/blog/jvm.png?imageslim)

![image-20211214143738303](http://img.itzhameng.com/blog/image-20211214143738303.png?imageslim)

## 3、垃圾回收GC

- 不再使用的内存空间应回收-----垃圾回收。
  - 在 C/C++ 等语言中，由程序员负责回收无用内存。
  - Java 语言消除了程序员回收无用内存空间的责任：它提供一种系统级线程跟踪存储空间的分配情况。并在 JVM 空闲时，检查并释放那些可被释放的存储空间。
- 垃圾回收在 Java 程序运行过程中自动进行，程序员无法 精确控制 和 干预。
- Java 程序还会出现内存泄漏和内存溢出问题吗？ Yes!

> **内存泄漏**：是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄漏似乎不会有大的影响，但内存泄漏堆积后的后果就是内存溢出
>
> **内存溢出：**指程序申请内存时，没有足够的内存供申请者使用，或者说，给了你一块存储int类型数据的存储空间，但是你却存储long类型的数据，那么结果就是内存不够用，此时就会报错OOM,即所谓的内存溢出



