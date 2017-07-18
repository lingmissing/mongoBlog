const express = require('express')
const router = express.Router()
const Models = require('../models')

// 用户登录
router.post('/login', (req, res) => {
  const { name, pwd } = req.body
  Models.User.findOne({ name }, 'pwd', (err, doc) => {
    switch (true) {
      case !!err:
        console.log(err)
        break
      case !doc:
        res.send({ code: 1, msg: '账号不存在' })
        break
      case doc.pwd === pwd:
        res.send({ code: 0, msg: '登陆成功' })
        break
      case doc.pwd !== pwd:
        res.send({ code: 2, msg: '密码错误' })
        break
      default:
        res.send({ code: 3, msg: '未知错误' })
    }
  })
})
