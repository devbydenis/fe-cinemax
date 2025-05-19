import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import BuyTicket from "./pages/MoviesPage.tsx"
import MainLayout from "./layout/MainLayout.tsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<BuyTicket />} />
      </Route>
    </Routes>
  )
}

export default App