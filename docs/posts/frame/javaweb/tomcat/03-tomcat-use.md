# Tomct应用

## 1 创建静态应用

- 在webapps下创建一个**bj1801目录**(命名必须不包含中文和空格)；
- 在webapps\bj1801\下创建index.html；
- 启动tomcat；
- 打开浏览器访问http://localhost:8080/bj1801/index.html

 ```xml
hello：应用目录，hello就是应用的名称；
index.html：应用资源。应用下可以有多个资源，例如css、js、html、jsp等，也可以把资源放到文件夹中，
例如：bj1801\html\index.html，这时访问URL为：http://localhost:8080/bj1801/html/index.html；
 ```

## 2 配置外部应用(虚拟路径)

　　原来我们的项目放到webapps下，现在我放到外面，也希望tomcat可以找到它！

也可以把应用放到Tomcat之外，这就是外部应用了。例如我们把上面写的bj1801应用从webapps目录中剪切到C盘下，即C:/bj1801。现在bj1801这个Web应用已经不在Tomcat中了，这时我们需要在tomcat中配置外部应用的位置，配置的方式一共有两种：

- conf/server.xml：打开server.xml文件，找到\<Host\>元素，在其中添加\<Context\>元素，代码如下：

  ```xml
  <!--Host:本来存在，Context需要创建 -->
  <Host name="localhost"  appBase="webapps"
              unpackWARs="true" autoDeploy="true">
  		<Context path="bj1801" docBase="c:/bj1801" />
        </Host>
  ```


server.xml

1)       path：指定当前应用的名称；

2)       docBase：指定应用的物理位置；

3)       浏览器访问路径：http://localhost:8080/bj1801/hello.html