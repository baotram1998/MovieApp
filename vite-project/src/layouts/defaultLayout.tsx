//import React from 'react'

import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Outlet } from "react-router-dom";
const DefaultLayout = () => {
    console.log('DefaultLayout');
  return (
    <div className="container mx-auto">
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default DefaultLayout;