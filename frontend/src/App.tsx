import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import CalendarPage from "./pages/CalendarPage";
import GenerationPage from "./pages/GenerationPage";
import GalleryPage from "./pages/GalleryPage";
import CorporateProfilePage from "./pages/CorporateProfilePage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/generation" element={<GenerationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/corporate" element={<CorporateProfilePage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
