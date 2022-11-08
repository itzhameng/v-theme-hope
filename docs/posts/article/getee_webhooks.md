---
icon: edit
date: 2022-01-01
category:
  - CategoryA
tag:
  - tag A
  - tag B
---

# 自动化部署

## 一、准备

### 1.1 安装git

``` sh
# 安装git
yum install git

# 配置用户信息
git config --global user.name "xxx"
git config --global user.email "xxxxxx@163.com"

# 生成公钥
ssh-keygen -t rsa -C "xxxxxx@163.com"

# 查看公钥
cat ~/.ssh/id_rsa.pub
# ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
```



**配置公钥**

在gitee.com的设置中心进行配置

![image-20221108164234449](http://img.itzhameng.com/blog/image-20221108164234449.png?imageslim)



### 1.2 安装node

https://registry.npmmirror.com/binary.html?path=node/latest-v16.x/



``` sh
###
# 设置镜像
npm config set registry https://registry.npm.taobao.org

# 查看镜像
npm config get registry

# 切回原来镜像
npm config set registry https://registry.npmjs.org

# https://blog.csdn.net/qingpingguo12/article/details/126137315
```







