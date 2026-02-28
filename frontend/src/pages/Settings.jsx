import React, { useState } from 'react'
import Header from '../components/common/Header'

const Settings = ({ categories }) => {
    const [catName, setCatName] = useState("");
    const [itemName, setItemName] = useState("");
    const [picture, setPicture] = useState("");
    const [selectedCat, setSelectedCat] = useState("");

    const handleAddItem = async () => {
        if(!itemName.trim() || !picture.trim() || !selectedCat.trim()) {
            alert("All fields are required");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/items", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    name: itemName.trim(),
                    image: picture.trim(),
                    category: selectedCat.trim()
                })
            });

            if(!response.ok) {
                throw new Error("Failed to add new item");
            }

            const data = await response.json();
            console.log(data);
            setItemName("");
            setPicture("");
            setSelectedCat("");
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }

    const handleAddCategory = async (e) => {
        e.preventDefault();

        if(!catName.trim() || catName.trim().length < 3) {
            alert("Field must be at least 3 characters");
            setCatName("");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/category", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify({
                    name: catName.trim()
                })
            });

            if(!response.ok) {
                throw new Error('Failed to create category');
            }

            const data = await response.json();
            console.log(data);
            setCatName("");
        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    }

  return (
    <div className="flex flex-col w-full overflow-auto">
      <Header title="Settings" />
      <main className="p-6 flex flex-col items-center justify-center">
        <form onSubmit={handleAddCategory}>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Add Category</legend>

            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Category Name" value={catName} onChange={e => setCatName(e.target.value)} />

            <button className="btn btn-neutral mt-4 bg-blue-600 hover:bg-blue-700">
                Submit
            </button>
            </fieldset>
        </form>
        <form onSubmit={handleAddItem}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Add Item</legend>

            <label className="label">Item</label>
            <input type="text" className="input" placeholder="Item" value={itemName} onChange={e => setItemName(e.target.value)} />

            <label className="label">Image</label>
            <input type="text" className="input" placeholder="Item picture" value={picture} onChange={e => setPicture(e.target.value)} />

            <label className="label">Category</label>
            <select className="select" value={selectedCat} onChange={e => setSelectedCat(e.target.value)}>
                <option disabled={true} value="">Pick a category</option>
                {categories.map((category) => (
                    <option key={category._id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <button className="btn btn-neutral mt-4 bg-blue-600 hover:bg-blue-700">
                Submit
            </button>
            </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Settings