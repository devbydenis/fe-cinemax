import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function ProfileLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-[#A0A3BD33] pb-5 relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_1fr]">
        <Outlet />
      </main>
    </>
  )
}

export default ProfileLayout