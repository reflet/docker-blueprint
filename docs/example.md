FORMAT: 1A
HOST: http://example.com/v1

# Auth
## login [/auth/login]
### POST
#### 概要
認証を行い、成功した場合アクセストークンなどを返す。


- Request (application/json)
    - Attribute
        - email: hoge@example.com (required) - メールアドレス
        - password: ******* (string, required) - パスワード


- Response 200 (application/json)
    - Attribute
        - auth_token: ********************* - auth token

