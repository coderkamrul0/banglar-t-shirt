import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';



const Brother = () => {

    const bRing = useContext(RingContext)

    return (
        <div>
            <h3>Brother</h3>
            {bRing}
        </div>
    );
};

export default Brother;