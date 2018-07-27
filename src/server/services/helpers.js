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
