import { Request, Response, Router } from "express";

type BlueGetResponse = Response;
type BlueGetRequest = Request;

export const blueRouter = Router();

export const blueGetter = (req: BlueGetRequest, res: BlueGetResponse) => {
  res.send({ });
};

type BluePostResponse = Response;
type BluePostRequest = Request;

export const bluePoster = (req: BluePostRequest, res: BluePostResponse) => {
  res.sendStatus(200);
};

blueRouter.get("/", blueGetter);
blueRouter.post("/", bluePoster);
