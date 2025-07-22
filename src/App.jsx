import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import BookingsPage from "./pages/BookingsPage";
import PropertiesPage from "./pages/PropertiesPage";
import UsersPage from "./pages/UsersPage";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Navigate replace to="home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
