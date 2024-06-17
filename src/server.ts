import express from "express";
import cors from "cors";

import path from "path";

const app = express();
import routes from "./routes/route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

export default app;
