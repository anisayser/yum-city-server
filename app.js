const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("colors");


//middleware
app.use(cors());
app.use(express.json());
// inside public directory.
app.use('/images', express.static('images'));


//ROUTES IMPORT
const blogRoutes = require("./routes/api/v1/blog.routes");
const categoryRoutes = require("./routes/api/v1/category.routes");
const commentRoutes = require("./routes/api/v1/comment.routes");
const eventRoutes = require("./routes/api/v1/event.routes");
const tagRoutes = require("./routes/api/v1/tag.routes");

//ROUTES
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/events", eventRoutes);
app.use("/api/v1/tags", tagRoutes);





app.get("/", (req, res) => {
    res.send("Yum City Server is Running.")
})


module.exports = app;