import Image from "next/image"
import albumcd from "../../assets/images/albumcd.png"
import "./musiccard.css"

const MusicCard = ({cardtitle, cardcolor}) => {
  return (
    <div className='musiccard-container' style={{backgroundColor: cardcolor }}>
        <div className='musiccard-image'>
          <Image src={albumcd} alt={cardtitle}/>
        </div>
        <div className='musiccard-title'>
            <h4>{cardtitle}</h4>
        </div>
    </div>
  )
}

export default MusicCard