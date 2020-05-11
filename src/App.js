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
import SectionFinalText from './components/sectionFinalText'

function App() {
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

        <SectionTitle />

        <FourthNews />

        <SectionFinalText />

        <SectionTitle />

        <FifthNews />

        <SectionFinalText />

      </section>
      <Footer />
    </div>


  );
}

export default App;
