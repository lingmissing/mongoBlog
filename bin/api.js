
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  next()
})

// get
app.get('/api/getComments', (req, res) => {
  res.json({
    code: 200,
    message: 'get请求成功',
    data: 1
  })
})
// https://pcpuat.rajax.me/auth/login 
app.post('/auth/login', function(req, res) {
  res.json({
  "dataType": "object",
  "code": 0,
  "msg": "首次登陆",
  "data": {
    "first_login": true,//是否首次登陆
    "token": "",
    "vender_name": "上海汉得有限公司"//供应商名称
  }
})
})

app.post('/auth/register', function(req, res) {
  res.json({
  "dataType": "string",
  "code": 0,
  "msg": "注册成功",
  "data": "2c931-7158-4766-b0aa-fbf9a5e58f75"
})
})


app.post('/auth/forgetPassword/idAuthentication', function(req, res) {
  res.json({
  "dataType": "string",
  "code": 0,
  "msg": "认证成功",
  "data": ""
})
})


app.post('/auth/forgetPassword/sendIdentifyCode', function(req, res) {
  res.json({
  "dataType": "string",
  "code": 0,
  "msg": "验证码已发送",
  "data": ""
})
})

app.post('/auth/forgetPassword/authenticatIidentifyCode', function(req, res) {
  res.json({
  "dataType": "string",
  "code": 0,
  "msg": "验证码认证成功",
  "data": ""
})
})

app.post('/project/getVenderCountInfo', function(req, res) {
  res.json({
  "dataType": "object",
  "code": 0,
  "msg": "查询成功",
  "data": {
    "new_project": 0,
    "in_trade": 20,
    "order_amount": 673875,
    "compete_price": 0,
    "new_bid": 32,
    "finished_project": 11
  }
})
})

app.post('/auth/forgetPassword/updatePassword', function(req, res) {
  res.json({
 "dataType": "string",
  "code": 0,
  "msg": "密码修改成功!",
  "data": ""
})
})

app.post('/order/getOrderTradeTotalACountPerYear', function(req, res) {
  res.json({
  "dataType": "object",
  "code": 0,
  "msg": "查询成功",
  "data": [
    {
      "time": "2017",
      "amount": 658874,
      "total": 1000000
    },
    {
      "time": "2016",
      "amount": 801,
      "total": 1000
    }
  ]
})
})


app.listen(7070, () => {
	console.log('server started at 7070...')
})
