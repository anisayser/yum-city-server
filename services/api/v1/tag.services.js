const Tags = require("../../../models/api/v1/tag.model");



module.exports.getAllTagsServices = async () => {
    const tags = await Tags.find({});
    return tags;
}

module.exports.addTagServices = async (data) => {
    const result = await Tags.create(data);
    return result;
}

module.exports.updateTagServices = async (id, data) => {
    const result = await Tags.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

module.exports.getTagByTitleServices = async (title) => {
    const tag = await Tags.findOne({ title });
    return tag;
}

module.exports.deleteTagServices = async (id) => {
    const result = await Tags.deleteOne({ _id: id });
    return result;
}