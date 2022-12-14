import React from "react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import movie from "../assets/movie.mp4";
const handleStyle = { left: 10 };

function Videonode({ data }) {
  const onChange = useCallback((evt) => {
    console.log("Hello");
  }, []);
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <a
          href="#"
          class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <video
            class=" p-2 h-auto w-56 rounded-lg  dark:border-gray-700"
            controls
          >
            <source src={movie} type="video/mp4" />
          </video>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet.
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              possimus!
            </p>
          </div>
        </a>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}

export default Videonode;
