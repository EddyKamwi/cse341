const express = require("express");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDoc = require("swagger-jsdoc");
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library Api",
//       version: "1.0.0",
//       description: "This is an api for some data of contacts",
//     },
//     servers: [{ url: "http://localhost:8000" }],
//   },
   
// };
// const specs = swaggerDoc(options);
const app = express();

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// imported my routes
app.use("/", require("./routes/web"));

// listen is deploying my backend server
app.listen(process.env.port || 8000);

// sending a message in the log
console.log(
  "webserver listening at port: " +
    (process.env.port || "http://localhost:8000")
);
