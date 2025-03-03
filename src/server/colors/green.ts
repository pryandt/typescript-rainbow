import { Request, Response, Router } from "express";

type GreenGetResponse = Response<{ color: string } | { colorError: string }>;
type GreenGetRequest = Request;

export const greenRouter = Router();

export const greenGetter = (req: GreenGetRequest, res: GreenGetResponse) => {
  if (Math.random() > 0.5) {
    return res.status(500).send({ colorError: "Server error" });
  }
  res.send({ 
    color: "green" 
  });
};

export const orangePoster = (
  req: GreenGetRequest,
  res: GreenGetResponse
) => {
  res.sendStatus(200);
};

greenRouter.get("/", greenGetter);
// greenRouter.post("/", greenPoster);
