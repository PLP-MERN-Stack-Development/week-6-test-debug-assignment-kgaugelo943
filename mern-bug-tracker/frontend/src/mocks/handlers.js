import { rest } from 'msw';

let bugs = [
  { _id: '1', title: 'Bug 1', description: 'First bug', status: 'open' },
];

export const handlers = [
  rest.get('http://localhost:5000/api/bugs', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(bugs));
  }),

  rest.delete('http://localhost:5000/api/bugs/:id', (req, res, ctx) => {
    bugs = bugs.filter((bug) => bug._id !== req.params.id);
    return res(ctx.status(200), ctx.json({ message: 'Bug deleted' }));
  }),

  rest.get('http://localhost:5000/api/bugs', (req, res, ctx) => {
    return res(ctx.status(500), ctx.json({ error: 'Internal error' }));
    })
  ];

  
