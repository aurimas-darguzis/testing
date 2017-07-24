// Requirements: accepts a single argument and returns an array
// of that argument. If the given argument is already an array,
// just return the argument. If it's given nothing, return an empty array.

export default arrayify

function arrayify(input) {
  return Array.isArray(input) ? input : [input]
}

// test
import arrayify from '../code-from-above'

test(`arrayify returns the array it's given`, () => {
  const input = [1, 2, 3]
  const result = arrayify(input)
  expect(result).toEqual(input)
})

test('arrayify converts a non-array input into an array', () => {
  const input = 1
  const result = arrayify(input)
  expect(result).toEqual([input])
})
