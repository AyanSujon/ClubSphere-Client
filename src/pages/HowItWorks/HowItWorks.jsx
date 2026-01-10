

// import { motion } from "framer-motion";
// import { FaSearch, FaUsers, FaCalendarAlt, FaRegHandshake } from "react-icons/fa";

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <FaSearch className="text-4xl text-[#0b99ce]" />,
//       title: "Explore Clubs",
//       desc: "Discover local communities based on your interests and hobbies.",
//     },
//     {
//       icon: <FaUsers className="text-4xl text-[#fe3885]" />,
//       title: "Join a Club",
//       desc: "Become a member with free or paid memberships powered by Stripe.",
//     },
//     {
//       icon: <FaCalendarAlt className="text-4xl text-[#0b99ce]" />,
//       title: "Attend Events",
//       desc: "Join exciting activities and events hosted by your clubs.",
//     },
//     {
//       icon: <FaRegHandshake className="text-4xl text-[#fe3885]" />,
//       title: "Grow Together",
//       desc: "Build new skills, connections, and friendships within your community.",
//     },
//   ];

//   return (
//     <div className="py-16 bg-base-100">
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#0b99ce]">
//           How ClubSphere Works
//         </h2>
//         <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
//           ClubSphere helps people connect, learn, organize and grow through local communities and meaningful events.
//         </p>
//       </motion.div>

//       {/* Steps */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="card bg-base-100 shadow-xl border hover:shadow-2xl transition-all p-6 text-center rounded-xl"
//           >
//             <div className="flex justify-center mb-4">{step.icon}</div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
//             <p className="text-gray-600 text-sm">{step.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }











"use client";

import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaUsers, 
  FaCalendarAlt, 
  FaRegHandshake,
  FaUserShield,
  FaTools,
  FaGlobeAsia,
  FaCreditCard
} from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch className="text-5xl text-[#0b99ce]" />,
      title: "Explore Clubs",
      desc: "Browse hundreds of clubs across different categories such as sports, tech, art, reading groups, lifestyle, creativity, and more. Use advanced filters to refine your search easily.",
      color: "#0b99ce",
    },
    {
      icon: <FaUsers className="text-5xl text-[#fe3885]" />,
      title: "Join a Club",
      desc: "Choose between free or paid memberships. Subscription and payments are securely handled through Stripe. Your membership details are automatically stored in your dashboard.",
      color: "#fe3885",
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-[#0b99ce]" />,
      title: "Attend Events",
      desc: "Participate in workshops, outdoor activities, skill-based sessions, and club meetups. Registration is only one click away, with optional secured payment for paid events.",
      color: "#0b99ce",
    },
    {
      icon: <FaRegHandshake className="text-5xl text-[#fe3885]" />,
      title: "Grow Together",
      desc: "Meet like-minded people, collaborate on shared hobbies, develop new skills, and become part of an exciting and supportive community.",
      color: "#fe3885",
    },
  ];

  return (
    <div className="py-16 bg-base-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-6 mb-14"
      >
        <h2 className="text-4xl font-bold text-[#0b99ce] mb-4">
          How ClubSphere Works
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          ClubSphere helps you connect with local communities, participate in 
          meaningful activities, and manage club operations smoothly through 
          powerful tools and modern dashboards.
        </p>
      </motion.div>

      {/* Step Cards */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-10 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div
                className="p-5 rounded-full shadow-md"
                style={{ backgroundColor: `${step.color}15` }}
              >
                {step.icon}
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NEW SECTION 1 — Who Can Use ClubSphere */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#fe3885] mb-8"
        >
          Who Can Use ClubSphere?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUsers className="text-4xl text-[#0b99ce]" />,
              title: "Members",
              desc: "Join clubs, register in events, manage memberships, and explore exciting activities.",
            },
            {
              icon: <FaTools className="text-4xl text-[#fe3885]" />,
              title: "Club Managers",
              desc: "Create and manage clubs, events, memberships, announcements and member lists.",
            },
            {
              icon: <FaUserShield className="text-4xl text-[#0b99ce]" />,
              title: "Admins",
              desc: "Oversee platform operations like club approvals, user roles, payments, and analytics.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl text-center"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEW SECTION 2 — Platform Highlights */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#0b99ce] mb-8"
        >
          Platform Highlights
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGlobeAsia className="text-4xl text-[#fe3885]" />,
              title: "Role-Based Dashboards",
              desc: "Separate dashboards for Members, Club Managers, and Admins.",
            },
            {
              icon: <FaCreditCard className="text-4xl text-[#0b99ce]" />,
              title: "Secure Stripe Payments",
              desc: "Safe online payments for memberships and events.",
            },
            {
              icon: <FaSearch className="text-4xl text-[#fe3885]" />,
              title: "Advanced Search & Filters",
              desc: "Find clubs and events quickly with easy sorting and filtering.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto px-6 mt-20"
      >
        <h3 className="text-2xl font-bold text-[#fe3885] mb-3">
          A Smarter Way to Connect With Communities
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          ClubSphere brings modern tools, beautiful design, and seamless 
          community experience under one platform — for everyone.
        </p>
      </motion.div>
    </div>
  );
}
