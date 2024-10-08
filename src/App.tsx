import './App.css';
import Navigation from './components/navigation';
import Hero from './components/hero';
import CountDown from './components/countdown';
import desktophero from './assets/images/image-hero-desktop.png';
import EventKick from './components/EventKick';
import VarsityRank from './components/VarsityRank';
import NikoKadi from './components/NikoKadi';

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
        <EventKick/>
        <NikoKadi/>
        <VarsityRank/>
        <CountDown/>
      </div>
    </div>
  );
}

export default App;