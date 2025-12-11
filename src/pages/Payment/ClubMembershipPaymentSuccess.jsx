import React, { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link, useSearchParams } from 'react-router';
import { CheckCircle } from 'lucide-react';

const ClubMembershipPaymentSuccess = () => {

 const [searchParams ] = useSearchParams();
    const sessionId = searchParams.get(`session_id`);
    const axiosSecure = useAxiosSecure();
    console.log(sessionId);

    useEffect(()=>{
        if(sessionId){
            if(sessionId){
                axiosSecure.patch(`/club-membership-payment-success?session_id=${sessionId}`)
                .then(res => {
                    console.log(res.data);
                })
            }
        }
    }, [sessionId, axiosSecure])









    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-[#0b99ce] text-6xl" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for joining the club. Your membership payment has been
          processed successfully.
        </p>

        
                <Link
                  to="/dashboard"
                  className="btn w-full bg-[#0b99ce] hover:bg-[#0b99ce]/90 text-white border-none"
                >
                  Go to Dashboard
                </Link>
        
                <div className="mt-4">
                  <Link
                    to="/clubs"
                    className="text-[#fe3885] font-semibold hover:underline"
                  >
                     Go to My Clubs
                  </Link>
                </div>
      </div>
    </div>
    );
};

export default ClubMembershipPaymentSuccess;