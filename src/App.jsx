import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="questions/:role" element={<QuestionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
