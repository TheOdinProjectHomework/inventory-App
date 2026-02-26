import React from 'react'
import { Laptop, Armchair, Wrench, Utensils, Shell } from "lucide-react";
import { Link } from 'react-router';

const Card = ({ data }) => {
    const { title, amount } = data;

    const icons = {
        Electronics: Laptop,
        Furniture: Armchair,
        Tools: Wrench,
        Kitchen: Utensils
    };

    const IconComponent = icons[title] || Shell;

  return (
    <Link to={`/categories/${title}`}>
    <div className="card text-neutral-content w-60 bg-gray-800 border border-white/10 m-4 cursor-pointer hover:border-white/30 transition">
      <div className="card-body items-start text-center">
        <div className="card-actions justify-end">
          <div className="btn btn-primary">
            <IconComponent />
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{amount} items</p>
      </div>
    </div>
    </Link>
  );
}

export default Card