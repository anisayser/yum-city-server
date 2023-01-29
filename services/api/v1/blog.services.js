const Blogs = require("../../../models/api/v1/blog.model")


module.exports.getAllBlogsServices = async (query) => {

    let theLimit = null;
    if (query.limit === "null") {
        theLimit = null
    } else {
        theLimit = query.limit
    }

    const blogs = await Blogs.find({}).skip(query.skip).limit(theLimit).sort({ _id: -1 });
    const totalBlogs = await Blogs.countDocuments({});
    const pageCount = Math.ceil(totalBlogs / query.limit)
    return { blogs, totalBlogs, pageCount };
}

module.exports.getBlogsByIdServices = async (id) => {
    const blog = await Blogs.findOne({ _id: id });
    return blog;
}

module.exports.getBlogsBySearchTextServices = async (regex) => {
    const blogs = await Blogs.find({ $or: [{ title: regex }, { categories: regex }, { tags: regex }] });
    return blogs;
}

module.exports.getBlogsByEventServices = async (event) => {
    // console.log(event);
    const blogs = await Blogs.find({ events: { $in: event } });
    // const blogs = await Blogs.find({ events: { $elemMatch: { 'name': event } } });

    return blogs;
}

module.exports.getBlogsByCategoryServices = async (category) => {
    const blogs = await Blogs.find({ categories: { $in: category } });
    return blogs;
}

module.exports.getMostViewdBlogsServices = async () => {
    const blogs = await Blogs.find({}).sort({ views: -1 }).limit(5);
    return blogs;
}

module.exports.getBlogByTags = async (query) => {
    // console.log("From SErvice", query.tags);
    const blogs = await Blogs.find({ tags: { $in: query.tags } });
    return blogs;
}

module.exports.createBlogServices = async (data) => {
    const result = await Blogs.create(data);
    return result;
}

module.exports.updateBlogServices = async (id, data) => {
    const result = await Blogs.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

module.exports.updateBlogWithThumbnailServices = async (id, data) => {
    const result = await Blogs.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

module.exports.deleteBlogServices = async (id, data) => {
    const result = await Blogs.deleteOne({ _id: id });
    return result;
}