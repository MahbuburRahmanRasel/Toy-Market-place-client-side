import React, { createContext } from 'react';
import Banner from './Banner';
import ShopByCategory from './ShopByCategory';
import { useLoaderData } from 'react-router-dom';




const Home = () => {

   
    


    return (
        <div>
            <Banner />

            <ShopByCategory />
        </div>
    );
};

export default Home;