import React from "react";

export default function ClubsCardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl overflow-hidden border border-gray-100 animate-pulse">
      
      {/* Banner Skeleton */}
      <div className="w-full h-48 bg-gray-200"></div>

      {/* Body */}
      <div className="card-body space-y-4">
        
        {/* Title */}
        <div className="flex justify-between items-center">
          <div className="h-5 bg-gray-200 rounded-md w-40"></div>
          <div className="h-4 bg-gray-200 rounded-md w-16"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded-md w-full"></div>
          <div className="h-3 bg-gray-200 rounded-md w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded-md w-4/6"></div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded-md"></div>
          <div className="h-3 bg-gray-200 rounded-md w-24"></div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded-md"></div>
          <div className="h-3 bg-gray-200 rounded-md w-28"></div>
        </div>

        {/* Members & Fee */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-md"></div>
            <div className="h-3 bg-gray-200 rounded-md w-20"></div>
          </div>
          <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
        </div>

        {/* Created At */}
        <div className="h-3 bg-gray-200 rounded-md w-32"></div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
      </div>
    </div>
  );
}
