import { Handle, Position, useStore } from "reactflow";
import movie from "../assets/movie.mp4";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode(props, id) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isTarget = connectionNodeId && connectionNodeId !== id;
  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };
  return (
    <div>
      <Handle
        className="targetHandle"
        style={{ zIndex: 2 }}
        position={Position.Right}
        type="source"
      />
      <div className="customNode101"></div>

      <Handle
        className="targetHandle"
        style={targetHandleStyle}
        position={Position.Left}
        type="target"
      />

      <a
        href="#"
        style={{ maxHeight: "182px" }}
        className="flex flex-col border  shadow-md md:flex-row md:max-w-lg  dark:border-gray-900 dark:bg-gray-900 "
      >
        <video
          className=" p-2 h-auto w-56 rounded-lg  dark:border-gray-900"
          controls
        >
          <source src={movie} type="video/mp4" />
        </video>

        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lorem ipsum dolor sit.mp4
          </h5>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            Scene Id - 456
          </p>
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Duration - 00:00:30
          </p>
          <p className="text-red-600 mb-1 font-normal  "> Edit name ?</p>
        </div>
        <button
          type="button"
          onClick={() => {
            props.deleteNode(props.id);
          }}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 mt-1 mr-1 dark:hover:bg-gray-600 dark:hover:text-white w-12 h-10"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  );
}
