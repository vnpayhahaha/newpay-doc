# Request Rules

* Request method: All interfaces use POST method for requests
* Request address: ***<EnvVar name="API_URL" />*** + interface address
* Encoding format: UTF-8
* Content-Type：application/json
* Request parameters: JSON format
* The requesting IP must be on the merchant whitelist
* The time format must strictly adhere to the specified format
* The amount must be rounded to two decimal places

| Parameter Name	| Type	| Required	| Description|
|--|--|--|--|
|merchant_order_no|string|Yes|Merchant order number 1|
|amount|decimal|Yes|Order amount|
|currency|string|No|Currency, default INR|
|payer_name|string|Yes|Payer's name|
|payer_account|string|Yes|Payer's account number|
|payer_bank|string|Yes|Payer's bank|
|payer_ifsc|string|Yes|Payer IFSC code|
|callback_url|string|No|Callback URL|