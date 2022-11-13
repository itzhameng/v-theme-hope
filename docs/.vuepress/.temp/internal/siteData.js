export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"IT蚱蜢哥\",\"description\":\"IT蚱蜢哥|Java|大数据|Oracle|HIVE|java,java教程,Java,mysql,rabbitmq,rabbitmq教程,javascript,设计模式,GOF23设计模式,编程,开发,教程,软件开发,互联网,spring,程序员,程序\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
