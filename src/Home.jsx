import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img2.png';
import Common from './Common';

const Home = () => {
     return (
          <>
                              <Common name='Explore the culture' imgsrc={web} visit='/service' btname="Get Started"/>
          </>
     );
};

export default Home;