import React, { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useSearchParams } from 'react-router';

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
        <div>
            club-membership-payment-success
        </div>
    );
};

export default ClubMembershipPaymentSuccess;