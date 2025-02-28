import { Request, Response, Router } from "express";

type OrangeGetResponse = Response<{ color: string } | { colorError: string }>;
type OrangeGetRequest = Request;

export const orangeRouter = Router();

export const orangeGetter = (req: OrangeGetRequest, res: OrangeGetResponse) => {
  if (Math.random() > 0.5) {
    return res.status(500).send({ colorError: "Server error" });
  }
  res.send({ color: "orange" });
};

type OrangePostResponse = Response;
type OrangePostRequest = Request;

export const orangePoster = (
  req: OrangePostRequest,
  res: OrangePostResponse
) => {
  res.sendStatus(200);
};

orangeRouter.get("/", orangeGetter);
orangeRouter.post("/", orangePoster);
