import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import "./css/Home.css"

//image imports
import p1 from '../../assets/1.jpg'
import p2 from '../../assets/2.jpg'
import p3 from '../../assets/3.jpg'
import p4 from '../../assets/4.jpg'



const Home = () => {
    let slides = [{
        image: p1,
        title: 'Pásy',
        description: 'Prémiové kožené opasky',
        button: `Kupte si pásy`,
    }, {
        image: p2,
        title: 'Ručně vyráběná kůže',
        description: '100% ručně vyrobená prémiová kůže',
        button: 'Přečtěte si více',
    },{
        image: p3,
        title: 'Kvalifikovaní profesionálové',
        description: 'Zkušení a zruční profesionálové',
        button: 'Přečtěte si více',
    },{
        image: p4,
        title: 'Prémiové nástroje',
        description: 'K výrobě prémiových produktů používáme prémiové nástroje',
        button: 'Přečtěte si více',
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