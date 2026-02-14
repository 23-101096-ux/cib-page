import React, { Component } from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Applynow from '../components/Applynow';
import Learningcenter from '../components/Learningcenter';
import New from '../components/New';
import Sus from '../components/Sus';
import Part from '../components/Part';
import Awards from '../components/Awards';
import Care from '../components/Care';
import Footer from '../components/Footer';

const Home = () => {
    return (  
       <>
       <Nav />
       <Header />
       <Applynow />
       <Learningcenter />
       <New />
        <Sus />
        <Part />
        <Awards />
        <Care />
        <Footer />
       </>
    );
}
 
export default Home;