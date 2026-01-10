

import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { FaUsers, FaLayerGroup, FaRegCalendarCheck, FaTags } from "react-icons/fa";
import Container from "../../components/shared/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function StatsSection() {
  const axiosSecure = useAxiosSecure();

  // Fetch data from admin-overview endpoint
  const { data, isLoading, isError } = useQuery({
    queryKey: ["public-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-overview");
      return res.data;
    },
  });

  if (isError) {
    return (
      <div className="flex justify-center items-center py-20 text-red-600 text-xl font-semibold">
        Failed to load statistics
      </div>
    );
  }

  const items = [
    {
      label: "Total Clubs",
      value: data?.clubs?.total || 0,
      icon: <FaLayerGroup size={32} className="text-primary" />,
    },
    {
      label: "Total Members",
      value: data?.memberships?.total || 0,
      icon: <FaUsers size={32} className="text-secondary" />,
    },
    {
      label: "Events Hosted",
      value: data?.events?.total || 0,
      icon: <FaRegCalendarCheck size={32} className="text-primary" />,
    },
    {
      label: "Active Categories",
      value: data?.categories || 0,
      icon: <FaTags size={32} className="text-secondary" />,
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-primary">
            Numbers That Inspire
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {items.map((item, i) => (
              <div
                key={i}
                className="shadow-xl rounded-xl p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>

                {isLoading ? (
                  <span className="loading loading-spinner text-primary"></span>
                ) : (
                  <h3 className="text-3xl font-bold text-gray-800">
                    <CountUp end={item.value} duration={2} />
                  </h3>
                )}

                <p className="text-gray-600 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
