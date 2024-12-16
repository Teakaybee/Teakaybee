import Image from "next/image";
import image8 from "../../assets/images/image8.jpg"
import "./about.css"

const AboutPage = () => {
  return (
    <div className="aboutpage-container">
      <div className="aboutpage-container_title">
        <h3>About TEAKAYBEE</h3>
      </div>
      <div className="aboutpage-container_sub-group">
        <div className="aboutpage-container_subgroup-info">
          <h5>
            I'm a Singer And Songwriter Based In India With A Love For All
            Things Pop, RnB, And Soul.
          </h5>
          <br/>
          <h5>
            I Strive To Create Music That Moves You, Whether It's Making You
            Dance, Reflect, Or Just feel Something Deep Down.
          </h5>
          <br/>
          <h5>
            I'm Always Exploring New Sounds And Ideas. Check Out My Latest Track
            And Sign Up For My Mailing List To Stay Updated On New
            Releases And Shows!
          </h5>
        </div>
        <div className="aboutpage-container_subgroup-media">
          <div className="image-container">
            <Image src={image8} alt="teakaybeeprofile"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage