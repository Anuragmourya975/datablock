import { useCallback } from "react";
import { useStore, getStraightPath } from "reactflow";

import { getEdgeParams } from "./utils.js";
import "./index.css";

function FloatingEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  sourcePosition,
  targetPosition,
  handleHello,
}) {
  const sourceNode = useStore(
    useCallback((store) => store.nodeInternals.get(source), [source])
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeInternals.get(target), [target])
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
    sourcePosition,
    targetPosition,
  });
  const foreignObjectSize = 40;

  const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
  };

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />{" "}
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={labelX - foreignObjectSize / 2}
        y={labelY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div>
          <button
            className="edgebutton"
            style={{ width: "30px", height: "30px" }}
            onClick={(event) => onEdgeClick(event, id)}
          >
            <i className="bi bi-door-open text-xl"></i>
          </button>
        </div>
      </foreignObject>
    </>
  );
}

export default FloatingEdge;
