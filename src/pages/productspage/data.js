const menu = [
    {
      id: 1,
      title: 'Pork Belly',
      category: 'Pork',
      price: 7400,
      
      img:
      require("../../assets/pork/belly.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 2,
      title: 'Pork Leg',
      category: 'Pork',
      price:8500,
      
      img:
      require("../../assets/pork/leg.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 3,
      title: 'Pork Loin',
      category: 'Pork',
      price:  8500,
      
      img: require("../../assets/pork/loin.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 4,
      title: 'Pork Neck',
      category: 'Pork',
      price: 8500,
      
      img:
      require("../../assets/pork/neck.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 5,
      title: 'Pork rib',
      category: 'Pork',
      price: 7400,
      
      img:
      require("../../assets/pork/rib.jpg"),
      perunit: 'Ks/kg'
    },


    //CHICKEN
    {
      id: 6,
      title: 'Chicken Breast CP',
      category: 'Chicken',
      price: 5000,
      
      img: require("../../assets/Chicken/ChickenBreastCP.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 7,
      title: 'Chicken Thigh CP',
      category: 'Chicken',
      price: 5000,
      
      img: require("../../assets/Chicken/ChickenThighCP.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 8,
      title: 'Chicken Feet CP',
      category: 'Chicken',
      price: 3750 ,
      
      img: require("../../assets/Chicken/ChickenFeetCP.jpg"),
      perunit: 'Ks/kg'
    },
    {
      id: 9,
      title: 'Chicken Head CP',
      category: 'Chicken',
      price: 3750,
      
      img: require("../../assets/Chicken/ChickenHeadCP.jpg"),
      perunit: 'Ks/kg'
    },
    {
        id: 10,
        title: 'Chicken Wings CP',
        category: 'Chicken',
        price: 3750,
        
        img: require("../../assets/Chicken/ChickenWingsCP.jpg"),
        perunit: 'Ks/kg'
      },
    {
        id: 11,
        title: 'Chicken Gizzard CP',
        category: 'Chicken',
        price: 1500,
        
        img: require("../../assets/Chicken/ChickengizzardCP.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 12,
        title: 'Whole Chicken CP',
        category: 'Chicken',
        price: 5000,
        
        img: require("../../assets/Chicken/WholeChickenCP.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 13,
        title: 'Whole Chicken Burmese',
        category: 'Chicken',
        price: 10500,
        
        img: require("../../assets/Chicken/WholeChickenBurmese.jpg"),
        perunit: 'Ks/kg'
      },

      //SeaFood--------------------------------------------------------------
      {
        id: 14,
        title: 'Ngajin',
        category: 'Seafood',
        price: 6750,
        
        img: require("../../assets/Seafood/Ngajin.jpg"),
        perunit: 'Ks/kg'
        
      },
      {
        id: 15,
        title: 'NgaMyitchin',
        category: 'Seafood',
        price: 3250,
        
        img: require("../../assets/Seafood/NgarMyitchin.jpg"),
        perunit: 'Ks/kg'
        
      },{
        id: 16,
        title: 'Kakatit',
        category: 'Seafood',
        price: 6750,
        
        img: require("../../assets/Seafood/kakatit.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 17,
        title: 'Ngakuu',
        category: 'Seafood',
        price: 3750,
        
        img: require("../../assets/Seafood/Ngakuu.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 18,
        title: 'Ngayant',
        category: 'Seafood',
        price: 8750,
        
        img: require("../../assets/Seafood/Ngayant.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 19,
        title: 'Ngathalout',
        category: 'Seafood',
        price:13750 ,
        
        img: require("../../assets/Seafood/Ngathalout.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 20,
        title: 'Crab',
        category: 'Seafood',
        price: 8750,
        
        img: require("../../assets/Seafood/Crab.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 21,
        title: 'Blue Crab',
        category: 'Seafood',
        price: 12500,
        
        img: require("../../assets/Seafood/BlueCrab.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 22,
        title: 'Flower Crab',
        category: 'Seafood',
        price: 7500 ,
        
        img: require("../../assets/Seafood/FlowerCrab.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 23,
        title: 'PuzunHtote',
        category: 'Seafood',
        price: 12500,
        
        img: require("../../assets/Seafood/PuzunHtote.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 24,
        title: 'PuzunKyawt',
        category: 'Seafood',
        price: 8750,
        
        img: require("../../assets/Seafood/PuzunKyawt.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 25,
        title: 'Puzunsate',
        category: 'Seafood',
        price: 5000,
        
        img: require("../../assets/Seafood/Puzunsate.jpg"),
        perunit: 'Ks/kg'
      },{
        id: 26,
        title: 'TigerPrawn',
        category: 'Seafood',
        price: 17500,
        
        img: require("../../assets/Seafood/TigerPrawn.jpg"),
        perunit: 'Ks/kg'
      },

      //Beef------------------------------------
      {
        id: 27,
        title: 'Beef Tenderloin',
        category: 'Beef',
        price: 13750,
        
        img: require("../../assets/Beef/BeefTenderloin.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 28,
        title: 'Beef Brisket',
        category: 'Beef',
        price: 10000,
        
        img: require("../../assets/Beef/BeefBrisket.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 29,
        title: 'Beef Loin',
        category: 'Beef',
        price: 11250,
        
        img: require("../../assets/Beef/BeefLoin.jpg"),
        perunit: 'Ks/kg'
      },

      //Lamb
      {
        id: 30,
        title: 'LambSpleen',
        category: 'Lamb',
        price: 11250,
        
        img: require("../../assets/Lamb/LambSpleen.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 31,
        title: 'LambLeg',
        category: 'Lamb',
        price: 17500,
        
        img: require("../../assets/Lamb/LambLeg.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 32,
        title: 'Lamb Tenderloin',
        category: 'Lamb',
        price: 18750,
        
        img: require("../../assets/Lamb/Lambtenderloin.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 33,
        title: 'Lamb Chop',
        category: 'Lamb',
        price: 11250,
        
        img: require("../../assets/Lamb/LambRib.jpg"),
        perunit: 'Ks/kg'
      },
      {
        id: 34,
        title: 'Lamb Brain (per piece)',
        category: 'Lamb',
        price: 1700,
        
        img: require("../../assets/Lamb/LambBrain.jpg"),
        perunit: '/piece'
      },
      {
        id: 35,
        title: 'Lamb Loin Chop',
        category: 'Lamb',
        price: 18750,
        
        img: require("../../assets/Lamb/LambLoinChop.jpg"),
        perunit: 'Ks/kg'
      },
      
      //Veg-----------------------------------------------------------------------------------

      {
        id: 36,
        title: 'Bitter Guard',
        category: 'Vegetable',
        price: 500,
        
        img: require("../../assets/vegs/bitterguard.jpg"),
        perunit: '/piece'
      },
      {
        id: 37,
        title: 'BoneLoneThee',
        category: 'Vegetable',
        price: 400,
        
        img: require("../../assets/vegs/BoneLoneThee.jpg"),
        perunit: '/piece'
      },
      {
        id: 38,
        title: 'BooThee',
        category: 'Vegetable',
        price: 1500,
        
        img: require("../../assets/vegs/BooThee.jpg"),
        perunit: '/piece'
      },
      {
        id: 39,
        title: 'Chinese Cabbage',
        category: 'Vegetable',
        price: 500,
        
        img: require("../../assets/vegs/ChineseCabbage.jpg"),
        perunit: '/bud'
      },
      {
        id: 40,
        title: 'Cucumber',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/Cucumber.jpg"),
        perunit: '/piece'
      },
      {
        id: 41,
        title: 'EggPlant',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/EggPlant.jpg"),
        perunit: '/piece'
      },
      {
        id: 42,
        title: 'Savoy Cabbage',
        category: 'Vegetable',
        price: 2000,
        
        img: require("../../assets/vegs/SavoyCabbage.jpg"),
        perunit: '/bud'
      },
      {
        id: 43,
        title: 'Broccoli',
        category: 'Vegetable',
        price: 1200,
        
        img: require("../../assets/vegs/Broccoli.jpg"),
        perunit: '/bud'
      },
      {
        id: 44,
        title: 'Green Chilli',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/GreenChilli.jpg"),
        perunit: '/100g'
      },
      {
        id: 45,
        title: 'Hin Nu Nwal',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/HinNuNwal.jpg"),
        perunit: '/bundle'
      },
      {
        id: 46,
        title: 'Ga Zoon Yuat',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/GazoonYuat.jpg"),
        perunit: '/bundle'
      },
      {
        id: 47,
        title: 'Lemon',
        category: 'Vegetable',
        price: 500,
        
        img: require("../../assets/vegs/Lemon.jpg"),
        perunit: '/piece'
      },
      {
        id: 48,
        title: 'Lime',
        category: 'Vegetable',
        price: 100 ,
        
        img: require("../../assets/vegs/Lime.jpg"),
        perunit: '/piece'
      },
      {
        id: 49,
        title: 'Carrot',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/Carrot.jpg"),
        perunit: '/100g'
      },
      {
        id: 50,
        title: 'White Carrot',
        category: 'Vegetable',
        price: 500,
        
        img: require("../../assets/vegs/WhiteCarrot.jpg"),
        perunit: '/bundle'
      },
      {
        id: 51,
        title: 'Coriander',
        category: 'Vegetable',
        price: 200,
        
        img: require("../../assets/vegs/Coriander.jpg"),
        perunit: '/bundle'
      },
      {
        id: 52,
        title: 'Bean Sprout',
        category: 'Vegetable',
        price: 250,
        
        img: require("../../assets/vegs/BeanSprout.jpg"),
        perunit: '/100g'
      },
      {
        id: 53,
        title: 'Mint Leaf',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/MintLeaves.jpg"),
        perunit: '/bundle'
      },
      {
        id: 54,
        title: 'CauliFlower',
        category: 'Vegetable',
        price: 1500,
        
        img: require("../../assets/vegs/CauliFlower.jpg"),
        perunit: '/piece'
      },
      {
        id: 55,
        title: 'Pumpkin',
        category: 'Vegetable',
        price: 300,
        
        img: require("../../assets/vegs/Pumpkin.jpg"),
        perunit: '/100g'
      },
      {
        id: 56,
        title: 'BokChoi',
        category: 'Vegetable',
        price: 250,
        
        img: require("../../assets/vegs/BokChoi.jpg"),
        perunit: '/bundle'
      },
      {
        id: 57,
        title: 'Cilantro',
        category: 'Vegetable',
        price: 200,
        
        img: require("../../assets/vegs/Cilantro.jpg"),
        perunit: '/bundle'
      },
      {
        id: 58,
        title: 'Tomato',
        category: 'Vegetable',
        price: 200 ,
        
        img: require("../../assets/vegs/Tomato.jpg"),
        perunit: '/100g'
      },
      {
        id: 59,
        title: 'Lady Finger',
        category: 'Vegetable',
        price: 100,
        
        img: require("../../assets/vegs/LadyFinger.jpg"),
        perunit: '/5pieces'
      },
      
      
  ]
  export default menu