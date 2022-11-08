# Oracle服务端安装

## 安装包下载

准备对应的安装文件，这里我们使用的版本是`Oracle 11G`  

![image-20220823173838946](http://img.itzhameng.com/blog/image-20220823173838946.png?imageslim)



## 安装服务端

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
>  - 电脑开始界面找到`SQL Plus`窗口
>  - 输入用户名/密码登录    此时用户名：system   密码：123456

![image-20220824174808615](http://img.itzhameng.com/blog/image-20220824174808615.png?imageslim)

![image-20220824175007929](http://img.itzhameng.com/blog/image-20220824175007929.png?imageslim)



如果能够进入该窗口，证明已经安装成功！但是此时默认提供的是命令窗口，不方便管理。
所有我们还需要安装`PLSQL Developer`可视化工具,具体操作如下！



## 安装PL/SQL可视化工具

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



## 导入测试数据

为了方便后面的练习，我们可以导入测试数据！数据文件如下：`hr.sql`

![image-20220824180549352](http://img.itzhameng.com/blog/image-20220824180549352.png?imageslim)



> 打开PLSQL，然后，根据如下步骤！

![image-20220824180923069](http://img.itzhameng.com/blog/image-20220824180923069.png?imageslim)

![image-20220824181006448](http://img.itzhameng.com/blog/image-20220824181006448.png?imageslim)

![image-20220824181114325](http://img.itzhameng.com/blog/image-20220824181114325.png?imageslim)



> 到此，整个数据和测试数据已经准备完毕！可以畅游oracle之旅了！

