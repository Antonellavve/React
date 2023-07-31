import React from 'react'
import {CardCategory} from "./CategoriesStyles"

const Category = ({img, title}) => {
    return (
        <CardCategory>
            <img src={img} alt={title} />
        </CardCategory>
    )
}

export default Category
