---
icon: edit
date: 2022-08-26
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
star: true
---
# Oracle简介

## Oracle介绍

Oracle Database，又名Oracle RDBMS，简称Oracle。
是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小、微机环境。它是一种高效率、可靠性好的适应高吞吐量的数据库解决方案。abcefg



**数据库在整个程序中占有重要的位置**

![image-20220823113118416](http://img.itzhameng.com/blog/image-20220823113118416.png?imageslim)



## 常见的数据库

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



## Oracle和Mysql区别

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

