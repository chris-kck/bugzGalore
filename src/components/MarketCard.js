import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/market.jpg";

function Card({ marketName, location, image, distance }) {
  return (
    <div>
      <div class="m-4 bg-gray-20 flex justify-center items-center">
        <div class="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
          <div id="header" class="flex">
            <img src={image ?? logo} width="130" height="3" />
            <div id="body" class="flex flex-col ml-5">
              <h4 id="name" class="text-xl font-semibold mb-2">
                {marketName}
              </h4>
              <p id="locale" class="text-gray-800 mt-2">
                {location}
              </p>
              <div class="flex mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  stroke="currentColor"
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
                <p class="ml-3">{distance ?? "Nearby"}km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
