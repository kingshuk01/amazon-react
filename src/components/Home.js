import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images.livemint.com/img/2019/07/12/600x338/2019-07-05T065821Z_1_LYNXNPEF640GO_RTROPTP_3_AMAZON-COM-LIABILITY_1562582596221_1562903237045.JPG'></img>
                <div className='home_row'>
                <Product title='The magic' price='29.99' image='https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg' rating={3} />
                <Product title='The magic' price='29.99' image='https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg' rating={3} />
               
                </div>
                <div className='home_row'>
                <Product title='The magic' price='29.99' image='https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg' rating={3} />
                <Product title='The magic' price='29.99' image='https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg' rating={3} />
                <Product title='The magic' price='29.99' image='https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg' rating={3} />
               
                </div>
                <div className='home_row'>
                <Product title='The magic' price='29.99' image='https://images-na.ssl-images-amazon.com/images/I/5115jhMmGrL._SX314_BO1,204,203,200_.jpg' rating={3} />
               
                </div>
            
            
            </div>

            
        </div>
    )
}

export default Home
