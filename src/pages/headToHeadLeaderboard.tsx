import React, { useState } from "react";
import LayoutAuthenticated from "../layouts/Authenticated";
import { ReactElement } from "react";
import { FaMedal, FaTrophy, FaStar, FaCoins } from "react-icons/fa"; // Import icons
import ChallengeButton from "../components/Leaderboard/Challenge"; // Import the new ChallengeButton component

interface User {
  id: number;
  name: string;
  score: number;
}
const userType = 'student';


const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<"global" | "group">("global");

  // Mock logged-in user
  const loggedInUserId = 1; // Replace with actual logic for fetching the logged-in user's ID.

  // Dummy data for global and group tabs
  const globalUsers: User[] = [
    { id: 1, name: "Alice", score: 180 },
    { id: 2, name: "Bob", score: 150 },
    { id: 3, name: "Charlie", score: 125 },
    { id: 4, name: "Daisy", score: 110 },
    { id: 5, name: "Eve", score: 105 },
    { id: 6, name: "Frank", score: 100 },
    { id: 7, name: "Grace", score: 95 },
    { id: 8, name: "Hank", score: 90 },
    { id: 9, name: "Ivy", score: 85 },
    { id: 10, name: "Jack", score: 80 },
  ];

  const groupUsers: User[] = [
    { id: 1, name: "Bob", score: 200 },
    { id: 2, name: "Alice", score: 190 },
    { id: 3, name: "Charlie", score: 125 },
    { id: 4, name: "Daisy", score: 110 },
    { id: 5, name: "Eve", score: 105 },
  ];

  // Get active users based on tab and sort them by score
  const users = activeTab === "global" ? globalUsers : groupUsers;
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);
  const topThree = sortedUsers.slice(0, 3); // Top 3 users
  const others = sortedUsers.slice(3); // Rest of the users

  // Badge assignment logic with icons
  const getBadgeIcon = (position: number) => {
    const baseClasses = "absolute w-2/3 h-2/3"; // Icon size relative to container
    switch (position) {
      case 1:
        return <FaTrophy className={`${baseClasses} text-yellow-500`} />;
      case 2:
        return <FaMedal className={`${baseClasses} text-green-500`} />;
      case 3:
        return <FaMedal className={`${baseClasses} text-orange-500`} />;
      default:
        return <FaStar className={`${baseClasses} text-purple-500`} />;
    }
  };

  // Background colors for specific positions
  const getBackgroundColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-300 dark:bg-yellow-600";
      case 2:
        return "bg-green-300 dark:bg-green-600";
      case 3:
        return "bg-orange-200 dark:bg-orange-600";
      default:
        return "bg-gray-200 dark:bg-gray-700";
    }
  };

  // Handle challenge logic dynamically
  const handleChallenge = (challengedId: number) => {
    alert(
      `Challenge sent from user ${loggedInUserId} to user ${challengedId}`
    );
    // Add actual challenge handling logic here.
  };

  return (
    <div className="flex flex-col items-center justify-center bg-purple-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Leader Board
      </h2>

      {/* Tab Switcher */}
      <div className="flex space-x-4 mb-9">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "global"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
          onClick={() => setActiveTab("global")}
        >
          Global
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "group"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-white"
          }`}
          onClick={() => setActiveTab("group")}
        >
          Group
        </button>
      </div>

      {/* Top Three Users */}
      <div className="flex justify-center items-end mb-8 w-full space-x-2 sm:space-x-4">
        {/* 2nd User */}
        {topThree[1] && (
          <div
            key={topThree[1].id}
            className="flex flex-col items-center p-2 sm:p-4  bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg text-black dark:text-white"
          >
            <div
              className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mb-3 ${getBackgroundColor(2)}`}
            >
              <span className="absolute z-10 text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-white">
                2nd
              </span>
              {getBadgeIcon(2)}
            </div>
            <p className="text-lg sm:text-2xl font-bold">{topThree[1].name}</p>
            <div className="bg-purple-600 text-white flex items-center py-1 px-3 sm:px-4 text-sm sm:text-base rounded-full mt-2">
              <FaCoins className="mr-2" /> {topThree[1].score}
            </div>
            <ChallengeButton
              challengerId={loggedInUserId}
              challengedId={topThree[1].id}
              onChallenge={() => handleChallenge(topThree[1].id)}
            />
          </div>
        )}

        {/* 1st User */}
        {topThree[0] && (
          <div
            key={topThree[0].id}
            className="flex flex-col items-center p-2 sm:p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg text-black dark:text-white transform scale-110 z-10"
          >
            <div
              className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center mb-3 ${getBackgroundColor(1)}`}
            >
              <span className="absolute z-10 text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white">
                1st
              </span>
              {getBadgeIcon(1)}
            </div>
            <p className="text-2xl sm:text-4xl font-extrabold">{topThree[0].name}</p>
            <div className="bg-purple-600 text-white flex items-center py-2 px-4 sm:px-6 text-base sm:text-lg rounded-full mt-2">
              <FaCoins className="mr-2" /> {topThree[0].score}
            </div>
            <ChallengeButton
              challengerId={loggedInUserId}
              challengedId={topThree[0].id}
              onChallenge={() => handleChallenge(topThree[0].id)}
            />
          </div>
        )}

        {/* 3rd User */}
        {topThree[2] && (
          <div
            key={topThree[2].id}
            className="flex flex-col items-center p-2 sm:p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg text-black dark:text-white"
          >
            <div
              className={`relative w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mb-3 ${getBackgroundColor(3)}`}
            >
              <span className="absolute z-10 text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-white">
                3rd
              </span>
              {getBadgeIcon(3)}
            </div>
            <p className="text-lg sm:text-2xl font-bold">{topThree[2].name}</p>
            <div className="bg-purple-600 text-white flex items-center py-1 px-3 sm:px-4 text-sm sm:text-base rounded-full mt-2">
              <FaCoins className="mr-2" /> {topThree[2].score}
            </div>
            <ChallengeButton
              challengerId={loggedInUserId}
              challengedId={topThree[2].id}
              onChallenge={() => handleChallenge(topThree[2].id)}
            />
          </div>
        )}
      </div>

      {/* Other Users */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {others.map((user, index) => (
          <div
            key={user.id}
            className="flex flex-col items-center  bg-gray-200 dark:bg-gray-700  p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 dark:text-white"
          >
            <div className="relative w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="absolute z-10 text-lg font-extrabold text-gray-800">
                {index + 4} {/* Position */}
              </span>
              {getBadgeIcon(index + 4)}
            </div>
            <p className="mt-2 font-bold">{user.name}</p>
            <div className="bg-purple-600 text-white flex items-center py-1 px-4 rounded-full mt-2">
              <FaCoins className="mr-2" /> {user.score}
            </div>
            <ChallengeButton
              challengerId={loggedInUserId}
              challengedId={user.id}
              onChallenge={() => handleChallenge(user.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Leaderboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated userType={userType}>{page}</LayoutAuthenticated>;
};

export default Leaderboard;
