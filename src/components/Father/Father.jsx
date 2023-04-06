import React from 'react';
import MySelf from '../MySelf/MySelf'
import Sister from '../Sister/Sister'
import Brother from '../Brother/Brother'
const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <MySelf ring={ring}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;