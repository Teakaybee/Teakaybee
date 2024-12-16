import Image from "next/image";
import headerimage from "../../assets/images/header.png"
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <div className="header_sub-container">
          <div className="header_container-title">
            <p className="">Hi, I Am TEAKAYBEE</p>
            <h1>I Am A Singer & Song Writer</h1>
            <p>Creating Unforgateable Memories With Soulful Tunes.</p>
          </div>
          <div className="header_container-media">
            <div className="header_container-media_card">
              <Image src={headerimage} alt="header_logo" />
            </div>
          </div>
        </div>
        <div className="header_promotion_card">
          <h2>Get Ready To Groove With TEAKAYBEE -</h2>
          <h2>Musician Extraordinaire</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
