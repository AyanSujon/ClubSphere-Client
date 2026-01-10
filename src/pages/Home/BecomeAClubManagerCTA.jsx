"use client";
import { FaUsersCog, FaMoneyCheckAlt, FaCalendarCheck, FaRegChartBar } from "react-icons/fa";
import Container from "../../components/shared/Container";
import { Link } from "react-router";

export default function BecomeAClubManagerCTA() {
  return (
    <Container>
      <div
        className="max-full mx-auto bg-gradient-to-r from-[#0b99ce] to-[#fe3885] 
        rounded-2xl p-10 my-20 text-white shadow-xl flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a club or community?  
          <br />
          <span className="text-white">Grow it with ClubSphere.</span>
        </h2>

        <p className="text-lg opacity-90 max-w-2xl mb-8">
          Turn your passion into a thriving community. Manage your club, organize events, 
          and connect with members using our powerful dashboard.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <FeatureCard icon={<FaUsersCog size={28} />} title="Manage Members" />
          <FeatureCard icon={<FaMoneyCheckAlt size={28} />} title="Collect Payments" />
          <FeatureCard icon={<FaCalendarCheck size={28} />} title="Create Events" />
          <FeatureCard icon={<FaRegChartBar size={28} />} title="Easy Dashboard" />
        </div>

        {/* CTA Button */}
        <Link to={"/become-a-club-manager"} className="btn bg-white text-[#0b99ce] hover:bg-gray-100 border-none px-10 py-3 text-lg rounded-full">
          Start as Club Manager
        </Link>
      </div>
    </Container>
  );
}

// Reusable Feature Card Component
function FeatureCard({ icon, title }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-white text-[#0b99ce] p-4 rounded-full shadow-lg">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
  );
}
