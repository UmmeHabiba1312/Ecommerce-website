// utils/types.ts
export interface Address {
    name: string;
    address_line1: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  }
  
  export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    weight?: number; // Optional
    dimensions?: {
      length: number;
      width: number;
      height: number;
    }; // Optional
  }
  
  export interface ShipmentPackage {
    weight: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  }