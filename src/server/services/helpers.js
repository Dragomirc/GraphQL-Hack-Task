import sql from "mssql";
import { config } from "../../../config.env";

export const generalQuery = async yourQuery => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(yourQuery);
    sql.close();
    return result.recordset;
  } catch (err) {
    console.log("error", err);
  }
  sql.on(`error`, err => console.log(err));
};

// const sql = require("mssql");
// const config = {
//   user: "ReedCoUk",
//   password: "R33dR0ck52014",
//   server: "10.73.147.144",
//   database: "Reed Online"
// };

// const generalQuery = async yourQuery => {
//   try {
//     const pool = await sql.connect(config);
//     const result = await pool.request().query(yourQuery);
//     return result.recordset;
//   } catch (err) {
//     console.log("error", err);
//   }
//   sql.on(`error`, err => console.log(err));
// };

// generalQuery(`Select * from Jobs Where Job_ID=${27313946}`).then(console.log);
