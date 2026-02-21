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