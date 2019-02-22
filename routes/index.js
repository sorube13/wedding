var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var content = {
    page_name: 'intro',
    page_title: 'Bienvenido'
  }
  res.render('intro', { content })
})
/* GET place and time page. */
router.get('/place', function (req, res, next) {
  var content = {
    page_name: 'place',
    page_title: 'La Celebración'
  }
  res.render('place', { content })
})

/* GET more information page. */
router.get('/moreInfo', function (req, res, next) {
  var content = {
    page_name: 'moreInfo',
    page_title: 'Información Práctica'
  }
  res.render('moreInfo', { content })
})

/* GET RSVP page. */
router.get('/rsvp', function (req, res, next) {
  var content = {
    page_name: 'rsvp',
    page_title: 'RSVP'
  }
  res.render('rsvp', { content })
})

router.get('/gifts', function (req, res, next) {
  var content = {
    page_name: 'gifts',
    page_title: 'Lista de Boda'
  }
  res.render('gifts', { content })
})

module.exports = router
