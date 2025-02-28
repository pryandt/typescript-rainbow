import { Request, Response, Router } from "express";
import Color from "color";

type RedGetRequest = Request;
type RedGetResponse = Response;

export const redRouter = Router();

export const redGetter = (req: RedGetRequest, res: RedGetResponse) => {
  res.send({ color: "red" });
};

type RedPostRequest = Request<{}, {}, { color: string }>;
type RedPostResponse = Response<{ colorHex: string }>;

export const redPoster = (req: RedPostRequest, res: RedPostResponse) => {
  const { color } = req.body;
  if (!color) {
    res.sendStatus(409);
    return;
  }

  let newColor;
  try {
    newColor = Color(color);
  } catch (e) {
    res.sendStatus(409);
    return;
  }

  res.status(200).send({ colorHex: newColor.darken(0.1).hex() });
};

redRouter.get("/", redGetter);
redRouter.post("/", redPoster);
