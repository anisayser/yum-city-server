const mongoose = require("mongoose");


//Event Schema
const eventSchema = mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, "Event title is required."],
        maxLength: [100, "Event title must be between 100 charecters."],
        minLength: [5, "Event title must at least 5 charecters."]
    },

    description: String,

}, { timestamps: true })

const Events = mongoose.model("Event", eventSchema);

module.exports = Events;


/* const events = [
    {
        title: "Qurantine Cooking",
        description: "This is the description of the event."
    },
    {
        title: "Snacks Recipes",
        description: "This is the description of the event."
    },
    {
        title: "Special Recipes",
        description: "This is the description of the event."
    },
    {
        title: "Biriany Recipes",
        description: "This is the description of the event."
    },
] */