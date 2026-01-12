import React from "react";

const EventsCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden border border-gray-100">
      <div className="card-body animate-pulse">
        
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-200 rounded-md"></div>

        {/* Description (3 lines) */}
        <div className="mt-2 space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2 mt-4">
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
          <div className="h-3 w-3 bg-gray-200 rounded"></div>
          <div className="h-3 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-3">
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-3 w-28 bg-gray-200 rounded"></div>
        </div>

        {/* Attendees & Fee */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="h-5 w-14 bg-gray-200 rounded-full"></div>
        </div>

        {/* Created At */}
        <div className="h-3 w-32 bg-gray-200 rounded mt-4"></div>

        {/* Button */}
        <div className="mt-4">
          <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default EventsCardSkeleton;
