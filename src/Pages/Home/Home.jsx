import React, { createContext } from 'react';
import Banner from './Banner';
import ShopByCategory from './ShopByCategory';

import BuySection from './BuySection';
import Customers from './Customers';





const Home = () => {

   
    


    return (
        <div>
            <Banner />
            <BuySection />
            <ShopByCategory />
            <Customers />
           
        </div>
    );
};

export default Home;