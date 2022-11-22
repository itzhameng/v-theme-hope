# Maven简介

## 1、Maven概述

Maven是优秀的构建工具,能够帮我们自动化构建过程，从清理、编译、测试到生成报告，再到打包和部署。

Maven不仅是构建工具，还是一个依赖管理工具和项目信息管理工具。它提供了中央仓库，能帮我们自动下载构件

最简单的时候场景是，在`pom.xml`里设置对第三方jar包的依赖，而不用所有用到的jar包都复制到工程lib目录，再配置javapath。

再者说在自己引入的jar包会出现很多重复的包，导致版本冲突，而maven会自动管理依赖！

所以这里我们介绍的就是怎样用 maven 来满足我们项目的日常需要。

::: tip Maven主要作用

- 管理jar包
- 项目构建

:::



## 2、Maven项目结构

Maven 使用 ==约定优于配置== 的原则，所以Maven项目都有固定的规则。
以下是Maven项目的结构：

| 目录                          | 目的                                              |
| ----------------------------- | ------------------------------------------------- |
| ${basedir}                    | 存放 pom.xml和所有的子目录                        |
| ${basedir}/src/main/java      | 项目的 java源代码                                 |
| ${basedir}/src/main/resources | 项目的资源，比如说 数据源配置文件，spring配置文件 |
| ${basedir}/src/test/java      | 项目的测试类，比如说 JUnit代码                    |
| ${basedir}/src/test/resources | 测试使用的资源                                    |



## 3、Maven资源库

Maven资源库主要是用来存放Jar包，我们可以通过指定名称、版本去下载对应的jar包，例如jdbc驱动

``` xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.35</version>
</dependency>
```

::: info GAV坐标可以确定唯一的jar包

groupId：组织ID

artifactId：项目ID,一个组织(公司)可以有多个项目ID

version：指定版本号

:::



Maven提供了多种资源库，有中央仓库、本地仓库也有私服，并且可以设置阿里云镜像进行中转，提高Jar包的下载速度。

![Maven](http://img.itzhameng.com/blog/Maven.png?imageslim)



### 3.1 中央仓库

Maven默认的存放jar包的地方是

[https://repo.maven.apache.org/maven2](https://repo.maven.apache.org/maven2)
也可能是[http://repo1.maven.org/maven2](http://repo1.maven.org/maven2)

![image-20221122164615845](http://img.itzhameng.com/blog/image-20221122164615845.png?imageslim)

可以在这里查询到所有的jar包信息，但是由于jar包众多，我们只需要按需加载即可。

所以我们不需要记住所有的jar包信息，可以通过指定网址查询：

::: tip 指定网址

[https://mvnrepository.com/](https://mvnrepository.com/)

:::

![image-20221122165432327](http://img.itzhameng.com/blog/image-20221122165432327.png?imageslim)

可以通过 ==搜索框== 进行搜索

![image-20221122165707996](http://img.itzhameng.com/blog/image-20221122165707996.png?imageslim)

点击对应的版本号，可以看到详细的**GAV**坐标，把对应的文件复制到Maven项目`pom.xml`里面即可

![image-20221122170026325](http://img.itzhameng.com/blog/image-20221122170026325.png?imageslim)

::: warning 注意

Maven默认从中央仓库下载，但是由于服务器存放在国外，简直是龟速下载！！！

不过我们可以使用国内的镜像(例如阿里云镜像)，提高下载速度

:::



### 3.2 本地仓库





### 3.3 私服





















