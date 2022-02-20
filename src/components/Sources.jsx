

export const coins =  {
  // done: researched
  'Bitcoin': {
    countries: [["USA" , "35%"],["Kazakhstan","18%"], ["Russia" , "11%"],  ],
    carbon: 1052.76, // kgCO2
    fact: "One bitcoin transaction can power the typical American home for six weeks, or about $176."
  },
  // done: researched
  'Ethereum': {
    countries: [["USA" , "42%"], ["Germany", "15%"], ["United Kingdom", "5%"], ],
    carbon: 125.84, // kgCO2
    fact: "One Ethereum transaction has the energy consumption of several thousands of VISA card transactions."
  },
  // done: researched
  'Solana': {
    countries: [["USA", ''], ["Canada", ''], ["Australia", '']],
    carbon: 0.000237,
    fact: "One solana transaction uses less energy than two Google searches."
  },
  // done
  'DogeCoin': {
    countries: [["Bangladesh", ''], ["Pakistan", ''], ["Philippines", '']],
    carbon: 281.63,
    fact: "One DogeCoin transaction uses about half the energy of a house fan running for 1 hour."
  },
  // done
  'Tether': {
    countries: [["China"], ["USA"], ["Iran"]],
    carbon: 0.000237,
    fact: "Tether can't be mined. It's fixed to the US Dollar."
  },
  // done
  'ShibaInu': {
    countries: [["USA", ''], ["India", ''], ["Canada", '']],
    carbon: 125.84,
    fact: "Shiba Inu is based on Ethereum, so it has approximately the same carbon footprint per transaction."
  },
  // done
  'XRP': {
    countries: [["Germany", ''], ["France", ''], ["USA", '']],
    carbon: 0.000237,
    fact: "There are a fixed amount of XRP that can be circulated. They're pre-mined, so energy per transaction is very low."
  },
  // done
  'Cardano': {
    countries: [["Netherland", ''], ["Ireland", ''], ["Australia", '']],
    carbon: 0.117,
    fact: "Cardano is an eco-friendly crypto, which consumes about the same amount of energy as 600 U.S. homes each year."
  },
  'Stellar': {
    countries: [["USA", ''], ["United Kingdom", ''], ["Australia", '']],
    carbon: 0.028,
    fact: "Stellar is not a proof of work network nor a proof of stake, it is much more energy efficient! Pivotal for longevity, recently partnered with Ukraine"
  },
  'Terra': {
    countries: [["USA", ''], ["Canada", ''], ["Australia", '']],
    carbon: 0.000237, // number is not updated
    fact: "Terra Virtua claims that the network would allow the ecosystem to reduce energy consumption used to create an NFT by more than 99%!"
  },
  
}

export const countries = {
    "Argentina": {
      projects: [{
        name: 'Init 1',
        link: ''
      }, 
      {
        name: 'Init 2',
        link: ''
      },
      {
        name: 'Init 3',
        link: ''
      }],
       picture: 'https://www.lutheranworld.org/sites/default/files/styles/news_item/public/argentina-reforestation.jpg?itok=LXSvXulF',
      flagCode: 'ar'
      },
    "Australia": {
      projects: [{
        name: 'Greening Australia',
        link: 'https://www.greeningaustralia.org.au/donate/'
      }, 
      {
        name: 'ClimateWorks',
        link: 'https://www.climateworksaustralia.org/donate/'
      },
      {
        name: 'Australia - Friends of the Earth',
        link: 'https://www.foe.org.au/donate'
      }],
       picture: 'https://i.guim.co.uk/img/media/0b21b3c1466fd3307aa63c6cd8f72da60d93e6e4/395_358_3043_1826/master/3043.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8e1145ae125cdd22f5aab9b97db6d5ed',
      flagCode: 'au'
      },
    "Bangladesh": {
      projects: [{
        name: 'Bangladesh Environment and Development Society (BEDS)',
        link: 'https://www.globalgiving.org/donate/14763/bangladesh-environment-and-development-society-beds/'
      }, 
      {
        name: 'Climate Displacement In Bangladesh',
        link: 'https://ejfoundation.org/reports/climate-displacement-in-bangladesh'
      },
      ],
       picture: 'https://www.globalgiving.org/pfil/41260/pict_large.jpg',
      flagCode: 'bd'
      },
    "Brazil": {
      projects: [{
        name: 'Pacajai REDD + Project',
        link: 'https://www.catf.us/'
      }, 
      {
        name: 'Fazenda Sao Nicolao',
        link: 'https://pachama.com/explorer/projects/la-fazenda'
      },
      ],
       picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
      flagCode: 'br'
      },
    "Canada": {
      projects: [
        {
          name: 'Water First',
          link: 'https://waterfirst.ngo/'
        },
        {
          name: 'The Conservancy of Canada',
          link: 'https://www.canadahelps.org/en/charities/nature-conservancy-of-canada/'
        }
      ],
      picture: 'https://media.washtimes.com/media/image/2019/12/03/what_can_be_saved_trees_57165.jpg',
      flagCode: 'ca'
    },
    "China": {
      projects: [{
        name: 'China Global Conservation Fund',
        link: 'https://www.nature.org/en-us/about-us/where-we-work/asia-pacific/china/stories-in-china/china-climate-change-solutions--mitigation/'
      }, 
      {
        name: 'Ocean Conservancy',
        link: 'https://oceanconservancy.org/'
      },
      ],
      picture: 'http://www.chinadaily.com.cn/business/greenchina/images/attachement/jpg/site1/20140311/002564bc67451489406a3f.jpg',
      flagCode: 'cn'
    },
    "Egypt": {
      projects: [{
        name: 'init 1',
        link: ''
      }, 
      {
        name: 'init 2',
        link: ''
      },
      {
        name: 'init 3',
        link: ''
      }],
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png',
      flagCode: 'ar'
    },
    "France": {
      projects: [
        {
          name: 'Climate & Clean Air Coalition',
          link: 'https://www.ccacoalition.org/en/partners/france'
        }, 
        {
          name: 'Les Amis de la Terre France',
          link: 'https://www.foei.org/member-groups/europe/france'
        }
      ],
      picture: 'https://www.reuters.com/resizer/dtxR0S8Rf2irqcmXrT99dkYCMKg=/480x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EO5YO4G4BRJ7ZMSNQC2V2PV5EE.jpg',
      flagCode: 'fr'
    },
    "Germany": {
      projects: [{
        name: 'Adaptation Fund',
        link: 'https://www.adaptation-fund.org/about/partners-supporters/germany/'
      }, 
      {
        name: 'Friends of the Earth International',
        link: 'https://www.foei.org/what-we-do/climate-justice-and-energy'
      },
      ],
      picture: 'https://603200.smushcdn.com/1038623/wp-content/uploads/2019/08/IMG_9691-1080x675.jpg',
      flagCode: 'de'
    },
    "India": {
      projects: [{
        name: 'Devarahipparigi Wind Power Project',
        link: 'https://offsetra.com/projects/devarahipparigi'
      }, 
      {
        name: 'TIST India',
        link: 'https://pachama.com/explorer/projects/tist-india-reforestation'
      },
      ],
      picture: 'https://i.pinimg.com/736x/91/6a/97/916a97626375623eca7714bd167a7a58.jpg',
      flagCode: 'in'
    },
    "Iran": {
      projects: [
        {
          name: 'Omid Foundation USA',
          link: 'https://projectworldimpact.com/organization/omid-foundation-usa'
        }, 
        {
          name: 'Eevah',
          link: 'https://projectworldimpact.com/organization/eevah'
        },
      ],
      picture: 'https://media.washtimes.com/media/image/2019/12/03/what_can_be_saved_trees_57165.jpg',
      flagCode: 'ir'
    },
    "Ireland": {
      projects: [
        {
          name: 'Irish Seed Savers',
          link: 'https://irishseedsavers.ie/'
        }, 
        {
          name: 'Irish Wildlife Trust',
          link: 'https://iwt.ie/about-us/'
        },
      ],
      picture: 'https://iwt.ie/wp-content/uploads/2017/11/Pine-Marten-in-bluebells-by-Noel-Marry.jpg',
      flagCode: 'ie'
    },
    "Kazakhstan": {
      projects: [{
        name: 'Empower!',
        link: 'https://www.globalgiving.org/search/?size=25&nextPage=1&sortField=sortorder&selectedLocations=00kazakh&loadAllResults=true'
      }, 
      {
        name: 'Kazakhstan - unicef',
        link: 'https://www.unicef.org/kazakhstan/en/make-your-contribution-now'
      },
      ],
      picture: 'https://astanatimes.com/wp-content/uploads/2019/10/IMG_1669.jpg',
      flagCode: 'kz'
    },
    "Netherlands": {
      projects: [
        {
          name: 'Ecosystem Restoration',
          link: 'https://www.globalgiving.org/projects/empower-41-communities-to-restore-their-ecosystems/'
        }, 
        {
          name: 'Translating Sustainability into 16 Languages',
          link: 'https://www.globalgiving.org/projects/translating-sustainability-training-books-into-16/'
        }
      ],
      picture: 'https://files.globalgiving.org/pfil/51167/pict_large.png',
      flagCode: 'nl'
    },
    "Pakistan": {
      projects: [
        {
          name: '1Million trees to fight climate change in Pakistan',
          link: 'https://www.globalgiving.org/projects/million-trees-to-fight-climate-change-in-pakistan/donate/#:~:text=Donate%20by%20Mobile%20Phone,and%20data%20rates%20may%20apply.'
        }, 
        {
          name: 'Care',
          link: 'https://www.care.org.au/country/pakistan/'
        }
      ],
      picture: 'https://www.caritas.org/wordpress/wp-content/uploads/2020/05/OneMillionTrees2-1024x768.jpg',
      flagCode: 'pk'
    },
    "Philippines": {
      projects: [
        {
          name: 'GREENPEACE',
          link: 'https://www.greenpeace.org/philippines/fundraising/'
        }, 
        {
          name: 'WWF',
          link: 'https://wwf.org.ph/donate-onetime/'
        }
      ],
      picture: 'https://www.lutheranworld.org/sites/default/files/styles/news_item/public/philippines-youth-environment-day.jpg',
      flagCode: 'ph'
    },
    "Russia": {
      projects: [{
        name: 'PosadiLes',
        link: 'https://posadiles.ru/?lang=en'
      }, 
      {
        name: 'Friends of the Earth Russia',
        link: 'https://www.foei.org/member-groups/asia-pacific/russia'
      },
      ],
      picture: 'https://i0.wp.com/saiuniverse.sathyasai.org/cms/wp-content/uploads/2019/11/2019.05.23-Z8-Russia-Northwest-region-tree-planting-4-copy.jpg?resize=800%2C600',
      flagCode: 'ru'
    },
    "Spain": {
      projects: [{
        name: 'init 1',
        link: ''
      }, 
      {
        name: 'init 2',
        link: ''
      },
      {
        name: 'init 3',
        link: ''
      }],
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg',
      flagCode: 'es'
    },
    "South Korea": {
      projects: [{
        name: 'init 1',
        link: ''
      }, 
      {
        name: 'init 2',
        link: ''
      },
      {
        name: 'init 3',
        link: ''
      }],
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg',
      flagCode: 'ar'
    },
    "United Kingdom": {
      projects: [{
        name: 'Founders Pledge',
        link: 'https://funds.effectivealtruism.org/partners/founders-pledge-climate-change-fund?utm_source=netpositive.money&utm_medium=site&utm_campaign=bitcoin'
      }, 
      {
        name: 'The Wildlife Trusts',
        link: 'https://www.wildlifetrusts.org/'
      },
      {
        name: 'British Ecological Society',
        link: 'https://www.britishecologicalsociety.org/'
      }],
      picture: 'https://i.guim.co.uk/img/media/3974f187b46eaea4766579d70d6c59766ccc6b07/0_0_5184_3110/master/5184.jpg?width=1200&quality=85&auto=format&fit=max&s=be687043eddeeca64bb192a769341717',
      flagCode: 'gb'
    },
    "USA": {
      projects: [
        {
          name: 'TeamTrees',
          link: 'https://teamtrees.org/'
        }, 
        {
          name: 'Clean Air Task Force',
          link: 'https://www.catf.us/'
        }
      ],
      picture: 'http://www.msstate.edu/sites/www.msstate.edu/files/inline-images/Arbor-Day_20170210_RWL4714-1.jpg',
      flagCode: 'us'
    },
      
  }