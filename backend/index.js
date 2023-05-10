// Imports packages
const express = require("express");
const cors = require("cors");
require("./src/Api/db/config");
const routes = require("./src/router");
const app = express();

// Declare Static port number
const port = "5000";

app.use(express.json());
app.use(cors());

// App routes
app.use(routes);

app.listen(port, () => {
  console.log(`Node app successfully running on port ${port}`);
});
