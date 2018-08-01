import sql from "mssql";
import { config } from "../../../config.env";

const Connection = (() => {
  let pool;
  const _createConnection = async () => {
    pool = await sql.connect(config);
    return pool;
    sql.on(`error`, err => console.log(err));
  };

  return {
    getConnection: () => {
      if (!pool) {
        pool = _createConnection();
      }
      return pool;
    }
  };
})();

export const generalQuery = async yourQuery => {
  const pool = await Connection.getConnection();

  try {
    const result = await pool.request().query(yourQuery);
    return result.recordset;
  } catch (err) {
    console.log("error", err);
  }
};
