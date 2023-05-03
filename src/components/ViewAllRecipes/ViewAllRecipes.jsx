import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ChefInRecipe from '../ChefInRecipe/ChefInRecipe';
import Recipes from '../Recipes/Recipes';
import { Suspense,lazy } from 'react';

const ChefInRecipe = lazy(() => import('../ChefInRecipe/ChefInRecipe'));

const ViewAllRecipes = () => {
    const [chef, setChef] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://chef-recipe-hunting-assignment-server-side.vercel.app/allchefsdata')
            .then(res => res.json())
            .then(data => {
                const findChef = data.find(element => element.id === parseInt(id));
                setChef(findChef);
                setLoading(false)
            }
            )
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch('https://chef-recipe-hunting-assignment-server-side.vercel.app/allrecipes')
            .then(res => res.json())
            .then(data => {
                const findRecipes = data.filter(element => element.chef_id === parseInt(id));
                setRecipes(findRecipes);
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {
                loading ?
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div> : ""
            }
            <Suspense fallback={<p>loadingggggggggg</p>}>
            <ChefInRecipe chef={chef}></ChefInRecipe>
            </Suspense>
           
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
};

export default ViewAllRecipes;