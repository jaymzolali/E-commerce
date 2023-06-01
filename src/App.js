import Navbar from '../src/components/navbar/Navbar'
import './App.css';
import Section1 from './components/section1/Section1';
import Slider1 from './components/slider1/Slider1';
import Slider2 from './components/slider2/Slider2';
import Slider3 from './components/slider3/Slider3';
import Slider4 from './components/slider4/Slider4';
import Slider5 from './components/slider5/Slider5';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';
// import DropDownToggle from './components/toggle/DropDownToggle';
import Modern from './components/modern/Modern';
import Space from './components/space/Space';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Slider1/>
      <Slider2/>
      <Slider3/>
      {/* <DropDownToggle/> */}
      <Slider4/>
      <Modern/>
      <Slider5/>
      <Slider4/>
      <Subscribe/>
      <Space />
      <Footer/>
    </div>
  );
}

export default App;
