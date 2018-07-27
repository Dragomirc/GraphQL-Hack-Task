import express from "express";
import expressGraphQL from "express-graphql";
import path from "path";
import schema from "./schema/schema";
import { generalQuery } from "./services/helpers";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Listening on the port ${PORT}`));
