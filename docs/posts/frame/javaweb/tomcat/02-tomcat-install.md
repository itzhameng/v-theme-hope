# Tomcat简介

## 1 Tomcat概述

Tomcat服务器由Apache提供，开源免费。
由于Sun和其他公司参与到了Tomcat的开发中，所以最新的JSP/Servlet规范总是能在Tomcat中体现出来。
当前最新版本是Tomcat9，我们课程中使用Tomcat8。Tomcat7之后支持Servlet3.0，而Tomcat6只支持Servlet2.5！

 

## 2 安装、启动、配置Tomcat

下载Tomcat可以到<http://tomcat.apache.org>下载。

Tomcat分为安装版和解压版：

- 安装版：一台电脑上只能安装一个Tomcat；
- 解压版：无需安装，解压即可用，解压多少份都可以，所以我们选择解压版。

### 2.1　Tomcat目录结构

把解压版Tomcat解压到一个没有中文，没有空格的路径中即可，建议路径不要太深，因为我们需要经常进入Tomcat安装目录。例如：D:\soft\apache-tomcat-8.0.21

 

### 2.2　启动和关闭Tomcat

在启动Tomcat之前，我们必须要配置环境变量：

- JAVA_HOME：必须先配置JAVA_HOME，因为Tomcat启动需要使用JDK；
- CATALANA_HOME：如果是安装版，那么还需要配置这个变量，这个变量用来指定Tomcat的安装路径，例如：D:\soft\apache-tomcat-8.0.21。
- 启动：进入%CATALANA_HOME%\bin目录，找到`startup.bat`，双击即可开启服务器；
- 关闭：进入%CATALANA_HOME%\bin目录，找到`shutdown.bat`，双击即可关闭服务器；


startup.bat会调用catalina.bat，而catalina.bat会调用setclasspath.bat，setclasspath.bat会使用JAVA_HOME环境变量，所以我们必须在启动Tomcat之前把JAVA_HOME配置正确。

![1526483215042](http://img.itzhameng.com/blog/1526483215042.png?imageslim)

启动问题：

- 点击startup.bat后窗口一闪即消失：检查JAVA_HOME环境变量配置是否正确；



### 2.3　进入Tomcat主页

　　访问：http://localhost:8080

如果能够访问到如下电脑表示启动成功:

![1526483280150](http://img.itzhameng.com/blog/1526483280150.png?imageslim)

 

### 2.4　配置端口号

打开%CATALANA_HOME%\conf\server.xml文件：

```xml
 <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" /> 
```

http默认端口号为80，也就是说在URL中不给出端口号时就表示使用80端口。当然你也可以修改为其它端口号。

当把端口号修改为80后，在浏览器中只需要输入：<http://localhost>就可以访问Tomcat主页了。

 

### 2.5　Tomcat的目录结构

![1526483574977](http://img.itzhameng.com/blog/1526483574977.png?imageslim)

- bin：该目录下存放的是二进制可执行文件,那么会有startup.bat和shutdown.bat文件
  - startup.bat用来启动Tomcat，但需要先配置JAVA_HOME环境变量才能启动;
  - shutdawn.bat用来停止Tomcat；
- conf：这是一个非常非常重要的目录，这个目录下有四个最为重要的文件：
  - server.xml：配置整个服务器信息。例如修改端口号，添加虚拟主机等；下面会详细介绍这个文件；
  - tomcatusers.xml：存储tomcat用户的文件，这里保存的是tomcat的用户名及密码，以及用户的角色信息。可以按着该文件中的注释信息添加tomcat用户，然后就可以在Tomcat主页中进入Tomcat Manager页面了；
  - web.xml：部署描述符文件，这个文件中注册了很多MIME类型，即文档类型。这些MIME类型是客户端与服务器之间说明文档类型的，如用户请求一个html网页，那么服务器还会告诉客户端浏览器响应的文档是text/html类型的，这就是一个MIME类型。客户端浏览器通过这个MIME类型就知道如何处理它了。当然是在浏览器中显示这个html文件了。但如果服务器响应的是一个exe文件，那么浏览器就不可能显示它，而是应该弹出下载窗口才对。MIME就是用来说明文档的内容是什么类型的！
  - context.xml：对所有应用的统一配置，通常我们不会去配置它。
- lib：Tomcat的类库，里面是一大堆jar文件。如果需要添加Tomcat依赖的jar文件，可以把它放到这个目录中，当然也可以把应用依赖的jar文件放到这个目录中，这个目录中的jar所有项目都可以共享之，但这样你的应用放到其他Tomcat下时就不能再共享这个目录下的Jar包了，所以建议只把Tomcat需要的Jar包放到这个目录下；
- logs：这个目录中都是日志文件，记录了Tomcat启动和关闭的信息，如果启动Tomcat时有错误，那么异常也会记录在日志文件中。
- temp：存放Tomcat的临时文件，这个目录下的东西可以在停止Tomcat后删除！
- webapps：存放web项目的目录，其中每个文件夹都是一个项目；如果这个目录下已经存在了目录，那么都是tomcat自带的。项目。其中ROOT是一个特殊的项目，在地址栏中没有给出项目目录时，对应的就是ROOT项目。<http://localhost:8080/examples，进入示例项目。其中examples>就是项目名，即文件夹的名字。
- work：运行时生成的文件，最终运行的文件都在这里。通过webapps中的项目生成的！可以把这个目录下的内容删除，再次运行时会生再次生成work目录。当客户端用户访问一个JSP文件时，Tomcat会通过JSP生成Java文件，然后再编译Java文件生成class文件，生成的java和class文件都会存放到这个目录下。
- LICENSE：许可证。
- NOTICE：说明文件。