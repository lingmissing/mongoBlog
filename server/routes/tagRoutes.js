import express from 'express'
import Models from '../models'
const router = express.Router()

// 查询所有标签
router.post('/getAllTag', function (req, res) {
  Models.Tag.find().exec((err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      data: doc
    })
  })
})
// 添加/修改标签
router.post('/saveTag', (req, res) => {
  const { _id } = req.body
  if (_id) {
    Models.Tag.findByIdAndUpdate(_id, req.body, (err, doc) => {
      if (err) {
        res.send(err)
      }
      res.send({
        code: 0,
        message: '修改成功'
      })
    })
  } else {
    new Models.Tag(req.body).save((err, doc) => {
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
// 删除标签
router.post('/removeTag', function (req, res) {
  Models.Tag.findByIdAndRemove(req.body._id, (err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      message: '删除成功'
    })
  })
})

module.exports = router
