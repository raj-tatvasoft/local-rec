import "./App.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/routes/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import LangSelection from "./components/langSelection/LangSelection";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div>{t("test")}</div>
      <LangSelection />

      <Router>
        <Routes>
          <Route path="/" element={<>Home Page</>} />
          <Route path="/dashboard2" element={<>Dashboard Page 2</>} />

          {/* Private route for authenticated users */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
