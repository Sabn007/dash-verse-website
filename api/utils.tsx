import axios from "axios";

export const fetchContacts = async () => {
  try {
    const response = await axios.get(
      "https://worrisome-hen-bandanna.cyclic.cloud/contacts"
    );
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data.");
  }
};
