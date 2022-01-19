import express from "express";
import userRouter from "./routes/userRoute.js";

export const app = express();

//Middlewares:
app.use(express.json()); //body-parser
app.use("/users", userRouter);

//SERVER START
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
