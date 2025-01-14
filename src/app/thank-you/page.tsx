'use client';

import { useState, useEffect } from 'react';

export default function ThankYou() {
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [shippingRates, setShippingRates] = useState<any[]>([]);
  const [selectedRate, setSelectedRate] = useState<any>(null);
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  const [labelUrl, setLabelUrl] = useState<string | null>(null);
  const [shippingDetails, setShippingDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address_line1: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'US',
  });

  const [shipFrom] = useState({
    name: 'Your Warehouse',
    company_name: 'Your Company',
    phone: '123-456-7890',
    address_line1: '123 Main St',
    city_locality: 'Austin',
    state_province: 'TX',
    postal_code: '78756',
    country_code: 'US',
  });

  const handleGenerateTrackingNumber = () => {
    setShowShippingForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGetShippingRates = async () => {
    // Validate form data
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address_line1 ||
      !formData.city ||
      !formData.state ||
      !formData.postal_code ||
      !formData.country
    ) {
      setError('Please fill out all required fields.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Prepare the request body
      const requestBody = {
        ship_to: {
          name: formData.name,
          phone: formData.phone,
          address_line1: formData.address_line1,
          city_locality: formData.city,
          state_province: formData.state.toUpperCase(),
          postal_code: formData.postal_code,
          country_code: formData.country,
        },
        ship_from: shipFrom,
        packages: [
          {
            weight: {
              value: 1,
              unit: 'pound',
            },
          },
        ],
        rate_options: {
          carrier_codes: ['ups', 'fedex', 'usps'],
        },
      };

      // Call the API to get shipping rates
      const response = await fetch('/api/get-shipping-rates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      // Check if the response contains rates
      if (Array.isArray(data.rates)) {
        setShippingRates(data.rates);
      } else {
        console.error('No rates found in the response:', data);
        setError('No shipping rates found. Please check your input.');
      }
    } catch (err) {
      console.error('Error fetching shipping rates:', err);
      setError('Failed to fetch shipping rates. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!selectedRate) return;

    setIsLoading(true);
    setError(null);

    try {
      // Call the API to create a label
      const response = await fetch('/api/create-shipping-label', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: 'your-order-id', // Replace with the actual order ID
          address: {
            name: formData.name,
            company_name: 'Example Company',
            phone: formData.phone,
            address_line1: formData.address_line1,
            city_locality: formData.city,
            state_province: formData.state,
            postal_code: formData.postal_code,
            country_code: formData.country,
          },
        }),
      });

      const { labelUrl, trackingNumber } = await response.json();
      setTrackingNumber(trackingNumber);
      setLabelUrl(labelUrl);
    } catch (err) {
      console.error('Error creating label:', err);
      setError('Failed to create label. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (trackingNumber) {
      const trackPackage = async () => {
        try {
          const response = await fetch('/api/track-package', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ trackingNumber }),
          });

          const data = await response.json();
          setShippingDetails(data);
        } catch (err) {
          console.error('Error:', err);
        }
      };

      trackPackage();
    }
  }, [trackingNumber]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-600">
        Thank you for your purchase. Your payment has been processed successfully.
      </p>

      {/* Generate Tracking Number Button */}
      <div className="mt-6">
        <button
          onClick={handleGenerateTrackingNumber}
          disabled={showShippingForm}
          className="bg-[#029FAE] text-white font-semibold py-2 px-4 rounded-[30px] hover:bg-[#272343] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate Tracking Number!
        </button>
      </div>

      {/* Shipping Rates Calculator Form */}
      {showShippingForm && (
        <div className="mt-6 max-w-md mx-auto text-left">
          <h2 className="text-xl font-bold mb-4">Shipping Rates Calculator</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address_line1"
                value={formData.address_line1}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                maxLength={2}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mt-1"
                required
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <button
              onClick={handleGetShippingRates}
              disabled={isLoading}
              className="w-full mt-6 py-2 px-4 bg-[#029FAE] text-white font-semibold rounded-[30px] hover:bg-[#272343] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Fetching Rates...' : 'Get Shipping Rates'}
            </button>
          </div>
        </div>
      )}

      {/* Display Shipping Rates */}
      {shippingRates.length > 0 && (
        <div className="mt-6 max-w-md mx-auto text-left">
          <h2 className="text-xl font-bold mb-4">Available Shipping Rates</h2>
          <div className="space-y-4">
            {shippingRates.map((rate) => (
              <div
                key={rate.rate_id}
                className={`p-4 border rounded cursor-pointer ${
                  selectedRate?.rate_id === rate.rate_id ? 'bg-blue-50 border-blue-500' : 'bg-white'
                }`}
                onClick={() => setSelectedRate(rate)}
              >
                <p className="font-semibold">
                  {rate.carrier} - {rate.service_type}
                </p>
                <p className="text-gray-600">
                  {rate.shipping_amount.amount} {rate.shipping_amount.currency}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Label Button */}
      {shippingRates.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleCreateLabel}
            disabled={!selectedRate || isLoading}
            className="bg-[#029FAE] text-white font-semibold py-2 px-4 rounded-[30px] hover:bg-[#272343] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Creating Label...' : 'Create Label'}
          </button>
        </div>
      )}

      {/* Display Tracking Details */}
      {trackingNumber && (
        <div className="mt-6 max-w-md mx-auto text-left">
          <h2 className="text-xl font-bold mb-4">Tracking Details</h2>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Tracking Number:</span> {trackingNumber}
            </p>
            {labelUrl && (
              <p>
                <span className="font-semibold">Shipping Label:</span>{' '}
                <a
                  href={labelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Download Label
                </a>
              </p>
            )}
            {shippingDetails && (
              <>
                <p>
                  <span className="font-semibold">Status:</span> {shippingDetails.status}
                </p>
                <p>
                  <span className="font-semibold">Estimated Delivery:</span>{' '}
                  {shippingDetails.estimated_delivery_date}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}













// 'use client';

// import { useEffect, useState } from 'react';

// export default function ThankYou() {
//   const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
//   const [labelUrl, setLabelUrl] = useState<string | null>(null);
//   const [shippingDetails, setShippingDetails] = useState<any>(null);

//   useEffect(() => {
//     const createShippingLabel = async () => {
//       try {
//         const response = await fetch('/api/create-shipping-label', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             orderId: 'your-order-id', // Replace with the actual order ID
//             address: {
//               // User's shipping address
//               name: 'John Doe',
//               company_name: 'Example Company',
//               phone: '123-456-7890',
//               address_line1: '456 Elm St',
//               city_locality: 'Austin',
//               state_province: 'TX',
//               postal_code: '78701',
//               country_code: 'US',
//             },
//           }),
//         });

//         const { labelUrl, trackingNumber } = await response.json();
//         setTrackingNumber(trackingNumber);
//         setLabelUrl(labelUrl);
//       } catch (err) {
//         console.error('Error:', err);
//       }
//     };

//     createShippingLabel();
//   }, []);

//   useEffect(() => {
//     if (trackingNumber) {
//       const trackPackage = async () => {
//         try {
//           const response = await fetch('/api/track-package', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ trackingNumber }),
//           });

//           const data = await response.json();
//           setShippingDetails(data);
//         } catch (err) {
//           console.error('Error:', err);
//         }
//       };

//       trackPackage();
//     }
//   }, [trackingNumber]);

//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
//       <p className="text-lg text-gray-600">
//         Thank you for your purchase. Your payment has been processed successfully.
//       </p>
//       {trackingNumber && (
//         <div className="mt-6">
//           <p className="text-lg font-semibold">Your Tracking Number:</p>
//           <p className="text-xl text-[#029FAE] font-bold">{trackingNumber}</p>
//         </div>
//       )}
//       {labelUrl && (
//         <div className="mt-6">
//           <p className="text-lg font-semibold">Shipping Label:</p>
//           <a
//             href={labelUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 hover:underline"
//           >
//             Download Label
//           </a>
//         </div>
//       )}
//       {shippingDetails && (
//         <div className="mt-6">
//           <p className="text-lg font-semibold">Shipping Details:</p>
//           <p className="text-gray-600">Status: {shippingDetails.status}</p>
//           <p className="text-gray-600">Estimated Delivery: {shippingDetails.estimated_delivery_date}</p>
//         </div>
//       )}
//     </div>
//   );
// }






// // pages/thank-you.js
// export default function ThankYou() {
//     return (
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
//         <p className="text-gray-600">Your order has been placed successfully.</p>
//       </div>
//     );
//   }