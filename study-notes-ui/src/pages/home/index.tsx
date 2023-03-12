import React from "react";
import LatestPost from "@/components/Shared/LatestPost";

function HomePage() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full bg-transparent h-1/3 mt-3 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center h-full">
          <h1 className="text-6xl h-1/4">Read and Share Notes</h1>
          <p className="text-base h-1/4">
            By sharing your notes, contribute your community, learn with your
            friends and explore more information.
          </p>
          <button className="btn bg-indigo-700 hover:bg-indigo-700 text-white hover:border-indigo-700 hover:opacity-80">
            Lets Share Your Note
          </button>
        </div>
      </div>
      <div className="h-1/2 w-full">
        <LatestPost />
      </div>
    </div>
  );
}

export default HomePage;
