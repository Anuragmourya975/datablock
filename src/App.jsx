import React from "react";
import { ReactFlowProvider } from "reactflow";
// import Block from "./components/Block";
// import Button from "./components/Button";
// import Console from "./components/Console";
import Flow from "./components/Flow";
// import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
      {/* <Console /> */}
      {/* <Block /> */}
    </div>
  );
}

export default App;
