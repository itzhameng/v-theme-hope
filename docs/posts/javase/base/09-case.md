# Java分支语句

## 1.1 分支语句简介

- 分支语句根据一定的条件有选择地执行或跳过特定的语句
- 从而来完成根据不同的条件，得到不同的结果，来满足现实生活中的需求
- Java中提供了多种实现分支语句的方式
  - 1）`if` :  单分支语句，如果满足进入该语句块
  - 2）`if...else`:  如果满足进入该if语句块,否则进入else语句块，二选一
  - 3）`if...else if...else if...else`:多分支语句，条件满足进入一个分支，如果都不满足进入 else
  - 4）`switch...case`: 实现语句块

![Java分支语句](http://img.itzhameng.com/blog/image-20210711175108919.png?imageslim)



## 1.2 if单分支语句

`if`单分支语句，表示只要条件满足，就会进入语句块内容，否则直接跳过。

上图左侧部分就是表示`if`单分支语句

``` java
//语法
if(条件表达式){
    //如果条件为true，执行到该语句。否则跳过该语句
}
```

**案例：**

如果成绩score大于等于90，将grade等级设置有`优秀`，否则忽略

``` java
public static void main(String[] args) {
    int score = 91;
    String grade = "";
    if(score>=90) {
        grade = "优秀";
        System.out.println("小明获得鸡腿一只");
    }
    System.out.println("end...");
}
```

>  注意:以后代码过程中，注意测试。否则条件特别容易被漏掉



## 1.3 if...else双分支语句

`if...else`称为双分支语句，如果条件满足则进入`if`语句块，否则进入`else`语句块；

也就是说`if`或`else`语句块必须会进入其中的一个分支；同时也不存在两个分支同时进入；

如上图右侧，就是`if...else`的使用场景



**语法:**

``` java
// 格式  双分支语句   if 或者else 永远进入一个分支
if(条件){
    //条件为真，进入
}else{
    //否则进入else
}
```



**案例：**

如果小明成绩不低于90分，奖励一只鸡腿，否则只能吃青菜

``` java
public static void main(String[] args) {
    int score = 89;
    //注意:以后代码过程中，注意测试。否则条件特别容易被漏掉
    if(score>=90) {
        System.out.println("小明获得鸡腿一只");
    }else {
        System.out.println("小明被罚只能吃青菜");
    }
    System.out.println("end...");
}
```



## 1.4  if...else if...else语法

` if...else if...else`也被称为多分支语句，可以指定多个条件。

但是能够进入分支的只有一个

![image-20210711185515878](http://img.itzhameng.com/blog/image-20210711185515878.png?imageslim)

**语法：**

``` java
//语法
if(条件){
    //满足进入
}else if(条件2){
    //满足进入
}else if(条件3){
    //满足进入
}else{
   	//都不满足，进入else
}
```



**案例:**

不同的条件进入不同的分支，例如：成绩为88，奖励麻辣鸡爪一个

``` java
public static void main(String[] args) {
    int score = 50;
    // 注意:以后代码过程中，注意测试。否则条件特别容易被漏掉
    if (score >= 90) {
        System.out.println("小明获得鸡腿一只");
    } else if (score >= 80) {
        System.out.println("麻辣鸡爪一个!");
    } else if (score >= 60) {
        System.out.println("奖励练习题一打！");
    } else {
        System.out.println("小明被暴打了一顿");
    }
    System.out.println("end...");
}
```

> 注意：如果多个条件同时满足，那么会从上而下，自动匹配。当进入一个分支之后，就不会在进入其他分支。





## 1.5 switch...case语句

在处理多个选项的时候，除了可以使用`if...else`，Java还提供了另外一种分支语句，那就是`switch...case`

`switch`语句将从选项值相匹配的`case`标签处开始执行，直到语句结束或者遇到`break`关键字

![image-20210711215008423](http://img.itzhameng.com/blog/image-20210711215008423.png?imageslim)



**语法结构：**

- switch(表达式)中表达式的返回值必须是下述几种类型之一：`int`,` byte`, `char`, `short`, `枚举`, `字符串`不支持long 类型的数据
- case子句中的值必须是`常量`，且所有case子句中的值应是不同的；
- default子句是最终执行
- `break`语句用来在执行完一个case分支后使程序跳出switch语句块；

``` java
// 给固定的内容
switch(表达式){
    case 常量1:
        //语句块
        break;
    case 常量1:
        //语句块
        break;
    case 常量1:
        //语句块
        break;
    default:
        //语句块：类似else
}
```



**案例：**

根据不同的值，获取不同的级别

``` java
public static void main(String[] args) {

    int top = 1;
    switch (top) {

        case 1:
            System.out.println("恭喜总冠军!!");
            break;
        case 2:
            System.out.println("恭喜亚军!!");
            break;
        case 3:
            System.out.println("恭喜季军!!");
            break;
        case 4:
            System.out.println("恭喜第四!!");
            break;
        case 5:
            System.out.println("恭喜第五!!");
            break;
        default:
            System.out.println("墊底");
    }

}
```

> 注意：
>
> ①表达式的值如果和常量的内容保持一致，表示会进入该代码块
> ②break,跳出当前的语句快，否则会一直往下执行

