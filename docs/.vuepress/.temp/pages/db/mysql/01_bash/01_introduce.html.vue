<template><div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>module.exports = <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>'vuepress-plugin-toolbar'<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      'pageNav'<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> '导航'
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      opts<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          icon<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          name<span class="token operator">:</span> '二维码'<span class="token punctuation">,</span>
          link<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          popover<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> '使用 Base64 来作为图片源'<span class="token punctuation">,</span>
            type<span class="token operator">:</span> 'image'<span class="token punctuation">,</span>
            imageUrl<span class="token operator">:</span> 'data<span class="token operator">:</span>image/png;base64<span class="token punctuation">,</span>这里是 Base64图片编码代码作为图片源'<span class="token punctuation">,</span>
            more<span class="token operator">:</span> <span class="token punctuation">{</span>
              newWindow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              link<span class="token operator">:</span> '/vuepress-plugin/vuepress-plugin-toolbar/'<span class="token punctuation">,</span>
              name<span class="token operator">:</span> '了解更多'
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          icon<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          name<span class="token operator">:</span> '纯展示'
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          icon<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          name<span class="token operator">:</span> '文本'<span class="token punctuation">,</span>
          popover<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> 'text'<span class="token punctuation">,</span>
            title<span class="token operator">:</span> '纯文本说明'<span class="token punctuation">,</span>
            text<span class="token operator">:</span> '这是一个纯文本的内容展示，就是一段话'
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          icon<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          name<span class="token operator">:</span> 'html 支持'<span class="token punctuation">,</span>
          popover<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> 'html'<span class="token punctuation">,</span>
            title<span class="token operator">:</span> '使用简单的 HTML 显示'<span class="token punctuation">,</span>
            html<span class="token operator">:</span> '&lt;h1>使用简单的 HTML&lt;/h1> 进行展示 &lt;a href=<span class="token string">"http://www.baidu.com"</span>> 链接到百度 &lt;/a>'
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          icon<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          name<span class="token operator">:</span> '网络图片'<span class="token punctuation">,</span>
          link<span class="token operator">:</span> ''<span class="token punctuation">,</span>
          popover<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> '使用 网络图片 来作为图片源'<span class="token punctuation">,</span>
            type<span class="token operator">:</span> 'image'<span class="token punctuation">,</span>
            imageUrl<span class="token operator">:</span> 'http<span class="token operator">:</span><span class="token comment">//img.bjtata.com/img/5c5de63193ea53a4.jpg',</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
