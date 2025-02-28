import { Request, Response, Router } from "express";

type VioletGetResponse = Response;
type VioletGetRequest = Request;

export const violetRouter = Router();

export const violetGetter = (req: VioletGetRequest, res: VioletGetResponse) => {
  res.send({ });
};

type VioletPostResponse = Response;
type VioletPostRequest = Request;

export const violetPoster = (req: VioletPostRequest, res: VioletPostResponse) => {
  res.sendStatus(200);
};

violetRouter.get("/", violetGetter);
violetRouter.post("/", violetPoster);
