import { Router, Request, Response } from "express";

export async function user(
  req: Request,
  res: Response
): Promise<Response<any>> {
  return res.status(200).send("newUser");
}

export async function users(
    req: Request,
    res: Response
  ): Promise<Response<any>> {
    return res.status(200).send(["newUser"]);
  }