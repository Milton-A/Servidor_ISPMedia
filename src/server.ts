import express from "express";
import cors from "cors";

import path from "path";

const app = express();
import routes from "./routes/route";

/*const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));*/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3003, () => {
  console.log(`Server is running on port 3003`);
});

export default app;
