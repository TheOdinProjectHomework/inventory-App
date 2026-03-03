import Category from "../model/category.model.js"
import Item from "../model/item.model.js";

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if(!categories) {
            return res.status(404).json({ success: false, message: "No categories in db"});
        }
        res.status(200).json(categories);
    } catch (error) {
        console.log("Error getting all categories");
        res.status(500).json({ success: false, message: "No categories found"});
    }
}

export const getCategoryItems = async (req, res) => {
    try {
        const categoryParam = req.params.category;
        const categoryId = await Category.findOne({ name: categoryParam });
        
        if(!categoryId) return res.status(404).json({ success: false, message: "Category not found"});

        const items = await Item.find({ category: categoryId._id });
        if (items.length === 0) return res.status(404).json({ success: false,  message: "No items found in this category" });
        res.status(200).json(items);
    } catch (error) {
        console.log("Error getting items from category: ", error);
        res.status(500).json({ success: false, message: "No items in category found" });
    }
}

export const createCategory = async (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({ success: false, message: "Name is required" });
    }

    const alreadyExists = await Category.exists({name});
    if(alreadyExists) {
        return res.status(409).json({ success: false, message: "Category name already exists"});
    }

    const newCategory = new Category({ name, quantity : 0 });

    try {
        await newCategory.save();
        res.status(201).json({ success: true, data: newCategory });
    } catch (error) {
        console.log("Error creating new category");
        res.status(500).json({ success: false, message: "Error creating category" });
    }
}

export const updateCategory = async (req, res) => {
    const { name } = req.body;
    const updatedCategory = req.body;

    const foundCategory = await Category.find({ name: name });
    if(!foundCategory) {
        return res.status(404).json({status: false, message: "Category not found" });
    }

    try {
        await Category.findByIdAndUpdate(foundCategory[0]._id, updatedCategory, {new:true});
        return res.status(200).json({ success:true, data: updatedCategory });        
    } catch (error) {
        console.log("Error updating category");
        res.status(500).json({ success:false, message: "Error updating category" });
    }
}

export const deleteCategory = async (req, res) => {
    const { name } = req.body;

    const foundCategory = await Category.find({name: name});

    if(!foundCategory) {
        return res.status(404).json({ success: false, message: "Category not found" });
    }

    try {
        await Category.findByIdAndDelete(foundCategory[0]._id);
        return res.status(204).json({success: true, message: "Category deleted successfully"});
    } catch (error) {
        console.log("Error deleting category");
        res
          .status(500)
          .json({ success: false, message: "Error deleting category" });
    }
}