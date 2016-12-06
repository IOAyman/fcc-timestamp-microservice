const express = require('express')


// setup
const app = express()


// routes
app.get('/:thestring', (req, res) => {
  let code = 200, timestamp = null, natural = null

  const date = new Date(req.params.thestring)
  if (!isNaN(date.getTime())) {
    timestamp = date.getTime()
    natural = date.toDateString()
  } else code = 400

  res.status(code).json({ timestamp, natural })
})


// go!
app.on('error', console.error)
app.listen(process.env.NODE_PORT || 8000)
