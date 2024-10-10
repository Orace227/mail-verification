import { Divider } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';

const PricingCard = ({ id, plan, price, features, priceSlogan, buttonText, paymentLink }) => {
  const token = Cookies.get('access');

  const handlePayment = async (id) => {
    try {
      console.log('id', id);
      const razorPayOrder = await axios.post(
        '/subscribe/create-razorpay-order/',
        { plan_id: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(razorPayOrder.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex mt-5 w-full flex-col justify-center overflow-hidden rounded-2xl z-10 h-[100%]">
      <div className="bg-[#1b1b1b] border border-gray-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between h-[100%]">
        <div>
          <h2 className="text-4xl">{plan}</h2>
          <p className="text-2xl my-3 text-[#00C8C8]">
            {price ? '$' : ''} {price} {priceSlogan}
          </p>
          <Divider />
          <ul className="mb-6">
            {features?.map((feature, index) => (
              <li key={index} className="flex items-center mb-2 mt-2">
                <svg
                  className="w-6 h-6 text-[#00C8C8] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={() => {
              handlePayment(id);
            }}
            className="w-full py-2 text-lg bg-white hover:bg-[#13DEB9] text-black rounded-lg transition-colors duration-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
