let kitchens = [{
    sellerInfo: {
      _id: "1",
      banner: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprodmigration%2Fweb%2Fbin%2F9ba90bf9-1c7b-3937-b9a7-7e081228a5d4.jpg?crop=1500%2C1000%2C0%2C0&resize=1180",
      name: "Pricilla",
      storeName: "Pricilla's Kitchen",
      city: {
        name: "Coventry",
        _id: "1",
      },
      contact: "07951696335",
      stars: 5,
      origin: {
        name: "Ghana",
        _id: "1",
      },
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    menu: [{
        _id: "1",
        foodPicUrl: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprodmigration%2Fweb%2Fbin%2F9ba90bf9-1c7b-3937-b9a7-7e081228a5d4.jpg?crop=1500%2C1000%2C0%2C0&resize=1180",
        title: "Egg and noodles",
        description: "This is a wider card with supporting text below as a natural This is a wider card with supporting text",
        ingredients: ["egg, nuddles, water, fish"],
        type: "regular",
        category: "mains",
        options: [{
            name: "Extra egg",
            price: 2.5,
            _id: "1",
          },
          {
            name: "Extra Pickles",
            price: "0.5",
            _id: "2",
          },
        ],
        price: 10.5,
      },
      {
        _id: "2",
        foodPicUrl: "https://images.food52.com/4z6v5eA2j44PZDsH3oWxFqQbjVc=/1536x1022/583d2633-65c0-43d6-9b52-cba0c8fa1399--2019-1210_nigerian-jollof-rice_3x2_rocky-luten_006.jpg",
        title: "Jollof Rice",
        description: "This is a wider card with supporting text below as a natural This is a wider card with supporting text",
        ingredients: ["egg, nuddles, water, fish"],
        category: "mains",
        type: "regular",
        options: [{
            name: "Extra egg",
            price: 2.5,
            _id: "1",
          },
          {
            name: "Extra Pickles",
            price: "0.5",
            _id: "2",
          },
        ],
        price: 5,
      },
    ],
  },
  {
    sellerInfo: {
      _id: "2",
      banner: "https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/44/54/47/UkXwrHEdQ7GY9oWZnRk3_authentic-west-african-jollof-rice-3447.jpg",
      name: "Daizy",
      storeName: "Sheffed by Daizy",
      city: {
        name: "leicester",
        _id: "2",
      },
      contact: "07951696335",
      stars: 4,
      origin: {
        name: "Nigeria",
        _id: "2",
      },
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    menu: [{
      _id: "1",
      foodPicUrl: "https://picsum.photos/200",
      title: "Egg and nuddles",
      description: "This is a wider card with supporting text below as a natural This is a wider card with supporting text",
      ingredients: ["egg, nuddles, water, fish"],
      type: "regular",
      category: "mains",
      options: [{
          name: "Extra egg",
          price: 2.5,
          _id: "1",
        },
        {
          name: "Extra Pickles",
          price: "0.5",
          _id: "2",
        },
      ],
      price: 5,
    }, ],
  },
  {
    sellerInfo: {
      _id: "3",
      banner: "http://www.afrizap.com/en/wp-content/uploads/sites/2/2016/03/10801920_1051304364895401_2645738535897653242_n.jpg",
      name: "Bridget",
      storeName: "Bridgets Kitchen",
      city: {
        name: "Birmingham",
        _id: "3",
      },
      contact: "07951696335",
      stars: 1,
      origin: {
        name: "Sierra Leone",
        _id: "3",
      },
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    menu: [{
      _id: "1",
      foodPicUrl: "https://picsum.photos/200",
      title: "Egg and nuddles",
      description: "This is a wider card with supporting text below as a natural This is a wider card with supporting text",
      ingredients: ["egg, nuddles, water, fish"],
      type: "regular",
      category: "mains",
      options: [{
          name: "Extra egg",
          price: 2.5,
          _id: "1",
        },
        {
          name: "Extra Pickles",
          price: "0.5",
          _id: "2",
        },
      ],
      price: 5,
    }, ],
  },
  {
    sellerInfo: {
      _id: "4",
      banner: "https://flavorverse.com/wp-content/uploads/2017/06/South-African-Food.jpg",
      name: "John",
      storeName: "John's Kitchen",
      city: {
        name: "Coventry",
        _id: "1",
      },
      contact: "07951696335",
      stars: 3,
      origin: {
        name: "Nigeria",
        _id: "2",
      },
      description: " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    menu: [{
      _id: "1",
      foodPicUrl: "https://picsum.photos/200",
      title: "Egg and nuddles",
      description: "This is a wider card with supporting text below as a natural This is a wider card with supporting text",
      ingredients: ["egg, nuddles, water, fish"],
      type: "regular",
      category: "mains",
      options: [{
          name: "Extra egg",
          price: 2.5,
          _id: "1",
        },
        {
          name: "Extra Pickles",
          price: "0.5",
          _id: "2",
        },
      ],
      price: 5,
    }, ],
  },
];

export function getKitchens() {
  return kitchens;
}