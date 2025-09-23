# 错误代码

## 签名错误

| 错误码 | 错误信息 | 描述 |
| --- | --- | --- |
| 202001 | sign is required | 缺少参数“sign” |
| 202002 | app_key is required | 缺少参数“app_key” |
| 202003 | app_key is invalid | 应用KEY无效 |
| 202004 | sign is invalid | 签名无效 |
| 202005 | timestamp is required | 缺少参数“timestamp” |
| 202006 | timestamp is expired | 时间戳已过期 |
| 202007 | app is disabled | 应用已被禁用 |
| 203001 | no available collection method | 无可用收款方式 |
| 203002 | no matching bank card | 无匹配银行卡 |
| 203003 | collection float amount error | 收款浮动金额配置错误 |
| 203005 | create failed | 订单创建失败 |
| 203006 | not failed | 订单不存在 |
| 203007 | status error | 状态错误 |
| 203008 | verify failed | 订单核销失败 |

### 签名错误示例：

```json
{
"request_id": "c5128702-86cf-4a91-b9bc-4310425a1479",
"path": "/openapi/home",
"success": false,
"code": 202001,
"message": "sign is required"
}
```

```json
{
"request_id": "00dc7dfe-4422-4144-907a-00e97fd85bc1",
"path": "/openapi/home",
"success": false,
"code": 202002,
"message": "app_key is required"
}
```
