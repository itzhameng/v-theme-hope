<template><div><h1 id="mysql数据库简介、安装" tabindex="-1"><a class="header-anchor" href="#mysql数据库简介、安装" aria-hidden="true">#</a> Mysql数据库简介、安装</h1>
<h2 id="oracle简介" tabindex="-1"><a class="header-anchor" href="#oracle简介" aria-hidden="true">#</a> Oracle简介</h2>
<h3 id="oracle介绍" tabindex="-1"><a class="header-anchor" href="#oracle介绍" aria-hidden="true">#</a> Oracle介绍</h3>
<p>Oracle Database，又名Oracle RDBMS，简称Oracle。
是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小、微机环境。它是一种高效率、可靠性好的适应高吞吐量的数据库解决方案。
测试666</p>
<p><strong>数据库在整个程序中占有重要的位置</strong></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823113118416.png?imageslim" alt="image-20220823113118416" loading="lazy"></p>
<h3 id="常见的数据库" tabindex="-1"><a class="header-anchor" href="#常见的数据库" aria-hidden="true">#</a> 常见的数据库</h3>
<p>为了迎合市面上多变的需求，从而诞生了不同种类的数据库，我们可以大致将数据库分为以下几种类型：</p>
<ul>
<li><strong>DB</strong>：DataBase数据库
<ul>
<li>指的是存储数据的仓库，将数据存储到指定的设备中</li>
</ul>
</li>
<li><strong>DBMS</strong>：DataBase Management System数据库管理系统
<ul>
<li>数据库管理系统实现对数据库中数据进行各种管理操作</li>
<li>科学的组合和存储数据</li>
<li>高效的获取和维护数据</li>
<li>向用户提供各种操作功能</li>
</ul>
</li>
<li><strong>RDBMS</strong>：Relational Database Management System 关系型数据库管理系统
<ul>
<li>RDBMS是将数据组织为相关的行和列的系统，而管理关系数据库的计算机软件就是RDBMS 。</li>
<li>它通过数据、关系和对数据的约束三者组成的数据模型来存放和管理数据。</li>
<li>代表：Oracle,Mysql,SqlServer</li>
<li>特点：是以表格的形式进行展示，可以分为行和列</li>
</ul>
</li>
<li><strong>NOSQL</strong>：Not Only SQL，意即“不仅仅是SQL” 也被称为非关系型数据库。
<ul>
<li>代表：Redis</li>
<li>特点：key-value数据库，存储效率比RDBMS更快</li>
</ul>
</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/03.常用数据库产品.png?imageslim" alt="03.常用数据库产品" loading="lazy"></p>
<h3 id="oracle和mysql区别" tabindex="-1"><a class="header-anchor" href="#oracle和mysql区别" aria-hidden="true">#</a> Oracle和Mysql区别</h3>
<p>Oracle和MySQL都是流行的关系数据库管理系统（RDBMS），在国内被广泛使用；
大部分关系型数据库的运行方式和底层逻辑都类似，Oracle和Mysql也不例外，但是两者又有一定的区别：</p>
<table>
<thead>
<tr>
<th>区别</th>
<th>Oracle</th>
<th>Mysql</th>
</tr>
</thead>
<tbody>
<tr>
<td>费用</td>
<td>收费、闭源</td>
<td>开源、免费</td>
</tr>
<tr>
<td>内存</td>
<td>内存占用大</td>
<td>内存占用小</td>
</tr>
<tr>
<td>自增</td>
<td>不支持自增</td>
<td>支持自增</td>
</tr>
<tr>
<td>分页关键字</td>
<td>ROWNUM</td>
<td>LIMIT</td>
</tr>
<tr>
<td>事务</td>
<td>手动提交</td>
<td>默认自动提交</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>Oracle和MySQL都是甲骨文公司的产品！！</p>
</div>
<h2 id="oracle服务端安装" tabindex="-1"><a class="header-anchor" href="#oracle服务端安装" aria-hidden="true">#</a> Oracle服务端安装</h2>
<h3 id="安装包下载" tabindex="-1"><a class="header-anchor" href="#安装包下载" aria-hidden="true">#</a> 安装包下载</h3>
<p>准备对应的安装文件，这里我们使用的版本是<code v-pre>Oracle 11G</code></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823173838946.png?imageslim" alt="image-20220823173838946" loading="lazy"></p>
<h3 id="安装服务端" tabindex="-1"><a class="header-anchor" href="#安装服务端" aria-hidden="true">#</a> 安装服务端</h3>
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
<h3 id="安装pl-sql可视化工具" tabindex="-1"><a class="header-anchor" href="#安装pl-sql可视化工具" aria-hidden="true">#</a> 安装PL/SQL可视化工具</h3>
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
<h3 id="导入测试数据" tabindex="-1"><a class="header-anchor" href="#导入测试数据" aria-hidden="true">#</a> 导入测试数据</h3>
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
<h2 id="oracle服务端卸载" tabindex="-1"><a class="header-anchor" href="#oracle服务端卸载" aria-hidden="true">#</a> Oracle服务端卸载</h2>
<p>可以对废弃的Oracle进行卸载，但是一定要卸载干劲，不然会影响下一次安装。</p>
<p>1：停止oracle所有服务</p>
<p>2:   在开始菜单中，找到Universal Installer，运行Oracle Universal Installer，	单击卸载产品</p>
<p>3:    在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除</p>
<p>4:    按Windows徽标键和R键，打开运行窗口，输入regedit，打开注册表，	依次展开HKEY_LOCAL_MACHINE\SOFTWARE，找到oracle，删除</p>
<p>5:    依次展开HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services中，	删除所有oracle开头的项</p>
<p>6:    依次展开	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\A	pplication，删除所有oracle开头的项；		在HKEY_CLASSES_ROOT，删除以ora开头的项</p>
<p>7 :   重启电脑，删除oracle目录，删除Oracle的安装目录app等</p>
<blockquote>
<p>第一步：停止所有Oracle服务</p>
</blockquote>
<p>打开电脑中服务的位置：控制面板--&gt;管理工具--&gt;服务</p>
<p><img src="http://img.itzhameng.com/blog/image-20220823162712995.png?imageslim" alt="image-20220823162712995" loading="lazy"></p>
<blockquote>
<p>第二步：在开始菜单中，找到<code v-pre>Universal Inssstaller</code>，运行<code v-pre>Oracle Universal Installer</code>，	单击卸载产品</p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220823163119143.png?imageslim" alt="image-20220823163119143" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823163918927.png?imageslim" alt="image-20220823163918927" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823164107930.png?imageslim" alt="image-20220823164107930" loading="lazy"></p>
<blockquote>
<p>第三步：在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除</p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220823164355830.png?imageslim" alt="image-20220823164355830" loading="lazy"></p>
<p>等待卸载完成，确定即可。</p>
<blockquote>
<p>第四步：删除注册表:（慎重，千万别删错了，可能导致电脑异常！！！）</p>
<ul>
<li>
<p>按Windows徽标键和R键，打开运行窗口，输入<code v-pre>regedit</code>，打开注册表</p>
</li>
<li>
<p>依次展开<code v-pre>HKEY_LOCAL_MACHINE\SOFTWARE</code>，找到oracle，删除</p>
</li>
<li>
<p>依次展开<code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services</code>中，	删除所有oracle开头的项</p>
</li>
<li>
<p>依次展开<code v-pre>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\Application</code>，删除所有oracle开头的</p>
</li>
<li>
<p>在<code v-pre>HKEY_CLASSES_ROOT</code>，删除以ora开头的项</p>
</li>
</ul>
<p>重启电脑，删除oracle目录，删除Oracle的安装目录app等</p>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220823165246724.png?imageslim" alt="image-20220823165246724" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823165458290.png?imageslim" alt="image-20220823165458290" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823165919349.png?imageslim" alt="image-20220823165919349" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823170541486.png?imageslim" alt="image-20220823170541486" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823170803294.png?imageslim" alt="image-20220823170803294" loading="lazy"></p>
<blockquote>
<p>第五步：重启电脑！！！删除Oracle的安装目录app</p>
<ul>
<li>找到app安装路径，删除</li>
<li>找到<code v-pre>C:\Program Files</code>路径所有Oracle相关的文件</li>
<li>找到<code v-pre>C:\Program Files (x86)</code>路径所有Oracle相关的文件</li>
<li>找到<code v-pre>C:\ProgramData\Microsoft\Windows\Start Menu\Programs</code>删除Oracle相关文件</li>
</ul>
</blockquote>
<p><img src="http://img.itzhameng.com/blog/image-20220823171433466.png?imageslim" alt="image-20220823171430046" loading="lazy"></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823173000086.png?imageslim" alt="image-20220823173000086" loading="lazy"></p>
<p>完成！！！</p>
<h2 id="oracle新增数据库" tabindex="-1"><a class="header-anchor" href="#oracle新增数据库" aria-hidden="true">#</a> Oracle新增数据库</h2>
</div></template>
