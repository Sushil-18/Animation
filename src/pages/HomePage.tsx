import hero from "../assets/hero.png";
import city from "../assets/city.jpg";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const main_h1_style =
    "text-4xl text-yellow-300 font-semibold text-left mx-60";

  function handleClick() {
    navigate("./challenges");
  }
  return (
    <>
      <header className=" h-screen">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          src={city}
          alt="A city skyline touched by sunlight"
        />
        <div className="w-[40rem] absolute top-[40%] left-[calc(50%-20rem)] z-20 text-center text-shadow-[0_0_6px_rgba(0,0,0,0.5)]">
          <h1 className="text-white z-10 text-5xl font-bold">
            Ready for Challenge?
          </h1>
          <button
            className="rounded-md border-0 bg-blue-600 text-white py-1 px-3 mt-16"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
        <img
          className="w-[20rem] z-10 absolute top-[35%] left-[29%] object-cover filter drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] transform scale-125"
          src={hero}
          alt="A superhero wearing a cape"
        />
      </header>

      <main className="relative flex flex-col gap-12">
        <div>
          <h1 className={main_h1_style}>There's never been a better time</h1>
          <p className="mx-60 text-left mt-2">
            With our platform you can set,track and conquor challenges at your
            own pace. Whether it's personal growth, professional achivements or
            just for fun, we've got you covered.
          </p>
        </div>
        <div>
          <h1 className={main_h1_style}>Why challenge yourself?</h1>
          <p className="mx-60 text-left mt-2">
            Challenge provides a framework for growth. They push boundries test
            limits and result in guniune progress. Here we belive everyone has
            untapped potential, waiting to be unblocked.
          </p>
        </div>
        <div>
          <h1 className={main_h1_style}>Features</h1>
          <ul className="mx-64 text-left mt-2 list-disc">
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Trace your progress:see your growth over time with our analytics
              tools.
            </li>
            <li>
              Community progress:join our communityand motivated by peers.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomePage;
