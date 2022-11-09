<template><div><h1 id="oracle服务端卸载" tabindex="-1"><a class="header-anchor" href="#oracle服务端卸载" aria-hidden="true">#</a> Oracle服务端卸载</h1>
<p>可以对废弃的Oracle进行卸载，但是一定要卸载干劲，不然会影响下一次安装。</p>
<p>1：停止oracle所有服务</p>
<p>2:   在开始菜单中，找到Universal Installer，运行Oracle Universal Installer，	单击卸载产品</p>
<p>3:    在产品清单窗口中，单击全部展开，除了OraDb11g_home1外，勾选其	他项目，单击删除</p>
<p>4:    按Windows徽标键和R键，打开运行窗口，输入regedit，打开注册表，	依次展开HKEY_LOCAL_MACHINE\SOFTWARE，找到oracle，删除</p>
<p>5:    依次展开HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services中，	删除所有oracle开头的项</p>
<p>6:    依次展开	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Eventlog\A	pplication，删除所有oracle开头的项；		在HKEY_CLASSES_ROOT，删除以ora开头的项</p>
<p>7 :   重启电脑，删除oracle目录，删除Oracle的安装目录app等</p>
<h2 id="关闭服务" tabindex="-1"><a class="header-anchor" href="#关闭服务" aria-hidden="true">#</a> 关闭服务</h2>
<blockquote>
<p>第一步：停止所有Oracle服务</p>
</blockquote>
<p>打开电脑中服务的位置：控制面板--&gt;管理工具--&gt;服务</p>
<p><img src="http://img.itzhameng.com/blog/image-20220823162712995.png?imageslim" alt="image-20220823162712995" loading="lazy"></p>
<h2 id="开始卸载" tabindex="-1"><a class="header-anchor" href="#开始卸载" aria-hidden="true">#</a> 开始卸载</h2>
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
<h2 id="删除注册表" tabindex="-1"><a class="header-anchor" href="#删除注册表" aria-hidden="true">#</a> 删除注册表</h2>
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
<h2 id="重启电脑-删除文件夹" tabindex="-1"><a class="header-anchor" href="#重启电脑-删除文件夹" aria-hidden="true">#</a> 重启电脑 删除文件夹</h2>
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
</div></template>
