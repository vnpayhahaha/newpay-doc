# 收款订单状态异步回调通知

> **POST** 商户设置的收款回调地址[创建付款订单](/zh/disbursement_order/create.md)


## 请求参数

|参数名	|类型	|必填	|描述|
|--|--|--|--|
|tenant_id|string|是|租户ID|
|platform_order_no|string|是|平台订单号|
|tenant_order_no|string|是|租户订单号|
|status|integer|是|状态值|
|pay_time|string|是|支付时间|
|amount|string|是|订单金额|
|total_fee|string|是|手续费|
|settlement_amount|string|是|结算金额|
|created_at|string|是|创建时间|
|utr|string|否|UTR|
|notify_remark|string|否|原因返回参数|
|refund_at|string|否|退款时间|
|refund_reason|string|否|退款原因|

## 响应
> 商户需返回字符串SUCCESS或OK(不区分大小写)，否则会继续通知，最高通知到10次为止。
```text
success
```
```text
ok
```