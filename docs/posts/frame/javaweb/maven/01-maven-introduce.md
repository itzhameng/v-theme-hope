# Maven简介

## 1、Maven概述

Maven 是一个项目管理和构建自动化工具。但是对于我们程序员来说，我们最关心的是它的`项目构建功能`

最简单的时候场景是，在`pom.xml`里设置对第三方jar包的依赖，而不用所有用到的jar包都复制到工程lib目录，再配置javapath。

再者说在自己引入的jar包会出现很多重复的包，导致版本冲突，而maven会自动管理依赖！

所以这里我们介绍的就是怎样用 maven 来满足我们项目的日常需要。

::: tip Maven主要作用

- 管理jar包
- 项目构建

:::



::: details 自定义标题

``` java
public static void main(){
    System.out.println("Hello");
}
```



:::



::: tabs

@tab 标题 1

``` java {1,6-10}
@WebServlet(name = "SkuinfoAddServlet", value = "/sku/add")
public class SkuinfoAddServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //1.接受参数
        String skuName = request.getParameter("skuName");
        String skuDesc = request.getParameter("skuDesc");

        String priceStr = request.getParameter("price");
        double price = priceStr == null ? 0 : Double.parseDouble(priceStr);

        String weightStr = request.getParameter("weight");
        double weight = weightStr == null ? 0 : Double.parseDouble(weightStr);

        String tmId = request.getParameter("tm_id");
        int defaultTmid = tmId == null ? 1 : Integer.parseInt(tmId);

        String c3Id = request.getParameter("c3_id");
        int defaultC3Id = c3Id == null ? 1 : Integer.parseInt(c3Id);

        String img = request.getParameter("img[]");

        //2.参数补齐
        SkuInfo skuInfo = new SkuInfo();
        skuInfo.setSkuName(skuName);
        skuInfo.setSkuDesc(skuDesc);
        skuInfo.setPrice(price);
        skuInfo.setWeight(weight);
        Trademark trademark = new Trademark();
        trademark.setTmId(defaultTmid);
        skuInfo.setTrademark(trademark);

        Category3 category3 = new Category3();
        category3.setId(defaultC3Id);
        skuInfo.setCategory3(category3);
        skuInfo.setSkuDefaultImg(img);
        skuInfo.setCreateTime(new Date());

        //3.添加
        SkuInfoDao skuInfoDao = new SkuInfoDao();
        int row = skuInfoDao.addSku(skuInfo);
        System.out.println("添加Sku ===> " + row);

        //4.页面跳转
        response.sendRedirect(request.getContextPath()+"/sku/list");

    }
}

```

@tab 标题 2

``` java
public static void main(){
    System.out.println("Hello222");
}
```



@tab:active 标题 3

``` java
public static void main(){
    System.out.println("Hello22233");
}
```



<!-- tab 3 内容 -->

:::



