var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var content = {
    page_name: 'intro'
  }
  res.render('intro', { content })
})
/* GET place and time page. */
router.get('/place', function (req, res, next) {
  var content = {
    page_name: 'place'
  }
  res.render('place', { content })
})

/* GET more information page. */
router.get('/moreInfo', function (req, res, next) {
  var content = {
    page_name: 'moreInfo'
  }
  res.render('moreInfo', { content })
})

/* GET RSVP page. */
router.get('/rsvp', function (req, res, next) {
  var content = {
    page_name: 'rsvp'
  }
  res.render('rsvp', { content })
})

router.get('/gifts', function (req, res, next) {
  var content = {
    page_name: 'gifts'
  }
  res.render('gifts', { content })
})

module.exports = router
