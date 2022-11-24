# MyBatis简介

## Mybatis简介

​	 MyBatis 本是apache的一个开源项目iBatis, 2010年这个项目由apache software foundation 迁移到了google code*，*并且改名为MyBatis 。2013年11月迁移到Github 

​	MyBatis 是支持普通 SQL查询，存储过程和高级映射的优秀**持久层框架**。**ORM**框架(Hibernate也是orm框架)，MyBatis 消除了几乎所有的JDBC代码和参数的手工设置以及结果集的检索。

​	MyBatis 使用简单的 XML或注解用于配置和原始映射，将接口和 Java 的POJOs（Plain Old Java Objects，普通的 Java对象）映射成数据库中的记录； 

   Mybatis完成的是JDBC的功能，简化JDBC。

::: tip 网址

官网：[https://mybatis.net.cn/index.html](https://mybatis.net.cn/index.html)

源码：[https://github.com/mybatis/mybatis-3](https://github.com/mybatis/mybatis-3)

::: 

## MyBatis作用

- MyBatis 是一个ORM框架 对象关系映射（Object Relational Mapping），是一个半自动化的ORM框架
- 易于学习，几乎消除了所有的JDBC代码； 
- 原生sql存在Xml文件中，便于管理； 
- 解除sql与程序代码的耦合;
- 支持对象关系映射;
- 支持编写动态sql，比如一些条件查询； 
- 对JDBC进行封装。

> ​	[Hibernate](https://baike.baidu.com/item/Hibernate/206989?fr=aladdin)也是全自动化的orm框架