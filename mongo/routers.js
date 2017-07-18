const express = require('express')
const router = express.Router()
const Models = require('./models')

function formatDate (date) {
  if (!date) return ''
  const isDate = typeof date === 'object' && date.constructor === Date
  const formatDate = isDate ? date : new Date(date)
  const year = formatDate.getFullYear()
  const month = formatDate.getMonth() + 1
  const day = formatDate.getDate()
  const hour = formatDate.getHours()
  const minite = formatDate.getMinutes()
  const seconds = formatDate.getSeconds()
  const add0 = value => (value > 9 ? value : `0${value}`)
  return `${add0(year)}-${add0(month)}-${add0(day)} ${add0(hour)}:${add0(minite)}:${add0(seconds)}`
}
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

// 新增/更改文章
router.post('/saveArticle', (req, res) => {
  const { id } = req.body
  const data = Object.assign({}, req.body, { date: formatDate(new Date()) })
  if (id) {
    Models.Article.findByIdAndUpdate(id, data, (err, doc) => {
      if (err) {
        res.send(err)
      }
      res.send({
        code: 0,
        message: '保存成功'
      })
    })
  } else {
    new Models.Article(data).save((err, doc) => {
      if (err) {
        res.send(err)
      }
      res.send({
        code: 0,
        message: '保存成功'
      })
    })
  }
})
// 删除文章
router.post('/removeArticle', function (req, res) {
  Models.Article.findByIdAndRemove(req.body.id, err => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        code: 0,
        message: '删除文章成功'
      })
    }
  })
})
// 获取文章标题分页查询
router.post('/getArticleByTitle', function (req, res) {
  const { page, pagesize, search } = req.body
  let query = {}
  if (search) {
    query.title = { $regex: search, $options: 'i' }
  }
  Models.Article.count(query, (err, total) => {
    if (err) {
      res.send(err)
    }
    Models.Article
      .find(query)
      .skip((page - 1) * pagesize)
      .limit(pagesize)
      .sort({ date: -1 })
      .exec((dataError, data) => {
        if (dataError) {
          res.send(dataError)
        }
        res.send({
          code: 0,
          data: {
            result: data,
            total
          }
        })
      })
  })
})
// 查询所有种类
// 添加种类
// 删除种类
// 根据种类查询
router.post('/getArticleByCat', function (req, res) {
  const { page, pagesize, category } = req.body
  Models.Article.count({ category }, (err, total) => {
    if (err) {
      res.send(err)
    }
    Models.Article
      .find({ category })
      .skip((page - 1) * pagesize)
      .limit(pagesize)
      .sort({ date: -1 })
      .exec((dataError, data) => {
        if (dataError) {
          res.send(dataError)
        }
        res.send({
          code: 0,
          data: {
            result: data,
            total
          }
        })
      })
  })
})
// 根据标签查询
router.post('/getArticleByTag', function (req, res) {
  const { page, pagesize, tag } = req.body
  Models.Article.count({ tag: { $regex: tag, $options: 'i' } }, (err, total) => {
    if (err) {
      res.send(err)
    }
    Models.Article
      .find({ tag: { $regex: tag, $options: 'i' } })
      .skip((page - 1) * pagesize)
      .limit(pagesize)
      .sort({ date: -1 })
      .exec((dataError, data) => {
        if (dataError) {
          res.send(dataError)
        }
        res.send({
          code: 0,
          data: {
            result: data,
            total
          }
        })
      })
  })
})
// 获取文章详情
router.post('/getArticleDetail', function (req, res) {
  const { id } = req.body
  Models.Article.findOne({ _id: id }).exec((err, doc) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      data: doc
    })
  })
})
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
