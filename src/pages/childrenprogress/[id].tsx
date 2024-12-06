import { useRouter } from 'next/router'
import Head from 'next/head'
import LayoutAuthenticated from '../../layouts/Authenticated'
import { getPageTitle } from '../../config'
import CardBox from '../../components/CardBox'
import { ReactElement, useEffect, useState } from 'react'
import Leaderboard from '../../components/Leaderboard/IndividualLeaderboard'

interface Child {
  id: string;
  name: string;
  progress: number;
  grade: string;
  usage: number;
}

interface Subscription {
  plan: string;
  startDate: string;
  endDate: string;
  childId: string;
}

const userType= 'parent';

const ChildDetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [child, setChild] = useState<Child | null>(null)
  const [subscription, setSubscription] = useState<Subscription | null>(null)

  // Ensure `id` is available before fetching data
  useEffect(() => {
    if (!id) return // Exit if `id` is not available yet

    if (typeof window !== 'undefined') {
      // Fetch children data from localStorage
      const storedChildren = localStorage.getItem('children')
      if (storedChildren) {
        const parsedChildren = JSON.parse(storedChildren)
        const foundChild = parsedChildren.find((child: Child) => child.id === String(id))

        // If a child is found, set it to state
        if (foundChild) {
          setChild(foundChild)
        }

        // Fetch subscription data for the child
        const storedSubscriptions = localStorage.getItem('subscriptions')
        if (storedSubscriptions) {
          const parsedSubscriptions = JSON.parse(storedSubscriptions)
          const foundSubscription = parsedSubscriptions.find(
            (sub: Subscription) => sub.childId === String(id)
          )

          // If a subscription is found, set it to state
          if (foundSubscription) {
            setSubscription(foundSubscription)
          }
        }
      }
    }
  }, [id]) // Only run when `id` changes

  // If child or subscription is not found, show a loading message or a fallback UI
  if (!child || !subscription) {
    return (
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300">Loading or Data not found...</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{getPageTitle('Child Details')}</title>
      </Head>
      <div className="p-6">
        <div>
          {/* Dynamic Heading */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">{child.name}</h1>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Progress Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Tracking progress for {child.name}&apos;s learning journey</p>
          </div>

          {/* Progress Card */}
          <CardBox className="mb-6 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-lg shadow-lg">
              <div>
                <h3 className="text-xl font-semibold text-white">Progress</h3>
                <div className="mt-2">
                  <p className="text-4xl font-bold text-white">{child.progress}</p>
                  <div className="mt-2 text-white">Keep up the great work!</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Subscription Details</h3>
                <ul className="list-disc pl-4 mt-2 text-gray-800">
                  {/* Check if subscription data exists and display the correct data */}
                  <li>Plan: <span className="font-semibold">{subscription.plan || 'N/A'}</span></li>
                  <li>Start Date: <span className="font-semibold">{subscription.startDate || 'N/A'}</span></li>
                  <li>End Date: <span className="font-semibold">{subscription.endDate || 'N/A'}</span></li>
                </ul>
              </div>
            </div>
          </CardBox>

          {/* Usage Card */}
          <CardBox className="bg-gradient-to-r from-yellow-400 to-red-500">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-lg shadow-lg">
              <div>
                <h3 className="text-xl font-semibold text-white">Usage</h3>
                <p className="text-3xl font-bold text-white">{child.usage}</p>
                <div className="mt-2 text-white">Keep track of your time spent</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{child.name}&apos;s Level</h3>
                <p className="text-lg text-gray-700">Current Level: <span className="font-semibold">{child.grade}</span></p>
              </div>
            </div>
          </CardBox>
          <Leaderboard/>
        </div>
      </div>
    </>
  )
}

ChildDetailsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated userType={userType}>{page}</LayoutAuthenticated>
}

export default ChildDetailsPage
