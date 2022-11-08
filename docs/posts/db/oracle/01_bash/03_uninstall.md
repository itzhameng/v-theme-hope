# Oracle服务端卸载

可以对废弃的Oracle进行卸载，但是一定要卸载干劲，不然会影响下一次安装。



1：停止oracle所有服务	

2:   在开始菜单中，找到Universal Installer，运行Oracle Universal Installer，	单击卸载产品     

3:    在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除	

4:    按Windows徽标键和R键，打开运行窗口，输入regedit，打开注册表，	依次展开HKEY_LOCAL_MACHINE\SOFTWARE，找到oracle，删除	

5:    依次展开HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services中，	删除所有oracle开头的项	

6:    依次展开	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\A	pplication，删除所有oracle开头的项；		在HKEY_CLASSES_ROOT，删除以ora开头的项	

7 :   重启电脑，删除oracle目录，删除Oracle的安装目录app等



## 关闭服务

> 第一步：停止所有Oracle服务

打开电脑中服务的位置：控制面板-->管理工具-->服务

![image-20220823162712995](http://img.itzhameng.com/blog/image-20220823162712995.png?imageslim)



## 开始卸载

> 第二步：在开始菜单中，找到`Universal Inssstaller`，运行`Oracle Universal Installer`，	单击卸载产品

![image-20220823163119143](http://img.itzhameng.com/blog/image-20220823163119143.png?imageslim)

![image-20220823163918927](http://img.itzhameng.com/blog/image-20220823163918927.png?imageslim)

![image-20220823164107930](http://img.itzhameng.com/blog/image-20220823164107930.png?imageslim)



> 第三步：在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除	

![image-20220823164355830](http://img.itzhameng.com/blog/image-20220823164355830.png?imageslim)

等待卸载完成，确定即可。



## 删除注册表

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



## 重启电脑 删除文件夹

> 第五步：重启电脑！！！删除Oracle的安装目录app
>
> - 找到app安装路径，删除
> - 找到`C:\Program Files`路径所有Oracle相关的文件
> - 找到`C:\Program Files (x86)`路径所有Oracle相关的文件
> - 找到`C:\ProgramData\Microsoft\Windows\Start Menu\Programs`删除Oracle相关文件

![image-20220823171430046](http://img.itzhameng.com/blog/image-20220823171433466.png?imageslim)

![image-20220823173000086](http://img.itzhameng.com/blog/image-20220823173000086.png?imageslim)

完成！！！

