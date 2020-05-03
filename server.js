const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static("public"));

mongoose.connect(process.env.MONGOBD_URI || "mongdb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    Console.log(`We're live on port ${PORT}!` );
});