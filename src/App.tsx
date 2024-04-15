import Navigation from './components/navigation';
import Hero from './components/hero';
import CountDown from './components/countdown';
//import CookieBanner from './components/cookie-consent';
import desktophero from './assets/images/image-hero-desktop.png';
import './App.css';

function App() {
  return (
    <div className="font-epilogue bg-[hsl(0,0%,98%)]">
      <div className=" flex flex-col">
        <Navigation />
        <div className=" lg:flex lg:mx-44 lg:gap-4 lg:mt-10">
          <img src={desktophero} alt="image-hero-desktop" className="hidden mt-7 lg:flex lg:order-2 lg:w-full lg:h-full overflow-auto" />
          <Hero />
          <div className="flex justify-center">
            <img
              src={desktophero}
              alt="image-hero-mobile"
              className="lg:hidden"
              style={{ width: '50%' }}
            />
          </div>
        </div>
        <CountDown/>
      </div>
    </div>
  );
}

export default App;