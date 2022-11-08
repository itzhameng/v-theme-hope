# Java关键字

## 1.1 含义

被java赋予了特殊含义，用作专门用途的字符串。

例如:

- <span style="color: red">`public`</span>:表示公共的 
- <span style="color: red">`class`</span>:定义类

``` java
public class HelloWorld{
    
}
```



## 1.2特点

- 所有的单词都是小写 
- goto:表示java的预留关键字



## 1.3 关键字列表

Java提供了很多关键字，具体如下表：

|                                |           |        |        |          |
| :----------------------------- | :-------- | :----- | :----- | :------- |
| **用于定义数据类型的关键字**   |           |        |        |          |
| class                          | interface | enum   | byte   | short    |
| int                            | long      | float  | double | char     |
| boolean                        | void      |        |        |          |
| **用于定义数据类型值的关键字** |           |        |        |          |
| true                           | false     | null   |        |          |
| **用于定义流程控制的关键字**   |           |        |        |          |
| if                             | else      | switch | case   | default  |
| while                          | do        | for    | break  | continue |
| return                         |           |        |        |          |

|                                                  |            |           |              |        |
| :----------------------------------------------- | :--------- | :-------- | :----------- | :----- |
| **用于定义访问修饰符的关键字**                   |            |           |              |        |
| private                                          | protected  | public    | 缺省(默认)   |        |
| **用于定义类，函数，变量修饰符的关键字**         |            |           |              |        |
| abstract                                         | final      | static    | synchronized |        |
| **用于定义类与类之间关系的关键字**               |            |           |              |        |
| extends                                          | implements |           |              |        |
| **用于定义建立实例及引用实例，判断实例的关键字** |            |           |              |        |
| new                                              | this       | super     | instanceof   |        |
| **用于异常处理的关键字**                         |            |           |              |        |
| try                                              | catch      | finally   | throw        | throws |
| **用于包的关键字**                               |            |           |              |        |
| package                                          | import     |           |              |        |
| **其他修饰符关键字**                             |            |           |              |        |
| native                                           | strictfp   | transient | volatile     | assert |

``` java
/**
 *
 * 关键字：
 *
 * 1）关键字都是小写字母
 * 2）goto是一个预留的关键字
 * 3）所有的关键字，都有对应固定的功能。不同的场景下 使用不同的关键字
 *
 */
public class Demo01 {
    public static void main(String[] args) {

        //计算两数相加
        byte num1 = 10;
        byte num2 = 20;
        System.out.println(num1 + num2);

    }
}

```





# 