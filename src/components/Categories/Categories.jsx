import React from 'react'
import {CategoriesContainer, StyledCategoriesContainer1, StyledCategoriesContainer2} from "./CategoriesStyles"
// import { categories } from '../../data/categories'
import Category from './Category'
import { useSelector } from 'react-redux';

const Categories = () => {

    const {categories} = useSelector ((state) => state.categories)

    // Dividir las categorías en dos partes
    const firstHalf = categories.slice(0, 2);
    const secondHalf = categories.slice(2);

    return (
        <>
            <StyledCategoriesContainer1>
            {firstHalf.map((category) => {
                return <Category key={category.id} {...category} />;
            })}
            </StyledCategoriesContainer1>
    
            <StyledCategoriesContainer2>
            {secondHalf.map((category) => {
                return <Category key={category.id} {...category} />;
            })}
            </StyledCategoriesContainer2>
        </>
        );
    };

export default Categories
