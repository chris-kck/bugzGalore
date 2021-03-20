import React from "react";
// this just shows a stall and it's name on the market view
function Stall({ name, image }) {
  return (
    <div>
      <div class="m-4 flex items-center justify-center ">
        <figure class="relative max-w-xs cursor-pointer">
          <img class="rounded-lg shadow-xl hover:shadow-2xl" src={image} />
          <figcaption class="absolute text-lg -mt-16 text-white px-4">
            <div>
              <h3>{name}</h3>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Stall;
