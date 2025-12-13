import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-96 bg-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={user?.photoURL || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        className="rounded-full w-32 h-32 object-cover"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">{user?.displayName || 'No Name'}</h2>
                    <p className="text-gray-600">{user?.email || 'No Email'}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary btn-sm">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
