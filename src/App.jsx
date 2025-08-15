
import './App.css';
import Menu from './components/menu';
import ImageSlider from './components/images';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import HobbiesCarousel from './components/hobbies';

import img1 from './assets/EMY_4565.jpg';
import img2 from './assets/DSC_9390.jpg';
import img3 from './assets/DSC_3653.jpg';

function App() {
  return (
    <>
      <Menu />
      <div className="pt-20">
        <ImageSlider />
        <AboutMe />
        <HobbiesCarousel
          images={[
            { src: img1, alt: "Painting" },
            { src: img2, alt: "Hiking" },
            { src: img3, alt: "Photography" },
          ]}
        />
        <br /> <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
