# Web服务器

## 0.常见的软件架构

### 1.1 C/S(Client/Server) 

l C/S结构即客户端/服务器（Client/Server），例如QQ；

l  需要编写服务器端程序，以及客户端程序，例如我们安装的就是QQ的客户端程序；

l  缺点：软件更新时需要同时更新客户端和服务器端两端，比较麻烦；

l  优点：安全性比较好。

 

### 1.2 B/S（Brower/Server）

l  B/S结构即浏览器/服务器（Browser/Server）；例如百度

l  优点：只需要编写服务器端程序；

l  缺点：安全性较差。![javaweb](http://img.itzhameng.com/blog/javaweb.gif?imageslim)



## 1.Web服务器简介

> Web服务器一般指网站服务器，是指驻留于[因特网](https://baike.baidu.com/item/%E5%9B%A0%E7%89%B9%E7%BD%91)上某种类型计算机的程序，可以向浏览器等Web客户端提供文档，也可以放置网站文件，让全世界浏览；可以放置数据文件，让全世界下载。
>
> 目前最主流的三个Web服务器是Apache Nginx IIS。 ---百度百科

服务器是一种被动程序：只有当Internet上运行其他计算机中的浏览器发出的请求时，服务器才会响应；所有服务器必须拥有两种功能：①**接收客户端的请求**；②**给客户端进行响应**。

对于JavaWeb程序而已，还需要有JSP/Servlet容器，JSP/Servlet容器的基本功能是把动态资源转换成静态资源，当然JSP/Servlet容器不只这些功能，我们需要使用的是Web服务器和JSP/Servlet容器，通常这两者会集于一身。

## 2.Web资源介绍

- 静态资源

  ​	常见的静态资源有**html,js,css,image**等文件；

  ​	浏览器可以直接识别的文件；

- 动态资源。

  ​	创建的动态资源有**jsp,servlet**等文件；

  ​	动态资源浏览器不能直接是被识别，需要先转换成html，再给浏览器看。

当然，除了JavaWeb程序，还有其他Web程序，例如：ASP、PHP等。

## 3.静态资源和动态资源的区别

1. 如果客户端请求的是静态资源，那么服务器会直接把内容响应给客户端浏览器；
2. 如果客户端请求的是动态资源，那么服务器需要先将动态资源转为静态资源。然后在把转换后的静态资源响应给客户端浏览器.

![img](http://img.itzhameng.com/blog/1.png?imageslim)

## 4.访问Web资源(重要)

打开浏览器，输入URL：

- 协议名://域名:端口/路径?参数1=值1&参数2=值2
- 例如：http://www.baidu.com:80/index.html



- 协议: http,https,ftp等协议。
  - 协议看出是规则。多方共同遵守和识别。中国人普通，中英：中国话

  - http:

    - TCP：http1.x  http2.x 底层使用的是TCP协议。主流 还是1.x 和2.x

    - UDP：http3.x  
    - TCP和UDP区别：
      - 1）TCP面向连接，通信之前先连接，所以安全性高，但是效率相对偏低。类似打电话
      - 2）数据包报协议，可以直接通信，不需要简历简历连接，速度快。发短信
- ip地址:是表示互联网上唯一的一台计算机。但是一串数字，
  - 每个ip都可以映射域名，方便记忆:  www.baidu.com 是一个域名。
  - localhost和127.0.0.1 都表示本机IP地址
- 端口:每个端口都表示该计算机下对应的应用程序，一个计算机 端口是不可以重复的。
  - 80是,http和https默认的端口
- 访问的路径:一个项目当中，多个功能，每个功能对应一个路径。查询，删除，添加
- ?: ？问号之前的表示url的整体路径,?之后的表示url的参数列表。参数是键值对存在，多个参数参数使用&分开

http://localhost:8080/user/getUser?username=zhangsan;



## 5.常用的web服务器

- Tomcat（Apache）：当前应用最广的JavaWeb服务器；
- JBoss（Redhat红帽）：支持JavaEE，应用比较广；EJB容器
- Weblogic（Orcale）：要钱的！支持JavaEE，适合大型项目；
- Websphere（IBM）：要钱的！支持JavaEE，适合大型项目；

详情参考百度百科:https://baike.baidu.com/item/WEB%E6%9C%8D%E5%8A%A1%E5%99%A8/8390210