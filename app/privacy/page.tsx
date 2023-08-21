"use client"; // This is a client component
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../apiData/page";
export default function Privacy() {
  const [page, setPage] = useState("");

  useEffect(() => {
    getPrivacyPolicyList();
  }, []);
  const getPrivacyPolicyList = async () => {
    try {
      const response = await axiosInstance.get("/cms/privacy-and-policy");
      let result =
        response.data && response.data.result ? response.data.result : {};
      if (result) {
        setPage(result.body);
      }
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </div>
  );
}
