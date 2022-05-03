import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';
import '../Home/Home.css';
import { Helmet } from 'react-helmet';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';

export default function Home() {
  return (
    <div className='home-container'>
      <Helmet>
        <title>Online Shopping site in India</title>
      </Helmet>
      <Header />
      <CategoriesBar />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}
