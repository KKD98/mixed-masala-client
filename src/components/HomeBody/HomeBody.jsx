import React from 'react';
import Banner from '../Banner/Banner';
import ChefsSection from '../ChefsSection/ChefsSection';
import SignatureDishPart from '../SignatureDishPart/SignatureDishPart';
import AboutIndianCuisine from '../AboutIndianCuisine/AboutIndianCuisine';
import NewestRecipe from '../NewestRecipe/NewestRecipe';
import FoodBanner from '../FoodBanner/FoodBanner';
import Reviews from '../Reviews/Reviews';
import AddReviews from '../AddReviews/AddReviews';

const HomeBody = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <NewestRecipe></NewestRecipe> */}
            <ChefsSection></ChefsSection>
            <SignatureDishPart></SignatureDishPart>
            <FoodBanner></FoodBanner>
            <AboutIndianCuisine></AboutIndianCuisine>
            <Reviews></Reviews>
            <AddReviews></AddReviews>
        </div>
    );
};

export default HomeBody;