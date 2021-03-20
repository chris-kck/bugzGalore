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
      <div>
      <img src={logo} />
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Market Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Market Name"/>
    </div>

    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        image
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="upload"/>
    </div>

    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Date
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Date"/>
    </div>

    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Duration
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="0 days"/>
    </div>
    
    <div class ="flex items-center justify-between">
    {/*  */}
   
      <button  class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button" onClick={yokoSDK}>
        Book Stall
      </button>
      
     
    </div>
    
</div>
    </div>
      
    </div>
  );
}

const yocoSDK = new window.YocoSDK({
  publicKey: 'pk_test_ed3c54a6gOol69qa7f45'
});

//Popup Method
$('.popup button').click(() => {
  yocoSDK.showPopup({
      currency: 'ZAR',
      amountInCents: 5000,
      name: 'Varsity Eats Wings Payment',
      callback: response => {
          if(response.error){
              $('.popup p').html(response.error.message);
          }
          else{
              fetch('/pay', {
                  method: 'post',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ token: response.id })
              })
                  .then(res => res.json())
                  .then(data => {
                      if(data.errorCode){
                          $('.popup p').html(data.displayMessage);
                      }
                      else{
                          $('.popup p').html(data.status);
                      }
                  })
                  .catch(error => {
                      $('.popup p').html(error.message);
                  })
          }
      }
  })
})
export default Booking;
