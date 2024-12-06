import React, { useState, useEffect } from 'react';
import SectionMain from '../components/Section/Main';
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton';
import CardBox from '../components/CardBox';
import Button from '../components/Button';
import { mdiCreditCardOutline } from '@mdi/js';
import LayoutAuthenticated from '../layouts/Authenticated';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

const userType = 'parent';


const ManageSubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    const storedSubscriptions = (() => {
      try {
        return JSON.parse(localStorage.getItem('subscriptions')) || [];
      } catch {
        console.error('Invalid subscription data in localStorage.');
        return [];
      }
    })();

    const enrichedSubscriptions = storedSubscriptions.map((sub) => {
      const startDate = new Date(sub.startDate || Date.now());
      const durationMonths = parseInt(sub.duration?.split(' ')[0]) || 0;
      const endDate = new Date(startDate);
      endDate.setMonth(startDate.getMonth() + durationMonths);
      const today = new Date();
      const status = today <= endDate && sub.status !== 'Inactive' ? 'Active' : 'Inactive';

      return {
        ...sub,
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        status,
      };
    });

    setSubscriptions(enrichedSubscriptions);
    setLoading(false);
  }, []);

  const toggleSubscriptionStatus = (index) => {
    const updatedSubscriptions = subscriptions.map((sub, i) => {
      if (i === index) {
        const newStatus = sub.status === 'Active' ? 'Inactive' : 'Active';
        const currentDate = new Date();

        return {
          ...sub,
          status: newStatus,
          endDate: newStatus === 'Inactive' ? currentDate.toLocaleDateString() : sub.endDate,
        };
      }
      return sub;
    });

    setSubscriptions(updatedSubscriptions);
    localStorage.setItem('subscriptions', JSON.stringify(updatedSubscriptions));

    const newStatusMessage = updatedSubscriptions[index].status === 'Active' ? 'activated' : 'deactivated';
    alert(`Subscription ${newStatusMessage} successfully!`);
  };

  if (loading) {
    return (
      <p className="text-center text-xl text-gray-500 dark:text-gray-300 mt-8">
        Loading...
      </p>
    );
  }

  if (subscriptions.length === 0) {
    return (
      <p className="text-center text-xl text-gray-500 dark:text-gray-300 mt-8">
        No subscriptions available.
      </p>
    );
  }

  return (
    <SectionMain>
      <SectionTitleLineWithButton
        icon={mdiCreditCardOutline}
        title="Manage Your Subscriptions"
      />

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((subscription, index) => (
          <CardBox
            key={index}
            className="p-6 rounded-lg shadow-lg border-2 border-gray-300 dark:border-gray-700 transition-all hover:shadow-xl hover:border-gray-500"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {subscription.plan}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Price: <span className="font-medium">{subscription.price}</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Duration: <span className="font-medium">{subscription.duration}</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Subscription Start: <span className="font-medium">{subscription.startDate}</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Subscription End: <span className="font-medium">{subscription.endDate}</span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Status: <span className={`font-medium ${subscription.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                {subscription.status}
              </span>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Subscribed for:
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-4">
              {subscription.childId ? (
                <li>
                  - <span className="font-medium">Child ID:</span> {subscription.childId}
                </li>
              ) : (
                <li className="text-gray-500">No child ID available.</li>
              )}
            </ul>
            <Button
              label={subscription.status === 'Active' ? 'Deactivate' : 'Activate'}
              color={subscription.status === 'Active' ? 'danger' : 'success'}
              onClick={() => {
                if (subscription.status === 'Inactive') {
                  router.push('/plans'); // Redirect to plans page for activation
                } else {
                  toggleSubscriptionStatus(index);
                }
              }}
              className="w-full py-2 px-4 rounded-md text-white font-semibold transition-all hover:opacity-80"
            />
          </CardBox>
        ))}
      </div>
    </SectionMain>
  );
};

ManageSubscriptionsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated userType= {userType}>{page}</LayoutAuthenticated>;
};

export default ManageSubscriptionsPage;
