var barcode = require('barcode')
var fs = require('fs')

/**
 * https://www.npmjs.com/package/barcode
 **/
var barcodeGenerator = function (string) {
  var code128 = barcode('code128', { data: string, width: 200, height: 50 })
  return code128.getBase64(function (err, imgsrc) {
    if (err) throw err
    return imgsrc
  })
}
module.exports = barcodeGenerator
