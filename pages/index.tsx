import Navbar from "./components/navbar";
import Greeting from "./components/Home/greeting";
import Preview from "./components/Home/preview";
import Summary from "./components/Home/summary";
import Footer from "./components/footer";
import ProfileDrawer from "./components/profiledrawer";
import React, { useState } from "react";
import { auth } from '../firebase/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";


export default function Home() {

  const [user, loading, error] = useAuthState(auth);

  const [isAuthenticated, setIsAuthenticated] = useState(user !== null ? true : false);
  onAuthStateChanged(auth, user => {
    setIsAuthenticated(user !== null ? true : false);
  });

  
  return (
    <div className="drawer drawer-end"> 
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex flex-col items-center justify-center border-black">
          <div className="flex flex-col items-center min-w-full bg-primary bg-gradient-to-b from-primary to-secondary">
            <Navbar/>
            <Greeting/>
          </div>
          <Preview/>
          <Summary/>
          <Footer/>
        </div>
      </div>
      <ProfileDrawer isAuthenticated={isAuthenticated} />
    </div>
  )
}