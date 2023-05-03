import React from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes}) => {
    return (
        <div>
            <h2 className='text-2xl font-sans text-center font-bold text-gray-900 mb-4'>All Recipes Are Here</h2>
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;