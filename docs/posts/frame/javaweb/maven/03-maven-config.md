# Maven配置文件

settings.xml 是maven的核心配置文件，可以通过配置文件来修改maven的默认配置

![image-20221123171513894](http://img.itzhameng.com/blog/image-20221123171513894.png?imageslim)

## 1、修改本地仓库

``` xml
默认53行:
<localRepository>/path/to/local/repo</localRepository>

复制一样：不要放在注释里面,修改我们自己的路径,如下，修改本地仓库为 D:\repository
<localRepository>D:\repository</localRepository>
```





## 2、修改阿里云镜像

为了提高下载速度，配置国内阿里云镜像

``` xml
<!-- 大概160行左右  有个 <mirrors> 节点下，新增一个字节点 -->
<mirror>
    <id>alimaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
</mirror>
```



## 3、配置默认jdk

maven默认jdk是1.5，所以可以配置全局的jdk版本

``` xml
<profile>
    <id>jdk1.8</id>
    <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
    </activation>
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
    </properties>
</profile>
```



## 4、完整配置如下

::: details settings.xml

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <localRepository>D:\repository</localRepository>
    
    <pluginGroups>
    </pluginGroups>
    
    <proxies>
    </proxies>


    <servers>
    </servers>

    <mirrors>
        <mirror>
            <id>alimaven</id>
            <mirrorOf>central</mirrorOf>
            <name>aliyun maven</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        </mirror>
    </mirrors>

    <profiles>
        <profile>
            <id>jdk1.8</id>
            <activation>
                <activeByDefault>true</activeByDefault>
                <jdk>1.8</jdk>
            </activation>
            <properties>
                <maven.compiler.source>1.8</maven.compiler.source>
                <maven.compiler.target>1.8</maven.compiler.target>
                <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
            </properties>
        </profile>
    </profiles>

</settings>
```

:::

