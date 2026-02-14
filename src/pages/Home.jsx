import React, { Component } from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Applynow from '../components/Applynow';
import Learningcenter from '../components/Learningcenter';
const Home = () => {
    return (  
       <>
       <Nav />
       <Header />
       <Applynow />
       <Learningcenter />
       </>
    );
}
 
export default Home;