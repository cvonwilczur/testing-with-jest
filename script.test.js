const googleSearch = require('./script');


dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

it('this is a silly test', () => {
  expect('hello').toBe('hello');
})

it('is searching Google', () => {
  expect(googleSearch('testtest', dbMock)).toEqual([])
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})
