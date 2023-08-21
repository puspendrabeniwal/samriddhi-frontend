"use client"; // This is a client component
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../apiData/page";
export default function Terms() {
  const [page, setPage] = useState("");

  useEffect(() => {
    getTermCondition();
  }, []);
  const getTermCondition = async () => {
    try {
      const response = await axiosInstance.get("/cms/terms-and-conditions");
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
