import React, {  } from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Posts = ()=> {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="h-fit px-6 md:px-0">
        <div className="md:w-6/12 mx-auto flex flex-col gap-y-10">
          <h1 className="text-2xl font-semibold">About</h1>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Posts