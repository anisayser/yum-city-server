const mongoose = require("mongoose");
const app = require("./app");
require("colors");


//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Database Connected Successfully.".random.bold);
})


//PORT
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`.yellow.bold);
})

