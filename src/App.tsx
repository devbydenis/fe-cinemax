import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";
import OrderTicketPage from "./pages/OrderTicketPage.tsx";
import OrderSeatPage from "./pages/OrderSeatPage.tsx";
import AuthLayout from "./components/layout/AuthLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import OrderPaymentPage from "./pages/OrderPaymentPage.tsx";
import ProfileLayout from "./components/layout/ProfileLayout.tsx";
import ProfileAccountPage from "./pages/ProfileAccountPage.tsx";
import ProfileHistoryPage from "./pages/ProfileHistoryPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ForgetPasswordPage from "./pages/ForgetPasswordPage.tsx";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AdminLayout from "./components/layout/AdminLayout.tsx";
import AuthContext from "./features/auth/context/AuthContext.tsx";
import AddMoviePage from "./pages/AdminAddMoviePage.tsx";
import ListMoviePage from "./pages/AdminListMoviePage.tsx";
import DashboardPage from "./pages/AdminDashboardPage.tsx";
import ExamplePage from "./pages/AdminExamplePage.tsx";
import MoviesIntegrationPage from "./pages/MoviesIntegrationPage.tsx";


function App() {
  const [isLoggedinRoute, setIsLoggedinRoute] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedinRoute, setIsLoggedinRoute }}>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forget-password" element={<ForgetPasswordPage />} />
        </Route>
        
        <Route element={<AdminLayout />}>
          <Route path="admin">
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="add-movie" element={<AddMoviePage />} />
            <Route path="list-movie" element={<ListMoviePage />} />
            <Route path="example" element={<ExamplePage />} />
          </Route>
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies">
            <Route index element={<MoviesIntegrationPage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
          <Route path="buy-ticket" element={<MoviesPage />} />
          <Route path="order">
            <Route
              path="seat/:id"
              element={
                <ProtectedRoute>
                  <OrderSeatPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="payment/:id"
              element={
                <ProtectedRoute>
                  <OrderPaymentPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="ticket/:id"
              element={
                <ProtectedRoute>
                  <OrderTicketPage />
                </ProtectedRoute>
              }
            ></Route>
          </Route>
        </Route>

        <Route element={<ProfileLayout />}>
          <Route path="profile">
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <ProfileAccountPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="history"
              element={
                <ProtectedRoute>
                  <ProfileHistoryPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
