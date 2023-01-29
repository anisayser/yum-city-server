const mongoose = require("mongoose");
const validator = require("validator");
const ObjectId = mongoose.Schema.Types.ObjectId;

//Comment Schema
const commentSchema = mongoose.Schema({

    comment: {
        type: String,
        trim: true,
        required: [true, "Please Write a comment."],
        maxLength: [200, "Comment length must be between 200 charecters."]
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Your name is required."]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required."],
        validate: [validator.isEmail, "Please Provide a valid email."]
    },

    website: String,

    blog: {
        title: String,
        blogId: {
            type: String,
            rel: "Blogs",
            required: true
        }
    }


}, { timestamps: true })

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;