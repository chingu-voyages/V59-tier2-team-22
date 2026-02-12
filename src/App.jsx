import { BrowserRouter, Routes, Route } from "react-router";
import { InterviewProvider } from "./context/InterviewContext";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import QuestionsPage from "./pages/QuestionsPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <BrowserRouter>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="roles" element={<RolesPage />} />
                <Route path="summary" element={<SummaryPage />} />
                <Route path="questions/:role" element={<QuestionsPage />} />
              </Route>
            </Routes>
          </ChatProvider>
        </BrowserRouter>
      </InterviewProvider>
    </AuthProvider>
  );
}

export default App;
