import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "IT蚱蜢哥",
    url: "https://itzhameng.com/",
  },

  iconAssets: "iconfont",
  // iconAssets: "//at.alicdn.com/t/c/font_3612667_booox1u48pp.css",

  logo: "http://img.itzhameng.com/blog/logo.jpg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  themeColor: {
    orange: "#fb9b5f",
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
   
  },


  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "专注Java|大数据记录与分享小栈点",
    intro: "/intro.html",
    medias: {
      Zhihu: "https://www.zhihu.com/people/itzhamengge",
      Wechat: "https://mp.weixin.qq.com/s/WT8uNlNgF0md8qLxV8RUxA",
      Pinterest: "https://blog.csdn.net/weixin_43787953",
      Discord: "https://www.cnblogs.com/itzhameng/",
      Steam: "https://juejin.cn/user/1697301684566296",
      Flipboard: "https://www.jianshu.com/u/66bf5a043f59",
      Evernote: "https://segmentfault.com/u/itzhameng",
      Pocket: "https://www.toutiao.com/c/user/token/MS4wLjABAAAAYvdG_ZMmKZIjeybKjQHzKqY1RHEQdJ7jVAeM_ml1vzU",
      Bitbucket: "https://blog.51cto.com/itzhameng",
      Dribbble: "https://my.oschina.net/u/3039847",
      Gitee: "https://gitee.com/itzhameng",
      GitHub: "https://github.com/itzhameng",

      // Dingding: "https://example.com",
      // Baidu: "https://example.com",
      // Dribbble: "https://my.oschina.net/u/3039847",
      // Email: "https://example.com",
      // Facebook: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Twitter: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "itzhameng/v-theme-hope",
      repoId: "R_kgDOIZTm_g",
      category: "Announcements",
      categoryId: "DIC_kwDOIZTm_s4CSm7n",

      /**
       * 默认配置：https://giscus.app/zh-CN
       * <script src="https://giscus.app/client.js"
        data-repo="itzhameng/v-theme-hope"
        data-repo-id="R_kgDOIZTm_g"
        data-category="Announcements"
        data-category-id="DIC_kwDOIZTm_s4CSm7n"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
      </script>
       * 
       */

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
