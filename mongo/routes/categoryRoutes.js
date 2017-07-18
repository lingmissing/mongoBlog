const express = require('express')
const router = express.Router()
const Models = require('../models')

// 查询所有种类
router.post('/getCategory', function (req, res) {
  Models.Category.find().exec((err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      data: doc
    })
  })
})
// 添加/修改种类
router.post('/saveCategory', (req, res) => {
  const { _id } = req.body
  if (_id) {
    Models.Category.findByIdAndUpdate(_id, req.body, (err, doc) => {
      if (err) {
        res.send(err)
      }
      res.send({
        code: 0,
        message: '修改成功'
      })
    })
  } else {
    new Models.Article(req.body).save((err, doc) => {
      if (err) {
        res.send(err)
      }
      res.send({
        code: 0,
        message: '新增成功'
      })
    })
  }
})
// 删除种类
router.post('/removeCategory', function (req, res) {
  Models.Category.findByIdAndRemove(req.body._id, (err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      message: '删除成功'
    })
  })
})
