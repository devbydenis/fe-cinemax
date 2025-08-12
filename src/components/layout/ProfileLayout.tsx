import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import InfoAccountProfile from '../../features/profile/components/InfoAccountProfile'
import ThemeContext from "../../context/EditProfileContext";
import { useState } from 'react';
import NavProfile from '../../features/profile/components/NavProfile.tsx';

function ProfileLayout() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  
  const dataContext = {
    showEditProfile, 
    setShowEditProfile,
    display: "hidden md:flex",
  }
  return (
    <>
    <Navbar />
    <ThemeContext.Provider value={dataContext}>
      <main className=" pb-5 relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_1fr]">
        <NavProfile />
        <InfoAccountProfile />
        <div className='col-span-2 md:order-1'>
          <Outlet />
        </div>
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default ProfileLayout