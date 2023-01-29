const Comment = require("../../../models/api/v1/comment.model")


module.exports.getAllCommentsServices = async () => {
    const comments = await Comment.find({});
    return comments;
}

module.exports.getCommentsByBlogIdServices = async (id) => {
    // console.log("from Service Comment", id);
    const comments = await Comment.aggregate([{ $match: { 'blog.blogId': id } }]).sort({ _id: -1 });
    return comments;
}

module.exports.addCommentServices = async (data) => {
    const result = await Comment.create(data);
    return result;
}