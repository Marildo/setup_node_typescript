import UserController from '@controllers/UserController'

test('t should be OK', () => {
  const ctrl = new UserController()
  const user = ctrl.getUser()
  expect(user.name).toEqual('MCesar')
})

test('it should be fall', () => {
  expect(2).toEqual(3)
})
