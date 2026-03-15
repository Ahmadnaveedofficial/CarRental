import dbConfig from "./db/db.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

dbConfig()
  .then(() => {
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}...`);
    });
    app.on("error", (error) => {
      console.log("app id failed!!!!!!!!", error);
    });
  })
  .catch((error) => {
    console.error("DB connection Failed!! : ", error);
  });
