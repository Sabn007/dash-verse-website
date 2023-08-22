import axios from "axios";

export const fetchContacts = async () => {
  try {
    const response = await axios.get(
      "https://dashverseapi.netlify.app/.netlify/functions/contact"
    );
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
};
