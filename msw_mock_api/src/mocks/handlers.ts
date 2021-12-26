import { rest } from 'msw';

export const handlers = [
  rest.get('/api/sprite/:spriteName', (req, res, ctx) => {
    const { spriteName } = req.params;

    return res(
      ctx.json({
        name: spriteName,
      }),
    );
  }),
];
