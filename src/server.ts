import express from 'express'

import UserController from '@controllers/UserController'

const app = express()

app.get('/', (req, res) => {
  const userController = new UserController()
  const user = userController.getUser()
  return res.json({
    ...user,
    Data: '28/06/2020'
  })
})

app.listen(3000)
