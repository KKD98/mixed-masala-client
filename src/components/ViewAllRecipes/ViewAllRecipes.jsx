import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChefInRecipe from '../ChefInRecipe/ChefInRecipe';
import Recipes from '../Recipes/Recipes';

const ViewAllRecipes = () => {
    const [chef , setChef] = useState([]);
    const [recipes , setRecipes] = useState([]);
    const [loading , setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/allchefsdata')
        .then(res => res.json())
        .then(data => 
            {
            const findChef = data.find(element => element.id === parseInt(id));
           setChef(findChef);
           setLoading(false)
            } 
        )
        .catch(error => console.log(error))
    } , [])

   useEffect(() => {
    fetch('http://localhost:5000/allrecipes')
    .then(res => res.json())
    .then(data =>{
        const findRecipes = data.filter(element => element.chef_id === parseInt(id));
        setRecipes(findRecipes);
        setLoading(false)
    })
    .catch(error => console.log(error))
   } , [])
   
    return (
        <div>
            <ChefInRecipe chef={chef}></ChefInRecipe>
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
};

export default ViewAllRecipes;