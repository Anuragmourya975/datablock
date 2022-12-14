import { Handle, Position, useStore } from "reactflow";
import Node from "./Node";

const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomNode({ id }) {
  const connectionNodeId = useStore(connectionNodeIdSelector);
  const isTarget = connectionNodeId && connectionNodeId !== id;

  const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };
  // const label = isTarget ? "Drop here" : "Drag to connect";

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
      <Node />
    </div>
  );
}
