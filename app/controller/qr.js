var qr = require('qr-image')

/**
 * NPM: https://www.npmjs.com/package/qr-image
 * qr.image(text, [ec_level | options]) — Readable stream with image data
 * qr.imageSync(text, [ec_level | options]) — string with image data. (Buffer for png)
 * qr.svgObject(text, [ec_level | options]) — object with SVG path and size
 * qr.matrix(text, [ec_level]) — 2D array.

 * Params
 * text — text to encode
 * ec_level — error correction level. One of L, M, Q, H. Default M.
 * options — image options object:
 * ec_level — default M.
 * type — image type. Possible values png (default), svg, pdf and eps.
 * size (png and svg only) — size of one module in pixels. Default 5 for png and undefined for svg.
 * margin — white space around QR image in modules. Default 4 for png and 1 for others.
 * customize (only png) — function to customize qr bitmap before encoding to PNG.
 * parse_url (experimental, default false) — try to optimize QR-code for URLs.
 **/
var qrGenerator = function (string) {
  return qr.image(string, { type: 'png', margin: 0 })
}
module.exports = qrGenerator
