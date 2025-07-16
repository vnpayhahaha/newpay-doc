# 签名规则

1. 将所有参数按照参数名ASCII码从小到大排序（字典序）
2. 使用&连接参数名和参数值，如：param1=value1&m2=value2
3. 在最后加上&key=商户密钥
4. 对拼接后的字符串进行MD5加密，得到32位小写字符串

## 示例：

> 原始参数：
```json
{
    "mer_no": "TEST001",
    "order_amount": "100.00",
    "mer_order_no": "TEST123456"
}
```

> 排序后拼接：
```string
mer_no=TEST001&mer_order_no=TEST123456&order_amount=100.00&key=YOUR_KEY
```

> MD5加密后得到签名:
```string
0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c
```
