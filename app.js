import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Navigations
 * 
 * Body
 *  - Search
 *  - restraunt Container
 *  - Restraunt Cards
 * 
 * Footer
 *  - Copyright
 *  - Link
 *  - Address
 *  - Contact
 */


const resObj = [
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      sla: { deliveryTime: 40 }
    }
  },
  {
    info: {
      id: "123456",
      name: "Domino's Pizza",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "City Center",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["Pizza", "Italian", "Pasta"],
      avgRating: 4.3,
      sla: { deliveryTime: 30 }
    }
  },
  {
    info: {
      id: "234567",
      name: "KFC",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Main Road",
      areaName: "Chhindwara",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "Fried Chicken", "Fast Food"],
      avgRating: 4.2,
      sla: { deliveryTime: 35 }
    }
  },
  {
    info: {
      id: "345678",
      name: "Biryani Blues",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "Near Bus Stand",
      areaName: "Mohan Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Hyderabadi", "Kebabs"],
      avgRating: 4.4,
      sla: { deliveryTime: 45 }
    }
  },
  {
    info: {
      id: "456789",
      name: "Barbeque Nation",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Mall Road",
      areaName: "Chhindwara",
      costForTwo: "₹1200 for two",
      cuisines: ["BBQ", "Grill", "Buffet"],
      avgRating: 4.5,
      sla: { deliveryTime: 50 }
    }
  },
  {
    info: {
      id: "567890",
      name: "Haldiram's",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
      locality: "Market Area",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Sweets", "Snacks", "Street Food"],
      avgRating: 4.6,
      sla: { deliveryTime: 25 }
    }
  },
  {
    info: {
      id: "678901",
      name: "McDonald's",
      cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
      locality: "City Center",
      areaName: "Mohan Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fries", "Beverages"],
      avgRating: 4.1,
      sla: { deliveryTime: 28 }
    }
  },
  {
    info: {
      id: "789012",
      name: "Subway",
      cloudinaryImageId: "enj3srsnhbltbom2ovvh",
      locality: "Main Market",
      areaName: "Chhindwara",
      costForTwo: "₹350 for two",
      cuisines: ["Sandwich", "Healthy Food", "Salads"],
      avgRating: 4.0,
      sla: { deliveryTime: 32 }
    }
  },
  {
    info: {
      id: "890123",
      name: "Moti Mahal Delux",
      cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
      locality: "Civil Lines",
      areaName: "Mohan Nagar",
      costForTwo: "₹800 for two",
      cuisines: ["North Indian", "Mughlai", "Tandoor"],
      avgRating: 4.5,
      sla: { deliveryTime: 40 }
    }
  },
  {
    info: {
      id: "901234",
      name: "Wow! Momo",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "City Mall",
      areaName: "Chhindwara",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Tibetan", "Fast Food"],
      avgRating: 4.2,
      sla: { deliveryTime: 27 }
    }
  }
];





const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://img.freepik.com/premium-vector/geometric-vintage-creative-crown-abstract-logo-design-vector-template-vintage-crown-logo-royal-king-queen-concept-symbol-logotype-concept-icon_412311-3665.jpg"></img>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestrauntCard = (props) => {
  const {resData} = props;
  const{cloudinaryImageId, name, cuisines, sla, avgRating} = resData?.info;
  return (
  <div className="res-card" style ={{backgroundColor: "#f0f0f0"}}>
    <img
  className="res-logo"
  src={
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);