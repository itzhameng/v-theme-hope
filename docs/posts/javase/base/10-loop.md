# Java循环语句

## 2.1 循环语句简介

在满足指定条件下，反复执行特定的代码。

例如：将`1-100`之间的和进行累加；

``` java
public static void main(String[] args) {
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum = sum+i;
    }
    System.out.println("sum=" + sum);
}
```

Java中提供了三种基本的循环：

- for循环
  - 1）普通for循环
  - 2）增强for循环
- while
- do...while

![image-20210711222528933](http://img.itzhameng.com/blog/image-20210711222528933.png?imageslim)

## 2.2 for循环

`for `循环语句是支持迭代的一种通用结构， 利用每次迭代之后更新的计数器或类似的变量来控制迭代次数 

`for`一般用来明确循环次数的情况使用，更加的方便



### **1、循环组成部分:**

​	a.初始化
​	b.循环条件
​	c.循环体,循环的内容
​	d.迭代(改变原来的值)

``` java
//语法:
for(初始化;条件判断;迭代)
{
    //循环体 具体反复执行的代码
}
```

### 2、**案例**

打印1-100之间的偶数列

``` java
for (int i = 1; i <= 100; i++) {
    if(i%2==0){
        System.out.println("i=" + i);
    }
}
```

### 3、for执行顺序

1. 第一步，对`i`进行初始化为1
2. 第二步，判断`i`是否小于100
3. 第三步，如果返回`true`,执行对应语句块内容
4. 第四步，执行语句块内容，进行迭代，将`i`进行++操作
5. 第五步，迭代完毕之后在进行判断，执行`第二步`操作
6. 第六步，如果满足继续进入代码块，如果`不满足，则跳出循环`

![image-20210711221205176](http://img.itzhameng.com/blog/image-20210711221205176.png?imageslim)



## 2.3 while循环

当条件为 true 时，while 循环执行一条语句（也可以是一个语句块）。一般格式为

``` java
语法格式(先判断，再执行):
[初始值]
while(条件)
{
    //语句块
    // 迭代[更改初始值]
}
```

如果开始循环条件的值就为 false, 则 while 循环体一次也不执行   



**案例：**

将1-100之间的和进行累加操作

``` java
public static void main(String[] args) {
    int result = 0;
    int i = 1;
    while (i <= 100) { // 判断条件
        // 语句块
        result += i;
        System.out.println("i=" + i + " result=" + result);
        i++;
    }

}
```



## 2.4 do...while

如果希望循环体至少执行一次， 则应该将检测条件放在最后。 使用 do/while 循环语句可以实现这种操作方式;

`while`和`do...while` 最大的区别就是：

- while：先判断，再执行
- do...while:先执行，再判断，所以do...while至少都会执行一次



**语法格式：**

``` java
语法格式:(先执行，在判断:不管条件如何，都会至少执行一次)
[初始化内容]
do{
    //语句块 
    [迭代]
}while(判断条件);
```



**案例：**

将1-100之间的和进行累加操作

``` java
public static void main(String[] args) {
    int result = 0;
    int i = 1;
    do {
        result += i;
        System.out.println("i=" + i + " result=" + result);
        i++;
    } while (i <= 100);
}
```



## 2.5 中断循环

Java提供了`continue`和`break`  关键字用来终止循环继续执行。

- `continue`用来终止本次循环，该`continue`关键字后面的所有内容都不会被执行；然而`continue`会迭代，然后执行下一次循环；
- `break` 用来跳出当前所在的循环，属于该循环下所有的内容都会终止执行；

以下是两者的使用注意事项：

- break只能用于switch语句和循环语句中。
- continue 只能用于循环语句中。
- 标号语句必须紧接在循环的头部。标号语句不能用在非循环语句的前面。
- break和continue之后不能有其他的语句，因为程序永远不会执行break 和 continue之后的语句。



**案例：**

当i=5是，使用不同关键字，所得到结果

``` java
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        //break; //1 2 3 4
        continue; //1 2 3 4  6 7 8 9 10
    }
    System.out.println("continue==>i = " + i);
}
```

![image-20210711223525061](http://img.itzhameng.com/blog/image-20210711223525061.png?imageslim)



## 2.6 嵌套循环

``` java
public static void main(String[] args) {

    // 1. 外层: 控制行数 1-9行
    // 2.内层 :控制每一行 有多少个列（需要计算多杀次）
    for (int i = 1; i <= 9; i++) {
        // aa:标号 使用:分割 必须写在循环的头部
        for (int j = 1; j <= i; j++) {
            System.out.print(j + "*" + i + "=" + (j * i) + "\t");
        }
        System.out.println(); // 换行
    }
}
```

![image-20210711173100749](http://img.itzhameng.com/blog/image-20210711173100749.png?imageslim)



## 2.7 实战题

``` java
第1题：
实现一个查询月天数的程序键盘输入年月 判断这年这个月有多少天。<闰年条件:能被4整除且不能被100整除或者能被400整除>
    
第2题：
国家税务局规定不同行业的税收数额度不一样   
    	税收=(工资-起征点)*税率
       行业有
       1.服务行业  2.制造业  3.农业
       1.服务行业税收的起征点是2000 元  2000元以上需要缴纳10%的个人所得税
       2.制造业税收的起征点是3000元  3000元以上需要缴纳5%的个人所得税
       3.农业税收的起征点是1500元  1500元以上需要缴纳2%的个人所得税
	   提示用户选择行业，输入工资 ，输出税后工资。
   
第三题：
运费计算器:运输公司对用户计算运费.路程越远每公里运费越低.每公里每吨货物的基本运费为p,货物重为w,距离为s,折扣为d,则总运费f的计算公式为
f=p*w*s*(1-d)
       s<250没有折扣
       250<=s <500 2%折扣
       500<=s<1000 5%折扣
       1000<=s<2000  8%折扣
       2000以上 15%折扣。
                    
第四题：
编写一个某年第一天是星期几的查询器：程序输出:XXXX年一月一日是 星期X
提示:1900年一月一日是星期一

第五题：
根据流程图完成银行取钱业务程序
```

![image-20210711224141038](http://img.itzhameng.com/blog/image-20210711224141038.png?imageslim)

``` java
第六题：
编写一个日历程序:输入年月 按照格式输出该年月的日历
提示:1900年一月一日是星期一
```

![image-20210711224236987](http://img.itzhameng.com/blog/image-20210711224236987.png?imageslim)