export const sidebar = [
  {
    text: "基础",
    items: [
      {
        text: "简介", items: [
          { text: "环境信息", link: "/zh/base/environmental" },
          { text: "接入准备", link: "/zh/base/prepare" },
          { text: "固定参数说明", link: "/zh/examples/api/test" },
        ]
      },
      { text: "通用规则", items: [
          { text: "请求规则", link: "/zh/base/request_rules"},
          { text: "签名规则", link: "/zh/base/signature_rules" },
          { text: "响应规则", link: "/zh/base/response_rules" },
        ]
      },
    ],
  },
  {
    text: "接口",
    items: [
      {
        text: "收款", items: [
          { text: "创建订单", link: "/zh/examples/api/alipay" },
          { text: "查询订单", link: "/zh/examples/api/wechat" },
          { text: "回调通知", link: "/zh/examples/api/qq" },
          { text: "提交UTR", link: "/zh/examples/api/qq" },
        ]
      },
      { text: "付款", items: [
          { text: "创建订单", link: "/zh/examples/api/alipay" },
          { text: "查询订单", link: "/zh/examples/api/wechat" },
          { text: "回调通知", link: "/zh/examples/api/qq" },
        ]
      },
      { text: "余额查询", link: "/zh/examples/api/test" },
    ],
  },
  {
    text: "数据字典",
    items: [
      {
        text: "错误代码",
      },
      {
        text: "收款订单状态",
      },
      {
        text: "付款订单状态",
      }
    ]
  }
];