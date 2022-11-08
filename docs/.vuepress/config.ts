import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "IT蚱蜢哥",
  description: "IT蚱蜢哥|Java|大数据|Oracle|HIVE|java,java教程,Java,mysql,rabbitmq,rabbitmq教程,javascript,设计模式,GOF23设计模式,编程,开发,教程,软件开发,互联网,spring,程序员,程序",

  base: "/",

  theme,
});
