import express, { response } from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({usuario: 'MarildoCesar'})
})

app.listen(3000)