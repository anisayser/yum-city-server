const mongoose = require("mongoose");
const validator = require("validator");

//CATEGORY SCHEMA
const categorySchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "Category title is required."],
        minLength: [3, "Category title must be at least 3 charecters."],
        maxLength: [20, "Category title must between 3 to 20 charecters."]
    },
    description: String,
    thumbnail: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide a valid url."]
    }
}, { timestamps: true })

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;


/* const categories = [
    {
        title: "Dinner",
        descirption: "This is category Description.",
        thumbnail: "https://i.postimg.cc/k4VXmZWr/food-cat9-150x150.png"
    },
    {
        title: "Healthy",
        descirption: "This is category Description.",
        thumbnail: "https://i.postimg.cc/WzLjP42r/food-cat8-150x150.png"
    },
    {
        title: "Vegan",
        descirption: "This is category Description.",
        thumbnail: "https://i.postimg.cc/Gm7CmKLb/food-cat5-150x150.png"
    },
    {
        title: "Salads",
        descirption: "This is category Description.",
        thumbnail: "https://i.postimg.cc/LXjwL3pY/food-cat3-150x150.png"
    },
    {
        title: "Meal Prep",
        descirption: "This is category Description.",
        thumbnail: "https://i.postimg.cc/tTdvYR3F/food-cat7-150x150.png"
    },
    {
        title: "Soups",
        descirption: "This is category Description.",
        thumbnail: "https://i.postimg.cc/zfrn3C0P/food-cat6-150x150.png"
    }
] */