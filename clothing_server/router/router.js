const express = require('express')
const router = express.Router()
const api = require('../utils/api.js')
const ctrl = require('../controller/ctrl')

router.get(api.getBanner,ctrl.getBanner)
router.get(api.getSort,ctrl.getSort)
router.get(api.getShop,ctrl.getShop)
router.get(api.getNews,ctrl.getNews)
router.get(api.getCart,ctrl.getCart)
router.get(api.getSort,ctrl.getSort)
router.get(api.getOrder,ctrl.getOrder)
router.get(api.getDetailShop,ctrl.getDetailShop)
router.get(api.getSearchShop,ctrl.getSearchShop)
router.get(api.getCartDetail,ctrl.getCartDetail)

router.post(api.addCart,ctrl.addCart)
router.post(api.addOrder,ctrl.addOrder)
router.post(api.delCart,ctrl.delCart)
router.post(api.delOrder,ctrl.delOrder)
router.post(api.updateCart,ctrl.updateCart)


module.exports = router;