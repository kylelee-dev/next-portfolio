import Animation from "./animation";
export default function Hero() {
  return (
    <section className="text-gray-600 min-h-screen flex flex-col items-center justify-center body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Kyle Lee
            <br className=" lg:inline-block font-bold" />
            Software Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Explore projects
            </button>
          </div>
        </div>
        <div className="flex lg:max-w-lg lg:w-full md:w-1/2 w-5/6 justify-center">
          <Animation />
        </div>
      </div>
    </section>
  );
}
