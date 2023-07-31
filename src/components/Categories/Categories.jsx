import React from 'react'
import {CategoriesContainer} from "./CategoriesStyles"
import { categories } from '../../data/categories'
import Category from './Category'

const Categories = () => {
    return (
            <CategoriesContainer>
                {
                    categories.map((category) =>{
                        return <Category key={category.id} {...category}/>
                    })
                }
            </CategoriesContainer>
        
    )
}

export default Categories
