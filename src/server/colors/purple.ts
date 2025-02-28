import { Request, Response, Router } from "express";

type PurpleGetResponse = Response;
type PurpleGetRequest = Request;

export const purpleRouter = Router();

export const purpleGetter = (req: PurpleGetRequest, res: PurpleGetResponse) => {
  res.send({ });
};

type PurplePostResponse = Response;
type PurplePostRequest = Request;

export const purplePoster = (req: PurplePostRequest, res: PurplePostResponse) => {
  res.sendStatus(200);
};

purpleRouter.get("/", purpleGetter);
purpleRouter.post("/", purplePoster);
