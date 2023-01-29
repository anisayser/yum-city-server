const mongoose = require("mongoose");
// const ObjectId = mongoose.Schema.Types.ObjectId;
const validator = require("validator");

//Blog Schema
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        trim: true,
        minLength: [5, "Title must be at least 5 charecters."],
        maxLength: [200, "Title must be between 200 charecters."]
    },

    shortDescription: String,

    author: String,

    views: {
        type: Number,
        default: 0
    },

    categories: {
        type: Array,
        required: true,
    },

    events: {
        type: Array,
    },

    tags: {
        type: Array,
        required: true
    },

    status: {
        type: String,
        required: true,
        enum: {
            values: ["active", "draft"],
            message: "Status value cant be {VALUE}. it must be active or draft",
        }
    },

    thumbnail: {
        type: String,
        // trim: true,
        // required: [true, "Image is Required."],
        // validate: [validator.isURL, "Please Provide a valid url."]
    },

    description: {
        type: String,
        required: [true, "Blog Description is Required."],
        trim: true,
    }

}, { timestamps: true })

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs;



/*const blogs =  [
    {
        title: "Crispy Black Bean Tacos with Cilantro Lime Sauce",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Julie",
        views: 2070,
        categories:["Vegan", "Soups"],
        tags: ["Relaxing", "Tip"],
        thumbnail: "https://i.postimg.cc/NFjVXJLL/mozzarella-5254110-1920-1400x933-1.jpg",
        events: ["Qurantine Cooking","Special Recipes" ],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Life Changing Instant Pot Beef Stew",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Michale",
        views: 650,
        categories:["Vegan", "Healthy"],
        tags: ["Special", "Tip"],
        thumbnail: "https://i.postimg.cc/zBHm2P8M/cereal-5712343-1920-1400x933-1.jpg",
        events: ["Snacks Recipes","Special Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Black Bean Tostadas with Queso and Pickled",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Julie",
        views: 200,
        categories:["Salads", "Soups"],
        tags: ["Relaxing", "Tip", "Creative"],
        thumbnail: "https://i.postimg.cc/tg787mZT/toast-6011147-1920-1400x915-1.jpg",
        events: ["Snacks Recipes","Special Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Ginger Peanut Chicken with Coconut Rice",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Michale",
        views: 3410,
        categories:["Salads", "Vegan"],
        tags: ["Colorful", "Design"],
        thumbnail: "https://i.postimg.cc/VvTJQhCC/lasagna-5994612-1920-1400x934-1.jpg",
        events: ["Qurantine Cooking","Biriany Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "10 Superstar Recipes with Five Ingredients or Less",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Julie",
        views: 4490,
        categories:["Salads", "Meal Prep"],
        tags: ["Creative", "Design"],
        thumbnail: "https://i.postimg.cc/rFfkm4nf/blueberries-4211525-1920-1400x934-1.jpg",
        events: ["Snacks Recipes","Qurantine Cooking"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },

    {
        title: "5 Ingredient Lemon Chicken with Asparagus",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "John",
        views: 9710,
        categories:["Dinner","Salads"],
        tags: ["Design"],
        thumbnail: "https://i.postimg.cc/nLHB16YF/food-3581341-1920-1400x933-1.jpg",
        events: ["Snacks Recipes","Qurantine Cooking"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Garlic Cream Bucatini with Peas and Asparagus",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "John",
        views: 8630,
        categories:["Dinner", "Meal Prep"],
        tags: ["Tip", "Tutorial"],
        thumbnail: "https://i.postimg.cc/prnFTxxZ/gourmet-5619887-1920-1400x933-1.jpg",
        events: ["Qurantine Cooking","Special Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Sheet Pan Meatballs with Tomato Salad and Green Sauce",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Julie",
        views: 3470,
        categories:["Meal Prep"],
        tags: ["Gaming", "Tutorial"],
        thumbnail: "https://i.postimg.cc/yxv8sb3P/tteokbokki-1607479-1920-1400x933-1.jpg",
        events: ["Special Recipes","Biriany Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Red Chile Chicken Tacos with Creamy Corn",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Shawn",
        views: 4850,
        categories:["Healthy","Meal Prep"],
        tags: ["Gaming"],
        thumbnail: "https://i.postimg.cc/cH1q04Rp/mango-1534061-1920-1400x910-1.jpg",
        events: ["Special Recipes","Qurantine Cooking"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Egg Waffles with Romesco and Goat Cheese",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Shawn",
        views: 6350,
        categories:["Vegan","Healthy"],
        tags: ["Relaxing", "Morning"],
        thumbnail: "https://i.postimg.cc/G2fXVcqJ/noodles-4851996-1920-1400x932-1.jpg",
        events: ["Snacks Recipes","Biriany Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Harissa Meatballs with Whipped Feta",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Shawn",
        views: 3850,
        categories:["Vegan","Dinner"],
        tags: ["Gaming", "Tutorial"],
        thumbnail: "https://i.postimg.cc/RV5kZRL1/salad-5904093-1920-1400x1120-1.jpg",
        events: ["Qurantine Cooking","Biriany Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Join Our January Meal Planning Bootcamp!",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Dwayne",
        views: 3070,
        categories:["Soups","Vegan"],
        tags: ["Gaming", "Morning"],
        thumbnail: "https://i.postimg.cc/Xv4NBWK8/vegetable-skewer-3317060-1920-1400x896-1.jpg",
        events: ["Special Recipes","Biriany Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Our Complete List of Holiday Series Recipes",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Robert",
        views: 9600,
        categories:["Dinner","Soups"],
        tags: ["Gaming", "Morning"],
        thumbnail: "https://i.postimg.cc/0Q3bw3yy/breakfast-1804436-1920-1400x1045-1.jpg",
        events: ["Special Recipes","Snacks Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "Roasted Carrots with Honey and Garlic Yogurt Sauce",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Robert",
        views: 7500,
        categories:["Soups","Healthy"],
        tags: ["Gaming", "Morning"],
        thumbnail: "https://i.postimg.cc/7Zm0KqHB/hors-doeuvre-2175326-1920-1400x933-1.jpg",
        events: ["Qurantine Cooking","Snacks Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    },
    {
        title: "14 Creamy and Delicious Dairy-Free Recipes",
        shortDescription: "Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet",
        author: "Dulquer",
        views: 4020,
        categories:["Healthy"],
        tags: ["Gaming", "Creative", "Design"],
        thumbnail: "https://i.postimg.cc/15TZwq6M/tart-2409958-1920-1400x933-1.jpg",
        events: ["Qurantine Cooking","Biriany Recipes"],
        status: "active",
        description: "Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem Donec vehicula luctus nunc in laoreet Aliquam erat volutpat. Suspendisse vulputate porttitor condimentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, posuere mollis arcu. Pellentesque iaculis gravida nulla ac hendrerit. Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, nisl ipsum faucibus velit, et eleifend velit nulla a mi. Praesent pharetra semper purus, a vehicula massa interdum in Nulla a magna at diam consequat semper eu vitae elit. In hac habitasse platea dictumst.",
    }
]   */