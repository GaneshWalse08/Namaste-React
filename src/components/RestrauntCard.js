import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const {resData} = props;
  const{cloudinaryImageId, name, cuisines, sla, avgRating} = resData?.info;
  return (
  <div className="res-card" style ={{backgroundColor: "#f0f0f0"}}>
    <img
  className="res-logo"
  src={
    CDN_URL + cloudinaryImageId
  }
  alt={resData.info.name}
/>
    <h3 className="res-title">{name}</h3>
    <h4 className="res-tags">{cuisines.join(", ")}</h4>
    <h5 className="res-rating">{sla.deliveryTime}</h5>
    <h5 className="res-time">{avgRating}</h5>
  </div> 
  )
}

export default RestrauntCard;