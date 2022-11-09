<template><div><h1 id="自动化部署" tabindex="-1"><a class="header-anchor" href="#自动化部署" aria-hidden="true">#</a> 自动化部署</h1>
<h2 id="一、准备" tabindex="-1"><a class="header-anchor" href="#一、准备" aria-hidden="true">#</a> 一、准备</h2>
<h3 id="_1-1-安装git" tabindex="-1"><a class="header-anchor" href="#_1-1-安装git" aria-hidden="true">#</a> 1.1 安装git</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 安装git</span>
yum <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment"># 配置用户信息</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"xxx"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">"xxxxxx@163.com"</span>

<span class="token comment"># 生成公钥</span>
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"xxxxxx@163.com"</span>

<span class="token comment"># 查看公钥</span>
<span class="token function">cat</span> ~/.ssh/id_rsa.pub
<span class="token comment"># ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置公钥</strong></p>
<p>在gitee.com的设置中心进行配置</p>
<p><img src="http://img.itzhameng.com/blog/image-20221108164234449.png?imageslim" alt="image-20221108164234449" loading="lazy"></p>
<h3 id="_1-2-安装node" tabindex="-1"><a class="header-anchor" href="#_1-2-安装node" aria-hidden="true">#</a> 1.2 安装node</h3>
<p><a href="https://registry.npmmirror.com/binary.html?path=node/latest-v16.x/" target="_blank" rel="noopener noreferrer">https://registry.npmmirror.com/binary.html?path=node/latest-v16.x/<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">###</span>
<span class="token comment"># 设置镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

<span class="token comment"># 查看镜像</span>
<span class="token function">npm</span> config get registry

<span class="token comment"># 切回原来镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org

<span class="token comment"># https://blog.csdn.net/qingpingguo12/article/details/126137315</span>







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
