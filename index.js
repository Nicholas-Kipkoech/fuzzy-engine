const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// pull in mongoDB
require("./config/config");

//pull in router

const Contents = require("./routes/Content.route");
const User = require("./routes/User.route");

app.use(express.json());

/* api endpoints */

app.use("/api/", Contents);
app.use("/api/users", User);

const port = process.env.PORT;

app.listen(port, () => console.log(`app listening on port ${port}`));
