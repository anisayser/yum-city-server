const Events = require("../../../models/api/v1/event.model")


module.exports.getAllEventsService = async () => {
    const events = await Events.find({});
    return events;
}

module.exports.addEventService = async (data) => {
    const result = await Events.create(data);
    return result;
}