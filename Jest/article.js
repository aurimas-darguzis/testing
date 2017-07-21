import axios from 'axios'
import generateUserData from '../../../other/generate/user'
import startServer from '../../src/start-server'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

let server

beforaAll(async () => {
  server = await = startServer()
})

afterAll(done => {
  server.close(done)
})

// test for unauthorized user to get 5 articles on the page
describe('unauthorized', () => {
  test('get with limit', async () => {
    const response = await api.get('articles?limit=5')
    expect(response.data.articles).toHaveLength(5)
  })
})

// test for authorized user
describe('authorized', () => {
  beforeAll(async () => {
    const currentUser = await api
      .post('auth', {
        username: 'bob',
        password: 'with a very secure password',
      })
      .then(r => r.data.user)
      api.defaults.headers.common.authorization = `Token ${currentUser.token}`
  })
  
  afterAll(() => {
    api.defaults.headers.common.authorization = ''
  })
  
  // test cases goes here
})
