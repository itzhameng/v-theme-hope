import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as u,b as i,w as a,e as k,r,a as n,d as s}from"./app.bf24c2c7.js";const d={},m=k(`<h1 id="maven\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#maven\u7B80\u4ECB" aria-hidden="true">#</a> Maven\u7B80\u4ECB</h1><h2 id="_1\u3001maven\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1\u3001maven\u6982\u8FF0" aria-hidden="true">#</a> 1\u3001Maven\u6982\u8FF0</h2><p>Maven \u662F\u4E00\u4E2A\u9879\u76EE\u7BA1\u7406\u548C\u6784\u5EFA\u81EA\u52A8\u5316\u5DE5\u5177\u3002\u4F46\u662F\u5BF9\u4E8E\u6211\u4EEC\u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u6211\u4EEC\u6700\u5173\u5FC3\u7684\u662F\u5B83\u7684<code>\u9879\u76EE\u6784\u5EFA\u529F\u80FD</code></p><p>\u6700\u7B80\u5355\u7684\u65F6\u5019\u573A\u666F\u662F\uFF0C\u5728<code>pom.xml</code>\u91CC\u8BBE\u7F6E\u5BF9\u7B2C\u4E09\u65B9jar\u5305\u7684\u4F9D\u8D56\uFF0C\u800C\u4E0D\u7528\u6240\u6709\u7528\u5230\u7684jar\u5305\u90FD\u590D\u5236\u5230\u5DE5\u7A0Blib\u76EE\u5F55\uFF0C\u518D\u914D\u7F6Ejavapath\u3002</p><p>\u518D\u8005\u8BF4\u5728\u81EA\u5DF1\u5F15\u5165\u7684jar\u5305\u4F1A\u51FA\u73B0\u5F88\u591A\u91CD\u590D\u7684\u5305\uFF0C\u5BFC\u81F4\u7248\u672C\u51B2\u7A81\uFF0C\u800Cmaven\u4F1A\u81EA\u52A8\u7BA1\u7406\u4F9D\u8D56\uFF01</p><p>\u6240\u4EE5\u8FD9\u91CC\u6211\u4EEC\u4ECB\u7ECD\u7684\u5C31\u662F\u600E\u6837\u7528 maven \u6765\u6EE1\u8DB3\u6211\u4EEC\u9879\u76EE\u7684\u65E5\u5E38\u9700\u8981\u3002</p><div class="custom-container tip"><p class="custom-container-title">Maven\u4E3B\u8981\u4F5C\u7528</p><ul><li>\u7BA1\u7406jar\u5305</li><li>\u9879\u76EE\u6784\u5EFA</li></ul></div><details class="custom-container details"><summary>\u81EA\u5B9A\u4E49\u6807\u9898</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),b=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token annotation punctuation"},"@WebServlet"),n("span",{class:"token punctuation"},"("),s("name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"SkuinfoAddServlet"'),n("span",{class:"token punctuation"},","),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"/sku/add"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"SkuinfoAddServlet"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"HttpServlet"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"doGet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"HttpServletRequest"),s(" request"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"HttpServletResponse"),s(" response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"ServletException"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"IOException"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"doPost"),n("span",{class:"token punctuation"},"("),s("request"),n("span",{class:"token punctuation"},","),s(" response"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"protected"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"doPost"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"HttpServletRequest"),s(" request"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"HttpServletResponse"),s(" response"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"throws"),s(),n("span",{class:"token class-name"},"ServletException"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"IOException"),s(),n("span",{class:"token punctuation"},"{"),s(`

        `),n("span",{class:"token comment"},"//1.\u63A5\u53D7\u53C2\u6570"),s(`
        `),n("span",{class:"token class-name"},"String"),s(" skuName "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"skuName"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"String"),s(" skuDesc "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"skuDesc"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"String"),s(" priceStr "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"price"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" price "),n("span",{class:"token operator"},"="),s(" priceStr "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token class-name"},"Double"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseDouble"),n("span",{class:"token punctuation"},"("),s("priceStr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"String"),s(" weightStr "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"weight"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"double"),s(" weight "),n("span",{class:"token operator"},"="),s(" weightStr "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token class-name"},"Double"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseDouble"),n("span",{class:"token punctuation"},"("),s("weightStr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"String"),s(" tmId "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tm_id"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" defaultTmid "),n("span",{class:"token operator"},"="),s(" tmId "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("tmId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"String"),s(" c3Id "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"c3_id"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" defaultC3Id "),n("span",{class:"token operator"},"="),s(" c3Id "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token class-name"},"Integer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("c3Id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"String"),s(" img "),n("span",{class:"token operator"},"="),s(" request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getParameter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"img[]"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//2.\u53C2\u6570\u8865\u9F50"),s(`
        `),n("span",{class:"token class-name"},"SkuInfo"),s(" skuInfo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SkuInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setSkuName"),n("span",{class:"token punctuation"},"("),s("skuName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setSkuDesc"),n("span",{class:"token punctuation"},"("),s("skuDesc"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPrice"),n("span",{class:"token punctuation"},"("),s("price"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setWeight"),n("span",{class:"token punctuation"},"("),s("weight"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"Trademark"),s(" trademark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Trademark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        trademark`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTmId"),n("span",{class:"token punctuation"},"("),s("defaultTmid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTrademark"),n("span",{class:"token punctuation"},"("),s("trademark"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token class-name"},"Category3"),s(" category3 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Category3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        category3`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setId"),n("span",{class:"token punctuation"},"("),s("defaultC3Id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCategory3"),n("span",{class:"token punctuation"},"("),s("category3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setSkuDefaultImg"),n("span",{class:"token punctuation"},"("),s("img"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        skuInfo`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCreateTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//3.\u6DFB\u52A0"),s(`
        `),n("span",{class:"token class-name"},"SkuInfoDao"),s(" skuInfoDao "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"SkuInfoDao"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"int"),s(" row "),n("span",{class:"token operator"},"="),s(" skuInfoDao"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSku"),n("span",{class:"token punctuation"},"("),s("skuInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u6DFB\u52A0Sku ===> "'),s(),n("span",{class:"token operator"},"+"),s(" row"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//4.\u9875\u9762\u8DF3\u8F6C"),s(`
        response`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sendRedirect"),n("span",{class:"token punctuation"},"("),s("request"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContextPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'"/sku/list"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello222"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-java ext-java line-numbers-mode"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"static"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),s("out"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Hello22233"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(h,w){const c=r("Tabs");return p(),u("div",null,[m,i(c,{data:[{title:"\u6807\u9898 1"},{title:"\u6807\u9898 2"},{title:"\u6807\u9898 3"}],active:2},{tab0:a(({title:t,value:e,isActive:o})=>[b]),tab1:a(({title:t,value:e,isActive:o})=>[v]),tab2:a(({title:t,value:e,isActive:o})=>[g]),_:1})])}var I=l(d,[["render",f],["__file","01-maven-introduce.html.vue"]]);export{I as default};