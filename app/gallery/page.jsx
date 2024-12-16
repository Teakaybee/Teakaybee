import Image from "next/image";
import starimage from "../../assets/images/star.png";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";
import image7 from "../../assets/images/image7.jpg";
import image10 from "../../assets/images/image10.jpg";
import image11 from "../../assets/images/image11.jpg";
import image12 from "../../assets/images/image12.jpg";
import image13 from "../../assets/images/image13.jpg";
import image14 from "../../assets/images/image14.jpg";

import "./gallery.css"
import Navbar from "@/components/navbar/navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="gallery_container" id="Media">
        <div className="gallery_container-photo">
          <div className="gallery__headline">
            <h3>Photo/BTS</h3>
            <Image src={starimage} />
          </div>
          <div className="gallery_container_gallery-list">
            <div className="gallery_container_gallery-list_item">
              <Image src={image1} alt="teakaybeeprofile1" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image2} alt="teakaybeeprofile2" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image3} alt="teakaybeeprofile3" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image4} alt="teakaybeeprofile4" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image5} alt="teakaybeeprofile5" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image6} alt="teakaybeeprofile6" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image7} alt="teakaybeeprofile6" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image10} alt="teakaybeeprofile10" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image11} alt="teakaybeeprofile11" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image12} alt="teakaybeeprofile12" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image13} alt="teakaybeeprofile13" />
            </div>
            <div className="gallery_container_gallery-list_item">
              <Image src={image14} alt="teakaybeeprofile14" />
            </div>
          </div>
        </div>
        <div className="gallery_container-photo">
          <div className="gallery__headline">
            <h3>MEDIA & INSIGHTS</h3>
            <Image src={starimage} />
          </div>
          <div className="gallery_container_gallery-list">
            <div className="gallery_container_gallery-list_item"></div>
            <div className="gallery_container_gallery-list_item"></div>
            <div className="gallery_container_gallery-list_item"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page