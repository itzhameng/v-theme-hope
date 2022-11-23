# Maven安装

## 1、下载

下载地址 http://maven.apache.org/

下载 zip版本的，

![image-20221123164757720](http://img.itzhameng.com/blog/image-20221123164757720.png?imageslim)

解压放到`D:\soft`盘根目录

![image-20221123164938621](http://img.itzhameng.com/blog/image-20221123164938621.png?imageslim)

::: tip

- bin：目录主要存放可执行文件，例如 mvn 命令
- conf：存放配置文件，例如 `settings.xml`配置

:::



## 2、环境变量

设置环境变量，可以在任何的地方使用 maven的命令

![image-20221123165408467](http://img.itzhameng.com/blog/image-20221123165408467.png?imageslim)

::: info

MAVEN_HOME:对应的是maven存放的位置

:::



**添加Path路径：**

![image-20221123165728148](http://img.itzhameng.com/blog/image-20221123165728148.png?imageslim)

::: warning 注意

Path不是maven独有的，所以不能把其他的给删除，只能删除

并且使用分号隔开

:::



**检验：**

打开cmd,通过 `mvn -v` 检测是否安装成功

![image-20221123170459823](http://img.itzhameng.com/blog/image-20221123170459823.png?imageslim)