# Signature Rules

1. Sort all parameters in ascending order according to the ASCII code of their names (dictionary order)
2. Use & to connect the parameter name and value, such as: param1=value1&m2=value2
3. Add &key=merchant_key at the end
4. Perform MD5 encryption on the concatenated string to obtain a 32-bit lowercase string

## Example:

> Original parameters:
```json
{
    "tenant_id": "000001",
    "app_key": "0cb3bd11ae",
    "timestamp": "1757491985",
    "tenant_order_no": "test250910001",
    "amount": "35.44",
    "notify_url": "",
    "sign":"3cb2e3c29cd79ed0fa4043c1b2540c28"
}
```

> After sorting, concatenate:
```string
amount=35.44&app_key=0cb3bd11ae&tenant_id=000001&tenant_order_no=test250910001&timestamp=1757491985&secret=ODE5Y2I5OTkwNjMzM2RjZWU1OTAyNzJiOGVjMjQ1MDYwN2QyYmQ5ODZmYzA2YWI1MGM3OTIwMDIyOWIyOWZiNA==
```

> Signature obtained after MD5 encryption:
```string
3cb2e3c29cd79ed0fa4043c1b2540c28
```
