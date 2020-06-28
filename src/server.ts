import express, { response } from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({Data: '28/06/2020'})
})

app.listen(3000)