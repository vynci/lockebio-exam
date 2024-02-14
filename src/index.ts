import express, { Express } from "express";

import { orderRoutes } from "./order/routes";

const app: Express = express();
const port = process.env.PORT || 3000;

/** Service Routes */
orderRoutes(app);

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
