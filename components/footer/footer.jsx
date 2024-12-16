import "./footer.css"
import locationicon from "../../assets/images/location.png"
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer_container">
      <h2>TEAKAYBEE</h2>
      <div className="footer_container-group">
        <Image src={locationicon} alt="location_icon" />
        <h4>RUDRAPUR, UTTARAKHAND, INDIA</h4>
      </div>
      <p>twinkle@teakaybee.com</p>
    </div>
  );
}

export default Footer