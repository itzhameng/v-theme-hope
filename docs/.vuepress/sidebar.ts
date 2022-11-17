import { sidebar } from "vuepress-theme-hope";
export default sidebar({

  "/posts/db/oracle/": [
      {
        text: "Oracle数据库",
        icon: "stack",
        prefix: "/posts/db/oracle/",
        link: "/posts/db/oracle/README.md",
        activeMatch:"^/posts/db/oracle/$",
        children: [
          {
            text: "一、简介、安装",
            // icon: "icon-mysql",
            collapsable: true,
            prefix: "01_bash/",
            children: [
              "01_introduce",
              "02_install",
              "03_uninstall",
              "04_add_orcl"],
          },
          {
            text: "二、核心语法",
            // icon: "icon-mysql",
            prefix:"02_core/",
            collapsable: true,
            children: [
              "01_ddl.md",
              "02_dml.md",
              "03_base_select",
              "03_base_select",
              {
                text: "文章 5-8",
                icon: "note",
                collapsable: true,
                prefix: "article/",
                children: ["article5", "article6", "article7", "article8"],
              },
              {
                text: "文章 9-12",
                icon: "note",
                children: ["article9", "article10", "article11", "article12"],
              },
            ],
          },
        ],
    },

      ],
  "/posts/db/mysql/": [
    {
      text: "MySQL数据库",
      icon: "mysql",
      prefix: "/posts/db/mysql/",
      link: "/posts/db/mysql/README.md",
      activeMatch:"^/posts/db/mysql/$",
      children: [
        {
          text: "一、简介、安装",
          icon: "icon-mysql",
          collapsable: true,
          prefix: "01_bash/",
          children: [
            "01_introduce",
            "02_install",
            "03_uninstall",
            "04_add_orcl"],
        },
        {
          text: "二、核心语法",
          icon: "note",
          prefix:"02_core/",
          collapsable: true,
          children: [
            "01_ddl.md",
            "02_dml.md",
            "03_base_select",
            "03_base_select",
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
        {
          text: "三、存储过程",
          icon: "note",
          prefix:"02_core/",
          collapsable: true,
          children: [
            "01_ddl.md",
            "02_dml.md",
            "03_base_select",
            "03_base_select",
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
    
    ],
      
  "/posts/javase/": [
    {
      text: "Java核心基础",
      icon: "stack",
      prefix: "/posts/javase/",
      link: "/posts/javase/base/01-introduce.md",
      activeMatch:"^/posts/javase/",
      children: [
        {
          text: "Java基本语法",
          // icon: "icon-mysql",
          collapsable: true,
          prefix: "base/",
          children: [
            "01-introduce.md",
            "02-history.md",
            "03-environment",
            "04-keyword",
            "05-identifier",
            "06-variable",
            "07-datatype",
            "08-operator",
            "09-case",
            "10-loop",
            "11-array",
          ],
        },
        {
          text: "Java面向对象",
          // icon: "icon-mysql",
          prefix:"02_core/",
          collapsable: true,
          children: [
            "01_ddl.md",
            "02_dml.md",
            "03_base_select",
            "03_base_select",
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
    
  ],
  "/posts/frame/javaweb/": [
      {
        text: "Tomcat",
        icon: "stack",
        prefix: "/posts/frame/javaweb/",
        link: "/posts/frame/javaweb/README.md",
        activeMatch:"^/posts/frame/javaweb/$",
        children: [
          {
            text: "JavaWeb",
            // icon: "icon-mysql",
            collapsable: true,
            prefix: "tomcat/",
            children: [
              "01-web-server",
              "02-tomcat-install",
              "03-tomcat-use",
              "04-idea-tomcat",
              "05-eclipse-tomcat",
            ],
          },
          {
            text: "Maven",
            // icon: "icon-mysql",
            prefix:"maven/",
            collapsable: true,
            children: [
              "01-maven-introduce",
              "02-maven-install",
              "03-maven-config",
              "04-maven-idea",
              // {
              //   text: "文章 5-8",
              //   icon: "note",
              //   collapsable: true,
              //   prefix: "article/",
              //   children: ["article5", "article6", "article7", "article8"],
              // },
              // {
              //   text: "文章 9-12",
              //   icon: "note",
              //   children: ["article9", "article10", "article11", "article12"],
              // },
            ],
          },
        ],
    },

      ],

});



// export default sidebar(
//   [
//   {
//     text: "Oracle数据库",
//     icon: "note",
//     prefix: "/db/oracle/",
//     link: "/db/oracle/README.md",
//     activeMatch:"^/db/oracle/$",
//     children: [
//       {
//         text: "一、简介、安装",
//         icon: "note",
//         collapsable: true,
//         prefix: "01_bash/",
//         children: ["01_introduce",
//         "02_install",
//         "03_uninstall",
//         "04_add_orcl"],
//       },
//       {
//         text: "二、核心语法",
//         icon: "note",
//         prefix:"02_core/",
//         collapsable: true,
//         children: [
//           "01_ddl.md",
//           "02_dml.md",
//           "03_base_select",
//           "03_base_select",
//           {
//             text: "文章 5-8",
//             icon: "note",
//             collapsable: true,
//             prefix: "article/",
//             children: ["article5", "article6", "article7", "article8"],
//           },
//           {
//             text: "文章 9-12",
//             icon: "note",
//             children: ["article9", "article10", "article11", "article12"],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     text: "MySQL数据库",
//     icon: "note",
//     prefix: "/db/mysql/",
//     link: "/db/mysql/README.md",
//     activeMatch:"^/db/mysql/$",
//     children: [
//       {
//         text: "一、简介、安装",
//         icon: "note",
//         collapsable: true,
//         prefix: "01_bash/",
//         children: ["01_introduce",
//         "02_install",
//         "03_uninstall",
//         "04_add_orcl"],
//       },
//       {
//         text: "二、核心语法",
//         icon: "note",
//         prefix:"02_core/",
//         collapsable: true,
//         children: [
//           "01_ddl.md",
//           "02_dml.md",
//           "03_base_select",
//           "03_base_select",
//           {
//             text: "文章 5-8",
//             icon: "note",
//             collapsable: true,
//             prefix: "article/",
//             children: ["article5", "article6", "article7", "article8"],
//           },
//           {
//             text: "文章 9-12",
//             icon: "note",
//             children: ["article9", "article10", "article11", "article12"],
//           },
//         ],
//       },
//     ],
//   },
//   // "/",
//   // "/home",
//   // "/slide",
//   // {
//   //   text: "如何使用",
//   //   icon: "creative",
//   //   prefix: "/guide/",
//   //   link: "/guide/",
//   //   children: "structure",
//   // },
//   // {
//   //   text: "文章",
//   //   icon: "note",
//   //   prefix: "/posts/",
//   //   children: [
//   //     {
//   //       text: "文章 1-4",
//   //       icon: "note",
//   //       collapsable: true,
//   //       prefix: "article/",
//   //       children: ["article1", "article2", "article3", "article4"],
//   //     },
//   //     {
//   //       text: "文章 5-12",
//   //       icon: "note",
//   //       children: [
//   //         {
//   //           text: "文章 5-8",
//   //           icon: "note",
//   //           collapsable: true,
//   //           prefix: "article/",
//   //           children: ["article5", "article6", "article7", "article8"],
//   //         },
//   //         {
//   //           text: "文章 9-12",
//   //           icon: "note",
//   //           children: ["article9", "article10", "article11", "article12"],
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },
 

// ]);


