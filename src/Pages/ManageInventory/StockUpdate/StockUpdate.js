import React from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Ami update kormu. Tor id {id}</h1>
        </div>
    );
};

export default StockUpdate;