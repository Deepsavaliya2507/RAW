const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./dbConnections/dbConnection");
const routes = require("./Routes/V1");
// require("./helpers/crons");
const config = require("./Config/config");

const app = express();

/**
 * allow form-data from body
 * form-data is use for image upload
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * allow json data from body
 * parse application/json
 */
app.use(bodyParser.json());

/** enable cors */
app.use(cors());
app.options("*", cors());

/** upload image */
// app.use(express.static(`./public`));

app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB();

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`server listing port number ${config.port}!`);
});
