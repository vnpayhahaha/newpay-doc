# Error Codes

## Signature Errors

| Error Code | Error Message | Description |
| --- | --- | --- |
| 202001 | sign is required | Missing parameter "sign" |
| 202002 | app_key is required | Missing parameter "app_key" |
| 202003 | app_key is invalid | Invalid application KEY |
| 202004 | sign is invalid | Invalid signature |
| 202005 | timestamp is required | Missing parameter "timestamp" |
| 202006 | timestamp is expired | Timestamp expired |
| 202007 | app is disabled | Application disabled |
| 203001 | no available collection method | No available collection method |
| 203002 | no matching bank card | No matching bank card |
| 203003 | collection float amount error | Collection float amount configuration error |
| 203005 | create failed | Order creation failed |
| 203006 | not failed | Order does not exist |
| 203007 | status error | Status error |
| 203008 | verify failed | Order verification failed |

### Signature Error Examples:

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
