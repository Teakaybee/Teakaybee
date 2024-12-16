import Navbar from "@/components/navbar/navbar";
import "./discography.css";
import Image from "next/image";
import starimage from "../../assets/images/star.png";
import MusicCard from "@/utils/musiccard/musiccard";
import spotify from "../../assets/images/spotify.png";
import amazonmusic from "../../assets/images/amazonmusic.png";
import youtubemusic from "../../assets/images/youtubemusic.png";
import applemusic from "../../assets/images/applemusic.png";
import soundcloud from "../../assets/images/soundcloud.png";
import saavn from "../../assets/images/saavn.png";
import youtube from "../../assets/images/youtube.png";


const Page = () => {
  return (
    <>
      <Navbar />
      <div className="discography_container">
        <div className="discography__headline video__container">
          <h3>Video</h3>
          <Image src={starimage} />
        </div>
        <div className="discography__video_container">
          <div className="discography__video_item">
            <Image src={youtube} alt="youtube_logo" />
          </div>
          <div className="discography__video_item">
            <Image src={youtube} alt="youtube_logo" />
          </div>
        </div>
        <div className="discography__headline">
          <h3>Music</h3>
          <Image src={starimage} />
        </div>
        <div className="musicpage-album_container">
          <MusicCard cardtitle="FEELINGS" cardcolor="#02D1FF" />
          <MusicCard cardtitle="ALBUM" cardcolor="#37EB67" />
          <MusicCard cardtitle="ALBUM" cardcolor="#F68822" />
        </div>
        <div className="discography_container-listen_container">
          <p>Discover TEAKAYBEE’S Music. LISTEN NOW!</p>
          <div className="discography_listen_item-list">
            <Image src={spotify} alt="spotify_logo" />
            <Image src={amazonmusic} alt="amazonmusic_logo" />
            <Image src={applemusic} alt="applemusic_logo" />
            <Image src={youtubemusic} alt="youtubemusic_logo" />
            <Image src={soundcloud} alt="soundcloud_logo" />
            <Image src={saavn} alt="saavn_logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
