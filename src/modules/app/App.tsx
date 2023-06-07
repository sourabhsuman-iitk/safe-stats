import { useState } from "react";
import { AppRoutes } from "../home/routes";
import Sidebar from "../sidebar";
import Header from "../home/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App flex h-screen w-screen">
        <Header setIsOpen={setIsSidebarOpen} />
        <div className="flex w-full h-full">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <div className="w-full h-full bg-p-cream">
            <AppRoutes />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
