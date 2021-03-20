import React from "react";
import { Link } from "react-router-dom";
import dbData from "../assets/db";
import logo from "./market.jpg";
import Card from "./MarketCard";

function Landing() {
  const data = dbData;

  return (
    <div>
      <img class="max-auto" src={logo} />
      <div class="grid justify-items-stretch">
      <div class="justify-self-center grid-cols-6 gap-2 justify-self-center">
        <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
          CPT
        </button>
        <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
          JHB
        </button>
        <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
          KZN
        </button>
        <button class="uppercase px-2 py-2 rounded-full bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
          DUR
        </button><br/>
      </div>
      <br/>
      <div class="grid justify-items-stretch">
      <button class=" justify-self-center uppercase px-2 py-2 rounded-lg bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">
          MYLOCATION
          <div class="grid justify-items-stretch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            stroke="currentColor"
            class=" justify-self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          </div>
        </button>
      </div>
        {data.MarketOwners.map((market) => (
          <Link to={`market/${market.id}`}>
            <Card
              marketName={market.marketName}
              location={market.location}
              distance={(Math.random() * 5).toFixed(2)}
              image={market.image}
              key={market.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Landing;
