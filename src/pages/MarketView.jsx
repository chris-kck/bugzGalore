import logo from "./../assets/market.jpg";
import React from "react";
import Card from "../components/MarketCard";
import Stall from "../components/Stall";
import { Link, useParams } from "react-router-dom";
import dbData from "./../assets/db";

function MarketView() {
  const { marketId } = useParams();
  const markets = dbData;

  const data = markets.MarketOwners[marketId]; // this is a market detail

  return (
    <div>
      <img src={logo} />
      <Card
        marketName={data.marketName}
        location={data.location}
        distance={(Math.random() * 5).toFixed(2)}
        image={data.image}
        key={data.id}
      />
      <div class="grid grid-cols-2 gap-4">
        {data.stalls.map((stall) => (
          <div className="">
            <Link to={`/market/${data.id}/${stall.id}`} key={stall.id}>
              <Stall name={stall.stallName} image={stall.image} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MarketView;