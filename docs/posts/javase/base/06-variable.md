# Java变量

## 3.1 概念

- 内存中的一个存储区域;
- 该区域有自己的名称（变量名）和类型（数据类型）;
- Java中每个变量必须先声明，后使用;
- 该区域的数据可以在同一类型范围内不断变化;
- 变量是通过使用变量名来访问这块区域的;
- 变量的作用域：一对{ }之间有效



## 3.2 定义格式

> 数据类型 变量名 = [初始值];

``` java
//例如
int num1 = 90;
```





## 3.3 变量的分类

### a.按照申明(创建)的位置划分

```xml
1.成员变量|全局变量|属性
	a.定义在方法的外部，类的内部;
	b.范围在该类下所有的地方都可以使用,包括里面多个方法内部;
2.局部变量
	a.定义在方法或者代码块的内容;
	b.只在定义的方法或者代码块的{}里面使用;

之间的区别:
	a.定义位置不一样;
	b.局部变量在使用之前必须赋值。全局变量会生成对应数据类型的默认值;
```

### b.按照数据类型划分

```java
1.基本数据类型
	数值型:	
			整数型:
				byte: 
				short: 
				int: 
				long: 
				默认的类型是int
			浮点型:
				float
				double:
				Java 的浮点型常量默认为 double 型，声明 float 型常量，须后加 ‘f’ 或 ‘F’。
	字符型:
		char:
			a.使用 '' 单引号定义内容;
			b.可以存放一个中文
			c.可以存放Java中还允许使用转义字符‘\’来将其后的字符转变为特殊字符型常量。例如：char c3 = 				'\n';  -- '\n'表示换行符
			d.直接使用 Unicode 值来表示字符型常量：‘\uXXXX’。其中，XXXX代表一个十六进制整数。如：				  \u000a 表示 \n。
			e.char 类型是可以进行运算的。因为它都对应有 Unicode 值。

	布尔型:
		boolean:
		boolean类型数据只允许取值true和false

2.引用数据类型
	除了以上8种基本类型之外，其余的都是引用数据类型。包括：String、Object包装类等
```



## 3.4 变量初始化

声明一个变量之后，必须用赋值语句对变量进行显式初始化，千万不要使用未初始化的局部变量。

例如，Java编译器认为下面的语句序列是错误的：

``` java
public static void main(String[] args) {
    String username; //Variable 'username' might not have been initialized
    System.out.println("username = " + username);
}
```

要想对一个已经声明过的变量进行赋值，就需要将变量名放在等号（=）左侧，相应取值的Java表达式放在等号的右侧

``` java
public static void main(String[] args) {
    String username;
    username = "猪小明"; //赋值
    System.out.println("username = " + username);
}
```

也可以将变量的声明和初始化放在同一行中。例如：

``` java
String username  = "猪小明"; //赋值
```



## 3.5 常量

在Java中，利用关键字`final`指示常量。例如：

``` java
public static void main(String[] args) {
    final double PI = 3.14;
    //PI = 3.10; //异常  Cannot assign a value to final variable 'PI'
    System.out.println("PI = " + PI);
}
```

关键字final表示这个变量只能被赋值一次。一旦被赋值之后，就不能够再更改了。习惯上，常量名使用全大写。



