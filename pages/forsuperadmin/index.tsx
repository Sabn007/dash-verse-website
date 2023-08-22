"use client";
import { fetchContacts } from "@/api/utils";
import React, { useEffect, useState } from "react";

function index() {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedContacts = await fetchContacts();
        setUser(fetchedContacts);
      } catch (error: any) {
        console.error("Error fetching contacts:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      <ul className="space-y-4">
        {user?.map((contact: any) => (
          <li
            key={contact._id}
            className="p-4 border border-gray-300 rounded-lg shadow"
          >
            <h2 className="text-lg font-semibold mb-2">{contact.name}</h2>
            <p className="text-gray-600 mb-1">{contact.email}</p>
            <p className="text-gray-700">{contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default index;
