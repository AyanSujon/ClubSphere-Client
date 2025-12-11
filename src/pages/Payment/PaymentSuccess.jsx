import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams ] = useSearchParams();
    const sessionId = searchParams.get(`session_id`);
    const axiosSecure = useAxiosSecure();
    console.log(sessionId);

    useEffect(()=>{
        if(sessionId){
            if(sessionId){
                axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                })
            }
        }
    }, [sessionId, axiosSecure])












    return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-8 text-center ">
        
        <div className="flex justify-center mb-6">
          <div className="bg-[#0b99ce]/10 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-[#0b99ce]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#0b99ce] mb-2">
          Payment Successful!
        </h2>

        <p className="text-gray-600 mb-6">
          Your event registration has been completed successfully.  
          Thank you for joining ClubSphere events!
        </p>

        <Link
          to="/dashboard"
          className="btn w-full bg-[#0b99ce] hover:bg-[#0b99ce]/90 text-white border-none"
        >
          Go to Dashboard
        </Link>

        <div className="mt-4">
          <Link
            to="/events"
            className="text-[#fe3885] font-semibold hover:underline"
          >
            Browse More Events
          </Link>
        </div>
      </div>
    </div>
);

};

export default PaymentSuccess;