import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/home",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "Java核心基础",
    link: "/posts/javase/001.introduce",
    icon: "creative",
    // 仅在 `/zh/guide/` 激活
    activeMatch: "^/opsts/javase",
  },
  {
    text: "数据库",
    icon: "stack",
    prefix: "/posts/db/",
    children: [
      {
        text: "Oracle数据库",
        icon: "direction",
        link: "oracle"
      },
      {
        text: "MySQL数据库",
        icon: "mysql",
        link: "MySQL"
      },
    ],
  },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
