const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const routers = require('./routers')
const app = express()
const path = require('path')
const multer = require('multer')
const logger = require('./logger')
const resolve = file => path.resolve(__dirname, file)

// 设置端口号
app.set('port', process.env.port || 3007)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  )
  next()
})
app.use('/uploads', express.static(resolve('../uploads')))
// 使用静态文件并创建虚拟路径
app.use(routers)

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const { originalname } = file
    cb(null, Date.now() + originalname)
  }
})

var upload = multer({ storage })

app.post('/upload', upload.single('file'), (req, res) => {
  // 没有附带文件
  if (!req.file) {
    res.send({
      code: 1,
      message: '上传失败'
    })
  }
  res.send({
    code: 0,
    data: {
      filename: req.file.filename,
      size: (req.file.size / 1024).toFixed(2) + 'KB',
      path: req.file.path
    },
    message: '上传成功'
  })
})
app.listen(app.get('port'), function () {
  logger.success('apply http://localhost:' + app.get('port'))
})
