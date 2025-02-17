import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (
    
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
         <Card/>
        <Card/>
        </div>
      </div>
    </section>
  )
}

export default HomeCards