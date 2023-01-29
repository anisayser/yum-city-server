const express = require("express");
const routes = express.Router();
const multer = require("multer");
const path = require("path");




//UPLOAD FOLDER
const UPLOADS_FOLDER = "./images/";

//Storage SEtup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER)
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname.replace(fileExt, "").toLowerCase().split(" ").join("-") + "-" + Date.now();
        cb(null, fileName + fileExt)
    }
})

//Preapre the final multer upload object
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2000000, //2mb
    },
    fileFilter: (req, file, cb) => {
        // console.log(file);
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            cb(null, true)
        } else {
            cb(new Error("Only jpg, png & jpeg file supported."))
        }
    }
})

//BLOG CONTROLLERS
const blogControllers = require("../../../controllers/api/v1/blog.controllers");


//methods
routes.route("/category").get(blogControllers.getBlogsByCategory);
routes.route("/topviews").get(blogControllers.getMostViewdBlogs);
routes.route("/search/:searchText").get(blogControllers.getBlogsBySearchText);
routes.route("/event/:event").get(blogControllers.getBlogsByEvent);

routes.route("/")
    .get(blogControllers.getAllBlogs)
    .post(upload.single("thumbnail"), blogControllers.createBlog)


routes.route("/:id")
    .get(blogControllers.getBlogsById)
    .patch(upload.single("thumbnail"), blogControllers.updateBlogWithThumbnail)
    .put(blogControllers.updateBlog)





module.exports = routes;
