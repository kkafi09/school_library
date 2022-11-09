const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

const memberRoutes = require("./routes/member");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/member", memberRoutes);

app.get("/", (req, res) => res.send("Welcome to Express"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
