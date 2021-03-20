import logo from "./market.jpg";
import React from "react";
import Card from "./MarketCard";
import Stall from "./Stall";
import { Link } from "react-router-dom";

function MarketView() {
  const data = {
    stalls: [
      {
        id: 0,
        username: "moonpie",
        email: "sheldon@tbbt.com",
        stallName: "Fun with flags",
        description: "My favourite show now has a merch line. Get yours soon!",
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
        username: "nicknjess4eva",
        email: "jess@yahoo.com",
        stallName: "Jessica Day Tutoring",
        description:
          "Your favourite quirky girl is here to help. How old are you again? Doesn't matter, I'll teach you!",
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
      <div class="grid grid-cols-2 gap-4">
        {data.stalls.map((stall) => (
          <div className="">
            <Link to={`/vendor/${stall.id}`} key={stall.id}>
              <Stall />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarketView;
