import axios from "axios";

const SHIPENGINE_API_KEY = process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY;

const shipengineClient = axios.create({
  baseURL: "https://api.shipengine.com/",
  headers: {
    "API-Key": SHIPENGINE_API_KEY,
    "Content-Type": "application/json",
  },
});

export async function getCarriers() {
  try {
    const response = await shipengineClient.get("/v1/carriers");
    return response.data;
  } catch (error) {
    console.error("Error fetching carriers:", error);
    throw error;
  }
}

// Add more functions here for other ShipEngine API endpoints