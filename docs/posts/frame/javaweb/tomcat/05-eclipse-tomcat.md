# Eclipse配置Tomcat

## 1.配置tomcat

使用Eclipse配置服务器后，就可以使用Eclipse来启动和停止服务器了。当然，你需要先安装好服务器（Tomcat），才能配置。

> window>Preferences>Server>Runtime Environments

![1526487116789](http://img.itzhameng.com/blog/1526487116789.png?imageslim)

![1526487232097](http://img.itzhameng.com/blog/1526487232097.png?imageslim)



配置好之后，在通过server选项，将安装好的tomcat引入进来.

![1526487370390](http://img.itzhameng.com/blog/1526487370390.png?imageslim)

![1526487446003](http://img.itzhameng.com/blog/1526487446003.png?imageslim)

配置好之后，可以修改tomcat中一些默认的配置文件。

![1526487633200](http://img.itzhameng.com/blog/1526487633200.png?imageslim)





## 2.发布项目到tomcat服务器

![1526487885867](http://img.itzhameng.com/blog/1526487885867.png?imageslim)

![1526488003853](http://img.itzhameng.com/blog/1526488003853.png?imageslim)

只要项目添加进来，在重启服务器，eclipse就会将刚刚添加的项目发布到tomcat的webapps下面。所以该项目就可以指定通过浏览器地址进行访问.

## 3.启动|重启|关闭tomcat

推荐使用debug启动。

![1526487746065](http://img.itzhameng.com/blog/1526487746065.png?imageslim)

## 4.打war包到tomcat服务器

右键选中项目，Export>WAR file

![1526488139856](http://img.itzhameng.com/blog/1526488139856.png?imageslim)

![1526488250465](http://img.itzhameng.com/blog/1526488250465.png?imageslim)

将打好的ssm.war包，复制到tomcat的webapps下面，启动tomcat即可访问该项目.