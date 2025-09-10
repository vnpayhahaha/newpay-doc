export const sidebar = [
  {
    text: "Base",
    items: [
      {
        text: "Introduction",
        items: [
          { text: "Environment Information", link: "/en/base/environmental" },
          { text: "Groundwork", link: "/en/base/prepare" },
          {
            text: "Public parameter description",
            link: "/en/base/common_parameters",
          },
        ],
      },
      {
        text: "General rules",
        items: [
          { text: "Request Rules", link: "/en/base/request_rules" },
          { text: "Signature rules", link: "/en/base/signature_rules" },
          { text: "Response rules", link: "/en/base/response_rules" },
        ],
      },
    ],
  },
  {
    text: "Interface",
    items: [
      {
        text: "Receive Payment",
        items: [
          { text: "Create Order", link: "/en/collection_order/create" },
          { text: "Order Inquiry", link: "/en/collection_order/query"},
          { text: "Callback Notification", link: "/en/examples/api/qq" },
          { text: "Submit UTR", link: "/en/examples/api/qq" },
        ],
      },
      {
        text: "Payment",
        items: [
          { text: "Create Order", link: "/en/disbursement_order/create" },
          { text: "Order Inquiry", link: "/en/disbursement_order/query" },
          { text: "Callback Notification", link: "/en/examples/api/qq" },
        ],
      },
      { text: "Balance Inquiry", link: "/en/examples/api/test" },
    ],
  },
  {
    text: "Data Dictionary",
    items: [
      {
        text: "Error Code",
      },
      {
        text: "Collection Order Status",
      },
      {
        text: "Payment Order Status",
      },
    ],
  },
];
