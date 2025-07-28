# Signature Rules

1. Sort all parameters in ascending order according to the ASCII code of their names (dictionary order)
2. Use & to connect the parameter name and value, such as: param1=value1&m2=value2
3. Add &key=merchant_key at the end
4. Perform MD5 encryption on the concatenated string to obtain a 32-bit lowercase string

## Example:

> Original parameters:
```json
{
    "mer_no": "TEST001",
    "order_amount": "100.00",
    "mer_order_no": "TEST123456"
}
```

> After sorting, concatenate:
```string
mer_no=TEST001&mer_order_no=TEST123456&order_amount=100.00&key=YOUR_KEY
```

> Signature obtained after MD5 encryption:
```string
0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c
```
