import React from 'react';
// import Navbarcomponent from './Navbar/Navbarcomponent';
// import Tours from './tours';
import HomeComponent from './Home/HomeComponent';
import Footercomponent from './footer/footercomponent';
import BlogArea from './Articals/BlogArea';
import Product from './Game-product/Product';
import Gamecomponent from './Released games/Gamecomponent';
import Featurecomponent from './feature-section/Featurecomponent';


function App() {
  return (
    <>
      <HomeComponent />
      <Gamecomponent/>
      <Featurecomponent/>
      <Product/>
      <BlogArea/>
      <Footercomponent/>
    </>
  );
}

export default App;
