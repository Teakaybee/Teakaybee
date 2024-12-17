import Navbar from '@/components/navbar/navbar'
import starimage from "../../assets/images/star.png";
import React from 'react'
import Image from 'next/image';
import "./insights.css"

const page = () => {
  return (
    <>
      <Navbar />
      <div className="insights_container">
        <div className="insights__headline">
          <h3>MEDIA & INSIGHTS</h3>
          <Image src={starimage} />
        </div>
      </div>
    </>
  );
}

export default page