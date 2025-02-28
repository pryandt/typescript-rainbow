import { Request, Response, Router } from "express";

type OrangeGetResponse = Response;
type OrangeGetRequest = Request;

export const orangeRouter = Router();

export const orangeGetter = (req: OrangeGetRequest, res: OrangeGetResponse) => {
  res.send({ });
};

type OrangePostResponse = Response;
type OrangePostRequest = Request;

export const orangePoster = (req: OrangePostRequest, res: OrangePostResponse) => {
  res.sendStatus(200);
};

orangeRouter.get("/", orangeGetter);
orangeRouter.post("/", orangePoster);
