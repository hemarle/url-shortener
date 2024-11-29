import React from 'react';
import '../App.css';
import { Link } from 'react-router';

function LandingPage() {
  return (
   <div className="">
    <div className="text-center mt-12">
      <h1 className="text-4xl text-white mb-4">Shorten Your Loooong Links :</h1>
      <p className="text-gray-400 mb-8">Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
      <div className="grid grid-cols-1 justify-center items-center  ">
  <div className="flex justify-center gap-4 ">
  <div className="w-full max-w-lg flex justify-center gap-4">

    <Link to="/login">
<div className="rounded text-white bg-blend-darken border border-white p-10 px-20 hover:bg-white hover:text-black hover:shadow hover:shadow-white">
     Get Started
</div>
     </Link>

  </div>
  </div>
   </div>
   </div>
   </div>
  )
}

export default LandingPage;
