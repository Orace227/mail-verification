'use client';
import { useEffect, useState } from 'react';
import PricingCard from './PricingCard';
import { Container, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
const plans = [
  {
    month: {
      Pro: {
        price: '',
        priceId: 'price_1PyzVKSCN5U3Z9OGPDQO2VqF',
        paymentLink: 'https://buy.stripe.com/cN27wogm0bNzcko3ck',
        priceSlogan: '/ MONTH',
        features: [
          'Everything in Starter',
          'Multiple Websites (upto 5)',
          'Priority support',
          '24x7 Support :)',
        ],
      },
      'Pro Plus': {
        price: '',
        priceId: 'price_1Q3HwsSCN5U3Z9OGTEA15xC9',
        paymentLink: 'https://buy.stripe.com/eVa9Ew7Pu8Bn8484gu',
        priceSlogan: '/ YEAR',
        features: [
          'Everything in Starter',
          'Multiple Websites (upto 5)',
          'Priority support',
          '24x7 Support :)',
        ],
      },
      Agency: {
        priceSlogan: 'BOOK A CALL',
        features: [
          'Unlimited websites',
          'White-labeled',
          'Dedicated Access',
          'Priority access to new features',
        ],
      },
    },
  },
  {
    year: {
      Pro: {
        price: '',
        priceId: 'price_1Pz0pASCN5U3Z9OG6CimcXWY',
        paymentLink: 'https://buy.stripe.com/dR69Ew9XCeZLfwAcMV',
        priceSlogan: '/ MONTH',
        features: [
          'Everything in Starter',
          'Multiple Websites (upto 5)',
          'Priority support',
          '24x7 Support :)',
        ],
      },
      'Pro Plus': {
        price: '',
        priceId: 'price_1Q3I07SCN5U3Z9OGgdPCoGW9',
        paymentLink: 'https://buy.stripe.com/eVa5oggm0cRD3NS14l',
        priceSlogan: '/ YEAR',
        features: [
          'Everything in Starter',
          'Multiple Websites (upto 5)',
          'Priority support',
          '24x7 Support :)',
        ],
      },
      Agency: {
        priceSlogan: 'BOOK A CALL',
        features: [
          'Unlimited websites',
          'White-labeled',
          'Dedicated Access',
          'Priority access to new features',
        ],
      },
    },
  },
];

export default function PricingCards() {
  // State to toggle between month and year, default is year
  const [isYearly, setIsYearly] = useState(true);
  const [monthlyPlans, setMonthlyPlans] = useState([]);
  const [yearlyPlans, setYearlyPlans] = useState([]);
  const [currentPlans, setCurrentPlans] = useState([]); // State to store the current pricing plans

  // Handle radio button change
  const handleToggle = (event) => {
    setIsYearly(event.target.value === 'yearly');
    setCurrentPlans(event.target.value === 'yearly' ? yearlyPlans : monthlyPlans); // Switch between monthly and yearly plans
  };

  // Fetch the pricing plans once when the component mounts
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // const planFromLocalStorage =  localStorage.getItem("selectedPlan");

        const selectedPricingPlanCookie = Cookies.get('selectedPricingPlan');
        const selectedPricingPlan = selectedPricingPlanCookie
          ? JSON.parse(selectedPricingPlanCookie)
          : null;

        let plan = selectedPricingPlan ? selectedPricingPlan : plans;
        const updatedPricingPlans = [...plan]; // Copy the original pricing plans array
        // Fetch and update prices for both month and year
        for (let i = 0; i < updatedPricingPlans.length; i++) {
          const planType = i === 0 ? 'month' : 'year';
          const plans = updatedPricingPlans[i][planType];

          for (const planName in plans) {
            if (plans[planName].priceId) {
              // Fetch price for the current plan
              const response = await axios.post('/payment/get-price-details', {
                priceId: plans[planName].priceId,
              });
              const priceData = response.data.priceData;

              // Update the price
              plans[planName].price = priceData.unit_amount
                ? (priceData.unit_amount / 100).toFixed(2)
                : '0.00';
            }
          }
        }

        // Set the updated plans
        setMonthlyPlans(updatedPricingPlans[0].month);
        setYearlyPlans(updatedPricingPlans[1].year);

        // Set the initial plans based on the default toggle state
        setCurrentPlans(isYearly ? updatedPricingPlans[1].year : updatedPricingPlans[0].month);
      } catch (error) {
        console.error('Error fetching price details:', error);
      }
    };

    fetchPrices();
  }, []); // Dependency on isYearly to update when toggle changes

  return (
    <main className="container mx-auto ">
      {/* Radio Button Toggle for Monthly/Yearly */}
      <div className="flex justify-center items-center mt-4">
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="billing-cycle"
            name="billing-cycle"
            value={isYearly ? 'yearly' : 'monthly'}
            onChange={handleToggle}
          >
            <FormControlLabel value="monthly" control={<Radio color="primary" />} label="Monthly" />
            <FormControlLabel value="yearly" control={<Radio color="primary" />} label="Yearly" />
          </RadioGroup>
        </FormControl>
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {/* Map over the current pricing plans based on selected toggle */}
        {currentPlans &&
          Object.keys(currentPlans).map((planKey, index) => {
            const plan = currentPlans[planKey];
            return (
              <div key={index} className="w-full md:w-1/3 lg:w-1/4">
                <PricingCard
                  plan={planKey}
                  features={plan.features}
                  price={plan.price}
                  paymentLink={plan.paymentLink}
                  priceSlogan={plan.priceSlogan}
                  buttonText={plan.priceSlogan === 'BOOK A CALL' ? 'Contact Us' : 'Choose Plan'}
                />
              </div>
            );
          })}
      </div>
    </main>
  );
}
