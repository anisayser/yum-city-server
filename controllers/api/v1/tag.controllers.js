const { deleteTagServices, updateTagServices, addTagServices, getTagByTitleServices, getAllTagsServices } = require("../../../services/api/v1/tag.services");



module.exports.getAllTags = async (req, res) => {
    try {
        const tags = await getAllTagsServices();

        res.status(200).json(tags)
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to load all the Tags.",
            error: error.message
        })
    }
}

module.exports.getTagByTitle = async (req, res) => {
    try {
        const tag = await getTagByTitleServices(req.params.title);

        res.status(200).json(tag)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to load all the Tag.",
            error: error.message
        })
    }
}

module.exports.addTag = async (req, res) => {
    try {

        // console.log(req.body);

        const result = await addTagServices(req.body);


        res.status(200).json({
            status: "Success",
            message: "Tag Added Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to create the Tag.",
            error: error.message
        })
    }
}

module.exports.updateTag = async (req, res) => {
    try {
        const result = await updateTagServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Tag Updated Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the Tag.",
            error: error.message
        })
    }
}

module.exports.deleteTag = async (req, res) => {
    try {
        const result = await deleteTagServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Tag Deleted Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to Delete the Tag.",
            error: error.message
        })
    }
}