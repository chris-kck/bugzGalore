import React from "react";

function StallCard({ image, stallName, description, email }) {
  return (
    <div>
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img class="w-full" src={image} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{stallName}</div>
          <p class="text-grey-darker text-base">{description}</p>
          <p>
            Please contact <strong>{stallName}</strong> on: <br />
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StallCard;
