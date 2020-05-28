# Water My Plants Backend

## [https://preston-plant.herokuapp.com/api/](https://preston-plant.herokuapp.com/api/)

# Endpoints

## POST /auth/login

#### Expected Payload:

```
{
  "username": "pam",
  "phoneNumber": 1234567890,
  "password": "password123"
}
```

#### Returns:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6ImFtYW5kYUBhb2wuY29tIiwiaWF0IjoxNTY3MDM4MDg3LCJleHAiOjE1Njc2NDI4ODd9.vNfxryaHCkhsZ1I1jJHmH4iscWxV38FGvEyJEtKPBHI"
}
```

## POST /auth/register

#### Expected Payload:

```
{
  "username": "pam",
  "phoneNumber": 1234567890,
  "password": "password123"
}
```

#### Returns:

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6ImFtYW5kYUBhb2wuY29tIiwiaWF0IjoxNTY3MDQ1NDk1LCJleHAiOjE1Njc2NTAyOTV9.dS6X1D3MAK-YD7Qn2kxVPvvzxKQV-ya7LKznrpchNzY"
}
```

## POST /api/auth/plants

#### Expected Payload:

```
{
    "nickname": "Mufasa",
    "species": "Dandelion",
    "water": 2,
    "user_id": 1
}
```

## DELETE /api/auth/plants/:id

**Expected Parameter:** The id of the plant

## GET /api/sleep/:userid

**Expected Parameter:** The user_id from local storage


```