import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import BuyTicket from "./pages/BuyTicket.tsx"
import MainLayout from "./layout/MainLayout.tsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="buyticket" element={<BuyTicket />} />
      </Route>
    </Routes>
  )
}

export default App