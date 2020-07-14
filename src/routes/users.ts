import { Router } from 'express'
import UserController from '@controllers/UserController'

const userRoutes = Router()
const path = '/users'

userRoutes.get(path, UserController.users)

export default userRoutes
