"use client"; // This is a client component
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
export default function Cancellation(){
    const [page, setPage] = useState("");
    useEffect(()=>{
        axios.get(`https://samriddhi-frame-z0nw.onrender.com/api/cms/cancellation-and-refund-policy`)
        .then(response => {
            let result = (response.data && response.data.result) ? response.data.result : {};
            if(result){
                setPage (result.body);
            }
        })
    },[])

    return (
        <div className='container'>
            <div dangerouslySetInnerHTML={{__html: page}}/>
        </div>
    )
}