import React, { createContext } from 'react';
import Banner from './Banner';
import ShopByCategory from './ShopByCategory';

import BuySection from './BuySection';




const Home = () => {

   
    


    return (
        <div>
            <Banner />
            <BuySection />
            <ShopByCategory />
        </div>
    );
};

export default Home;