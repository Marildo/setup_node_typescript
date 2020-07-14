import { User } from '@models/User'
import { Request, Response } from 'express'

class UserController {
  public users(req: Request, res: Response) {
    const user = new User()
    user.name = 'MCesar'
    user.email = 'marildocesar@hotmail.com'

    res.json(user)
  }
}

export default new UserController()
