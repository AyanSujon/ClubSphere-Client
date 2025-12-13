


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const CreateEvent = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const {user}= useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const isPaid = watch("isPaid");

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess("");
    setError("");

    const newEvent = {
      title: data.title.trim(),
      clubTitle: data.clubTitle,
      description: data.description.trim(),
      location: data.location.trim(),
      eventDate: new Date(data.eventDate).toISOString(),
      isPaid: data.isPaid === "true",
      eventFee: data.isPaid === "true" ? Number(data.eventFee) : 0,
      maxAttendees: Number(data.maxAttendees),
      createdAt: new Date().toISOString(),
      managerEmail: user?.email,
    };

    try {
      const res = await axiosSecure.post("/events", newEvent);
      if (res?.data?.insertedId) {
        Swal.fire({
          title: "Event Created!",
          text: "Your event has been created successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#0b99ce",
        });

        reset();
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl border border-[#0b99ce]/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-[#0b99ce] mb-4">
            Create New Event
          </h2>

          {success && <p className="text-green-600 mb-3">{success}</p>}
          {error && <p className="text-red-600 mb-3">{error}</p>}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div>
              <label className="label font-semibold">Event Title</label>
              <input
                placeholder="Art & Wine Night"
                className="input input-bordered w-full"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Club + Location */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Club Title</label>
                <select
                  className="select select-bordered w-full"
                  {...register("clubTitle", { required: true })}
                >
                  <option value="">Select Club</option>
                  <option value="Art Club">Art Club</option>
                  <option value="Photography Club">Photography Club</option>
                  <option value="Tech Club">Tech Club</option>
                </select>
              </div>

              <div>
                <label className="label font-semibold">Location</label>
                <input
                  placeholder="Creative Corner Gallery"
                  className="input input-bordered w-full"
                  {...register("location", { required: true })}
                />
              </div>
            </div>

            {/* Date + Paid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Event Date & Time</label>
                <input
                  type="datetime-local"
                  className="input input-bordered w-full"
                  {...register("eventDate", { required: true })}
                />
              </div>

              <div>
                <label className="label font-semibold">Is Paid Event?</label>
                <select
                  className="select select-bordered w-full"
                  {...register("isPaid")}
                >
                  <option value="true">Paid</option>
                  <option value="false">Free</option>
                </select>
              </div>
            </div>

            {/* Fee + Attendees */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Event Fee ($)</label>
                <input
                  type="number"
                  placeholder="25"
                  disabled={isPaid === "false"}
                  className="input input-bordered w-full"
                  {...register("eventFee")}
                />
              </div>

              <div>
                <label className="label font-semibold">Max Attendees</label>
                <input
                  type="number"
                  placeholder="15"
                  className="input input-bordered w-full"
                  {...register("maxAttendees", { required: false })}
                />
              </div>
            </div>

            {/* Read-only */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
              
                type="datetime-local"
                readOnly
                value={new Date().toISOString().slice(0, 16)}
                className="input input-bordered bg-gray-100 w-full"
              />
              <input
                type="email"
                readOnly
                value={user?.email}
                className="input input-bordered bg-gray-100 w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label className="label font-semibold">Description</label>
              <textarea
                rows="4"
                placeholder="Enjoy an evening of painting and wine tasting with local artists..."
                className="textarea textarea-bordered w-full"
                {...register("description", { required: true })}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn bg-[#0b99ce] text-white hover:bg-[#087aa3]"
              >
                {loading ? "Creating..." : "Create Event"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
