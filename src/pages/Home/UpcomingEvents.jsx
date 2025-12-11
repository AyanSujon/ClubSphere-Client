


// import React from "react";

// import { format } from "date-fns";
// import useEvents from "../../hooks/useEvents";
// import { Link } from "react-router";

// const UpcomingEvents = () => {
//   const { events, isLoading, isError } = useEvents(); // get real data

//   if (isLoading) {
//     return <p className="text-center py-10 text-gray-600">Loading events...</p>;
//   }

//   if (isError) {
//     return (
//       <p className="text-center py-10 text-red-500">
//         Failed to load events!
//       </p>
//     );
//   }

//   if (events.length === 0) {
//     return (
//       <p className="text-center py-10 text-gray-600">
//         No upcoming events found.
//       </p>
//     );
//   }
//      // Limit to 4 clubs for featured section
//     const UpcomingEvents =  events.slice(0, 6);

//   return (
//     <section className="w-full py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-[#0b99ce] mb-6 text-center">
//           Upcoming Events
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
//           {UpcomingEvents.map((event) => {
//             const eventDate = new Date(event.eventDate);

//             // Format values safely
//             const dateFormatted = format(eventDate, "yyyy-MM-dd");
//             const timeFormatted = format(eventDate, "hh:mm a");

//             return (
//               <div
//                 key={event._id}
//                 className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#0b99ce] mb-2">
//                     {event.title}
//                   </h3>

//                   <p className="text-gray-600 mb-1">
//                     <span className="font-medium">Date:</span> {dateFormatted}
//                   </p>

//                   <p className="text-gray-600 mb-1">
//                     <span className="font-medium">Time:</span> {timeFormatted}
//                   </p>

//                   <p className="text-gray-600 mb-3">
//                     <span className="font-medium">Location:</span>{" "}
//                     {event.location}
//                   </p>

//                   <p className="text-gray-700">{event.description}</p>
//                 </div>

//                 <Link to={`/events/${event._id}`} className="mt-4 btn  bg-[#0b99ce] hover:bg-[#fe3885] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
//                   View Details
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;





import React from "react";
import { format } from "date-fns";
import useEvents from "../../hooks/useEvents";
import { Link } from "react-router";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const { events, isLoading, isError } = useEvents(); // get real data

  if (isLoading) {
    return <p className="text-center py-10 text-gray-600">Loading events...</p>;
  }

  if (isError) {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load events!
      </p>
    );
  }

  if (events.length === 0) {
    return (
      <p className="text-center py-10 text-gray-600">
        No upcoming events found.
      </p>
    );
  }

  const UpcomingEventsData = events.slice(0, 6);

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0b99ce] mb-6 text-center">
          Upcoming Events
        </h2>

        {/* Animation wrapper for stagger effect */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {UpcomingEventsData.map((event) => {
            const eventDate = new Date(event.eventDate);

            const dateFormatted = format(eventDate, "yyyy-MM-dd");
            const timeFormatted = format(eventDate, "hh:mm a");

            return (
              <motion.div
                key={event._id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#0b99ce] mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Date:</span> {dateFormatted}
                  </p>

                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Time:</span> {timeFormatted}
                  </p>

                  <p className="text-gray-600 mb-3">
                    <span className="font-medium">Location:</span>{" "}
                    {event.location}
                  </p>

                  <p className="text-gray-700">{event.description}</p>
                </div>

                <Link
                  to={`/events/${event._id}`}
                  className="mt-4 btn bg-[#0b99ce] hover:bg-[#fe3885] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  View Details
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
