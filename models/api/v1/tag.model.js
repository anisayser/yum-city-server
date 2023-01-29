const mongoose = require("mongoose");

//CATEGORY SCHEMA
const tagSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Tag title is required."],
        minLength: [3, "Tag title must be at least 3 charecters."],
        maxLength: [20, "Tag title must between 3 to 20 charecters."]
    }
}, { timestamps: true })

const Tags = mongoose.model("Tag", tagSchema);

module.exports = Tags;


/* const tags = [
    {
        title: "Morning",
    },
    {
        title: "Gaming",
    },
    {
        title: "Tutorial",
    },
    {
        title: "Design",
    },
    {
        title: "Colorful",
    },
    {
        title: "Creative",
    },
    {
        title: "Tip",
    },
    {
        title: "Relaxing",
    }
] */