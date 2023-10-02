const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use('/public', express.static(`${process.cwd()}/public`))
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

// -----------------------MY CODE-----------------------//

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const name = req.file.originalname
  const type = req.file.mimetype
  const size = req.file.size
  res.status(200).json({ name, type, size })
})

// -----------------------MY CODE-----------------------//

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})
