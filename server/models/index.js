import mongoose from 'mongoose'
import logger from '../logger'
import init from './init'
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  pwd: String
})

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: String,
  tag: String,
  category: String,
  content: String,
  punish: Number
})
articleSchema.statics.findArticalByPage = function (searchInfo, cb) {
  return this.find(searchInfo.query)
    .skip((searchInfo.page - 1) * searchInfo.pagesize)
    .limit(searchInfo.pagesize)
    .sort({ date: -1 })
    .select('title')
    .exec(cb)
}
articleSchema.query.byName = function (name) {
  return this.find({ name: new RegExp(name, 'i') })
}

const categorySchema = new Schema({
  name: { type: String, required: true }
})

const linkSchema = new Schema({
  name: String,
  href: { type: String, required: true }
})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  Category: mongoose.model('Category', categorySchema),
  Link: mongoose.model('Link', linkSchema),
  initialized: false
}

const initialize = function () {
  Models.User.find(null, function (err, doc) {
    if (err) {
      logger.error(err)
    } else if (!doc.length) {
      logger.info('Database opens for the first time...')
      var promise = new Promise(resolve => {
        init.map(item => new Models[item.type](item).save())
        resolve()
      })
      promise
        .then(() => logger.success('Initialize successfully.'))
        .catch(() => logger.error('Something went wrong during initializing.'))
    } else {
      Models.initialized = true
    }
  })
}

mongoose.connect('mongodb://127.0.0.1/mongoBlog', { useMongoClient: true })

const db = mongoose.connection

db.on('error', () => {
  logger.error('Database connection error.')
})

db.once('open', () => {
  logger.success('The database has connected.')
  initialize()
})

module.exports = Models
