import { Request, Response, Router } from "express";

export type YellowResponseBody = {
  color: string
}
type YellowGetResponse = Response<YellowResponseBody>;
type YellowGetRequest = Request;

export const yellowRouter = Router();

export const yellowGetter = (req: YellowGetRequest, res: YellowGetResponse) => {
  res.send({
    color: 'yellow',
  });
};

type YellowPostResponse = Response;
type YellowPostRequest = Request;

export const yellowPoster = (req: YellowPostRequest, res: YellowPostResponse) => {
  res.sendStatus(200);
};

yellowRouter.get("/", yellowGetter);
yellowRouter.post("/", yellowPoster);
