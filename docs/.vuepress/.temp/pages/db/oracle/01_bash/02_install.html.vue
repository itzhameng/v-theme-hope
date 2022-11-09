<template><div><h1 id="oracle服务端安装" tabindex="-1"><a class="header-anchor" href="#oracle服务端安装" aria-hidden="true">#</a> Oracle服务端安装</h1>
<p>npm i @vuepress/client@2.0.0-beta.49</p>
<p>npm i vuepress@2.0.0-beta.49</p>
<p>set-ExecutionPolicy RemoteSigned</p>
<h2 id="安装包下载" tabindex="-1"><a class="header-anchor" href="#安装包下载" aria-hidden="true">#</a> 安装包下载</h2>
<p>准备对应的安装文件，这里我们使用的版本是<code v-pre>Oracle 11G</code></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823173838946.png?imageslim" alt="image-20220823173838946" loading="lazy"></p>
<h2 id="安装服务端" tabindex="-1"><a class="header-anchor" href="#安装服务端" aria-hidden="true">#</a> 安装服务端</h2>
<p>将<code v-pre>OracleDatabase11g.zip</code>文件解压</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824172039557.png?imageslim" alt="image-20220824172039557" loading="lazy"></p>
<p>然后点击<code v-pre>setup.exe</code>进行安装。</p>
<blockquote>
<p>根据提示进行下一步，具体过程如下图！</p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220824172223783.png?imageslim" alt="image-20220824172223783" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824172312574.png?imageslim" alt="image-20220824172312574" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824172332332.png?imageslim" alt="image-20220824172332332" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824172541413.png?imageslim" alt="image-20220824172541413" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824172601180.png?imageslim" alt="image-20220824172601180" loading="lazy"></p>
<blockquote>
<p>注意：</p>
<ul>
<li>选择安装位置，不建议安装在C盘</li>
<li>密码：要记住别忘记了</li>
</ul>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220824173002795.png?imageslim" alt="image-20220824173002795" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824173023499.png?imageslim" alt="image-20220824173023499" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824173044833.png?imageslim" alt="image-20220824173044833" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824173113036.png?imageslim" alt="image-20220824173113036" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824173414165.png?imageslim" alt="image-20220824173414165" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824173450979.png?imageslim" alt="image-20220824173450979" loading="lazy"></p>
<blockquote>
<p>安装完成之后，我们也可以使用对用户进行具体<code v-pre>口令管理</code></p>
<ul>
<li>system/sys 这两个用户是超级管理员，默认是可以使用</li>
<li>hr 用户，默认是锁定的。所以此时可以解锁。方便后期使用</li>
</ul>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220824174129273.png?imageslim" alt="image-20220824174129273" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824174327195.png?imageslim" alt="image-20220824174327195" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824174355056.png?imageslim" alt="image-20220824174355056" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824174407547.png?imageslim" alt="image-20220824174407547" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824174527071.png?imageslim" alt="image-20220824174527071" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824174547399.png?imageslim" alt="image-20220824174547399" loading="lazy"></p>
<blockquote>
<p>测试Oracle服务器是否安装成功！</p>
<ul>
<li>电脑开始界面找到<code v-pre>SQL Plus</code>窗口</li>
<li>输入用户名/密码登录    此时用户名：system   密码：123456</li>
</ul>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220824174808615.png?imageslim" alt="image-20220824174808615" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175007929.png?imageslim" alt="image-20220824175007929" loading="lazy"></p>
<p>如果能够进入该窗口，证明已经安装成功！但是此时默认提供的是命令窗口，不方便管理。
所有我们还需要安装<code v-pre>PLSQL Developer</code>可视化工具,具体操作如下！</p>
<h2 id="安装pl-sql可视化工具" tabindex="-1"><a class="header-anchor" href="#安装pl-sql可视化工具" aria-hidden="true">#</a> 安装PL/SQL可视化工具</h2>
<p>在安装包中找PLSQL安装包，然后双击！</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175247700.png?imageslim" alt="image-20220824175247700" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175352691.png?imageslim" alt="image-20220824175352691" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175447668.png?imageslim" alt="image-20220824175447668" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175506203.png?imageslim" alt="image-20220824175506203" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175519704.png?imageslim" alt="image-20220824175519704" loading="lazy"></p>
<p>然后等待安装！！</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175551170.png?imageslim" alt="image-20220824175551170" loading="lazy"></p>
<p>安装成功以后，桌面有会个快捷方式，双击打开！</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824175723803.png?imageslim" alt="image-20220824175723803" loading="lazy"></p>
<blockquote>
<p>注意：默认需要输入注册码，注册码如下</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token comment"># plsql14 注册激活</span>
<span class="token key attr-name">product</span> <span class="token value attr-value">code: ke4tv8t5jtxz493kl8s2nn3t6xgngcmgf3</span>
<span class="token key attr-name">serial</span> <span class="token value attr-value">Number: 264452</span>
<span class="token key attr-name">password</span><span class="token punctuation">:</span> <span class="token value attr-value">xs374ca</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220824175931956.png?imageslim" alt="image-20220824175931956" loading="lazy"></p>
<p>然后可以完成登录！</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824180427048.png?imageslim" alt="image-20220824180427048" loading="lazy"></p>
<p>默认是英文，可以将英文设置成简体中文！</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824180313869.png?imageslim" alt="image-20220824180313869" loading="lazy"></p>
<p>确定以后变成了中文界面</p>
<p><img src="http://img.itzhameng.com/blog/image-20220824180355422.png?imageslim" alt="image-20220824180355422" loading="lazy"></p>
<p>至此，整个可视化工具安装成功！</p>
<h2 id="导入测试数据" tabindex="-1"><a class="header-anchor" href="#导入测试数据" aria-hidden="true">#</a> 导入测试数据</h2>
<p>为了方便后面的练习，我们可以导入测试数据！数据文件如下：<code v-pre>hr.sql</code></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824180549352.png?imageslim" alt="image-20220824180549352" loading="lazy"></p>
<blockquote>
<p>打开PLSQL，然后，根据如下步骤！</p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220824180923069.png?imageslim" alt="image-20220824180923069" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824181006448.png?imageslim" alt="image-20220824181006448" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220824181114325.png?imageslim" alt="image-20220824181114325" loading="lazy"></p>
<blockquote>
<p>到此，整个数据和测试数据已经准备完毕！可以畅游oracle之旅了！</p>
</blockquote>
</div></template>
