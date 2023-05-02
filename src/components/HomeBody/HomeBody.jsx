import React from 'react';
import Banner from '../Banner/Banner';
import ChefsSection from '../ChefsSection/ChefsSection';
import SignatureDishPart from '../SignatureDishPart/SignatureDishPart';

const HomeBody = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefsSection></ChefsSection>
            <SignatureDishPart></SignatureDishPart>
        </div>
    );
};

export default HomeBody;