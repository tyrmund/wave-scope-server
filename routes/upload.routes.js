const router = require("express").Router()

const uploaderMiddleware = require("../middlewares/uploader.middleware")

router.post('/image', uploaderMiddleware.array('imageData'), (req, res) => {

  if (!req.files) {
    res.status(500).json({ errorMessage: 'Error uploading file(s)' })
    return
  }

  const urls = req.files.map(elm => elm.path)

  res.json({ cloudinary_urls: urls })
})

module.exports = router