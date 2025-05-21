import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import BuyTicket from "./pages/MoviesPage.tsx"
import MainLayout from "./layout/MainLayout.tsx"
import OrderTicketPage from "./pages/Order/OrderTicketPage.tsx"
import OrderSeatPage from "./pages/Order/OrderSeatPage.tsx"
import AuthLayout from "./layout/AuthLayout.tsx"
import LoginPage from "./pages/Auth/LoginPage.tsx"
import RegisterPage from "./pages/Auth/RegisterPage.tsx"

function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<BuyTicket />} />
        
        <Route path="order">
          <Route path="ticket" element={<OrderTicketPage />} />
          <Route path="seat" element={<OrderSeatPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App