const { getAllCommentsServices, getCommentsByBlogIdServices, addCommentServices } = require("../../../services/api/v1/comment.services");


module.exports.getAllComments = async (req, res) => {
    try {
        const comments = await getAllCommentsServices();

        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the comments.",
            error: error.message
        })
    }
}

module.exports.getCommentsByBlogId = async (req, res) => {
    try {
        const comments = await getCommentsByBlogIdServices(req.params.id);

        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the comments.",
            error: error.message
        })
    }
}

module.exports.addComment = async (req, res) => {
    try {
        const result = await addCommentServices(req.body);

        res.status(200).json({
            status: "Success",
            message: "Comment added successfully",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the comments.",
            error: error.message
        })
    }
}