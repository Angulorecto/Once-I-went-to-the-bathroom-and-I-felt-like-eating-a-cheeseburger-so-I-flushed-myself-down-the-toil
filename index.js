import express from "express";
import http from "node:http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "node:path";
import * as dotenv from "dotenv";
dotenv.config();

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const bareServer = createBareServer("/bare/");

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/int-link/public", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "publicLinks.html"));
});

app.get("/int-link/premium", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "premiumLinks.html"));
});

app.get("/int-link/member", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "memberLinks.html"));
});

app.get("/int-link/redirect1", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "redirects/redirect1"));
});

app.get("/int-link/redirect2", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "redirects/redirect2"));
});

app.get("/int-link/404", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "404.html"));
});

app.get("/int-link/*", (req, res) => {
  res.redirect("/404");
});
