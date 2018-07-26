import express from "express";
import generalQuery from "./database/helpers";

const PORT = process.env.PORT || 3000;
const app = express();

generalQuery("select top 10 * from Jobs").then(console.log);
app.use(express.static("dist"));

app.listen(PORT, () => console.log(`Listening on the port ${PORT}`));
