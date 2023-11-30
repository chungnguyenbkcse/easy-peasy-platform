import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/DashboardPage";
import RootLayout from "./layouts/RootLayout";
import PrivateRouteLayout from "./layouts/PrivateRouteLayout";
import GrammarPage from "./pages/GrammarPage";
import ExercisePage from "./pages/ExercisePage";
import VocabularyPage from "./pages/VocabularyPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          {/* public pages */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/auth" element={<AuthenticationPage />} />
          {/* Grammar */}
          <Route path="/grammar" element={<PreviewPage />} />
          <Route path="/grammar/:topic" element={<ExercisePage />} />
          {/* Vocabulary */}
          <Route path="/vocabulary" element={<PreviewPage />} />
          <Route path="/vocabulary/:topic" element={<ExercisePage />} />

          {/*Reading using PreviewPage which is a desired component for the rest sections. When database is ready, I will implement it for the rest */}
          <Route path="/reading" element={<PreviewPage />} />
          <Route path="/reading/:topic" element={<ExercisePage />} />

          {/* private pages */}
          <Route element={<PrivateRouteLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
