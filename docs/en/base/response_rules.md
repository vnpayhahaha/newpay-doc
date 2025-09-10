# Response rules

* Response format: Unified use of JSON format

| Parameter Name	| Type	| Required	| Description|
|--|--|--|--|
|request_id|string|Yes|Request ID|
|path|string|Yes|Request path|
|success|boolean|Yes|Request status|
|code|integer|Yes|Status code|
|message|string|Yes|Error message|
|data|object|No|Data returned upon success|

## Successful response example:
```json
{
 "request_id": "0068dc0b-43e2-4b63-bfd5-3034c3994375",
 "path": "/v1/api/collection/create_order",
 "success": true,
 "code": 200,
 "message": "Success",
 "data": {
 }
}
```
## Error response example:
```json
{
 "request_id": "68eb0e7c-3353-46b2-8587-b0e862e677bb",
 "path": "/v1/api/collection/create_order",
 "success": false,
 "code": 202006,
 "message": "timestamp is expired"
}
```