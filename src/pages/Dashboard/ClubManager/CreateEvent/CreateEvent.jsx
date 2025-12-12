












import React from "react";
import { useForm } from "react-hook-form";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Art & Wine Night",
      clubTitle: "",
      description:
        "Enjoy an evening of painting and wine tasting with local artists.",
      eventDate: "2026-02-05T18:30",
      location: "Creative Corner Gallery",
      isPaid: "true",
      eventFee: 25,
      maxAttendees: 15,
      createdAt: new Date().toISOString().slice(0, 16),
      managerEmail: "ayansujonbd@gmail.com",
    },
  });

  const isPaid = watch("isPaid");

  const onSubmit = (data) => {
    const eventData = {
      ...data,
      isPaid: data.isPaid === "true",
      eventFee: data.isPaid === "true" ? Number(data.eventFee) : 0,
      createdAt: new Date(data.createdAt).toISOString(),
    };
    console.log("Create Event Data:", eventData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl border border-[#0b99ce]/20">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-[#0b99ce] mb-4">
            Create New Event
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Row 1: Title */}
            <div>
              <label className="label font-semibold">Event Title</label>
              <input
                type="text"
                className="input input-bordered w-full focus:border-[#0b99ce]"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {/* Row 2: Club Title + Location */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Club Title</label>
                <select
                  className="select select-bordered w-full focus:border-[#0b99ce]"
                  {...register("clubTitle", {
                    required: "Please select a club",
                  })}
                >
                  <option value="">Select Club</option>
                  <option value="Art Club">Art Club</option>
                  <option value="Photography Club">Photography Club</option>
                  <option value="Tech Club">Tech Club</option>
                </select>
                {errors.clubTitle && (
                  <p className="text-red-500 text-sm">
                    {errors.clubTitle.message}
                  </p>
                )}
              </div>

              <div>
                <label className="label font-semibold">Location</label>
                <input
                  type="text"
                  className="input input-bordered w-full focus:border-[#0b99ce]"
                  {...register("location", {
                    required: "Location is required",
                  })}
                />
              </div>
            </div>

            {/* Row 3: Date + Paid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Event Date & Time</label>
                <input
                  type="datetime-local"
                  className="input input-bordered w-full focus:border-[#0b99ce]"
                  {...register("eventDate", {
                    required: "Event date is required",
                  })}
                />
              </div>

              <div>
                <label className="label font-semibold">Is Paid Event?</label>
                <select
                  className="select select-bordered w-full focus:border-[#0b99ce]"
                  {...register("isPaid")}
                >
                  <option value="true">Paid</option>
                  <option value="false">Free</option>
                </select>
              </div>
            </div>

            {/* Row 4: Fee + Max Attendees */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Event Fee ($)</label>
                <input
                  type="number"
                  disabled={isPaid === "false"}
                  className="input input-bordered w-full focus:border-[#0b99ce]"
                  {...register("eventFee")}
                />
              </div>

              <div>
                <label className="label font-semibold">Max Attendees</label>
                <input
                  type="number"
                  className="input input-bordered w-full focus:border-[#0b99ce]"
                  {...register("maxAttendees", {
                    required: "Max attendees required",
                  })}
                />
              </div>
            </div>

            {/* Row 5: Created At + Manager Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label font-semibold">Created At</label>
                <input
                  type="datetime-local"
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                  {...register("createdAt")}
                />
              </div>

              <div>
                <label className="label font-semibold">Manager Email</label>
                <input
                  type="email"
                  readOnly
                  className="input input-bordered w-full bg-gray-100"
                  {...register("managerEmail")}
                />
              </div>
            </div>

            {/* Row 6: Description */}
            <div>
              <label className="label font-semibold">Description</label>
              <textarea
                rows="4"
                className="textarea textarea-bordered w-full focus:border-[#0b99ce]"
                {...register("description", {
                  required: "Description is required",
                })}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="btn btn-outline border-[#fe3885] text-[#fe3885] hover:bg-[#fe3885] hover:text-white"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn text-white bg-[#0b99ce] hover:bg-[#087aa3]"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;






