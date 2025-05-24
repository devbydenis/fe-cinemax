import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import MoviesPage from "./pages/MoviesPage.tsx"
import MainLayout from "./layout/MainLayout.tsx"
import OrderTicketPage from "./pages/Order/OrderTicketPage.tsx"
import OrderSeatPage from "./pages/Order/OrderSeatPage.tsx"
import AuthLayout from "./layout/AuthLayout.tsx"
import LoginPage from "./pages/Auth/LoginPage.tsx"
import RegisterPage from "./pages/Auth/RegisterPage.tsx"
import OrderPaymentPage from "./pages/Order/OrderPaymentPage.tsx"

function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="buy-ticket" element={<MoviesPage />} />
        
        <Route path="order">
          <Route path="seat" element={<OrderSeatPage />} />
          <Route path="payment" element={<OrderPaymentPage />} />
          <Route path="ticket" element={<OrderTicketPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App