import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ShowcaseDemoPage from "./pages/ShowcaseDemoPage";
import LiveDemoPage from "./pages/LiveDemo";
import ViewDetails from "./pages/ViewDetails";
import Appbar from "./Appbar";

import SignUp from "./SignUp";
import Login from "./Login";

import ViewDetail1 from "./details/ViewDetail1";
import ViewDetail2 from "./details/ViewDetail2";
import ViewDetail3 from "./details/ViewDetail3";
import ViewDetail4 from "./details/ViewDetail4";

import RadarChart from "./components/RadarChart";
import MediaCardWithRadar from "./pages/MediaCardWithRadar";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const isLoggedIn = localStorage.getItem("userData") !== null;
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/imgmediacard"
          element={
            <ProtectedRoute>
              <MediaCardWithRadar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/live-demo"
          element={
            <ProtectedRoute>
              <LiveDemoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-details"
          element={
            <ProtectedRoute>
              <ViewDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view1"
          element={
            <ProtectedRoute>
              <ViewDetail1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view2"
          element={
            <ProtectedRoute>
              <ViewDetail2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view3"
          element={
            <ProtectedRoute>
              <ViewDetail3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view4"
          element={
            <ProtectedRoute>
              <ViewDetail4 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/skill-radar"
          element={
            <ProtectedRoute>
              <RadarChart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/interactive-demo"
          element={
            <ProtectedRoute>
              <ShowcaseDemoPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
