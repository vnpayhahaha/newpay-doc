# 响应规则

* 响应格式：统一使用JSON格式

|参数名	|类型	|必填	|描述|
|--|--|--|--|
|request_id|string|是|请求ID|
|path|string|是|请求路径|
|success|boolean|是|请求状态|
|code|integer|是|状态码|
|message|string|是|错误信息|
|data|object|否|成功时返回的数据|

## 成功响应示例：
```json
{
	"request_id": "0068dc0b-43e2-4b63-bfd5-3034c3994375",
	"path": "/v1/api/collection/create_order",
	"success": true,
	"code": 200,
	"message": "成功",
	"data": {
	}
}
```
## 错误响应示例：
```json
{
	"request_id": "68eb0e7c-3353-46b2-8587-b0e862e677bb",
	"path": "/v1/api/collection/create_order",
	"success": false,
	"code": 202006,
	"message": "timestamp is expired"
}
```