import express from 'express'
import Models from '../models'
const router = express.Router()

// 查找友情链接
router.post('/getLink', function (req, res) {
  Models.Link.find().exec((err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      data: doc
    })
  })
})
// 新增/更改友情链接
router.post('/saveLink', (req, res) => {
  const { id, name, href } = req.body
  const link = { name, href }
  if (id) {
    Models.Link.findByIdAndUpdate(id, link, (err, doc) => {
      if (err) {
        res.send(err)
      }
      res.send({
        code: 0,
        message: '更新成功'
      })
    })
  } else {
    new Models.Link(link).save((err, doc) => {
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
// 删除友情链接
router.post('/removeLink', function (req, res) {
  const { id } = req.body
  Models.Link.findByIdAndRemove(id, (err, doc) => {
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
