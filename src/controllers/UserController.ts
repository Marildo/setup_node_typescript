import { User } from '@models/User'

class UserController {
  public getUser () {
    const user = new User()
    user.name = 'MCesar'
    user.email = 'marildocesar@hotmail.com'
    return user
  }
}

export default UserController
