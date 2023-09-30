import * as express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();

app.use(
  '/stock',
  createProxyMiddleware({
    target: 'https://www.koreaexim.go.kr',
    changeOrigin: true,
  }),
);

app.listen(5173);

// proxy and keep the same base path "/api"
// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/api/foo/bar
