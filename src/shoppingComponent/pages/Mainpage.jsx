import React, { useState } from 'react';
import Header from '../component/Header';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import Collections from '../component/Collections';
import WBanner from '../component/WBanner';
import { Photos } from '../data/data';


const Mainpage = () => {
    const [photo] = useState(Photos);
  return (
    <div>
      {/* <Header size={size}/> */}
      <Banner />
      <Collections photo={photo}/>
      <WBanner />
      <Footer />
    </div>
  );
};

export default Mainpage;
