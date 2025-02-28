import { Request, Response, Router } from "express";

type GreenGetResponse = Response;
type GreenGetRequest = Request;

export const greenRouter = Router();

export const greenGetter = (req: GreenGetRequest, res: GreenGetResponse) => {
  res.send({ });
};

type GreenPostResponse = Response;
type GreenPostRequest = Request;

export const greenPoster = (req: GreenPostRequest, res: GreenPostResponse) => {
  res.sendStatus(200);
};

greenRouter.get("/", greenGetter);
greenRouter.post("/", greenPoster);
