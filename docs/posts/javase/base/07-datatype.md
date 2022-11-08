# Java数据类型

Java是—种强类型语言。这就意味着必须为每一个变量声明一种类型，在内存中分配了不同大小的内存空间。在Java中，一共有8种基本类型(primitive type)，其中有4种整型、2种浮点类型、1种用于表示Unicode编码的字符单元的字符类型char和1种用于表示真值的boolean类型。

![Java数据类型](http://img.itzhameng.com/blog/R4wlh6XRJEBX.png?imageslim)

## 4.1 整型

Java各整型类型有固定的数据范围和字段长度，不受操作系统OS的影响，以保证Java程序的可移植性。
并且Java提供四种整型(`byte`,`short`,`int`,`long`)用于表示没有小数部分的值，并且允许它们为负数。

![mark](http://img.itzhameng.com/blog/ML0vucXQSGkP.png?imageslim)

Java的整型默认为`int`类型，如果声明`long`型整型必须在数值后添加`l`或者`L`

```java
int num1 = 100;
long num2 = 100L;
```

在通常情况下，int类型最常用。但如果表示星球上的居住人数，就需要使用long类型了,因为int类型数值范围最大的是 2的31次方(正好超过20亿)。这样的话如果使用int肯定会超过范围。

## 4.2 浮点型

与整数类型类似，Java 浮点类型也有固定的表数范围和字段长度，不受具体OS的影响。
浮点类型通常用于表示有小数部分的数值。*float*表示单精度；*double*表示双精度，同时也是float的两倍
![mark](http://img.itzhameng.com/blog/CcGVr6AjcUd1.png?imageslim)

Java 的浮点型常量默认为 double 型，声明 float 型常量，须后加 `‘f’` 或 `‘F’`。

```java
double d1 = 10.5;
float d2 = 10.5F;
```

浮点数值不适用于无法接受舍入误差的金融计算中。例如，命令System.out.printIn(2.0-1.1）将打印出0.8999999999999999，而不是人们想象的0.9。

这种舍入误差的主要原因是浮点数值采用**二进制系统**表示，而在二进制系统中无法精确地表示分数1/10。

这 就好像十进制无法精确地表示分数1/3一样。如果在数值计算中不允许有任何舍入误差，就应该使用`BigDecimal`类，例如金额

## 4.3 char字符类型

char 型数据用来表示通常意义上"字符"。
字符型常量的三种表现形式：

- 字符常量是用单引号(‘ ’)括起来的单个字符，涵盖世界上所有书面语的字符。例如：char c1 = 'a'; char c2 = '中'; char c3 = '9';
- Java中还允许使用转义字符‘\’来将其后的字符转变为特殊字符型常量。例如：char c3 = '\n'; -- '\n'表示换行符
- 直接使用 Unicode 值来表示字符型常量：‘\uXXXX’。其中，XXXX代表一个十六进制整数。如：\u000a 表示 \n。

char 类型是可以进行运算的。因为它都对应有 Unicode 值。

## 4.4 boolean

boolean 类型适于逻辑运算，一般用于程序流程控制：

- if条件控制语句；
- while循环控制语句；
- do-while循环控制语句；
- for循环控制语句；

boolean类型数据只允许取值true和false，不可以0或非 0 的整数替代true和false，这点和C语言不同。

## 4.5 基本数据类型转换

经常需要将一种数值类型转为另一种数值类型，但是在转换的过程中一定要注意可能会造成数据的精度丢失，例如:double类型转为int类型，那么小数点后面的数值就会丢失；
Java针对现实情况分别提高两种数值转换方式:`自动类型转换`和`强制类型转换`

### 4.5.1 自动类型转换

容量小的类型自动转换为容量大的数据类型。数据类型按容量大小排序为：
![Java数据类型转换](http://img.itzhameng.com/blog/z11qdGqt2PFO.png?imageslim)

有多种类型的数据混合运算时，系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算。
byte,short,char之间不会相互转换，他们三者在计算时首先转换为int类型。
当把任何基本类型的值和字符串值进行连接运算时(+)，基本类型的值将自动转化为字符串类型。

### 4.5.2 强制类型转换

将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符（`()`），但可能造成精度降低或溢出,格外要注意。
通常，字符串不能直接转换为基本类型，但通过基本类型对应的包装类则可以实现把字符串转换成基本类型。如：

```java
String a = "43"; int i = Integer.parseInt(a); 
```

boolean类型不可以转换为其它的数据类型。

## 4.6 大数值

如果基本的整数和浮点数精度不能够满足需求，那么可以使用java.math包中的两个很有用的类:`BigInteger`和`BigDecimal`。

这两个类可以处理包含任意长度数字序列的数值。

- BigInteger类实现了任意精度的整数运算，
- BigDecimal实现了任意精度的浮点数运算。

使用静态的valueOf方法可以将普通的数值转换为大数值:

```java
BigInteger bigInteger = BigInteger.valueOf(10);
BigDecimal bigDecimal = BigDecimal.valueOf(2.0);
```

遗憾的是，不能使用人们熟悉的算术运算符（如:＋和*）处理大数值。而需要使用大数 值类中的add和multiply方法。

### 4.6.1 BigInteger

BigIntcger类实现了任意精度的整数运算。常用方法如下:

| BigInteger方法名 | 含义                   |
| :--------------- | :--------------------- |
| static valueOf() | 将参数转换为BigInteger |
| add()            | 相加                   |
| subtract()       | 相减                   |
| multiply()       | 相乘                   |
| divide()         | 相除取整               |
| remainder()      | 取余                   |

```java
public static void main(String[] args) {

    //int 转为 BigInteger
    BigInteger num1 = java.math.BigInteger.valueOf(100);
    BigInteger num2 = java.math.BigInteger.valueOf(12);

    //相加
    BigInteger add = num1.add(num2);
    System.out.println("相加:" + add);

    //相减
    BigInteger subtract = num1.subtract(num2);
    System.out.println("相减:" + subtract);

    //相乘
    BigInteger multiply = num1.multiply(num2);
    System.out.println("相乘:" + multiply);

    //相除 取整
    BigInteger divide = num1.divide(num2);
    System.out.println("相除:" + divide);

    //取摸|取余数
    BigInteger remainder = num1.remainder(num2);
    System.out.println("取余:" + remainder);
}
```

最终结果:

```xml
相加:112
相减:88
相乘:1200
相除:8
取余:4
```

### 4.6.1 BigDecimal

BigDecimal实现了任意精度的浮点数运算。常用方法如下:

| BigDecimal方法名 | 含义                   |
| :--------------- | :--------------------- |
| static valueOf() | 将参数转换为BigDecimal |
| add()            | 相加                   |
| subtract()       | 相减                   |
| multiply()       | 相乘                   |
| divide()         | 相除取整               |
| remainder()      | 取余                   |

```java
public static void main(String[] args) {

    //int 转为 BigInteger
    BigDecimal num1 = BigDecimal.valueOf(100.5);
    BigDecimal num2 = BigDecimal.valueOf(12.3);
    //相加
    BigDecimal add = num1.add(num2);
    System.out.println("相加:" + add);

    //相减
    BigDecimal subtract = num1.subtract(num2);
    System.out.println("相减:" + subtract);

    //相乘
    BigDecimal multiply = num1.multiply(num2);
    System.out.println("相乘:" + multiply);

    //相除 保留两位小数,最后一位四舍五入。当然也可以使用其他模式
    BigDecimal divide = num1.divide(num2,2, RoundingMode.UP);
    System.out.println("相除两位小数/四舍五入:" + divide);

    //取摸|取余数
    BigDecimal remainder = num1.remainder(num2);
    System.out.println("取余:" + remainder);
}
```

最终结果:

```xml
相加:112.8
相减:88.2
相乘:1236.15
相除两位小数/四舍五入:8.18
取余:2.1
```

