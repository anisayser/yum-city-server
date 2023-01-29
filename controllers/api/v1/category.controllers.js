const { getAllCategoriesServices, addCategoryServices, updateCategoryServices, deleteCategoryServices, getCategoryByTitleServices } = require("../../../services/api/v1/category.services");


module.exports.getAllCategories = async (req, res) => {
    try {
        const categories = await getAllCategoriesServices();

        res.status(200).json(categories)
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to load all the categories.",
            error: error.message
        })
    }
}

module.exports.getCategoryByTitle = async (req, res) => {
    try {
        const category = await getCategoryByTitleServices(req.params.title);

        res.status(200).json(category)
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to load all the category.",
            error: error.message
        })
    }
}

module.exports.addCategory = async (req, res) => {
    try {

        // console.log(req.body);

        const result = await addCategoryServices(req.body);


        res.status(200).json({
            status: "Success",
            message: "Category Added Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to create the category.",
            error: error.message
        })
    }
}

module.exports.updateCategory = async (req, res) => {
    try {
        const result = await updateCategoryServices(req.params.id, req.body);

        res.status(200).json({
            status: "Success",
            message: "Category Updated Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update the category.",
            error: error.message
        })
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        const result = await deleteCategoryServices(req.params.id);

        res.status(200).json({
            status: "Success",
            message: "Category Deleted Successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to Delete the category.",
            error: error.message
        })
    }
}