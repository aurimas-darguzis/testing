import axios from 'axios'
import faker from 'faker'
import {generateArticleForClient} from '../../../other/generate/article'
import generateUserData from '../../../other/generate/user'
import startServer from '../../src/start-server'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

const getUser = res => res.data.user

let server

beforeAll(async () => {
  server = await startServer()
})

afterAll(done => {
  server.close(done)
})

describe('unauthorized', () => {
  test('get with limit', async () => {
    const response = await api.get('articles?limit=5')
    expect(response.data.articles).toHaveLength(5)
  })
})

describe('authorized', () => {
  beforeAll(async () => {
    const currentUser = await api
      .post('auth', {
        username: 'jane',
        password: 'I have a secure password',
      })
    .then(r => r.data.user)
    api.defaults.headers.common.authorization = `Token ${currentUser.token}`
  })

  afterAll(() => {
    api.defaults.headers.common.authorization = ''
  })

})
