import React from 'react';
import Header from '../Common/Header/header';
import Hero from '../Common/Homepage/hero';
import Whyus from '../Common/Homepage/whyus';
import Categories from '../Common/Homepage/categories';
import Infosection from '../Common/Homepage/infosection';
import Footer from '../Common/Foter/foter';


class Listing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Infosection />
        <Whyus />
        <Categories />
        <Footer />
      </div>
      
    )
  }
}

export default Listing;