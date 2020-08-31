const express = require('express')
const path = require('path')
const { PORT, url} = require('./src/config/env')
// const pug = require('pug')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'src/views')

app.use(express.static(path.join(__dirname, 'src/public')))
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

app.listen(PORT, () => console.log(`Server is running on ${url}:${PORT}`))