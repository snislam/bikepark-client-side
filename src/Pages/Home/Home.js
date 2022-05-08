import React from 'react';
import Banner from './Banner/Banner';
import Faculty from './Faculty/Faculty';
import FeaturedBike from './FeaturedBike/FeaturedBike';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <FeaturedBike />
            <Faculty />
        </div>
    );
};

export default Home;