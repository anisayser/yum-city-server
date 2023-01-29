const Category = require("../../../models/api/v1/category.model");


module.exports.getAllCategoriesServices = async () => {
    const categories = await Category.find({});
    return categories;
}

module.exports.addCategoryServices = async (data) => {
    const result = await Category.create(data);
    return result;
}

module.exports.updateCategoryServices = async (id, data) => {
    const result = await Category.updateOne({ _id: id }, data, { runValidators: true });
    return result;
}

module.exports.getCategoryByTitleServices = async (title) => {
    const category = await Category.findOne({ title });
    return category;
}

module.exports.deleteCategoryServices = async (id) => {
    const result = await Category.deleteOne({ _id: id });
    return result;
}