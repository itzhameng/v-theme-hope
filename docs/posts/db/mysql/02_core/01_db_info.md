# Mysql数据库简介、安装

## Oracle简介

### Oracle介绍

Oracle Database，又名Oracle RDBMS，简称Oracle。
是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小、微机环境。它是一种高效率、可靠性好的适应高吞吐量的数据库解决方案。
测试666



**数据库在整个程序中占有重要的位置**

![image-20220823113118416](http://img.itzhameng.com/blog/image-20220823113118416.png?imageslim)



### 常见的数据库

为了迎合市面上多变的需求，从而诞生了不同种类的数据库，我们可以大致将数据库分为以下几种类型：

- **DB**：DataBase数据库
  - 指的是存储数据的仓库，将数据存储到指定的设备中
- **DBMS**：DataBase Management System数据库管理系统
  - 数据库管理系统实现对数据库中数据进行各种管理操作
  - 科学的组合和存储数据
  - 高效的获取和维护数据
  - 向用户提供各种操作功能
- **RDBMS**：Relational Database Management System 关系型数据库管理系统
  - RDBMS是将数据组织为相关的行和列的系统，而管理关系数据库的计算机软件就是RDBMS 。
  - 它通过数据、关系和对数据的约束三者组成的数据模型来存放和管理数据。
  - 代表：Oracle,Mysql,SqlServer
  - 特点：是以表格的形式进行展示，可以分为行和列
- **NOSQL**：Not Only SQL，意即“不仅仅是SQL” 也被称为非关系型数据库。
  - 代表：Redis
  - 特点：key-value数据库，存储效率比RDBMS更快

![03.常用数据库产品](http://img.itzhameng.com/blog/03.常用数据库产品.png?imageslim)



### Oracle和Mysql区别

Oracle和MySQL都是流行的关系数据库管理系统（RDBMS），在国内被广泛使用；
大部分关系型数据库的运行方式和底层逻辑都类似，Oracle和Mysql也不例外，但是两者又有一定的区别：

| 区别       | Oracle     | Mysql        |
| ---------- | ---------- | ------------ |
| 费用       | 收费、闭源 | 开源、免费   |
| 内存       | 内存占用大 | 内存占用小   |
| 自增       | 不支持自增 | 支持自增     |
| 分页关键字 | ROWNUM     | LIMIT        |
| 事务       | 手动提交   | 默认自动提交 |

::: warning 注意
Oracle和MySQL都是甲骨文公司的产品！！
:::



## Oracle服务端安装

### 安装包下载

准备对应的安装文件，这里我们使用的版本是`Oracle 11G`  

![image-20220823173838946](http://img.itzhameng.com/blog/image-20220823173838946.png?imageslim)



### 安装服务端

将`OracleDatabase11g.zip`文件解压

![image-20220824172039557](http://img.itzhameng.com/blog/image-20220824172039557.png?imageslim)

然后点击`setup.exe`进行安装。

> 根据提示进行下一步，具体过程如下图！

![image-20220824172223783](http://img.itzhameng.com/blog/image-20220824172223783.png?imageslim)

![image-20220824172312574](http://img.itzhameng.com/blog/image-20220824172312574.png?imageslim)

![image-20220824172332332](http://img.itzhameng.com/blog/image-20220824172332332.png?imageslim)

![image-20220824172541413](http://img.itzhameng.com/blog/image-20220824172541413.png?imageslim)

![image-20220824172601180](http://img.itzhameng.com/blog/image-20220824172601180.png?imageslim)



> 注意：
>
> - 选择安装位置，不建议安装在C盘
> - 密码：要记住别忘记了

![image-20220824173002795](http://img.itzhameng.com/blog/image-20220824173002795.png?imageslim)

![image-20220824173023499](http://img.itzhameng.com/blog/image-20220824173023499.png?imageslim)

![image-20220824173044833](http://img.itzhameng.com/blog/image-20220824173044833.png?imageslim)

![image-20220824173113036](http://img.itzhameng.com/blog/image-20220824173113036.png?imageslim)

![image-20220824173414165](http://img.itzhameng.com/blog/image-20220824173414165.png?imageslim)

![image-20220824173450979](http://img.itzhameng.com/blog/image-20220824173450979.png?imageslim)



> 安装完成之后，我们也可以使用对用户进行具体`口令管理`
>
> - system/sys 这两个用户是超级管理员，默认是可以使用
> - hr 用户，默认是锁定的。所以此时可以解锁。方便后期使用

![image-20220824174129273](http://img.itzhameng.com/blog/image-20220824174129273.png?imageslim)

![image-20220824174327195](http://img.itzhameng.com/blog/image-20220824174327195.png?imageslim)

![image-20220824174355056](http://img.itzhameng.com/blog/image-20220824174355056.png?imageslim)

![image-20220824174407547](http://img.itzhameng.com/blog/image-20220824174407547.png?imageslim)

![image-20220824174527071](http://img.itzhameng.com/blog/image-20220824174527071.png?imageslim)

![image-20220824174547399](http://img.itzhameng.com/blog/image-20220824174547399.png?imageslim)



>  测试Oracle服务器是否安装成功！
>
> - 电脑开始界面找到`SQL Plus`窗口
> - 输入用户名/密码登录    此时用户名：system   密码：123456

![image-20220824174808615](http://img.itzhameng.com/blog/image-20220824174808615.png?imageslim)

![image-20220824175007929](http://img.itzhameng.com/blog/image-20220824175007929.png?imageslim)



如果能够进入该窗口，证明已经安装成功！但是此时默认提供的是命令窗口，不方便管理。
所有我们还需要安装`PLSQL Developer`可视化工具,具体操作如下！



### 安装PL/SQL可视化工具

在安装包中找PLSQL安装包，然后双击！

![image-20220824175247700](http://img.itzhameng.com/blog/image-20220824175247700.png?imageslim)

![image-20220824175352691](http://img.itzhameng.com/blog/image-20220824175352691.png?imageslim)

![image-20220824175447668](http://img.itzhameng.com/blog/image-20220824175447668.png?imageslim)

![image-20220824175506203](http://img.itzhameng.com/blog/image-20220824175506203.png?imageslim)

![image-20220824175519704](http://img.itzhameng.com/blog/image-20220824175519704.png?imageslim)

然后等待安装！！

![image-20220824175551170](http://img.itzhameng.com/blog/image-20220824175551170.png?imageslim)

安装成功以后，桌面有会个快捷方式，双击打开！

![image-20220824175723803](http://img.itzhameng.com/blog/image-20220824175723803.png?imageslim)



> 注意：默认需要输入注册码，注册码如下
>
> ``` properties
> # plsql14 注册激活
> product code: ke4tv8t5jtxz493kl8s2nn3t6xgngcmgf3
> serial Number: 264452
> password: xs374ca
> ```
>
> 

![image-20220824175931956](http://img.itzhameng.com/blog/image-20220824175931956.png?imageslim)



然后可以完成登录！

![image-20220824180427048](http://img.itzhameng.com/blog/image-20220824180427048.png?imageslim)



默认是英文，可以将英文设置成简体中文！

![image-20220824180313869](http://img.itzhameng.com/blog/image-20220824180313869.png?imageslim)

确定以后变成了中文界面

![image-20220824180355422](http://img.itzhameng.com/blog/image-20220824180355422.png?imageslim)



至此，整个可视化工具安装成功！



### 导入测试数据

为了方便后面的练习，我们可以导入测试数据！数据文件如下：`hr.sql`

![image-20220824180549352](http://img.itzhameng.com/blog/image-20220824180549352.png?imageslim)



> 打开PLSQL，然后，根据如下步骤！

![image-20220824180923069](http://img.itzhameng.com/blog/image-20220824180923069.png?imageslim)

![image-20220824181006448](http://img.itzhameng.com/blog/image-20220824181006448.png?imageslim)

![image-20220824181114325](http://img.itzhameng.com/blog/image-20220824181114325.png?imageslim)



> 到此，整个数据和测试数据已经准备完毕！可以畅游oracle之旅了！



## Oracle服务端卸载

可以对废弃的Oracle进行卸载，但是一定要卸载干劲，不然会影响下一次安装。

1：停止oracle所有服务	

2:   在开始菜单中，找到Universal Installer，运行Oracle Universal Installer，	单击卸载产品     

3:    在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除	

4:    按Windows徽标键和R键，打开运行窗口，输入regedit，打开注册表，	依次展开HKEY_LOCAL_MACHINE\SOFTWARE，找到oracle，删除	

5:    依次展开HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services中，	删除所有oracle开头的项	

6:    依次展开	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\A	pplication，删除所有oracle开头的项；		在HKEY_CLASSES_ROOT，删除以ora开头的项	

7 :   重启电脑，删除oracle目录，删除Oracle的安装目录app等



> 第一步：停止所有Oracle服务

打开电脑中服务的位置：控制面板-->管理工具-->服务

![image-20220823162712995](http://img.itzhameng.com/blog/image-20220823162712995.png?imageslim)



> 第二步：在开始菜单中，找到`Universal Inssstaller`，运行`Oracle Universal Installer`，	单击卸载产品

![image-20220823163119143](http://img.itzhameng.com/blog/image-20220823163119143.png?imageslim)

![image-20220823163918927](http://img.itzhameng.com/blog/image-20220823163918927.png?imageslim)

![image-20220823164107930](http://img.itzhameng.com/blog/image-20220823164107930.png?imageslim)



> 第三步：在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除	

![image-20220823164355830](http://img.itzhameng.com/blog/image-20220823164355830.png?imageslim)

等待卸载完成，确定即可。



> 第四步：删除注册表:（慎重，千万别删错了，可能导致电脑异常！！！）
>
> - 按Windows徽标键和R键，打开运行窗口，输入`regedit`，打开注册表
> - 依次展开`HKEY_LOCAL_MACHINE\SOFTWARE`，找到oracle，删除	
>
> - 依次展开`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services`中，	删除所有oracle开头的项	
>
> - 依次展开`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application`，删除所有oracle开头的
> - 在`HKEY_CLASSES_ROOT`，删除以ora开头的项	
>
> 重启电脑，删除oracle目录，删除Oracle的安装目录app等

![image-20220823165246724](http://img.itzhameng.com/blog/image-20220823165246724.png?imageslim)

![image-20220823165458290](http://img.itzhameng.com/blog/image-20220823165458290.png?imageslim)

![image-20220823165919349](http://img.itzhameng.com/blog/image-20220823165919349.png?imageslim)

![image-20220823170541486](http://img.itzhameng.com/blog/image-20220823170541486.png?imageslim)

![image-20220823170803294](http://img.itzhameng.com/blog/image-20220823170803294.png?imageslim)



> 第五步：重启电脑！！！删除Oracle的安装目录app
>
> - 找到app安装路径，删除
> - 找到`C:\Program Files`路径所有Oracle相关的文件
> - 找到`C:\Program Files (x86)`路径所有Oracle相关的文件
> - 找到`C:\ProgramData\Microsoft\Windows\Start Menu\Programs`删除Oracle相关文件

![image-20220823171430046](http://img.itzhameng.com/blog/image-20220823171433466.png?imageslim)

![image-20220823173000086](http://img.itzhameng.com/blog/image-20220823173000086.png?imageslim)

完成！！！



## Oracle新增数据库



