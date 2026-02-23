import Category from "../model/category.model.js";
import Item from "../model/item.model.js"

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        if(!items) {
            return res.status(404).json({ success: false, message: "No items in db" });
        }
        res.status(200).json(items);
    } catch (error) {
        console.log("Error in getAllItems");
        res.status(500).json({ success: false, message: "Error getting all items" });
    }
};

export const createItem = async (req, res) => {
    const { name, image, category } = req.body;
    if(!name || !image || !category ) return res.status(400).json({ success: false, message: "All fields required" });

    const foundCategory = await Category.findOne({name: category});
    if(!foundCategory) return res.status(404).json({ success: false, message: "Category not found" });

    // console.log(foundCategory._id.toString());
    const newItem = new Item({name, image, category: foundCategory._id.toString()});

    try {
        await newItem.save();
        await Category.findByIdAndUpdate(foundCategory._id.toString(), {$inc: {quantity: 1}});
        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        console.log("Error in createItem", error);
        res.status(500).json({ success: false, message: "Error getting all items" });  
    }
}