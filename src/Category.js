import React from 'react'

const Category = ({categoryimage}) => {
    return (
        <div className="lg:mr-2">
        <img  className="lg:h-64 lg:w-40 xl:w-48 h-40 w-28 rounded object-cover" src={categoryimage}/>
       
        </div>
    )
}

export default Category
