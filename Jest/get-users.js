export default getUsers

function getUsers() {
  return [
    {name: 'Kyle'},
    {name: 'Alison'},
    {name: 'Brad'},
    {name: 'Rose'}
  ]
}

// test

test('can get users', () => {
  const users = getUsers();
  expect(users).toMatchSnapshot();
})
