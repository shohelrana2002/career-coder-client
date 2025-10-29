import React from "react";

const ApplicationStats = () => {
  return (
    <div className="w-full flex justify-center mt-6">
      <div className="stats shadow bg-base-100 stats-vertical md:stats-horizontal gap-4 p-4 rounded-2xl">
        <div className="stat hover:bg-base-200 transition-all cursor-pointer rounded-xl p-4">
          <div className="stat-title text-gray-500">Total Applied</div>
          <div className="stat-value text-blue-600 font-extrabold">31</div>
          <div className="stat-desc text-green-500">+5 this week</div>
        </div>

        <div className="stat hover:bg-base-200 transition-all cursor-pointer rounded-xl p-4">
          <div className="stat-title text-gray-500">Accepted</div>
          <div className="stat-value text-purple-600 font-extrabold">08</div>
          <div className="stat-desc text-green-500">↗︎ 12%</div>
        </div>

        <div className="stat hover:bg-base-200 transition-all cursor-pointer rounded-xl p-4">
          <div className="stat-title text-gray-500">Rejected</div>
          <div className="stat-value text-red-600 font-extrabold">04</div>
          <div className="stat-desc text-red-500">↘︎ 5%</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStats;
