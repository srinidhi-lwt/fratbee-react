import React from 'react';
import Header from '../Common/Header/header';
import Hero from '../Common/Homepage/hero';
import Whyus from '../Common/Homepage/whyus';
import Categories from '../Common/Homepage/categories';




class Listing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Whyus />
        <Categories />
      </div>
      
    )
  }
}

export default Listing;