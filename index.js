import express from "express";
import path from "node:path";
import * as dotenv from "dotenv";

const __dirname = process.cwd();
const app = express(server);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/public", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "publicLinks.html"));
});

app.get("/premium", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "premiuminks.html"));
});

app.get("/member", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "memberLinks.html"));
});

app.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "404.html"));
});

app.get("/*", (req, res) => {
  res.redirect("/404");
});
