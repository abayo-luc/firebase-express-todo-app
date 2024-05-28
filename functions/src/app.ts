import express, {Response, Request, NextFunction} from "express";
import routes from "./api/v1/routes";
import {ValidationError} from "express-validation";

const app = express();

// Middleware
app.use(express.json());

// Versioned API routes
app.use("/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express!");
});


app.use((err: ValidationError, req: Request,
  res: Response, next: NextFunction) =>{
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

app.use((req: Request, res: Response) =>{
  res.status(404).json({message: "Not found"});
});

export default app;
