import React from 'react'
import Header from '../components/common/Header'
import Card from '../components/Card/Card'

const Categories = ({ categories }) => {

  return (
    <div className='flex-1 overflow-auto'>
        <Header title="Categories" />
        <main className='max-w-7xl mx-auto p-6 lg:px-8 flex flex-wrap'>
            {
                categories.map((category, i) => (
                    <Card data={category} key={i} />
                ))
            }
        </main>
    </div>
  )
}

export default Categories