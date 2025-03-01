// Dependencies
import React from "react";
import PincodeLookup from "./components/PincodeLookup";

// Styles
import "./tailwind.output.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      <PincodeLookup />
    </div>
  );
};

export default App;
