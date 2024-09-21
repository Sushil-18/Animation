import Challenges from "../components/Challenges";

const Challenge = () => {
  return (
    <div className="mx-[30%] mt-4">
      <div className="flex justify-between align-middle">
        <h2 className="text-blue-300 text-xl font-semibold">Your Challenges</h2>
        <button className="border-0 rounded-md bg-blue-700 px-2 py-1">
          Add Challenge
        </button>
      </div>
      <Challenges />
    </div>
  );
};

export default Challenge;
