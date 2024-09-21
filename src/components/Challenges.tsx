import { useState } from "react";
type activeTab = "Active" | "Completed" | "Failed";

const Challenges = () => {
  const [activeTab, setActiveTab] = useState<activeTab>("Active");

  function renderContent() {
    switch (activeTab) {
      case "Active":
        return (
          <>
            <p>No Active Challenges</p>
          </>
        );
      case "Completed":
        return (
          <>
            <p>No Completed Challenges</p>
          </>
        );
      case "Failed":
        return (
          <>
            <p>No Failed Challenges</p>
          </>
        );
    }
  }

  return (
    <section className="mt-8 border-0 rounded-sm w-full min-h-28 bg-zinc-700 p-4">
      <div className=" flex justify-between gap-4 ">
        <div>
          <button onClick={() => setActiveTab("Active")}>
            Active
            <span className="bg-blue-700 py-1 px-2 border-0 rounded-md ">
              0
            </span>
          </button>
        </div>
        <div>
          <button onClick={() => setActiveTab("Completed")}>
            Completed
            <span className="bg-blue-700 py-1 px-2 border-0 rounded-md">0</span>
          </button>
        </div>
        <div>
          <button onClick={() => setActiveTab("Failed")}>
            Failed
            <span className="bg-blue-700 py-1 px-2 border-0 rounded-md">0</span>
          </button>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "Failed" && renderContent()}
        {activeTab === "Completed" && renderContent()}
        {activeTab === "Active" && renderContent()}
      </div>
    </section>
  );
};

export default Challenges;
