var express = require('express')
var i18n = require('i18n')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var content = {
    page_name: 'intro',
    page_title: i18n.__('titleIntro'),
    i18n
  }
  res.render('intro', content)
})
/* GET place and time page. */
router.get('/place', function (req, res, next) {
  var content = {
    page_name: 'place',
    page_title: i18n.__('titlePlace'),
    i18n
  }
  res.render('place', content)
})

/* GET more information page. */
router.get('/moreInfo', function (req, res, next) {
  var content = {
    page_name: 'moreInfo',
    page_title: i18n.__('titleMoreInfo'),
    i18n
  }
  console.log(content)
  res.render('moreInfo', content)
})

/* GET RSVP page. */
router.get('/rsvp', function (req, res, next) {
  var content = {
    page_name: 'rsvp',
    page_title: 'RSVP',
    i18n
  }
  res.render('rsvp', content)
})

router.post('/rsvp/contact', function (req, res, next) {
  console.log('req name:', req.body.guest_name)
  console.log('req email:', req.body.guest_email)
  console.log('req comment:', req.body.comment)
  var content = {
    page_name: 'rsvp',
    page_title: 'RSVP',
    i18n
  }
  res.render('rsvp', content)
})

router.get('/gifts', function (req, res, next) {
  var content = {
    page_name: 'gifts',
    page_title: i18n.__('titleGifts'),
    i18n
  }
  res.render('gifts', content)
})

router.get('/es', function (req, res, next) {
  i18n.setLocale('es')
  res.cookie('i18n', 'es')
  res.redirect('/')
})

router.get('/fr', function (req, res, next) {
  i18n.setLocale('fr')
  res.cookie('i18n', 'fr')
  res.redirect('/')
})

router.get('/en', function (req, res, next) {
  i18n.setLocale('en')
  res.cookie('i18n', 'en')
  res.redirect('/')
})

module.exports = router
