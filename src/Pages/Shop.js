import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/offers/Offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import Newsletter from '../Components/newsletter/Newsletter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />
    </div>
  )
}

export default Shop;
