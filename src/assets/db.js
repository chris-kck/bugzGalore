const dbData = {
  MarketOwners: [
    {
      id: 0,
      username: "oldbiscuitmill",
      email: "biscuitstatstegood@mill.com",
      marketName: "Old Biscuit Mill",
      location: "THE OLD BISCUIT MILL, Woodstock",
      availableStalls: 27,
      YOCOAccount: "12343087123",
      stalls: [
        {
          id: 0,
          username: "moonpie",
          email: "sheldon@tbbt.com",
          stallName: "Fun with flags",
          image:
            "https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

          description:
            "My favourite show now has a merch line. Get yours soon!",
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
          id: 0,
          username: "nicknjess4eva",
          email: "jess@yahoo.com",
          image:
            "https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://theoldbiscuitmill.co.za/wp-content/uploads/2019/03/theoldbiscuitmill-logo-dark.png",
    },
    {
      id: 1,
      username: "millicent",
      email: "milnertonmymarket@mills.com",
      marketName: "Milnerton Market",
      location: "Milnerton",
      availableStalls: 34,
      YOCOAccount: "9945962343",
      stalls: [
        {
          id: 1,
          username: "nicknjess4eva",
          email: "jess@yahoo.com",
          image:
            "https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
      image:
        "https://scontent-cpt1-1.xx.fbcdn.net/v/t1.0-9/41923616_2187947631277408_6840371658155360256_n.png?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGdqzLcIouI8eJurwHLzKf6viSpY1D7iM6-JKljUPuIzmux9CPVEuir1gnTLyfdPhRhn51b_5gacWbBY8MDnVq0&_nc_ohc=ovrwK7UT3DIAX_ydcdT&_nc_oc=AQl23OAdkJQLkuWxrBBI-1wYLYFgexQYrsn9fd40h4VQjbqB8X7-eaTtfXvgpPSCjWU&_nc_ht=scontent-cpt1-1.xx&oh=f1cdf81d90b8f03536119c852bce3156&oe=607ACF55",
    },
    {
      id: 2,
      username: "John",
      email: "milnertonmymarket@mills.com",
      marketName: "Neighbourgoods Market",
      location: "Milnerton",
      availableStalls: 34,
      YOCOAccount: "9945962343",
      stalls: [
        {
          id: 1,
          username: "nicknjess4eva",
          email: "jess@yahoo.com",
          image:
              "https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
      image:
          "https://theoldbiscuitmill.co.za/wp-content/uploads/2019/03/neighbourgoods-market-1.jpg",
    },
    {
      id: 3,
      username: "peter",
      email: "milnertonmymarket@mills.com",
      marketName: "Oranjezicht Market",
      location: "Waterfront",
      availableStalls: 34,
      YOCOAccount: "9945962343",
      stalls: [
        {
          id: 1,
          username: "nicknjess4eva",
          email: "jess@yahoo.com",
          image:
              "https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
      image:
          "https://i.pinimg.com/originals/29/a8/4a/29a84a8f11498418ad2a523922f6bd1c.jpg",
    },
    {
      id: 4,
      username: "mojo",
      email: "milnertonmymarket@mills.com",
      marketName: "Mojo Market",
      location: "Sea Point",
      availableStalls: 34,
      YOCOAccount: "9945962343",
      stalls: [
        {
          id: 1,
          username: "nicknjess4eva",
          email: "jess@yahoo.com",
          image:
              "https://images.unsplash.com/photo-1570169797118-99f5f90c4e25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
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
      image:
          "https://www.mojomarket.co.za/wp-content/uploads/2017/01/Mojo-Hotel.jpg",
    },
  ],
};

export default dbData;
