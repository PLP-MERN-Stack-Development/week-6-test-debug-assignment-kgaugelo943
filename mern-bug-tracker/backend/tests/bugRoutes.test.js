const request = require('supertest');
const express = require('express');
const router = require('../routes/bugRoutes');
const Bug = require('../models/Bug');

jest.mock('../models/Bug'); // Mocks the entire Bug model

const app = express();
app.use(express.json());
app.use('/api/bugs', router);

describe('Bug API routes', () => {
  afterEach(() => jest.clearAllMocks());

  it('POST /api/bugs - should create a bug', async () => {
    const mockBug = { _id: '1', title: 'Bug A', description: 'Desc', status: 'open' };
  
    
    Bug.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(mockBug)
    }));
  
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Bug A', description: 'Desc' });
  
    console.log('STATUS:', res.status);
    console.log('BODY:', res.body);

    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Bug A');
  });
  

  it('GET /api/bugs - should return all bugs', async () => {
    Bug.find.mockResolvedValue([{ _id: '1', title: 'Bug 1' }]);

    const res = await request(app).get('/api/bugs');
    expect(res.status).toBe(201);
    expect(res.body.length).toBe(1);
  });

  it('PUT /api/bugs/:id - should update a bug', async () => {
    const updated = { _id: '1', title: 'Bug Updated', status: 'resolved' };
    Bug.findByIdAndUpdate.mockResolvedValue(updated);

    const res = await request(app)
      .put('/api/bugs/1')
      .send({ title: 'Bug Updated', status: 'resolved' });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('resolved');
  });

  it('DELETE /api/bugs/:id - should delete a bug', async () => {
    Bug.findByIdAndDelete.mockResolvedValue({});

    const res = await request(app).delete('/api/bugs/1');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
  });
});
