
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Container from "../../components/shared/Container";

// Sample data for featured organizers
const featuredManagers = [
    {
        id: 1,
        name: "Alice Johnson",
        profilePic: "https://i.ibb.co/S4ffhzFd/admin1.jpg",
        clubs: ["Photography Club", "Hiking Group"],
        followers: 120,
    },
    {
        id: 2,
        name: "David Smith",
        profilePic: "https://i.ibb.co/3yp45GQs/admin2.jpg",
        clubs: ["Book Club", "Tech Enthusiasts"],
        followers: 98,
    },
    {
        id: 3,
        name: "Maria Rodriguez",
        profilePic: "https://i.ibb.co/5VR2R8k/admin3.jpg",
        clubs: ["Yoga Club", "Community Helpers"],
        followers: 145,
    },
    {
        id: 4,
        name: "Ayan Sujon",
        profilePic: "https://i.ibb.co/mVZBZdBy/ayansujon-copy.jpg",
        clubs: ["Coding Club", "Gaming Community"],
        followers: 87,
    },
];

export default function TopClubManagers() {
    return (
        <section className="py-16 bg-gray-50">
            <Container>
                <div>
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0b99ce]">
                            Top Club Managers
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Meet our verified organizers who manage and grow thriving communities
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredManagers.map((manager) => (
                            <div
                                key={manager.id}
                                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                            >
                                {/* Profile Picture */}
                                <img
                                    src={manager.profilePic}
                                    alt={manager.name}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-[#0b99ce]"
                                />

                                {/* Name */}
                                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                    {manager.name}
                                </h3>

                                {/* Clubs Managed */}
                                <p className="mt-2 text-gray-600 text-sm">
                                    Manages {manager.clubs.join(", ")}
                                </p>

                                {/* Followers */}
                                <div className="mt-3 flex items-center text-gray-500 text-sm">
                                    <FaUsers className="mr-1 text-[#fe3885]" />
                                    <span>{manager.followers} Followers</span>
                                </div>

                                {/* View Profile Button */}
                                <button className="mt-4 inline-flex items-center px-4 py-2 bg-[#0b99ce] text-white font-medium rounded-lg hover:bg-[#0890b8] transition-colors">
                                    View Profile
                                    <FiArrowRight className="ml-2" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
