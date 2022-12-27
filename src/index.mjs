import chalk from "chalk";
import express from "express";
import * as http from "http";
import * as dotenv from "dotenv";
import consoldate from "consolidate";
import path from 'path';
dotenv.config();

(async () => {
  const app = express();
  app.engine("html", consoldate.mustache);
  app.use(express.static(path.join("public")));
  app.set("view engine", "html");
  app.get("/", (req, res) => {
    res.render("index.html");
  });

  const server = http.createServer(app);

  const PORT = process.env.PORT;

  server.listen(PORT, () => {
    console.log(
      chalk.green(`[Listen] ${Date.now()}: App is listening at port: ${PORT}`)
    );
  });
})();
