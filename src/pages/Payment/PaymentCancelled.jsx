import React from 'react';
import { Link } from 'react-router';
import { MdCancel } from 'react-icons/md';

const PaymentCancelled = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <MdCancel className="text-6xl text-red-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Payment Cancelled
                </h2>
                <p className="text-gray-600 mb-6">
                    Your payment could not be processed. Please try again.
                </p>
                <Link to={"/"}>
                    <button className="btn btn-primary text-white">
                        Try Again
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentCancelled;
