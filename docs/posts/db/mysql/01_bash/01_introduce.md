

``` json
module.exports = {
  plugins: [
    ['vuepress-plugin-toolbar'], {
      'pageNav': {
        name: '导航'
      },
      opts: [
        {
          icon: '',
          name: '二维码',
          link: '',
          popover: {
            title: '使用 Base64 来作为图片源',
            type: 'image',
            imageUrl: 'data:image/png;base64,这里是 Base64图片编码代码作为图片源',
            more: {
              newWindow: false,
              link: '/vuepress-plugin/vuepress-plugin-toolbar/',
              name: '了解更多'
            }
          }
        }, {
          icon: '',
          name: '纯展示'
        },
        {
          icon: '',
          name: '文本',
          popover: {
            type: 'text',
            title: '纯文本说明',
            text: '这是一个纯文本的内容展示，就是一段话'
          }
        },
        {
          icon: '',
          name: 'html 支持',
          popover: {
            type: 'html',
            title: '使用简单的 HTML 显示',
            html: '<h1>使用简单的 HTML</h1> 进行展示 <a href="http://www.baidu.com"> 链接到百度 </a>'
          }
        }, {
          icon: '',
          name: '网络图片',
          link: '',
          popover: {
            title: '使用 网络图片 来作为图片源',
            type: 'image',
            imageUrl: 'http://img.bjtata.com/img/5c5de63193ea53a4.jpg',
          }
        }
      ]
    }]
}

```

