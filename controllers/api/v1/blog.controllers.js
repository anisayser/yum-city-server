const { getAllBlogsServices, createBlogServices, updateBlogServices, deleteBlogServices, getBlogsByIdServices, getBlogsByCategoryServices, getBlogByTags, getBlogsBySearchTextServices, getBlogsByEventServices, getMostViewdBlogsServices, updateBlogWithThumbnailServices } = require("../../../services/api/v1/blog.services");


module.exports.getAllBlogs = async (req, res) => {
    try {
        // console.log("Blogs Query", req.query.limit);

        let blogs = null;

        if (req.query.tags) {
            blogs = await getBlogByTags(req.query)
        }
        else {
            blogs = await getAllBlogsServices(req.query);
            // console.log("All Blogs");
        }


        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the blogs",
            error: error.message
        })
    }
}



module.exports.getBlogsById = async (req, res) => {
    try {
        const blog = await getBlogsByIdServices(req.params.id);

        res.status(200).json(blog)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the blog",
            error: error.message
        })
    }
}

module.exports.getBlogsBySearchText = async (req, res) => {
    try {
        const regex = new RegExp(req.params.searchText, 'i');
        const blogs = await getBlogsBySearchTextServices(regex);

        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the blogs",
            error: error.message
        })
    }
}

module.exports.getBlogsByEvent = async (req, res) => {
    try {
        const blogs = await getBlogsByEventServices(req.params.event);

        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the blogs",
            error: error.message
        })
    }
}

module.exports.getBlogsByCategory = async (req, res) => {
    try {
        const blogs = await getBlogsByCategoryServices(req.query.category);

        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the blogs",
            error: error.message
        })
    }
}

module.exports.getMostViewdBlogs = async (req, res) => {
    try {
        const blogs = await getMostViewdBlogsServices();

        res.status(200).json(blogs)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the blogs",
            error: error.message
        })
    }
}

module.exports.createBlog = async (req, res) => {
    try {

        // console.log("body", req.body);
        // console.log("files", req.file);


        const readyBlogData = { ...req.body, thumbnail: req.file.filename }

        // console.log("ready blog data", readyBlogData);

        const result = await createBlogServices(readyBlogData);

        res.status(200).json({
            status: "Success",
            message: "Blog Created Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to create the blog",
            error: error.message
        })
    }
}

module.exports.updateBlogWithThumbnail = async (req, res) => {
    try {
        // console.log(req.params.id);
        // console.log("Thumbnail body", req.body);
        // console.log("file", req.file);

        const readyBlogData = { ...req.body, thumbnail: req.file.filename }

        // console.log("data", readyBlogData);
        const result = await updateBlogWithThumbnailServices(req.params.id, readyBlogData);

        res.status(200).json({
            status: "Success",
            message: "Blog Updated Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the blog",
            error: error.message
        })
    }
}

module.exports.updateBlog = async (req, res) => {
    try {
        // console.log(req.params.id);
        // console.log("Data Body", req.body);


        const result = await updateBlogServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Blog Updated Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the blog",
            error: error.message
        })
    }
}

module.exports.deleteBlog = async (req, res) => {
    try {
        const result = await deleteBlogServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Blog Deleted Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to delete the blog",
            error: error.message
        })
    }
}