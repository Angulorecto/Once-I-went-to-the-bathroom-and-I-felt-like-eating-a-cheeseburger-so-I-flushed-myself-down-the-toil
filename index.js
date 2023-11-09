import express from 'express';
import http from 'node:http';
import createBareServer from "@tomphttp/bare-server-node";
import path from 'node:path';
import cors from 'cors';

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'static')));

const routes = [
  { path: '/', file: 'placeholder.html' },
  { path: '/news', file: 'apps.html' },
  { path: '/events', file: 'games.html' },
  { path: '/diagnostic', file: 'settings.html' },
  { path: '/local-news', file: 'tabs.html' },
  { path: '/image-galleries', file: 'go.html' },
];

routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(__dirname, 'static', route.file));
  });
});
