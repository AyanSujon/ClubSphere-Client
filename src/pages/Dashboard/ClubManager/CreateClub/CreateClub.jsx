









import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const CreateClub = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clubName: "Coding & Hack Club",
      description: "Collaborate on projects, hackathons, and coding challenges.",
      category: "Technology",
      location: "Austin, TX",
      bannerImage: "https://example.com/coding-banner.jpg",
      membershipFee: 50,
      managerEmail: user?.email || "", // default to logged-in user email
      createdAt: "2025-09-12T11:30",
      updatedAt: "2025-12-02T10:30",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Attach user info if needed
      const payload = {
        ...data,
        createdBy: user?.email,
      };

      const response = await axiosSecure.post("/clubs", payload); // adjust endpoint if different
      if (response.data?.insertedId) {
        Swal.fire("Success!", "Club created successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to create club", "error");
      }
    } catch (error) {
      console.error("Error creating club:", error);
      Swal.fire("Error", "Failed to create club", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-[#0b99ce]">Create a New Club</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Club Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Club Name</span>
          </label>
          <input
            type="text"
            {...register("clubName", { required: true })}
            className="input input-bordered w-full border-[#0b99ce]"
          />
          {errors.clubName && (
            <span className="text-red-500 text-sm">Club Name is required</span>
          )}
        </div>

        {/* Banner Image */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Banner Image URL</span>
          </label>
          <input
            type="text"
            {...register("bannerImage")}
            className="input input-bordered w-full border-[#0b99ce]"
          />
        </div>

        {/* Category & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              {...register("category", { required: true })}
              className="input input-bordered w-full border-[#0b99ce]"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: true })}
              className="input input-bordered w-full border-[#0b99ce]"
            />
          </div>
        </div>

        {/* Manager Email & Membership Fee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Manager Email</span>
            </label>
            <input
              type="email"
              {...register("managerEmail", { required: true })}
              className="input input-bordered w-full border-[#0b99ce]"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Membership Fee ($)</span>
            </label>
            <input
              type="number"
              {...register("membershipFee", { min: 0 })}
              className="input input-bordered w-full border-[#0b99ce]"
            />
          </div>
        </div>

        {/* Created & Updated Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Created At</span>
            </label>
            <input
              type="datetime-local"
              {...register("createdAt")}
              className="input input-bordered w-full border-[#0b99ce]"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Updated At</span>
            </label>
            <input
              type="datetime-local"
              {...register("updatedAt")}
              className="input input-bordered w-full border-[#0b99ce]"
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full border-[#0b99ce]"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">Description is required</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn w-full mt-6 text-white"
          style={{ backgroundColor: "#0b99ce" }}
        >
          Create Club
        </button>
      </form>
    </div>
  );
};

export default CreateClub;















