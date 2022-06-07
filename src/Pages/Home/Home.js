import React from 'react';
import PageTitle from '../../Common/Helmet/PageTitle';
import Banner from './Banner/Banner';
import Faculty from './Faculty/Faculty';
import FeaturedBike from './FeaturedBike/FeaturedBike';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <Banner />
            <InventoryItems />
            <FeaturedBike />
            <Faculty />
        </div>
    );
};

export default Home;