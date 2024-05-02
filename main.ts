import express from "express";
import { router as userRouter } from "./src/user/user";
const app = express();
const port = 3000;

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app