import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import BuyTicket from "./pages/MoviesPage.tsx"
import MainLayout from "./layout/MainLayout.tsx"
import OrderTicketPage from "./pages/order/OrderTicketPage.tsx"
import OrderSeatPage from "./pages/order/OrderSeatPage.tsx"

function App() {
  return (
    <Routes>
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