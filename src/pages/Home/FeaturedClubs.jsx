









// import React from "react";
// import Container from "../../components/shared/Container";
// import useClubs from "../../hooks/useClubs";
// import { Link, useParams } from "react-router";

// const FeaturedClubs = () => {
//     // Fetch only the 4 most recent clubs
//     const { clubs = [], isLoading, isError } = useClubs();

//     if (isLoading) return <p className="text-center py-10">Loading clubs...</p>;
//     if (isError) return <p className="text-center py-10 text-red-500">Failed to load clubs.</p>;

//     // Limit to 4 clubs for featured section
//     const featuredClubs = clubs.slice(0, 6);

//     return (
//         <section className="py-10 bg-gray-50">
//             <Container>
//                 <h2 className="text-3xl font-bold text-center mb-8">Featured Clubs</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {featuredClubs.map((club) => (
//                         <div
//                             key={club._id}
//                             className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                         >
//                             <figure>
//                                 <img
//                                     src={club.bannerImage}
//                                     alt={club.clubName}
//                                     className="h-48 w-full object-cover"
//                                 />
//                             </figure>
//                             <div className="card-body">
//                                 <h3 className="card-title text-xl font-semibold">
//                                     {club.clubName}
//                                 </h3>
//                                 <p className="text-gray-600">{club.description}</p>
//                                 <div className="mt-3 flex flex-wrap gap-2 text-sm">
//                                     <span className="badge rounded px-2 py-1 bg-primary text-white">
//                                         {club.category}
//                                     </span>
//                                     <span className="badge rounded px-2 py-1 bg-gray-300 text-gray-600">
//                                         {club.location}
//                                     </span>
//                                 </div>
//                                 <div className="card-actions mt-4">
//                                     <Link to={`/clubs/${club._id}`} className="btn btn-primary w-full hover:bg-secondary">
//                                         View Club
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default FeaturedClubs;




import React from "react";
import Container from "../../components/shared/Container";
import useClubs from "../../hooks/useClubs";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FeaturedClubs = () => {
    const { clubs = [], isLoading, isError } = useClubs();

    if (isLoading) return <p className="text-center py-10">Loading clubs...</p>;
    if (isError) return <p className="text-center py-10 text-red-500">Failed to load clubs.</p>;

    const featuredClubs = clubs.slice(0, 6);

    return (
        <section className="py-10 bg-gray-50">
            <Container>
                <h2 className="text-3xl font-bold text-center mb-8">Featured Clubs</h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    {featuredClubs.map((club) => (
                        <motion.div
                            key={club._id}
                            className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <figure>
                                <img
                                    src={club.bannerImage}
                                    alt={club.clubName}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>

                            <div className="card-body">
                                <h3 className="card-title text-xl font-semibold">
                                    {club.clubName}
                                </h3>

                                <p className="text-gray-600">{club.description}</p>

                                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                                    <span className="badge rounded px-2 py-1 bg-primary text-white">
                                        {club.category}
                                    </span>
                                    <span className="badge rounded px-2 py-1 bg-gray-300 text-gray-600">
                                        {club.location}
                                    </span>
                                </div>

                                <div className="card-actions mt-4">
                                    <Link
                                        to={`/clubs/${club._id}`}
                                        className="btn btn-primary w-full hover:bg-secondary"
                                    >
                                        View Club
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
};

export default FeaturedClubs;
