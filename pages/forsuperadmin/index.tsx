"use client";
import { fetchContacts } from "@/api/utils";
import React, { useEffect } from "react";

function index() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedContacts = await fetchContacts();
        console.log(fetchedContacts);
      } catch (error: any) {
        console.error("Error fetching contacts:", error.message);
      }
    };

    fetchData();
  }, []);
  return <div>index</div>;
}

export default index;
