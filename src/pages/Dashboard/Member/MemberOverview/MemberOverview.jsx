


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaUsers, FaCalendarAlt, FaClock } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';

const MemberOverview = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(); // dynamic user
  const userEmail = user?.email || ''; // fallback if undefined
  const role = user?.role || 'member';

  // Fetch member overview
  const { data, isLoading, isError } = useQuery({
    queryKey: ['memberOverview', userEmail],
    queryFn: async () => {
      const response = await axiosSecure.get(`/member-overview?userEmail=${userEmail}&role=${role}`);
      return response.data;
    },
    enabled: !!userEmail, // only run if userEmail exists
  });

  if (isLoading) return <div>Loading member overview...</div>;
  if (isError) return <div>Error fetching member overview data.</div>;

  const { totalClubsJoined = 0, totalEventsRegistered = 0, upcomingEvents = [] } = data;

  // Helper: format time to AM/PM
  const formatTimeAMPM = (timeStr) => {
    const date = new Date(`1970-01-01T${timeStr}`);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Welcome, {user?.name || userEmail}!</h2>
        <p className="text-gray-500 mt-1">Here’s a quick overview of your activities.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="stats shadow-md">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaUsers size={30} />
            </div>
            <div className="stat-title">Total Clubs Joined</div>
            <div className="stat-value">{totalClubsJoined}</div>
          </div>
        </div>

        <div className="stats shadow-md">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCalendarAlt size={30} />
            </div>
            <div className="stat-title">Total Events Registered</div>
            <div className="stat-value">{totalEventsRegistered}</div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-base-200 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
        <ul className="space-y-3">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(event => (
              <li
                key={event.id}
                className="flex items-center justify-between bg-base-100 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-gray-500 flex items-center gap-2">
                    <FaClock /> {event.date} at {formatTimeAMPM(event.time)}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p>No upcoming events.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MemberOverview;