function getTokenFromHeader(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Token'
   ) {
      return req.headers.authorization.split(' ')[1]
   }
   return null
 }
 
 
 // Test
 import getTokenFromHeader from '../code-from-above'
 
 test('returns null if there is no token', () => {
  const req = {headers: {}}
  const result = getTokenFromHeader(req)
  expect(result).toBeNull()
 })
 
 test('returns the token from the headers', () => {
  const token = 'as-long-as--it-is.valid'
  const req = {headers: {authorization: {token: `Token ${token}`}}}
  const result = getTokenFromHeader(req)
  expect(result).toBe(token)
 })
