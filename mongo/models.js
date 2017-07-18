const mongoose = require('mongoose')
const logger = require('./logger')
const init = require('./init')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  pwd: String
})

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: String,
  tag: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true }
})

const linkSchema = new Schema({
  name: String,
  href: { type: String, required: true }
})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  Link: mongoose.model('Link', linkSchema),
  initialized: false,
  _id: false
}

const initialize = function () {
  Models.User.find(null, function (err, doc) {
    if (err) {
      logger.error(err)
    } else if (!doc.length) {
      logger.info('Database opens for the first time...')
      var promise = new Promise(resolve => {
        init.map(item => new Models[item.type](item).save())
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
