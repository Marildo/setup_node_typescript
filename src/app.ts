import express from 'express'
import cors from 'cors'

import indexRoutes from './routes'
import userRoutes from './routes/users'

class AppController {
  public express: express.Application

  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use(indexRoutes)
    this.express.use(userRoutes)
  }
}

export default new AppController().express
