import { rest } from 'msw';

export const handlers = [
  rest.get('/sprite', null),
]