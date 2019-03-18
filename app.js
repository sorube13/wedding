var express = require('express')
var path = require('path')
var i18n = require('i18n')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var session = require('express-session')
require('console-stamp')(console, 'yyyy-mm-dd HH:MM:ss')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

i18n.configure({
  // define how many languages we would support in our application
  locales: ['en', 'es', 'fr'],
  // define the path to language json files, default is /locales
  directory: __dirname + '/public/i18n',
  // define the default language
  defaultLocale: 'es',
  // define a custom cookie name to parse locale settings from
  cookie: 'i18n'
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.all('/*', handleRedirect)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser('i18n_demo'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.use(
  session({
    secret: 'i18n_demo',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
)

app.use(i18n.init)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

function handleRedirect (req, res, next) {
  if (
    req.headers &&
    req.headers.host &&
    req.headers.host.match(/^www/) !== null
  ) {
    res.redirect(
      req.protocol + '://' + req.headers.host.replace(/^www\./, '') + req.url
    )
  } else {
    next()
  }
}

app.locals._ = i18n.__

module.exports = app
