import React from 'react'
import { mdiMedal, mdiStarCircle, mdiTrophy } from '@mdi/js'
import Icon from '@mdi/react'
import { useAppSelector } from '../stores/hooks'
import LayoutAuthenticated from '../layouts/Authenticated'
import { ReactElement } from 'react'

type Reward = {
  icon: string
  label: string
  description: string
}

const Rewards = () => {
  const userPoints = useAppSelector((state) => state.main.userPoints) // Fetch points from Redux
  const badges: Reward[] = [
    {
      icon: mdiMedal,
      label: 'Quiz Master',
      description: 'Completed 10 quizzes with 80%+ score',
    },
    {
      icon: mdiStarCircle,
      label: 'High Scorer',
      description: 'Achieved 100% on a quiz',
    },
    {
      icon: mdiTrophy,
      label: 'Milestone Achiever',
      description: 'Reached 1000 points',
    },
  ]

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mb-12 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Your Rewards</h2>
      <div className="mb-6">
        <h3 className="text-xl text-gray-700 dark:text-gray-300">
          Total Score: {userPoints}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-auto">
        {badges.map((reward, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white flex flex-col items-center"
          >
            <Icon path={reward.icon} size={2} className="mb-2" />
            <h3 className="text-lg font-bold">{reward.label}</h3>
            <p className="text-sm text-center">{reward.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

Rewards.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Rewards
