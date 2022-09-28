import React, {FC} from 'react';
import fire from './fire.webp';
import norway from './norway.webp';
import tree from './tree.webp';
import './Home.css';
import {Link} from 'react-router-dom';

const Home: FC = () => {
    return (
        <div className={'App'}>
            <header className='App-header'>
                <h3>Choose your travel destination</h3>
                <figure className='travel-card'>
                    <img src={norway} alt='Norway'/>
                    <figcaption>
                        <h3>Visit <span>Norway</span></h3>
                    </figcaption>
                    <Link to={'/norway'}/>
                </figure>
                <figure className='travel-card'>
                    <img src={tree} alt='Tree'/>
                    <figcaption>
                        <h3>Visit <span>Japan</span></h3>
                    </figcaption>
                    <Link to={'/japan'}/>
                </figure>
                <figure className='travel-card'>
                    <img src={fire} alt={'Man playing with fire'}/>
                    <figcaption>
                        <h3>Visit <span>India</span></h3>
                    </figcaption>
                    <Link to={'/india'}/>
                </figure>
            </header>
        </div>
    )
};

export default Home;