import app from '../src/app'
import request from 'supertest'

test('it should be OK', () => {
  expect(1).toEqual(1)
})

test('it should be fall', () => {
  expect(2).not.toEqual(3)
})

it('Should return status code 200', async () => {
  const res = await request(app).get('/')
  expect(res.status).toEqual(200)
})

it('Should return status code 404', async () => {
  const res = await request(app).get('/notExist')
  expect(res.status).toEqual(404)
})

it('Should return status code 200 and User', async () => {
  const res = await request(app).get('/users')
  expect(res.status).toEqual(200)
  expect(res.body).toHaveProperty('email')
  expect(res.body.name).toEqual('MCesar')
})
