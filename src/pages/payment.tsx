import React, { useState } from 'react';
import { useRouter } from 'next/router';
import SectionMain from '../components/Section/Main';
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton';
import Button from '../components/Button';
import { mdiCreditCardOutline } from '@mdi/js';

const PaymentPage = () => {
  const router = useRouter();
  const { name, price, duration, childId } = router.query;

  // Handle the possibility of price being a string or string[] 
  const priceValue = Array.isArray(price) ? price[0] : price; // Default to first value if array

  const [paymentDetails, setPaymentDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !paymentDetails.cardHolderName ||
      !paymentDetails.cardNumber ||
      !paymentDetails.expiryDate ||
      !paymentDetails.cvv
    ) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate saving the subscription
    const newSubscription = {
      plan: name,
      childId: childId,
      price: priceValue,
      duration,
      startDate: new Date().toLocaleDateString(),
      status: 'Active',

    };

    // Save subscription to localStorage
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
    localStorage.setItem('subscriptions', JSON.stringify([...subscriptions, newSubscription]));

    alert('Payment successful!');
    router.push('/manageSubscriptions'); // Navigate to the Manage Subscriptions page
  };

  return (
    <SectionMain>
      <SectionTitleLineWithButton
        icon={mdiCreditCardOutline}
        title="Complete Your Payment"
      />
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Plan: {name}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Child-ID: {childId}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Price: {priceValue}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Duration: {duration}
        </p>

        <form onSubmit={handlePayment} className="space-y-4">
          {/* Cardholder Name */}
          <div>
            <label
              htmlFor="cardHolderName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardHolderName"
              name="cardHolderName"
              value={paymentDetails.cardHolderName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              maxLength={16}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
              required
            />
          </div>

          {/* Expiry Date & CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Expiry Date (MM/YY)
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                maxLength={3}
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            label="Pay Now"
            color="success"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors dark:bg-green-600 dark:hover:bg-green-700"
          />
        </form>
      </div>
    </SectionMain>
  );
};

export default PaymentPage;
