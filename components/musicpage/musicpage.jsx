import MusicCard from "@/utils/musiccard/musiccard";
import "./musicpage.css"

const MusicPage = () => {
  return (
    <div className="musicpage-container">
      <div className="musicpage-container-title">
        <h3>Discover TEAKAYBEE’S Music.</h3>
      </div>
      <div className="musicpage-album_container">
        <MusicCard cardtitle="FEELINGS" cardcolor="#02D1FF" />
        <MusicCard cardtitle="ALBUM" cardcolor="#37EB67" />
        <MusicCard cardtitle="ALBUM" cardcolor="#F68822" />
      </div>
    </div>
  );
}

export default MusicPage