# 签名规则

1. 将所有参数按照参数名ASCII码从小到大升序排序（字典序）
2. 拼接所有非空值(不包括sign本身),使用&连接参数名和参数值，如：param1=value1&m2=value2
3. 在最后加上&secret=商户密钥
4. 对拼接后的字符串进行MD5加密，得到32位小写字符串

## 示例：

> 原始参数：
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

> 排序后拼接：
```string
amount=35.44&app_key=0cb3bd11ae&tenant_id=000001&tenant_order_no=test250910001&timestamp=1757491985&secret=ODE5Y2I5OTkwNjMzM2RjZWU1OTAyNzJiOGVjMjQ1MDYwN2QyYmQ5ODZmYzA2YWI1MGM3OTIwMDIyOWIyOWZiNA==
```

> MD5加密后得到签名:
```string
3cb2e3c29cd79ed0fa4043c1b2540c28
```
