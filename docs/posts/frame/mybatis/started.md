# MyBatis入门

所有技术学习都是从HelloWorld入门开始，基本步骤如下：

- 准备工作(创建项目、实体类、表)
- 导入Jar包
- 创建mybatis-config.xml核心配置文件
- 创建Mapper.xml映射文件
- 测试



## 准备工作

创建maven项目，通过maven管理项目，数据库使用mysql

::: tabs

@tab UserInfo对象

``` java
public class UserInfo implements Serializable {

    private int id; //   '编号',
    private String loginName;//     '用户名称',
    private String nickName;//     '用户昵称',
    private String passwd;//     '用户密码',
    private String name;//    '用户姓名',
    private String phoneNum;//     '手机号',
    private String email;//  '邮箱',
    private String headImg;//     '头像',
    private String userLevel;//     '用户级别',
    private Date birthdayDate;//    '用户生日',
    private String gender;//    '性别 M男,F女',
    private Date createTime; // '创建时间',
    private Date operateTime;//    '修改时间',
}
```



@tab 建表语句

``` sql
CREATE TABLE `user_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `login_name` varchar(200) DEFAULT NULL COMMENT '用户名称',
  `nick_name` varchar(200) DEFAULT NULL COMMENT '用户昵称',
  `passwd` varchar(200) DEFAULT NULL COMMENT '用户密码',
  `name` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `phone_num` varchar(200) DEFAULT NULL COMMENT '手机号',
  `email` varchar(200) DEFAULT NULL COMMENT '邮箱',
  `head_img` varchar(200) DEFAULT NULL COMMENT '头像',
  `user_level` varchar(200) DEFAULT NULL COMMENT '用户级别',
  `birthday` date DEFAULT NULL COMMENT '用户生日',
  `gender` varchar(1) DEFAULT NULL COMMENT '性别 M男,F女',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `operate_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `ind_user_info_name` (`login_name`),
  KEY `ind_user_info_nick_name_email` (`nick_name`,`name`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COMMENT='用户表';
```



@tab 导入数据

``` sql
insert  into `user_info`(`id`,`login_name`,`nick_name`,`passwd`,`name`,`phone_num`,`email`,`head_img`,`user_level`,`birthday`,`gender`,`create_time`,`operate_time`) values (1,'dciwtf','柔柔',NULL,'公孙柔','13112991466','dciwtf@ask.com',NULL,'1','1991-10-20','F','2022-10-20 17:16:20',NULL),(2,'1e9zc4ty','振壮',NULL,'庞振壮','13324399372','1e9zc4ty@yeah.net',NULL,'3','1986-10-20','M','2022-10-20 17:16:20',NULL),(3,'k8pza969gyxm','婷婷',NULL,'茅婷','13769863921','k8pza969gyxm@hotmail.com',NULL,'1','1988-10-20','F','2022-10-20 17:16:20',NULL),(4,'u8hfh8mr5h86','卿聪',NULL,'百里卿聪','13458788438','u8hfh8mr5h86@googlemail.com',NULL,'1','1975-10-20','F','2022-10-20 17:16:20',NULL),(5,'supddc','锦黛',NULL,'秦锦黛','13921116656','supddc@263.net',NULL,'1','1978-10-20','F','2022-10-20 17:16:20',NULL),(6,'1s7nptkgw','素云',NULL,'任素云','13487436696','1s7nptkgw@aol.com',NULL,'1','1971-10-20','F','2022-10-20 17:16:20',NULL),(7,'2twnufkxw4cb','婷姣',NULL,'李婷姣','13156152188','2twnufkxw4cb@yahoo.com.cn',NULL,'1','1971-10-20','F','2022-10-20 17:16:20',NULL),(8,'gzdjqwnbyne','天达',NULL,'时天达','13455893382','gzdjqwnbyne@googlemail.com',NULL,'2','1993-10-20','M','2022-10-20 17:16:20',NULL),(9,'9agcvr','阿+ lastName',NULL,'臧宁','13916238971','9agcvr@yeah.net',NULL,'1','1972-10-20','M','2022-10-20 17:16:20',NULL),(10,'4qpg3oun','伊亚',NULL,'沈伊亚','13256139798','4qpg3oun@163.com',NULL,'1','1970-10-20','F','2022-10-20 17:16:20',NULL),(11,'aevvas','妹妹',NULL,'穆妹','13884495938','aevvas@yeah.net',NULL,'1','2003-10-20','F','2022-10-20 17:16:20',NULL),(12,'p67wopq16','姣姣',NULL,'轩辕姣','13961566654','p67wopq16@hotmail.com',NULL,'1','2005-10-20','F','2022-10-20 17:16:20',NULL),(13,'qxlotpdg0ru','璐璐',NULL,'韩璐','13322886588','qxlotpdg0ru@live.com',NULL,'3','1995-10-20','F','2022-10-20 17:16:20',NULL),(14,'14bwvg2jkf','媛媛',NULL,'韦媛','13659692262','14bwvg2jkf@yahoo.com',NULL,'1','1974-10-20','F','2022-10-20 17:16:20',NULL),(15,'t3g7rgqyn2e','雅芝',NULL,'百里雅芝','13914658968','t3g7rgqyn2e@sina.com',NULL,'1','1971-10-20','F','2022-10-20 17:16:20',NULL),(16,'0z54xlnx6o0e','星光',NULL,'南门星光','13785497761','0z54xlnx6o0e@163.net',NULL,'2','1973-10-20','M','2022-10-20 17:16:20',NULL),(17,'f0qiiu8','美娜',NULL,'韦美娜','13345918419','f0qiiu8@ask.com',NULL,'2','1979-10-20','F','2022-10-20 17:16:20',NULL),(18,'bgcrdm62g9','雁蓓',NULL,'岑雁蓓','13384866945','bgcrdm62g9@yeah.net',NULL,'2','1995-10-20','F','2022-10-20 17:16:20',NULL),(19,'i7v6opo','秀秀',NULL,'韩秀','13718778462','i7v6opo@gmail.com',NULL,'1','1973-10-20','F','2022-10-20 17:16:20',NULL);
```

:::



## 下载jar包

要使用 MyBatis， 只需将 [mybatis-x.x.x.jar](https://github.com/mybatis/mybatis-3/releases) 文件置于类路径（classpath）中即可。

如果使用 Maven 来构建项目，则需将下面的依赖代码置于 pom.xml 文件中：

``` xml
<!-- 添加mybatis核心配置文件 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.6</version>
</dependency>


<!-- 添加数据库驱动包 -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.49</version>
</dependency>
```



## 创建mybatis-config.xml核心配置文件

XML 配置文件中包含了对 MyBatis 系统的核心设置，包括获取数据库连接实例的数据源（DataSource）以及决定事务作用域和控制方式的事务管理器（TransactionManager）。后面会再探讨 XML 配置文件的详细内容，这里先给出一个简单的示例：

``` xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>
    <!--    配置的环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/yuntu?characterEncoding=utf8"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>

    <!-- 加载映射文件：编写SQL语句的地方  -->
    <mappers>
        <mapper resource="mapper/UserInfoMapper.xml"/>
</configuration>
```

注：重点关注\<dataSource type="POOLED">的type属性、其有三种取值： 

- POOLED：使用Mybatis自带的数据库连接池来管理数据库连接
- UNPOOLED：不使用任何数据库连接池来管理数据库连接
- JNDI：jndi形式使用数据库连接、主要用于项目正常使用的时候

当然，还有很多可以在 XML 文件中配置的选项，上面的示例仅罗列了最关键的部分。 注意 XML 头部的声明，它用来验证 XML 文档的正确性



## 创建UserInfoMapper.xml

创建对应的mapper文件，用来存放对应的sql语句

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.as.mapper.UserMapper">

    <select id="selectUser" resultType="com.as.bean.UserInfo">
        SELECT id,login_name loginName,nick_name nickName,passwd,NAME,
        email,head_img headImg,user_level userLevel,birthday birthdayDate,
        gender,create_time createTime,operate_time operateTime FROM user_info
        WHERE id = #{id}
    </select>

</mapper>
```

namespace ：命名空间(可以理解为java中package包，用来区分对象)，用于隔离sql语句

在UserInfoMapper.xml中添加：半自动化，自己主要负责的是具体的sql的编写，添加到mapper中





## 测试

1）从 XML 中构建 SqlSessionFactory

2）从SqlSessionFactory获取SqlSession

3）调用指定数据

``` java
public static void main(String[] args) throws IOException {

    //1）从 XML 中构建 SqlSessionFactory
    InputStream inputStream = Resources.getResourceAsStream("mybatis-config.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

    //2）从SqlSessionFactory获取SqlSession
    SqlSession sqlSession = sqlSessionFactory.openSession();

    //3）调用指定数据
  UserInfo userInfo = sqlSession.selectOne("com.as.mapper.UserMapper.selectUser", 1);
  System.out.println(userInfo);

}
```

![image-20221124160908479](http://img.itzhameng.com/blog/image-20221124160908479.png?imageslim)



























