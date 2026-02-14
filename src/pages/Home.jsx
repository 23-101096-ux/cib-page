import React, { Component } from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Applynow from '../components/Applynow';
import Learningcenter from '../components/Learningcenter';
import New from '../components/New';
import Sus from '../components/Sus';

const Home = () => {
    return (  
       <>
       <Nav />
       <Header />
       <Applynow />
       <Learningcenter />
       <New />
        <Sus />
       </>
    );
}
 
export default Home;