import React from 'react';
import './style.scss';
import Layout from '../../Components/Layout';

const Watches = () => {
    return (
        <Layout>
            <div className='watches'>
                <div className='slider'>
                    <div className='container' style={{ display: 'flex' }}>
                        <div className='slider-image'>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Watches