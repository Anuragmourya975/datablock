import React, { useCallback, useState, useMemo, useEffect } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  MarkerType,
  MiniMap,
  useReactFlow,
  Controls,
  Background,
  ReactFlowProvider,
  addEdge,
  Panel,
} from "reactflow";

import Modal from "./Modal";

import CustomNode from "./CustomNode";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";
import "reactflow/dist/style.css";
import "./style.css";
import { ContextMenu } from "./ContextMenu";

const proOptions = { hideAttribution: true };
const initialNodes = [
  {
    id: "root",
    type: "CustomNode",
    edgeTypes: "FloatingEdge",
    // data: { label: "An input node", type: "node" },
    position: {
      x: 25,
      y: 300,
    },
  },
];

const initialEdges = [];
const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "white",
};

const edgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "white" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "white",
  },
};

let nodeId = 0;
function Flow() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const [nodeData, setnodeData] = useState(null);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const reactFlowInstance = useReactFlow();

  const createNew = () => {
    const id = `${++nodeId}`;

    const newNode = {
      id,
      type: "CustomNode",
      edgeTypes: "FloatingEdge",
      // data: { label: "An input node", type: "node" },
      position: {
        x: 300 + Math.random() * 50,
        y: 300 + Math.random() * 50,
      },
    };
    setNodes((es) => es.concat(newNode));
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({ CustomNode: CustomNode }), []);
  const onContextMenu = (e) => {
    // console.log(nodes.id);
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };
  const deleteNode = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));

    setIsOpen(false);
  };
  return (
    <div className="h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeContextMenu={onContextMenu}
        // fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineComponent={CustomConnectionLine}
        connectionLineStyle={connectionLineStyle}
        proOptions={proOptions}
      >
        <Panel>
          <button
            className="relative inline-flex items-center justify-center rounded-full mt-5 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white "
            onClick={() => setShowModal(true)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
              <i className="bi bi-door-open"></i>
              &nbsp; Expand
            </span>
          </button>
          <Modal
            onClose={handleClose}
            visible={showModal}
            createNew={createNew}
          />
        </Panel>
        <ContextMenu
          isOpen={isOpen}
          position={position}
          onMouseLeave={() => setIsOpen(false)}
          actions={[{ label: "Delete", effect: deleteNode }]}
        />
        <MiniMap className=" bg-bc" nodeStrokeWidth={25} />
        {/* <Background /> */}
        <Controls
          className=" bg-bc text-white "
          style={{ filter: "invert(1)" }}
        />
      </ReactFlow>
    </div>
  );
}

export default Flow;
