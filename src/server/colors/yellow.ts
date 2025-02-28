import { Request, Response, Router } from "express";

type YellowGetResponse = Response;
type YellowGetRequest = Request;

export const yellowRouter = Router();

export const yellowGetter = (req: YellowGetRequest, res: YellowGetResponse) => {
  res.send({ });
};

type YellowPostResponse = Response;
type YellowPostRequest = Request;

export const yellowPoster = (req: YellowPostRequest, res: YellowPostResponse) => {
  res.sendStatus(200);
};

yellowRouter.get("/", yellowGetter);
yellowRouter.post("/", yellowPoster);
