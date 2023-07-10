import React from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes}) => {
    return (
        <div>
         <h2 className="text-center font-sans font-semibold text-3xl text-yellow-700 mb-3 mx-auto border-2 border-yellow-700 border-dotted w-[60%] lg:w-[25%] p-3">
         All Recipes Are Here
      </h2>
          
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;