<template><div><h1 id="oracle-简介" tabindex="-1"><a class="header-anchor" href="#oracle-简介" aria-hidden="true">#</a> Oracle 简介</h1>
<h2 id="oracle-介绍" tabindex="-1"><a class="header-anchor" href="#oracle-介绍" aria-hidden="true">#</a> Oracle 介绍</h2>
<p>Oracle Database，又名 Oracle RDBMS，简称 Oracle。
是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说 Oracle 数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小、微机环境。它是一种高效率、可靠性好的适应高吞吐量的数据库解决方案。abcefgkiki</p>
<p><strong>数据库在整个程序中占有重要的位置</strong></p>
<p><img src="http://img.itzhameng.com/blog/image-20220823113118416.png?imageslim" alt="image-20220823113118416" loading="lazy"></p>
<h2 id="常见的数据库" tabindex="-1"><a class="header-anchor" href="#常见的数据库" aria-hidden="true">#</a> 常见的数据库</h2>
<p>为了迎合市面上多变的需求，从而诞生了不同种类的数据库，我们可以大致将数据库分为以下几种类型：</p>
<ul>
<li><strong>DB</strong>：DataBase 数据库
<ul>
<li>指的是存储数据的仓库，将数据存储到指定的设备中</li>
</ul>
</li>
<li><strong>DBMS</strong>：DataBase Management System 数据库管理系统
<ul>
<li>数据库管理系统实现对数据库中数据进行各种管理操作</li>
<li>科学的组合和存储数据</li>
<li>高效的获取和维护数据</li>
<li>向用户提供各种操作功能</li>
</ul>
</li>
<li><strong>RDBMS</strong>：Relational Database Management System 关系型数据库管理系统
<ul>
<li>RDBMS 是将数据组织为相关的行和列的系统，而管理关系数据库的计算机软件就是 RDBMS 。</li>
<li>它通过数据、关系和对数据的约束三者组成的数据模型来存放和管理数据。</li>
<li>代表：Oracle,Mysql,SqlServer</li>
<li>特点：是以表格的形式进行展示，可以分为行和列</li>
</ul>
</li>
<li><strong>NOSQL</strong>：Not Only SQL，意即“不仅仅是 SQL” 也被称为非关系型数据库。
<ul>
<li>代表：Redis</li>
<li>特点：key-value 数据库，存储效率比 RDBMS 更快</li>
</ul>
</li>
</ul>
<p><img src="http://img.itzhameng.com/blog/03.常用数据库产品.png?imageslim" alt="03.常用数据库产品" loading="lazy"></p>
<h2 id="oracle-和-mysql-区别" tabindex="-1"><a class="header-anchor" href="#oracle-和-mysql-区别" aria-hidden="true">#</a> Oracle 和 Mysql 区别</h2>
<p>Oracle 和 MySQL 都是流行的关系数据库管理系统（RDBMS），在国内被广泛使用；
大部分关系型数据库的运行方式和底层逻辑都类似，Oracle 和 Mysql 也不例外，但是两者又有一定的区别：</p>
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
<p>Oracle 和 MySQL 都是甲骨文公司的产品！！</p>
</div>
</div></template>
