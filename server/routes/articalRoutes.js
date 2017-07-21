import express from 'express'
import Models from '../models'
const router = express.Router()

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
function getArtical (searchInfo) {
  return new Promise((resolve, reject) => {
    Models.Article.count(searchInfo.query, (err, total) => {
      if (err) {
        reject(err)
      }
      Models.Article.findArticalByPage(searchInfo, (dataError, data) => {
        if (dataError) {
          reject(dataError)
        }
        resolve({
          result: data,
          total
        })
      })
    })
  })
}
// 新增/更改文章
router.post('/saveArticle', (req, res) => {
  const id = req.body._id
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
router.post('/removeArticle', (req, res) => {
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
router.post('/getArticleByTitle', (req, res) => {
  const { page, pagesize, title } = req.body
  let query = {}
  if (title) {
    query.title = { $regex: title, $options: 'i' }
  }
  getArtical({
    query,
    page,
    pagesize
  }).then(
    data => {
      res.send({
        code: 0,
        data
      })
    },
    err => {
      res.send(err)
    }
  )
})
// 根据种类查询文章标题
router.post('/getArticleByCategory', (req, res) => {
  const { page, pagesize, category } = req.body
  getArtical({
    query: { category },
    page,
    pagesize
  }).then(
    data => {
      res.send({
        code: 0,
        data
      })
    },
    err => {
      res.send(err)
    }
  )
})
// 根据标签查询
router.post('/getArticleByTag', (req, res) => {
  // tag: { $regex: tag, $options: 'i' }
  const { page, pagesize, tagId } = req.body
  getArtical({
    query: { tag: new RegExp(tagId, 'i') },
    page,
    pagesize
  }).then(
    data => {
      res.send({
        code: 0,
        data
      })
    },
    err => {
      res.send(err)
    }
  )
})
// 根据id查询单个文档
router.post('/getArticleDetail', (req, res) => {
  Models.Article.findOne({ _id: req.body.id }, (err, data) => {
    if (err) {
      res.send(err)
    }
    res.send({
      code: 0,
      data
    })
  })
})

module.exports = router
