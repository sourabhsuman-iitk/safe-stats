import React from "react";
import { AppRoutes } from "../home/routes";
import Sidebar from "../sidebar";
import Header from "../home/components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="w-full bg-p-cream">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
