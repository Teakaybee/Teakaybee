"use client";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [istoggle, setistoggle] = useState(false);
  // const [isdiscography, setisdiscography] = useState(false);
  // const [isdiscographysmalldevice, setisDiscographySmallDevice] =
  //   useState(false);
  const [isgallerysmalldevice, setisgallerySmallDevice] =
    useState(false);
  const [isgallery, setisgallery] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-image">
        <a href="/">
          <Image src={logo} alt="main-logo" />
        </a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/discography">Discography</a>
        <div className="navbar_links-dropdown">
          <p>Gallery</p>
          {isgallery === true ? (
            <IoIosArrowUp size={20} onClick={() => setisgallery(false)} />
          ) : (
            <IoIosArrowDown size={20} onClick={() => setisgallery(true)} />
          )}
          {isgallery && (
            <div className="navbar_links-dropdown_menu">
              <a href="/gallery">Photo/BTS</a>
              <a href="/gallery">Media</a>
            </div>
          )}
        </div>

        <a href="/#Contact">Contact</a>
      </div>
      <div className="navbar-links_small-devices">
        <div className="navbar-links_small-devices-menu">
          {istoggle === false ? (
            <MdOutlineMenu size={35} onClick={() => setistoggle(true)} />
          ) : (
            <MdCancel size={35} onClick={() => setistoggle(false)} />
          )}
        </div>
        {istoggle && (
          <div className="navbar-links_small-devices-container">
            <a href="/">Home</a>
            <a href="/discography">Discography</a>
            {/* <div className="navbar-links_small-devices-container-dropdown">
              <div className="navbar-links_small-devices-container-dropdown-title">
                <p>Discography</p>
                {isdiscographysmalldevice === true ? (
                  <IoIosArrowUp
                    size={20}
                    onClick={() => setisDiscographySmallDevice(false)}
                  />
                ) : (
                  <IoIosArrowDown
                    size={20}
                    onClick={() => setisDiscographySmallDevice(true)}
                  />
                )}
              </div>
              {isdiscographysmalldevice && (
                <div className="navbar-links_small-devices-container-dropdown-menu">
                  <a href="discography">Music</a>
                  <a href="discography">Video</a>
                </div>
              )}
            </div> */}
            <div className="navbar-links_small-devices-container-dropdown">
              <div className="navbar-links_small-devices-container-dropdown-title">
                <p>Gallery</p>
                {isgallerysmalldevice === true ? (
                  <IoIosArrowUp
                    size={20}
                    onClick={() => setisgallerySmallDevice(false)}
                  />
                ) : (
                  <IoIosArrowDown
                    size={20}
                    onClick={() => setisgallerySmallDevice(true)}
                  />
                )}
              </div>
              {isgallerysmalldevice && (
                <div className="navbar-links_small-devices-container-dropdown-menu">
                  <a href="gallery">Photo/Bts</a>
                  <a href="gallery">Insight</a>
                </div>
              )}
            </div>

            <a href="#Contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
