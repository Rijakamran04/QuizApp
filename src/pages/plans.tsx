import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SectionMain from '../components/Section/Main';
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton';
import CardBox from '../components/CardBox';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { mdiCreditCardOutline, mdiArrowRightCircle } from '@mdi/js';
import { getPageTitle } from '../config';
import { useRouter } from 'next/router';
import LayoutAuthenticated from '../layouts/Authenticated';
import { ReactElement } from 'react';

// Define plan type
interface Plan {
  name: string;
  description: string;
  price: string;
  duration: string;
}

interface Child {
  id: string;
  name: string;
}

const userType = 'parent';


const PlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [selectedChild, setSelectedChild] = useState<string>(''); // ID of selected child
  const [isModalOpen, setModalOpen] = useState(false);
  const [children, setChildren] = useState<Child[]>([]); // List of children from localStorage
  const router = useRouter();

  const plans: Plan[] = [
    {
      name: 'Basic Plan',
      description: 'Access to basic quizzes and progress tracking.',
      price: '$5',
      duration: '1 Month',
    },
    {
      name: 'Pro Plan',
      description: 'Access to all quizzes, rewards, and progress analytics.',
      price: '$15',
      duration: '3 Month',
    },
    {
      name: 'Ultimate Plan',
      description: 'Full access to quizzes, leaderboard, and priority support.',
      price: '$25',
      duration: '6 Month',
    },
  ];

  // Fetch children from localStorage
  useEffect(() => {
    const storedChildren = JSON.parse(localStorage.getItem('children') || '[]');
    setChildren(storedChildren);
  }, []);

  const handleSubscribe = (plan: Plan) => {
    if (!selectedChild) {
      alert('Please select a child first.');
      return;
    }
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const confirmSubscription = () => {
    if (!selectedPlan || !selectedPlan.name || !selectedPlan.price || !selectedPlan.duration) {
      console.error('Selected plan is not defined properly:', selectedPlan);
      return;
    }

    setModalOpen(false);

    // Navigate to the payment page, passing the selected plan and child ID
    router.push({
      pathname: '/payment',
      query: {
        name: selectedPlan.name,
        price: selectedPlan.price,
        duration: selectedPlan.duration,
        childId: selectedChild,
      },
    });
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Subscription Plans')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiCreditCardOutline}
          title="Choose Your Plan"
        >
          <Button
            label="Manage Subscriptions"
            href="/manageSubscriptions"
            color="success"
            icon={mdiArrowRightCircle}
            roundedFull
          />
        </SectionTitleLineWithButton>

        {/* Dropdown to select a child */}
        <div className="mb-6">
          <label htmlFor="child-select" className="block text-lg font-semibold">Select Child</label>
          <select
            id="child-select"
            value={selectedChild}
            onChange={(e) => setSelectedChild(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md"
            required
          >
            <option value="">Select a Child</option>
            {children.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {plans.map((plan, index) => (
            <CardBox
              key={index}
              className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{plan.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{plan.description}</p>
              <p className="text-xl font-semibold text-green-600 dark:text-green-400">{plan.price}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Duration: {plan.duration}</p>
              <Button
                label="Subscribe Now"
                color="success"
                onClick={() => handleSubscribe(plan)}
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
              />
            </CardBox>
          ))}
        </div>

        {isModalOpen && selectedPlan && (
          <Modal
            isOpen={isModalOpen}
            message={`You're about to subscribe to the ${selectedPlan.name}.\nStart Date: ${new Date().toLocaleDateString()}\nEnd Date: ${new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ).toLocaleDateString()}`}
            onClose={() => setModalOpen(false)}
            confirmText="Confirm Subscription"
            onConfirm={confirmSubscription}
          />
        )}
      </SectionMain>
    </>
  );
};

// Wrap the page with LayoutAuthenticated to include the navbar
PlanPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated userType={userType}>{page}</LayoutAuthenticated>;
};

export default PlanPage;
