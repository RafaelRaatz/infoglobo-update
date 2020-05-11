import React from 'react';
import './global.css'

import Header from './components/header'
import FirstNews from './components/firstNews'
import SecondNews from './components/secondNews'
import ThirdNews from './components/thirdNews'
import Advertising from './components/advertising'
import FourthNews from './components/fourthNews'
import FifthNews from './components/fifthNews'
import Footer from './components/footer'
import SectionTitle from './components/sectionTitle'



const App = () => {
  return (

    <div>

      <Header />

      <section className="main">

        <FirstNews />

        <SecondNews />

        <ThirdNews />

      </section>

      <Advertising />

      <section>

        <SectionTitle text="Brasil" />


        <FourthNews />


        <SectionTitle text2="Mundo+" />


        <SectionTitle text="Brasil" />


        <FifthNews />


        <SectionTitle text2="Mundo+" />


      </section>
      <Footer />
    </div>


  );
}

export default App;
