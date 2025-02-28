import express from "express";
import ViteExpress from "vite-express";
import { redRouter } from "./colors/red.js";
import { orangeRouter } from "./colors/orange.js";
import { yellowRouter } from "./colors/yellow.js";
import { blueRouter } from "./colors/blue.js";
import { violetRouter } from "./colors/violet.js";
import { greenRouter } from "./colors/green.js";
import { purpleRouter } from "./colors/purple.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.use("/red", redRouter);
app.use("/orange", orangeRouter);
app.use("/yellow", yellowRouter);
app.use("/green", greenRouter);
app.use("/blue", blueRouter);
app.use("/violet", violetRouter);
app.use("/purple", purpleRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
