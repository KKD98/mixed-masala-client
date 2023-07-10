import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NewRecipe from '../NewRecipe/NewRecipe';

const NewestRecipe = () => {

    const [newRecipe , setNewRecipe] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunting-assignment-server-side.vercel.app/newestrecipe')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNewRecipe(data);
            }
            )
            .catch(error => console.log(error))
    }, [])

    console.log(newRecipe)
    return (
        <div className='mb-8'>
           <h2 className='text-center font-sans font-semibold text-3xl text-yellow-700 mb-3  mx-auto border-2 border-yellow-700 border-dotted w-[60%] lg:w-[25%] p-3'> Newest Recipe </h2>
           <div>
            {
                newRecipe.map(recipe => <NewRecipe key={recipe.id} recipe={recipe}></NewRecipe>)
            }
           </div>
        </div>
    );
};

export default NewestRecipe;