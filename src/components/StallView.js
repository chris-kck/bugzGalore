import React from "react";
import logo from "./market.jpg";
import Card from "./MarketCard";
import StallCard from "./StallCard";
import { useParams } from "react-router";
import dbData from "../assets/db";

function StallView() {
  const { market, stall } = useParams();
  const marketOwner = dbData.MarketOwners[market];
  const stallInfo = marketOwner.stalls[stall];
  return (
    <div>
      <img src={logo} />
      <Card
        marketName={marketOwner.marketName}
        location={marketOwner.location}
        distance={(Math.random() * 5).toFixed(2)}
        image={marketOwner.image}
        key={marketOwner.id}
      />
      <StallCard
        stallName={stallInfo.stallName}
        description={stallInfo.description}
        email={stallInfo.email}
        image={stallInfo.image}
        key={stallInfo.id}
      />
    </div>
  );
}

export default StallView;
