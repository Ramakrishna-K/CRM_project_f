import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/Dashboard";
import LogInteraction from "./pages/LogInteraction";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-col flex-1">

          {/* Top Navbar */}
          {/* <Navbar /> */}

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">
            <Routes>

              <Route
                path="/"
                element={<Dashboard />}
              />

              <Route
                path="/interaction"
                element={<LogInteraction />}
              />

            </Routes>
          </main>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
