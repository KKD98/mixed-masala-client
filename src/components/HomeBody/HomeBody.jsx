import React from 'react';
import Banner from '../Banner/Banner';
import ChefsSection from '../ChefsSection/ChefsSection';
import SignatureDishPart from '../SignatureDishPart/SignatureDishPart';
import AboutIndianCuisine from '../AboutIndianCuisine/AboutIndianCuisine';

const HomeBody = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsSection></ChefsSection>
            <SignatureDishPart></SignatureDishPart>
            <AboutIndianCuisine></AboutIndianCuisine>
        </div>
    );
};

export default HomeBody;