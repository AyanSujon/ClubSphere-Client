







import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaMoneyBill, FaClipboardList, FaWpforms, FaCheckCircle } from "react-icons/fa";
import { MdEvent, MdGroup } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import MembershipChart from "../../../components/admin/MembershipChart";
import { Link } from "react-router";

const Admin = () => {
    const axiosSecure = useAxiosSecure();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["admin-overview"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-overview");
            return res.data;
        }
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold">
                Loading Admin Dashboard...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen text-red-600 text-xl font-semibold">
                Failed to load admin overview
            </div>
        );
    }

    return (
        <div>
            <div className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-10 text-gray-800">Admin Overview</h1>

                {/* SECTION: USERS */}
                <SectionTitle title="Total Users" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Link to={"manage-users"}>
                        <SummaryCard
                            title="Total Users"
                            value={data?.users.total}
                            icon={<FaUsers size={30} />}
                            bg="bg-blue-500"
                        />
                    </Link>
                </div>

                {/* SECTION: CLUBS */}
                <SectionTitle title="Total Clubs" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                   <Link to={"manage-clubs"}>
                    <SummaryCard
                        title="Total Clubs"
                        value={data?.clubs.total}
                        icon={<MdGroup size={30} />}
                        bg="bg-purple-500"
                    />
                   </Link>

                    <SummaryCard
                        title="Pending Clubs"
                        value={data?.clubs.pending}
                        icon={<FaClipboardList size={30} />}
                        bg="bg-yellow-500"
                    />

                    <SummaryCard
                        title="Approved Clubs"
                        value={data?.clubs.approved}
                        icon={<FaCheckCircle size={30} />}
                        bg="bg-green-500"
                    />

                    <SummaryCard
                        title="Rejected Clubs"
                        value={data?.clubs.rejected}
                        icon={<FaClipboardList size={30} />}
                        bg="bg-red-500"
                    />
                </div>

                {/* SECTION: MEMBERSHIPS */}
                <SectionTitle title="Total Memberships" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <SummaryCard
                        title="Total Memberships"
                        value={data?.memberships.total}
                        icon={<FaWpforms size={30} />}
                        bg="bg-indigo-500"
                    />
                </div>

                {/* SECTION: EVENTS */}
                <SectionTitle title="Total Events" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <SummaryCard
                        title="Total Events"
                        value={data?.events.total}
                        icon={<MdEvent size={30} />}
                        bg="bg-teal-500"
                    />

                    <SummaryCard
                        title="Event Registrations"
                        value={data?.eventRegistrations.total}
                        icon={<FaClipboardList size={30} />}
                        bg="bg-orange-500"
                    />
                </div>

                {/* SECTION: PAYMENTS */}
                <SectionTitle title="Total Payments" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <SummaryCard
                        title="Total Payments Count"
                        value={data?.payments.totalPayments}
                        icon={<FaMoneyBill size={30} />}
                        bg="bg-lime-600"
                    />

                    <SummaryCard
                        title="Total Payment Amount"
                        value={`$${data?.payments.totalAmount}`}
                        icon={<FaMoneyBill size={30} />}
                        bg="bg-emerald-600"
                    />
                </div>
            </div>
            <MembershipChart />
        </div>
    );
};

// Title Component
const SectionTitle = ({ title }) => (
    <h2 className="text-2xl font-semibold text-gray-700 mb-4 mt-10">{title}</h2>
);

// Summary Card Component
const SummaryCard = ({ title, value, icon, bg }) => (
    <div className={`p-6 rounded-xl shadow-md text-white flex items-center gap-4 ${bg}`}>
        <div className="text-white opacity-90">{icon}</div>
        <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
    </div>
);

export default Admin;




