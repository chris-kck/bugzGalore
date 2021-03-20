import React from "react";
import logo from "./market.jpg";
import Card from "./MarketCard";
import StallCard from "./StallCard";
import Footer from "./Footer";

function Booking() {
  const data = {
    stalls: [
      {
        id: 0,
        username: "Fun with Flags",
        email: "sheldon@tbbt.com",
        products: [
          {
            id: "prod-shel-1",
            productName: "Zimbabwean Flag",
          },
          {
            id: "prod-shel-2",
            productName: "Kenyan Flag",
          },
          {
            id: "prod-shel-3",
            productName: "Sourh Africa(the country)",
          },
        ],
      },
      {
        id: 1,
        username: "Jess Day tutoring",
        email: "jess@yahoo.com",
        products: [
          {
            id: "prod-jess-1",
            productName: "English Tutoring for kids",
          },
          {
            id: "prod-jess-2",
            productName: "Adult classes in English writing",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <img src={logo} />
      <Card />
      <StallCard />
      <button class="bg-gray-500  text-white font-bold py-2 px-4 border border-black-700 rounded">
        Book Stall 
      </button>
      
    </div>
  );
}

export default Booking;
