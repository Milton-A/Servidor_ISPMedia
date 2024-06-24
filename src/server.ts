import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";

const app = express();
import routes from "./routes/route";

app.use(express.static("public/"));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3333, () => {
  console.log(`Server is running on port 3333`);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
