"use client"; // This is a client component
import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "../apiData/page";
export default function Shipping() {
  const [page, setPage] = useState("");

  const getShipingDelevery = async () => {
    try {
      const response = await axiosInstance.get(
        "/cms/shipping-and-delivery-policy"
      );
      let result =
        response.data && response.data.result ? response.data.result : {};
      if (result) {
        setPage(result.body);
      }
    } catch (error) {
      // Handle the error
    }
  };
  useEffect(() => {
    getShipingDelevery();
  }, []);

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </div>
  );
}
