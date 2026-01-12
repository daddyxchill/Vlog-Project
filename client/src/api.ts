// src/api.ts
const API_URL = 'https://localhost:7115/api/test'; // Use your backend's URL

export const fetchMessage = async () => {
    try {
        const response = await fetch(API_URL); // Using the fetch API
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json(); // Parse the JSON response
    } catch (error) {
        console.error('Fetch error:', error); // Log fetch errors
        return { message: "Unable to fetch data from the backend" }; // Fallback message
    }
};