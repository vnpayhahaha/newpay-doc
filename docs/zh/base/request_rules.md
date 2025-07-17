# 请求规则

* 请求方式：所有接口均使用POST方式请求
* 请求地址：***<EnvVar name="API_URL" />*** + 接口地址
* 编码格式：UTF-8
* Content-Type：application/json
* 请求参数：JSON格式
* 请求IP必须在商户白名单中
* 时间格式必须严格按照指定格式
* 金额必须保留2位小数

|参数名	|类型	|必填	|描述|
|--|--|--|--|
|merchant_order_no|string|是|商户订单号1|
|amount|decimal|是|订单金额|
|currency|string|否|币种，默认INR|
|payer_name|string|是|付款人姓名|
|payer_account|string|是|付款人账号|
|payer_bank|string|是|付款人银行|
|payer_ifsc|string|是|付款人IFSC代码|
|callback_url|string|否|回调地址|