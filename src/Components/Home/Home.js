import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SkinCare from '../SkinCare/SkinCare';
import Banner from './Banner/Banner';
import HealthySkin from './HealthySkin/HealthySkin';
import ProductSlider from './ProductSlider1/ProductSlider';
import Quote from './Quote/Quote';
import StoreLocator from './StoreLocator/StoreLocator';
import TopNavbar from './TopNavbar/TopNavbar';
import UpperTopNavbar from './UpperTopNavbar/UpperTopNavbar';

const Home = () => {
    return (
        <div>
            <UpperTopNavbar></UpperTopNavbar>
            <TopNavbar></TopNavbar>
            <Header></Header>
            <Banner></Banner>
            <ProductSlider></ProductSlider>
            <HealthySkin></HealthySkin>
            <ProductSlider></ProductSlider>
            <SkinCare></SkinCare>
            <StoreLocator></StoreLocator>
            <Quote></Quote>
            <Footer></Footer>
        </div>
    );
};

export default Home;