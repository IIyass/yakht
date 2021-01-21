import React from 'react';
import NavBar from '../NavBar';
import Hero from './Hero';
import { Wrapper } from './style';

const Home = () => {
    return <Wrapper>
        <NavBar />
        <Hero />
    </Wrapper>
}
export default Home;