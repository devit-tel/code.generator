var express = require('express')
var router = express.Router()
var qr = require('qr-image')
var barcode = require('barcode')

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', function (req, res) {
  res.send(200)
})

router.get('/:text/qr', function (req, res) {
  var string = req.params.text
  var qrcode = qr.image(string, { type: 'png', margin: 0 })

  res.setHeader('Content-type', 'image/png')
  return qrcode.pipe(res)
})
router.get('/:text/barcode', function (req, res) {
  var string = req.params.text
  var code128 = barcode('code128', { data: string, width: 200, height: 50 })
  return code128.getBase64(function (err, imgsrc) {
    if (err) throw err

    var img = new Buffer(imgsrc.replace('data:image/PNG;base64,', ''), 'base64')
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    })
    res.end(img)

  // return res.send(imgsrc)
  })
})

module.exports = router
