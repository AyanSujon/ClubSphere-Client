// EventsManagement.jsx
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const EventsManagement = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // Fetch events for manager
  const { data: events = [], isLoading, isError } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      try {
        const managerEmail = "ayansujonbd@gmail.com"; // replace with dynamic email if needed
        const res = await axiosSecure.get(`/events?managerEmail=${managerEmail}`);
        return res.data;
      } catch (error) {
        toast.error("Failed to fetch events");
        console.error(error);
        return [];
      }
    },
  });

  // Delete event mutation
  const deleteEventMutation = useMutation({
    mutationFn: async (eventId) => {
      return await axiosSecure.delete(`/events/${eventId}`);
    },
    onSuccess: () => {
      toast.success("Event deleted successfully");
      queryClient.invalidateQueries(["events"]);
    },
    onError: () => {
      toast.error("Failed to delete event");
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEventMutation.mutate(id);
    }
  };

  if (isLoading) return <p className="text-center mt-5">Loading events...</p>;
  if (isError) return <p className="text-center mt-5 text-red-500">Failed to load events.</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Events Management</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Event Fee</th>
              <th>Max Attendees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>
                  <FaCalendarAlt className="inline mr-1 text-gray-500" />
                  {new Date(event.eventDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true, // ensures AM/PM format
                  })}
                </td>
                <td>
                  <FaMapMarkerAlt className="inline mr-1 text-gray-500" />
                  {event.location}
                </td>
                <td>
                  {event.eventFee > 0 && <FaDollarSign className="inline mr-1 text-gray-500" />}
                  {event.eventFee}
                </td>
                <td>{event.maxAttendees}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm btn-primary flex items-center gap-1">
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-secondary flex items-center gap-1"
                    onClick={() => handleDelete(event._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">
                  No events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsManagement;
