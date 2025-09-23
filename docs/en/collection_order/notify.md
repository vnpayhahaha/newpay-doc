# Collection Order Status Asynchronous Callback Notification

> **POST** Merchant-set collection callback address [Create Collection Order](/zh/collection_order/create.md)

## Request Parameters

| Parameter Name | Type | Required | Description |
| -- | -- | -- | -- |
| tenant_id | string | Yes | Tenant ID |
| platform_order_no | string | Yes | Platform Order Number |
| tenant_order_no | string | Yes | Tenant Order Number |
| status | integer | Yes | Status Value |
| pay_time | string | Yes | Payment Time |
| amount | string | Yes | Order Amount |
| total_fee | string | Yes | Transaction Fee |
| settlement_amount | string | Yes | Settlement Amount |
| created_at | string | Yes | Creation Time |
| utr | string | No | UTR |
| notify_remark | string | No | Reason Return Parameter |

## Response
> Merchants need to return the string SUCCESS or OK (case-insensitive), otherwise notifications will continue, up to a maximum of 10 notifications.
```text
success
```
```text
ok
```