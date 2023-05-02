import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChefInRecipe from '../ChefInRecipe/ChefInRecipe';

const ViewAllRecipes = () => {
    const [chef , setChef] = useState([]);
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

    console.log(chef)
   
    return (
        <div>
            <ChefInRecipe chef={chef}></ChefInRecipe>
           
        </div>
    );
};

export default ViewAllRecipes;