import { rest } from 'msw';

export const handlers = [
  rest.get('/api/sprite/:spriteName', async (_req, res, ctx) => {
    // const { spriteName } = req.params;

    const url = 'sprites/player.png';

    const imageBuffer = await fetch(url).then((imgRes) => imgRes.arrayBuffer());
    return res(
      ctx.set('Content-Length', imageBuffer.byteLength.toString()),
      ctx.set('Content-Type', 'image/png'),
      // Respond with the "ArrayBuffer".
      ctx.body(imageBuffer),
    );
  }),
];
