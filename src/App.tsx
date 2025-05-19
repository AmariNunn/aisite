import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DemoForm from "./components/DemoForm";
import DemoVideo from "./components/DemoVideo";
import RoofingCallDashboard from "./components/RoofingCallDashboard";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-demo" element={<DemoForm />} />
          <Route path="/demo-video" element={<DemoVideo />} />
          <Route path="/admin/calls" element={<RoofingCallDashboard />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" element={null} />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
