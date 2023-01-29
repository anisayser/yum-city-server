const { getAllEventsService, addEventService } = require("../../../services/api/v1/event.services");



module.exports.getAllEvents = async (req, res) => {
    try {
        const events = await getAllEventsService();

        res.status(200).json(events)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Events.",
            error: error.message
        })
    }
}

module.exports.addEvent = async (req, res) => {
    try {
        const result = await addEventService(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfuly added the Event.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to add the Event.",
            error: error.message
        })
    }
}