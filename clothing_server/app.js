const express = require('express')
const logger = require('morgan')
const favicon = require('serve-favicon')
const router = require('./router/router')
const myapp = express()

myapp.use(logger('dev'))

myapp.use(express.json())
myapp.use(express.urlencoded({
  extended: true
}))

myapp.use(router)

myapp.listen('3366', function () {
  console.log('微信小程序服务器启动ing')
})