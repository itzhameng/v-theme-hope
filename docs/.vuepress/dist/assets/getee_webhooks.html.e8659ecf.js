import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as t,a as n,b as l,e as s,d as r,r as c}from"./app.003e2845.js";const o={},d=s(`<h1 id="\u81EA\u52A8\u5316\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u5316\u90E8\u7F72" aria-hidden="true">#</a> \u81EA\u52A8\u5316\u90E8\u7F72</h1><h2 id="\u4E00\u3001\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u51C6\u5907" aria-hidden="true">#</a> \u4E00\u3001\u51C6\u5907</h2><h3 id="_1-1-\u5B89\u88C5git" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5git" aria-hidden="true">#</a> 1.1 \u5B89\u88C5git</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5git</span>
yum <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment"># \u914D\u7F6E\u7528\u6237\u4FE1\u606F</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxxxxx@163.com&quot;</span>

<span class="token comment"># \u751F\u6210\u516C\u94A5</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxxxxx@163.com&quot;</span>

<span class="token comment"># \u67E5\u770B\u516C\u94A5</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
<span class="token comment"># ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u914D\u7F6E\u516C\u94A5</strong></p><p>\u5728gitee.com\u7684\u8BBE\u7F6E\u4E2D\u5FC3\u8FDB\u884C\u914D\u7F6E</p><p><img src="http://img.itzhameng.com/blog/image-20221108164234449.png?imageslim" alt="image-20221108164234449" loading="lazy"></p><h3 id="_1-2-\u5B89\u88C5node" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B89\u88C5node" aria-hidden="true">#</a> 1.2 \u5B89\u88C5node</h3>`,8),m={href:"https://registry.npmmirror.com/binary.html?path=node/latest-v16.x/",target:"_blank",rel:"noopener noreferrer"},p=r("https://registry.npmmirror.com/binary.html?path=node/latest-v16.x/"),v=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">###</span>
<span class="token comment"># \u8BBE\u7F6E\u955C\u50CF</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

<span class="token comment"># \u67E5\u770B\u955C\u50CF</span>
<span class="token function">npm</span> config get registry

<span class="token comment"># \u5207\u56DE\u539F\u6765\u955C\u50CF</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org

<span class="token comment"># https://blog.csdn.net/qingpingguo12/article/details/126137315</span>







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(b,h){const e=c("ExternalLinkIcon");return i(),t("div",null,[d,n("p",null,[n("a",m,[p,l(e)])]),v])}var _=a(o,[["render",u],["__file","getee_webhooks.html.vue"]]);export{_ as default};
