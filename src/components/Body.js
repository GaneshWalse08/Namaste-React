import RestrauntCard from "./RestrauntCard";
import resObj from "../utils/mockData";
import { useState } from "react";
import resObj from "../utils/mockData";

const Body = () => {
  const [listOfRestraunt, setlistOfRestraunt] = useState(resObj)
  return (
    <div className="body">
    <div className="filter"><button className="filter-btn"
    onClick={() => {
      const filteredList = listOfRestraunt.filter((rest) => rest.info.avgRating > 4);
      setlistOfRestraunt(filteredList);
    }}
    >Top rated restraunts</button></div>
    <div className="res-container">
    {listOfRestraunt.map(rest => (
       <RestrauntCard resData = {rest} key={rest.info.id} />
    ))}
    </div>
    </div>
  )
}

export default Body;