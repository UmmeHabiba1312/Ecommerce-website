// utils/shipping.ts
import axios from 'axios';
import { Address, CartItem, ShipmentPackage } from './types';

// Validate Address
export const validateAddress = async (address: Address): Promise<boolean> => {
  try {
    const response = await axios.post(
      'https://api.shipengine.com/v1/addresses/validate',
      [address],
      {
        headers: {
          'API-Key': process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY,
        },
      }
    );
    return response.data[0].status === 'valid';
  } catch (error) {
    console.error('Error validating address:', error);
    return false;
  }
};

// Calculate Shipping Rates
export const calculateShippingRates = async (
  address: Address,
  cartItems: CartItem[]
): Promise<any[]> => {
  const shipment = {
    ship_to: address,
    packages: cartItems.map((item: CartItem): ShipmentPackage => ({
      weight: item.weight || 1, // Default weight if not provided
      dimensions: item.dimensions || { length: 10, width: 10, height: 10 }, // Default dimensions
    })),
  };

  try {
    const response = await axios.post(
      'https://api.shipengine.com/v1/rates',
      shipment,
      {
        headers: {
          'API-Key': process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY,
        },
      }
    );
    return response.data.rates;
  } catch (error) {
    console.error('Error calculating shipping rates:', error);
    return [];
  }
};

// Create Shipping Label
export const createShippingLabel = async (
  address: Address,
  cartItems: CartItem[]
): Promise<any> => {
  const shipment = {
    carrier_id: 'se-123456', // Replace with your carrier ID
    service_code: 'usps_priority_mail', // Replace with your service code
    ship_to: address,
    packages: cartItems.map((item: CartItem): ShipmentPackage => ({
      weight: item.weight || 1, // Default weight if not provided
      dimensions: item.dimensions || { length: 10, width: 10, height: 10 }, // Default dimensions
    })),
  };

  try {
    const response = await axios.post(
      'https://api.shipengine.com/v1/labels',
      shipment,
      {
        headers: {
          'API-Key': process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating shipping label:', error);
    return null;
  }
};