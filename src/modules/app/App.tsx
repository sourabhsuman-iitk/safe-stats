import React from "react";
import { AppRoutes } from "../home/routes";
import Sidebar from "../sidebar";
import Header from "../home/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <div className="flex w-full h-full">
          <Sidebar />
          <div className="w-full bg-p-cream">
            <AppRoutes />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
