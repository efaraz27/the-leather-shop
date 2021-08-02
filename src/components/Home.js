import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import "./css/Home.css"

//image imports
import p1 from '../assets/1.jpg'
import p2 from '../assets/2.jpg'
import p3 from '../assets/3.jpg'
import p4 from '../assets/4.jpg'



const Home = () => {
    let slides = [{
        image: p1,
        title: 'Shoes',
        description: 'Premium Leather Shoes',
        button: `Buy Shoes`,
    }, {
        image: p2,
        title: 'Handmade Leather',
        description: '100% Hand Crafted Premium Leather',
        button: 'Read More',
    },{
        image: p3,
        title: 'Skilled Professionals',
        description: 'Experienced and Skilled Professionals',
        button: 'Read More',
    },{
        image: p4,
        title: 'Premium Tools',
        description: 'We use premium tools to craft premium products',
        button: 'Read More',
    }]

    return(
        <div className='Home'>
            <div className='wrapper'>
                <Slider className="slider-wrapper" autoplay={true} infiniteLoop={true} autoFocus={true} interval={1000}>
                {slides.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>{item.button}</button>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Home