var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    var content = {
        es: {
            title: 'test 1 es',
            content: 'Que nos casaaaaamooooos!',
            date: 'Sábado, 14 de septiembre 2019'
        },
        en: {
            title: 'test 1 en',
            content: "We're getting married!",
            date: 'Saturday, 14th September 2019'
        },
        fr: {
            title: 'test 1 fr',
            content: 'On va se marier!',
            date: 'Samedi, 14 septembre 2019'
        }
    }
    res.render('intro', { content })
})
/* GET place and time page. */
router.get('/place', function (req, res, next) {
    var content = {
        es: {
            title: 'test 1 es',
            content: 'Que nos casaaaaamooooos!',
            date: 'Sábado, 14 de septiembre 2019'
        },
        en: {
            title: 'test 1 en',
            content: "We're getting married!",
            date: 'Saturday, 14th September 2019'
        },
        fr: {
            title: 'test 1 fr',
            content: 'On va se marier!',
            date: 'Samedi, 14 septembre 2019'
        }
    }
    res.render('place', { content })
})

/* GET more information page. */
router.get('/moreInfo', function (req, res, next) {
    var content = {
        es: {
            title: 'test 1 es',
            content: 'Que nos casaaaaamooooos!',
            date: 'Sábado, 14 de septiembre 2019'
        },
        en: {
            title: 'test 1 en',
            content: "We're getting married!",
            date: 'Saturday, 14th September 2019'
        },
        fr: {
            title: 'test 1 fr',
            content: 'On va se marier!',
            date: 'Samedi, 14 septembre 2019'
        }
    }
    res.render('moreInfo', { content })
})

/* GET RSVP page. */
router.get('/rsvp', function (req, res, next) {
    var content = {
        es: {
            title: 'test 1 es',
            content: 'Que nos casaaaaamooooos!',
            date: 'Sábado, 14 de septiembre 2019'
        },
        en: {
            title: 'test 1 en',
            content: "We're getting married!",
            date: 'Saturday, 14th September 2019'
        },
        fr: {
            title: 'test 1 fr',
            content: 'On va se marier!',
            date: 'Samedi, 14 septembre 2019'
        }
    }
    res.render('rsvp', { content })
})

router.get('/gifts', function (req, res, next) {
    var content = {
        es: {
            title: 'test 1 es',
            content: 'Que nos casaaaaamooooos!',
            date: 'Sábado, 14 de septiembre 2019'
        },
        en: {
            title: 'test 1 en',
            content: "We're getting married!",
            date: 'Saturday, 14th September 2019'
        },
        fr: {
            title: 'test 1 fr',
            content: 'On va se marier!',
            date: 'Samedi, 14 septembre 2019'
        }
    }
    res.render('gifts', { content })
})

module.exports = router
