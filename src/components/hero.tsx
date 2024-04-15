// import ClientDatabiz from '../assets/images/client-databiz.svg';
// import ClientAudiophile from '../assets/images/client-audiophile.svg';
// import ClientMeet from '../assets/images/client-meet.svg';
// import ClientMaker from '../assets/images/client-maker.svg';

export default function Hero() {
  return (
    <div className="px-5 pt-10 lg:pr-32 lg:flex lg:flex-row lg:items-center lg:justify-between">
      <div className="lg:order-2 lg:flex lg:flex-col lg:items-start">
        <h1 className="text-center lg:text-start text-4xl font-bold text-[hsl(0,0%,8%)] lg:text-7xl">
          Pioneering Digital Solutions for Tomorrow's Leaders
        </h1>
        <p className="text-center lg:text-start lg:pr-11 lg:mb-10 text-base lg:text-lg my-6 text-[hsl(0,0%,41%)] font-medium">
          Pexmon LTD is a leading technology solutions provider. Delivering innovative mobile apps, web platforms, and digital
          services to businesses across Kenya
        </p>
        {/* <div className="text-white bg-[hsl(0,0%,8%)] hover:bg-transparent hover:border hover:text-[hsl(0,0%,8%)] hover:border-[hsl(0,0%,8%)] py-3 px-6 rounded-xl">
          <a href='' className="text-base font-medium">
            Learn more
          </a>
        </div> */}
      </div>
      {/* <div className="flex flex-row justify-between mt-14 lg:mt-28 items-center">
        <img src={ClientDatabiz} alt="client-databiz" className="h-4" />
        <img src={ClientAudiophile} alt="client-audiophile" className="h-8" />
        <img src={ClientMeet} alt="client-meet" className="h-4" />
        <img src={ClientMaker} alt="client-maker" className="h-5" />
      </div> */}
    </div>
  );
}