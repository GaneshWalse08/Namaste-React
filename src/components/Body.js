import RestrauntCard from "./RestrauntCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
    <div className="search-container">Search</div>
    <div className="res-container">


    {resObj.map(rest => (
       <RestrauntCard resData = {rest} key={rest.info.id} />
    ))}
    </div>
    </div>
  )
}

export default Body;