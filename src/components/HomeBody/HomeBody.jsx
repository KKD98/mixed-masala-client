import React from 'react';
import Banner from '../Banner/Banner';
import ChefsSection from '../ChefsSection/ChefsSection';
import SignatureDishPart from '../SignatureDishPart/SignatureDishPart';
import AboutIndianCuisine from '../AboutIndianCuisine/AboutIndianCuisine';
import NewestRecipe from '../NewestRecipe/NewestRecipe';
import FoodBanner from '../FoodBanner/FoodBanner';

const HomeBody = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <NewestRecipe></NewestRecipe> */}
            <ChefsSection></ChefsSection>
            <SignatureDishPart></SignatureDishPart>
            <FoodBanner></FoodBanner>
            <AboutIndianCuisine></AboutIndianCuisine>
        </div>
    );
};

export default HomeBody;