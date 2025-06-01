import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MoviesPage from "./pages/MoviesPage.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import OrderTicketPage from "./pages/order/OrderTicketPage.tsx";
import OrderSeatPage from "./pages/order/OrderSeatPage.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import OrderPaymentPage from "./pages/order/OrderPaymentPage.tsx";
import ProfileLayout from "./layout/ProfileLayout.tsx";
import ProfileAccountPage from "./pages/profile/ProfileAccountPage.tsx";
import ProfileHistoryPage from "./pages/profile/ProfileHistoryPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ForgetPasswordPage from "./pages/auth/ForgetPasswordPage.tsx";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AuthContext from "./pages/auth/AuthContext.tsx";

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

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="movies">
            <Route index element={<MoviesPage />} />
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
