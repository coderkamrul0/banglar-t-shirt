import React from 'react';
import Friend from '../Friend/Friend'

const Cousin = ({children,ring}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p><small>{children}</small></p>
            <Friend ring={ring}></Friend>
        </div>
    );
};

export default Cousin;