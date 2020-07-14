import { Router, Request, NextFunction, Response } from 'express'

const indexRoutes = Router()
const path = '/'

indexRoutes.get(
  path,
  (requeste: Request, response: Response, next: NextFunction) => {
    response.json({
      date: new Date(),
      email: 'marildocesar@hotmail.com'
    })
  }
)

export default indexRoutes
