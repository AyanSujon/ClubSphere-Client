import React from 'react';

const Payment = () => {
    return (
        <div>
            <div>
                <h2>Please Pay ${parcel.cost} for : {parcel.parcelName} </h2>
                <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
            </div>
        </div>
    );
};

export default Payment;