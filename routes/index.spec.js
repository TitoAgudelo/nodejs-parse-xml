const request = require('supertest')
const app = require('../app')

describe('Get Endpoints', () => {
  it('should call "/" and response with 200 parse an xml file', async () => {
    const res = await request(app)
      .get('/')
      
    expect(res.statusCode).toEqual(200)
  })

  it('should call "/books" and response with 200 parse an xml file', async () => {
    const res = await request(app)
      .get('/books')
      
    expect(res.statusCode).toEqual(200)
  })
})
