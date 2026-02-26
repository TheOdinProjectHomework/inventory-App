import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/common/Header';

const ItemsPage = () => {
    let { category } = useParams();

  return (
    <div className="flex-1 overflow-auto">
      <Header title={category} />
    </div>
  );
}

export default ItemsPage