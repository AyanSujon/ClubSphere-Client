import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const EditEvent = ({ existingEvent }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: existingEvent?.title || '',
      isPaid: existingEvent?.isPaid || false,
      location: existingEvent?.location || '',
      eventDate: existingEvent?.eventDate || '',
      eventFee: existingEvent?.eventFee || 0,
      clubTitle: existingEvent?.clubTitle || '',
      maxAttendees: existingEvent?.maxAttendees || 0,
      createdAt: existingEvent?.createdAt || '',
      updatedAt: existingEvent?.updatedAt || '',
      description: existingEvent?.description || '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // API call to update event
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate(-1)} // Go back to previous page
        className="btn btn-outline mb-4"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6">Edit Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Row 1: Title */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="input input-bordered w-full"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        {/* Row 2: isPaid + location */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label cursor-pointer">
              <span className="label-text">Is Paid?</span>
              <input type="checkbox" {...register('isPaid')} className="checkbox ml-2" />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register('location')}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Row 3: eventDate + eventFee */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Event Date</span>
            </label>
            <input
              type="date"
              {...register('eventDate')}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Event Fee</span>
            </label>
            <input
              type="number"
              {...register('eventFee', { min: 0 })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Row 4: clubTitle + maxAttendees */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Club Title</span>
            </label>
            <input
              type="text"
              {...register('clubTitle')}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Max Attendees</span>
            </label>
            <input
              type="number"
              {...register('maxAttendees', { min: 0 })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Row 5: createdAt + updatedAt */}
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Created At</span>
            </label>
            <input
              type="date"
              {...register('createdAt')}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Updated At</span>
            </label>
            <input
              type="date"
              {...register('updatedAt')}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Row 6: description */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register('description')}
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
