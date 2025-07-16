const request = require('supertest');
const express = require('express');

const app = express();
app.get('/ping', (req, res) => res.send('pong'));

describe('GET /ping', () => {
  it('responds with pong', async () => {
    const res = await request(app).get('/ping');
    expect(res.text).toBe('pong');
  });
});
