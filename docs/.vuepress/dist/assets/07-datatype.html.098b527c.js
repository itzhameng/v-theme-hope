import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.b77f7dff.js";const e={},p=t(`<h1 id="java\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#java\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> Java\u6570\u636E\u7C7B\u578B</h1><p>Java\u662F\u2014\u79CD\u5F3A\u7C7B\u578B\u8BED\u8A00\u3002\u8FD9\u5C31\u610F\u5473\u7740\u5FC5\u987B\u4E3A\u6BCF\u4E00\u4E2A\u53D8\u91CF\u58F0\u660E\u4E00\u79CD\u7C7B\u578B\uFF0C\u5728\u5185\u5B58\u4E2D\u5206\u914D\u4E86\u4E0D\u540C\u5927\u5C0F\u7684\u5185\u5B58\u7A7A\u95F4\u3002\u5728Java\u4E2D\uFF0C\u4E00\u5171\u67098\u79CD\u57FA\u672C\u7C7B\u578B(primitive type)\uFF0C\u5176\u4E2D\u67094\u79CD\u6574\u578B\u30012\u79CD\u6D6E\u70B9\u7C7B\u578B\u30011\u79CD\u7528\u4E8E\u8868\u793AUnicode\u7F16\u7801\u7684\u5B57\u7B26\u5355\u5143\u7684\u5B57\u7B26\u7C7B\u578Bchar\u548C1\u79CD\u7528\u4E8E\u8868\u793A\u771F\u503C\u7684boolean\u7C7B\u578B\u3002</p><p><img src="http://img.itzhameng.com/blog/R4wlh6XRJEBX.png?imageslim" alt="Java\u6570\u636E\u7C7B\u578B" loading="lazy"></p><h2 id="_4-1-\u6574\u578B" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6574\u578B" aria-hidden="true">#</a> 4.1 \u6574\u578B</h2><p>Java\u5404\u6574\u578B\u7C7B\u578B\u6709\u56FA\u5B9A\u7684\u6570\u636E\u8303\u56F4\u548C\u5B57\u6BB5\u957F\u5EA6\uFF0C\u4E0D\u53D7\u64CD\u4F5C\u7CFB\u7EDFOS\u7684\u5F71\u54CD\uFF0C\u4EE5\u4FDD\u8BC1Java\u7A0B\u5E8F\u7684\u53EF\u79FB\u690D\u6027\u3002 \u5E76\u4E14Java\u63D0\u4F9B\u56DB\u79CD\u6574\u578B(<code>byte</code>,<code>short</code>,<code>int</code>,<code>long</code>)\u7528\u4E8E\u8868\u793A\u6CA1\u6709\u5C0F\u6570\u90E8\u5206\u7684\u503C\uFF0C\u5E76\u4E14\u5141\u8BB8\u5B83\u4EEC\u4E3A\u8D1F\u6570\u3002</p><p><img src="http://img.itzhameng.com/blog/ML0vucXQSGkP.png?imageslim" alt="mark" loading="lazy"></p><p>Java\u7684\u6574\u578B\u9ED8\u8BA4\u4E3A<code>int</code>\u7C7B\u578B\uFF0C\u5982\u679C\u58F0\u660E<code>long</code>\u578B\u6574\u578B\u5FC5\u987B\u5728\u6570\u503C\u540E\u6DFB\u52A0<code>l</code>\u6216\u8005<code>L</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> num2 <span class="token operator">=</span> <span class="token number">100L</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0Cint\u7C7B\u578B\u6700\u5E38\u7528\u3002\u4F46\u5982\u679C\u8868\u793A\u661F\u7403\u4E0A\u7684\u5C45\u4F4F\u4EBA\u6570\uFF0C\u5C31\u9700\u8981\u4F7F\u7528long\u7C7B\u578B\u4E86,\u56E0\u4E3Aint\u7C7B\u578B\u6570\u503C\u8303\u56F4\u6700\u5927\u7684\u662F 2\u768431\u6B21\u65B9(\u6B63\u597D\u8D85\u8FC720\u4EBF)\u3002\u8FD9\u6837\u7684\u8BDD\u5982\u679C\u4F7F\u7528int\u80AF\u5B9A\u4F1A\u8D85\u8FC7\u8303\u56F4\u3002</p><h2 id="_4-2-\u6D6E\u70B9\u578B" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6D6E\u70B9\u578B" aria-hidden="true">#</a> 4.2 \u6D6E\u70B9\u578B</h2><p>\u4E0E\u6574\u6570\u7C7B\u578B\u7C7B\u4F3C\uFF0CJava \u6D6E\u70B9\u7C7B\u578B\u4E5F\u6709\u56FA\u5B9A\u7684\u8868\u6570\u8303\u56F4\u548C\u5B57\u6BB5\u957F\u5EA6\uFF0C\u4E0D\u53D7\u5177\u4F53OS\u7684\u5F71\u54CD\u3002 \u6D6E\u70B9\u7C7B\u578B\u901A\u5E38\u7528\u4E8E\u8868\u793A\u6709\u5C0F\u6570\u90E8\u5206\u7684\u6570\u503C\u3002<em>float</em>\u8868\u793A\u5355\u7CBE\u5EA6\uFF1B<em>double</em>\u8868\u793A\u53CC\u7CBE\u5EA6\uFF0C\u540C\u65F6\u4E5F\u662Ffloat\u7684\u4E24\u500D <img src="http://img.itzhameng.com/blog/CcGVr6AjcUd1.png?imageslim" alt="mark" loading="lazy"></p><p>Java \u7684\u6D6E\u70B9\u578B\u5E38\u91CF\u9ED8\u8BA4\u4E3A double \u578B\uFF0C\u58F0\u660E float \u578B\u5E38\u91CF\uFF0C\u987B\u540E\u52A0 <code>\u2018f\u2019</code> \u6216 <code>\u2018F\u2019</code>\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">10.5</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> d2 <span class="token operator">=</span> <span class="token number">10.5F</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D6E\u70B9\u6570\u503C\u4E0D\u9002\u7528\u4E8E\u65E0\u6CD5\u63A5\u53D7\u820D\u5165\u8BEF\u5DEE\u7684\u91D1\u878D\u8BA1\u7B97\u4E2D\u3002\u4F8B\u5982\uFF0C\u547D\u4EE4System.out.printIn(2.0-1.1\uFF09\u5C06\u6253\u5370\u51FA0.8999999999999999\uFF0C\u800C\u4E0D\u662F\u4EBA\u4EEC\u60F3\u8C61\u76840.9\u3002</p><p>\u8FD9\u79CD\u820D\u5165\u8BEF\u5DEE\u7684\u4E3B\u8981\u539F\u56E0\u662F\u6D6E\u70B9\u6570\u503C\u91C7\u7528<strong>\u4E8C\u8FDB\u5236\u7CFB\u7EDF</strong>\u8868\u793A\uFF0C\u800C\u5728\u4E8C\u8FDB\u5236\u7CFB\u7EDF\u4E2D\u65E0\u6CD5\u7CBE\u786E\u5730\u8868\u793A\u5206\u65701/10\u3002</p><p>\u8FD9 \u5C31\u597D\u50CF\u5341\u8FDB\u5236\u65E0\u6CD5\u7CBE\u786E\u5730\u8868\u793A\u5206\u65701/3\u4E00\u6837\u3002\u5982\u679C\u5728\u6570\u503C\u8BA1\u7B97\u4E2D\u4E0D\u5141\u8BB8\u6709\u4EFB\u4F55\u820D\u5165\u8BEF\u5DEE\uFF0C\u5C31\u5E94\u8BE5\u4F7F\u7528<code>BigDecimal</code>\u7C7B\uFF0C\u4F8B\u5982\u91D1\u989D</p><h2 id="_4-3-char\u5B57\u7B26\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_4-3-char\u5B57\u7B26\u7C7B\u578B" aria-hidden="true">#</a> 4.3 char\u5B57\u7B26\u7C7B\u578B</h2><p>char \u578B\u6570\u636E\u7528\u6765\u8868\u793A\u901A\u5E38\u610F\u4E49\u4E0A&quot;\u5B57\u7B26&quot;\u3002 \u5B57\u7B26\u578B\u5E38\u91CF\u7684\u4E09\u79CD\u8868\u73B0\u5F62\u5F0F\uFF1A</p><ul><li>\u5B57\u7B26\u5E38\u91CF\u662F\u7528\u5355\u5F15\u53F7(\u2018 \u2019)\u62EC\u8D77\u6765\u7684\u5355\u4E2A\u5B57\u7B26\uFF0C\u6DB5\u76D6\u4E16\u754C\u4E0A\u6240\u6709\u4E66\u9762\u8BED\u7684\u5B57\u7B26\u3002\u4F8B\u5982\uFF1Achar c1 = &#39;a&#39;; char c2 = &#39;\u4E2D&#39;; char c3 = &#39;9&#39;;</li><li>Java\u4E2D\u8FD8\u5141\u8BB8\u4F7F\u7528\u8F6C\u4E49\u5B57\u7B26\u2018\\\u2019\u6765\u5C06\u5176\u540E\u7684\u5B57\u7B26\u8F6C\u53D8\u4E3A\u7279\u6B8A\u5B57\u7B26\u578B\u5E38\u91CF\u3002\u4F8B\u5982\uFF1Achar c3 = &#39;\\n&#39;; -- &#39;\\n&#39;\u8868\u793A\u6362\u884C\u7B26</li><li>\u76F4\u63A5\u4F7F\u7528 Unicode \u503C\u6765\u8868\u793A\u5B57\u7B26\u578B\u5E38\u91CF\uFF1A\u2018\\uXXXX\u2019\u3002\u5176\u4E2D\uFF0CXXXX\u4EE3\u8868\u4E00\u4E2A\u5341\u516D\u8FDB\u5236\u6574\u6570\u3002\u5982\uFF1A\\u000a \u8868\u793A \\n\u3002</li></ul><p>char \u7C7B\u578B\u662F\u53EF\u4EE5\u8FDB\u884C\u8FD0\u7B97\u7684\u3002\u56E0\u4E3A\u5B83\u90FD\u5BF9\u5E94\u6709 Unicode \u503C\u3002</p><h2 id="_4-4-boolean" tabindex="-1"><a class="header-anchor" href="#_4-4-boolean" aria-hidden="true">#</a> 4.4 boolean</h2><p>boolean \u7C7B\u578B\u9002\u4E8E\u903B\u8F91\u8FD0\u7B97\uFF0C\u4E00\u822C\u7528\u4E8E\u7A0B\u5E8F\u6D41\u7A0B\u63A7\u5236\uFF1A</p><ul><li>if\u6761\u4EF6\u63A7\u5236\u8BED\u53E5\uFF1B</li><li>while\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5\uFF1B</li><li>do-while\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5\uFF1B</li><li>for\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5\uFF1B</li></ul><p>boolean\u7C7B\u578B\u6570\u636E\u53EA\u5141\u8BB8\u53D6\u503Ctrue\u548Cfalse\uFF0C\u4E0D\u53EF\u4EE50\u6216\u975E 0 \u7684\u6574\u6570\u66FF\u4EE3true\u548Cfalse\uFF0C\u8FD9\u70B9\u548CC\u8BED\u8A00\u4E0D\u540C\u3002</p><h2 id="_4-5-\u57FA\u672C\u6570\u636E\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_4-5-\u57FA\u672C\u6570\u636E\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 4.5 \u57FA\u672C\u6570\u636E\u7C7B\u578B\u8F6C\u6362</h2><p>\u7ECF\u5E38\u9700\u8981\u5C06\u4E00\u79CD\u6570\u503C\u7C7B\u578B\u8F6C\u4E3A\u53E6\u4E00\u79CD\u6570\u503C\u7C7B\u578B\uFF0C\u4F46\u662F\u5728\u8F6C\u6362\u7684\u8FC7\u7A0B\u4E2D\u4E00\u5B9A\u8981\u6CE8\u610F\u53EF\u80FD\u4F1A\u9020\u6210\u6570\u636E\u7684\u7CBE\u5EA6\u4E22\u5931\uFF0C\u4F8B\u5982:double\u7C7B\u578B\u8F6C\u4E3Aint\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C0F\u6570\u70B9\u540E\u9762\u7684\u6570\u503C\u5C31\u4F1A\u4E22\u5931\uFF1B Java\u9488\u5BF9\u73B0\u5B9E\u60C5\u51B5\u5206\u522B\u63D0\u9AD8\u4E24\u79CD\u6570\u503C\u8F6C\u6362\u65B9\u5F0F:<code>\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362</code>\u548C<code>\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</code></p><h3 id="_4-5-1-\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_4-5-1-\u81EA\u52A8\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 4.5.1 \u81EA\u52A8\u7C7B\u578B\u8F6C\u6362</h3><p>\u5BB9\u91CF\u5C0F\u7684\u7C7B\u578B\u81EA\u52A8\u8F6C\u6362\u4E3A\u5BB9\u91CF\u5927\u7684\u6570\u636E\u7C7B\u578B\u3002\u6570\u636E\u7C7B\u578B\u6309\u5BB9\u91CF\u5927\u5C0F\u6392\u5E8F\u4E3A\uFF1A <img src="http://img.itzhameng.com/blog/z11qdGqt2PFO.png?imageslim" alt="Java\u6570\u636E\u7C7B\u578B\u8F6C\u6362" loading="lazy"></p><p>\u6709\u591A\u79CD\u7C7B\u578B\u7684\u6570\u636E\u6DF7\u5408\u8FD0\u7B97\u65F6\uFF0C\u7CFB\u7EDF\u9996\u5148\u81EA\u52A8\u5C06\u6240\u6709\u6570\u636E\u8F6C\u6362\u6210\u5BB9\u91CF\u6700\u5927\u7684\u90A3\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u8BA1\u7B97\u3002 byte,short,char\u4E4B\u95F4\u4E0D\u4F1A\u76F8\u4E92\u8F6C\u6362\uFF0C\u4ED6\u4EEC\u4E09\u8005\u5728\u8BA1\u7B97\u65F6\u9996\u5148\u8F6C\u6362\u4E3Aint\u7C7B\u578B\u3002 \u5F53\u628A\u4EFB\u4F55\u57FA\u672C\u7C7B\u578B\u7684\u503C\u548C\u5B57\u7B26\u4E32\u503C\u8FDB\u884C\u8FDE\u63A5\u8FD0\u7B97\u65F6(+)\uFF0C\u57FA\u672C\u7C7B\u578B\u7684\u503C\u5C06\u81EA\u52A8\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u3002</p><h3 id="_4-5-2-\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_4-5-2-\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> 4.5.2 \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</h3><p>\u5C06\u5BB9\u91CF\u5927\u7684\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u4E3A\u5BB9\u91CF\u5C0F\u7684\u6570\u636E\u7C7B\u578B\u3002\u4F7F\u7528\u65F6\u8981\u52A0\u4E0A\u5F3A\u5236\u8F6C\u6362\u7B26\uFF08<code>()</code>\uFF09\uFF0C\u4F46\u53EF\u80FD\u9020\u6210\u7CBE\u5EA6\u964D\u4F4E\u6216\u6EA2\u51FA,\u683C\u5916\u8981\u6CE8\u610F\u3002 \u901A\u5E38\uFF0C\u5B57\u7B26\u4E32\u4E0D\u80FD\u76F4\u63A5\u8F6C\u6362\u4E3A\u57FA\u672C\u7C7B\u578B\uFF0C\u4F46\u901A\u8FC7\u57FA\u672C\u7C7B\u578B\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\u5219\u53EF\u4EE5\u5B9E\u73B0\u628A\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u57FA\u672C\u7C7B\u578B\u3002\u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token string">&quot;43&quot;</span><span class="token punctuation">;</span> <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>boolean\u7C7B\u578B\u4E0D\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5176\u5B83\u7684\u6570\u636E\u7C7B\u578B\u3002</p><h2 id="_4-6-\u5927\u6570\u503C" tabindex="-1"><a class="header-anchor" href="#_4-6-\u5927\u6570\u503C" aria-hidden="true">#</a> 4.6 \u5927\u6570\u503C</h2><p>\u5982\u679C\u57FA\u672C\u7684\u6574\u6570\u548C\u6D6E\u70B9\u6570\u7CBE\u5EA6\u4E0D\u80FD\u591F\u6EE1\u8DB3\u9700\u6C42\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528java.math\u5305\u4E2D\u7684\u4E24\u4E2A\u5F88\u6709\u7528\u7684\u7C7B:<code>BigInteger</code>\u548C<code>BigDecimal</code>\u3002</p><p>\u8FD9\u4E24\u4E2A\u7C7B\u53EF\u4EE5\u5904\u7406\u5305\u542B\u4EFB\u610F\u957F\u5EA6\u6570\u5B57\u5E8F\u5217\u7684\u6570\u503C\u3002</p><ul><li>BigInteger\u7C7B\u5B9E\u73B0\u4E86\u4EFB\u610F\u7CBE\u5EA6\u7684\u6574\u6570\u8FD0\u7B97\uFF0C</li><li>BigDecimal\u5B9E\u73B0\u4E86\u4EFB\u610F\u7CBE\u5EA6\u7684\u6D6E\u70B9\u6570\u8FD0\u7B97\u3002</li></ul><p>\u4F7F\u7528\u9759\u6001\u7684valueOf\u65B9\u6CD5\u53EF\u4EE5\u5C06\u666E\u901A\u7684\u6570\u503C\u8F6C\u6362\u4E3A\u5927\u6570\u503C:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">BigInteger</span> bigInteger <span class="token operator">=</span> <span class="token class-name">BigInteger</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> bigDecimal <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9057\u61BE\u7684\u662F\uFF0C\u4E0D\u80FD\u4F7F\u7528\u4EBA\u4EEC\u719F\u6089\u7684\u7B97\u672F\u8FD0\u7B97\u7B26\uFF08\u5982:\uFF0B\u548C*\uFF09\u5904\u7406\u5927\u6570\u503C\u3002\u800C\u9700\u8981\u4F7F\u7528\u5927\u6570 \u503C\u7C7B\u4E2D\u7684add\u548Cmultiply\u65B9\u6CD5\u3002</p><h3 id="_4-6-1-biginteger" tabindex="-1"><a class="header-anchor" href="#_4-6-1-biginteger" aria-hidden="true">#</a> 4.6.1 BigInteger</h3><p>BigIntcger\u7C7B\u5B9E\u73B0\u4E86\u4EFB\u610F\u7CBE\u5EA6\u7684\u6574\u6570\u8FD0\u7B97\u3002\u5E38\u7528\u65B9\u6CD5\u5982\u4E0B:</p><table><thead><tr><th style="text-align:left;">BigInteger\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">static valueOf()</td><td style="text-align:left;">\u5C06\u53C2\u6570\u8F6C\u6362\u4E3ABigInteger</td></tr><tr><td style="text-align:left;">add()</td><td style="text-align:left;">\u76F8\u52A0</td></tr><tr><td style="text-align:left;">subtract()</td><td style="text-align:left;">\u76F8\u51CF</td></tr><tr><td style="text-align:left;">multiply()</td><td style="text-align:left;">\u76F8\u4E58</td></tr><tr><td style="text-align:left;">divide()</td><td style="text-align:left;">\u76F8\u9664\u53D6\u6574</td></tr><tr><td style="text-align:left;">remainder()</td><td style="text-align:left;">\u53D6\u4F59</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//int \u8F6C\u4E3A BigInteger</span>
    <span class="token class-name">BigInteger</span> num1 <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span>BigInteger</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigInteger</span> num2 <span class="token operator">=</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span>BigInteger</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u52A0</span>
    <span class="token class-name">BigInteger</span> add <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u52A0:&quot;</span> <span class="token operator">+</span> add<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u51CF</span>
    <span class="token class-name">BigInteger</span> subtract <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u51CF:&quot;</span> <span class="token operator">+</span> subtract<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u4E58</span>
    <span class="token class-name">BigInteger</span> multiply <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u4E58:&quot;</span> <span class="token operator">+</span> multiply<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u9664 \u53D6\u6574</span>
    <span class="token class-name">BigInteger</span> divide <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u9664:&quot;</span> <span class="token operator">+</span> divide<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u53D6\u6478|\u53D6\u4F59\u6570</span>
    <span class="token class-name">BigInteger</span> remainder <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">remainder</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u4F59:&quot;</span> <span class="token operator">+</span> remainder<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7ED3\u679C:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>\u76F8\u52A0:112
\u76F8\u51CF:88
\u76F8\u4E58:1200
\u76F8\u9664:8
\u53D6\u4F59:4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-1-bigdecimal" tabindex="-1"><a class="header-anchor" href="#_4-6-1-bigdecimal" aria-hidden="true">#</a> 4.6.1 BigDecimal</h3><p>BigDecimal\u5B9E\u73B0\u4E86\u4EFB\u610F\u7CBE\u5EA6\u7684\u6D6E\u70B9\u6570\u8FD0\u7B97\u3002\u5E38\u7528\u65B9\u6CD5\u5982\u4E0B:</p><table><thead><tr><th style="text-align:left;">BigDecimal\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:left;">static valueOf()</td><td style="text-align:left;">\u5C06\u53C2\u6570\u8F6C\u6362\u4E3ABigDecimal</td></tr><tr><td style="text-align:left;">add()</td><td style="text-align:left;">\u76F8\u52A0</td></tr><tr><td style="text-align:left;">subtract()</td><td style="text-align:left;">\u76F8\u51CF</td></tr><tr><td style="text-align:left;">multiply()</td><td style="text-align:left;">\u76F8\u4E58</td></tr><tr><td style="text-align:left;">divide()</td><td style="text-align:left;">\u76F8\u9664\u53D6\u6574</td></tr><tr><td style="text-align:left;">remainder()</td><td style="text-align:left;">\u53D6\u4F59</td></tr></tbody></table><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//int \u8F6C\u4E3A BigInteger</span>
    <span class="token class-name">BigDecimal</span> num1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">100.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BigDecimal</span> num2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token number">12.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u76F8\u52A0</span>
    <span class="token class-name">BigDecimal</span> add <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u52A0:&quot;</span> <span class="token operator">+</span> add<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u51CF</span>
    <span class="token class-name">BigDecimal</span> subtract <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u51CF:&quot;</span> <span class="token operator">+</span> subtract<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u4E58</span>
    <span class="token class-name">BigDecimal</span> multiply <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u4E58:&quot;</span> <span class="token operator">+</span> multiply<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u76F8\u9664 \u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570,\u6700\u540E\u4E00\u4F4D\u56DB\u820D\u4E94\u5165\u3002\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u6A21\u5F0F</span>
    <span class="token class-name">BigDecimal</span> divide <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>num2<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span><span class="token constant">UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u76F8\u9664\u4E24\u4F4D\u5C0F\u6570/\u56DB\u820D\u4E94\u5165:&quot;</span> <span class="token operator">+</span> divide<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u53D6\u6478|\u53D6\u4F59\u6570</span>
    <span class="token class-name">BigDecimal</span> remainder <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">remainder</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u4F59:&quot;</span> <span class="token operator">+</span> remainder<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7ED3\u679C:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>\u76F8\u52A0:112.8
\u76F8\u51CF:88.2
\u76F8\u4E58:1236.15
\u76F8\u9664\u4E24\u4F4D\u5C0F\u6570/\u56DB\u820D\u4E94\u5165:8.18
\u53D6\u4F59:2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),l=[p];function c(o,i){return a(),s("div",null,l)}var r=n(e,[["render",c],["__file","07-datatype.html.vue"]]);export{r as default};