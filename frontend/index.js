const express = require('express')
const path = require('path')
const app = express()

const port = 4200
const host = '0.0.0.0'

const distribution = path.join(__dirname, 'dist', 'frontend')
app.use('/', express.static(distribution))
app.get('/*', (req, res, next) => {
    res.sendFile(path.join(distribution))
})

app.listen(port, host, () => {
    console.log(`Project Running on port ${port}`)
})