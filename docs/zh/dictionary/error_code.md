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
