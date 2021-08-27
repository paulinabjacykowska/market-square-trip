const restaurantPodPapugami = {
  name: 'Pod Papugami',
  address: {
    street: 'Sukiennice 9a',
    postcode: '50 - 107',
    city: 'Wrocław',
  },
  tags: ['wszystko', 'obiady', 'śniadania', 'makarony', 'zupy', 'ogródek'],
  pictures: {
    picture1: require('../images/restaurants/podPapugami.jpg'),
    picture2: require('../images/restaurants/podPapugami2.jpg'),
    picture3: require('../images/restaurants/podPapugami.jpg'),
    picture4: require('../images/restaurants/podPapugami2.jpg'),
  },
  marker: {
    latitude: 51.108553492575425,
    longitude: 17.034781705588102,
  },

  menu: {
    'Lasagne Bolonese': {
      price: 28,
      glutenFree: false,
      vegan: false,
      vegetarian: false,
      more:
        'Skład: makaron, beszamel, sos pomidorowy z mięsem. produkt gotowy do spożycia po wcześniejszym podgrzaniu w piekarniku lub kuchence mikrofalowej.',
    },
    'Zupa pomidorowa z podgrzybków, 900ml': {
      price: 32,
      glutenFree: false,
      vegan: false,
      vegetarian: true,
    },
    'Barszcz czerwony, 900ml': {
      price: 25,
      glutenFree: false,
      vegan: false,
      vegetarian: true,
    },
    'Krem z grzybów leśnych, 900ml': {
      price: 36,
      glutenFree: false,
      vegan: false,
      vegetarian: true,
    },
    'Strogonow wołowy, 900ml': {
      price: 25,
      glutenFree: false,
      vegan: false,
      vegetarian: false,
    },
  },
  openHours: {
    Monday: [12, 18],
    Thuesday: [12, 18],
    Wednesday: [12, 18],
    Thursday: [12, 18],
    Friday: [12, 18],
    Saturday: [12, 18],
    Sunday: [12, 18],
  },
  link: 'https://podpapugami.com.pl',
  phoneNumber: '+48 71 343 92 75',
  more: 'Więcej informacji o restauracji',
};

const restaurantOsiemMisek = {
  name: 'Osiem Misek',
  address: {
    street: 'Pawła Włodkowica 27',
    postcode: '50-072',
    city: 'Wrocław',
  },
  tags: [
    'wszystko',
    'obiady',
    'makarony',
    'wegetariańskie',
    'tofu',
    'muzyka na zywo',
  ],
  pictures: {
    picture1: require('../images/restaurants/osiemMisek.jpg'),
    picture2: require('../images/restaurants/osiemMisek.jpg'),
    picture3: require('../images/restaurants/osiemMisek.jpg'),
  },
  marker: {
    latitude: 51.1123150242673,
    longitude: 17.031239178031683,
  },
  menu: {
    potrawaNr1: {
      price: 100,
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      eco: true,
      more: '',
    },
  },
  openHours: {
    Monday: [12, 22],
    Tuesday: [12, 22],
    Wednesday: [12, 22],
    Thursday: [12, 22],
    Friday: [12, 22],
    Saturday: [12, 22],
    Sunday: [12, 22],
  },
  link: 'https://www.osiemmisek.pl',
  phoneNumber: '+48 510 021 685',
};

const restaurantRestauracjaWroclawska = {
  name: 'Restauracja Wrocławska',
  address: {
    street: 'Szewska 59',
    local: 60,
    postcode: ' 50-139',
    city: 'Wrocław',
  },
  tags: ['wszystko', 'obiady', 'zupy', 'polskie'],
  pictures: {
    picture1: require('../images/restaurants/restauracjaWroclawska.jpg'),
    picture2: require('../images/restaurants/restauracjaWroclawska.jpg'),
    picture3: require('../images/restaurants/restauracjaWroclawska.jpg'),
    picture4: require('../images/restaurants/restauracjaWroclawska.jpg'),
  },
  marker: {
    latitude: 51.10737531042388,
    longitude: 17.029016967862844,
  },
  menu: {
    'ZUPA Z RAKÓW': {
      price: 28,
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      more:
        'rak, szyjki rakowe, seler naciowy, pomidor koktajlowy, masło czosnkowe, pieczywo razowe',
    },
    'ŻUREK WROCŁAWSKI W CHLEBIE': {
      price: 24,
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      more:
        'naturalny zakwas, boczek wędzony, biała kiełbasa, grzyby, jajko (300g)',
    },
    'SAŁATKA Z GRUSZKĄ': {
      price: 23,
      vegetarian: true,
      vegan: false,
      glutenFree: true,
      more: 'ananas, gruszka, ser camembert, sos miodowo-musztardowy (300g)',
    },
  },
  openHours: {
    Monday: [12, 18],
    Tuesday: [12, 18],
    Wednesday: [12, 18],
    // Thursday: [12, 18],
    Friday: [12, 18],
    Saturday: [12, 18],
    Sunday: [12, 18],
  },
  link: ' wroclawska.com.pl',
  phoneNumber: '+48 71 305 12 28',
};

const restaurantMamaManousch = {
  name: 'Mama Manousch | Tagine Bar & Restaurant',
  address: {
    street: 'Świdnicka 4',
    postcode: '50-067',
    city: 'Miasto',
  },
  tags: ['wszystko', 'hummus', 'obiady', 'tatar'],
  pictures: {
    picture1: require('../images/restaurants/mamaManousch.jpg'),
    picture2: require('../images/restaurants/mamaManousch.jpg'),
    picture3: require('../images/restaurants/mamaManousch.jpg'),
    picture4: require('../images/restaurants/mamaManousch.jpg'),
    picture5: require('../images/restaurants/mamaManousch.jpg'),
  },
  marker: {
    latitude: 51.111260482735055,
    longitude: 17.03786490485072,
  },
  openHours: {
    Tuesday: [13, 21],
    Wednesday: [13, 21],
    Thursday: [13, 21],
    Friday: [13, 22],
    Saturday: [12, 22],
    Sunday: [12, 19],
  },
  link: 'link do strony',
  phoneNumber: '+48 123123123',
  more: 'Więcej informacji o restauracji',
};

const restaurantPrzedwojenna = {
  name: 'Przedwojenna',
  address: {
    street: 'Świętego Mikołaja 81',
    postcode: '53-663',
    city: 'Wrocław',
  },
  tags: ['wszystko', 'alkohole', 'bar', 'polska', 'europejska', 'ogródek'],
  pictures: {
    picture1: require('../images/restaurants/przedwojenna.jpg'),
    picture2: require('../images/restaurants/przedwojenna.jpg'),
  },
  openHours: {
    Monday: [9, 15],
    Tuesday: [9, 15],
    Wednesday: [15, 21],
    Thursday: [9, 15],
    Friday: [9, 17],
    Saturday: [10, 17],
    Sunday: [10, 17],
  },
  marker: {
    latitude: 51.10970626595061,
    longitude: 17.04035533592105,
  },
  link: 'https://przedwojenna.eatbu.com/?lang=pl',
  phoneNumber: '+48 791 120 525',
  more:
    'Restauracja pozwala cofnąć się w czasie do klimatów przedwojennej Warszawy (mimo że znajduje się we Wrocławiu). Atmosfera i gwar panujący w lokalu sprzyja poznawaniu nowych ludzi przy kieliszeczku i talerzyku tatara :)',
};

const restaurantPodFredra = {
  name: 'Restauracja Pod Fredrą',
  address: {
    street: ' Rynek Ratusz',
    postcode: '50-116',
    city: 'Wrocław',
  },
  tags: ['wszystko', 'śniadania', 'obiady'],
  pictures: {
    picture1: require('../images/restaurants/podFredra.jpg'),
    picture2: require('../images/restaurants/podFredra2.jpg'),
    picture3: require('../images/restaurants/podFredra3.jpg'),
  },
  marker: {
    latitude: 51.10980435736176,
    longitude: 17.030932400375605,
  },
  menu: {
    'Andrut czekoladowo-orzechowy babci Stefci': {
      price: 19.9,
      vegetarian: true,
      vegan: false,
      glutenFree: false,
    },
  },
  openHours: {
    Monday: [11, 23],
    Tuesday: [11, 23],
    Wednesday: [11, 23],
    Thursday: [11, 23],
    Friday: [11, 23],
    Saturday: [11, 23],
    Sunday: [11, 23],
  },
  link: 'http://www.podfredra.pl',
  phoneNumber: '+48 71 341 13 35',
};

const restaurantPochlebna = {
  name: 'Pochlebna',
  address: {
    street: 'Świętego Antoniego 15',
    postcode: '50-073',
    city: 'Wrocław',
  },
  tags: ['wszystko', 'śniadania'],
  pictures: {
    picture1: require('../images/restaurants/pochlebna.jpg'),
    picture2: require('../images/restaurants/pochlebna.jpg'),
    picture3: require('../images/restaurants/pochlebna.jpg'),
    picture4: require('../images/restaurants/pochlebna.jpg'),
  },
  marker: {
    latitude: 51.109501662594695,
    longitude: 17.02415680512786,
  },
  openHours: {
    Monday: [9, 19],
    Tuesday: [9, 18],
    Wednesday: [9, 19],
    // Thursday: [9, 21],
    Friday: [9, 20],
    Saturday: [9, 17],
  },
  link: 'https://pochlebna.pl',
  phoneNumber: '+48 733 035 081',
};

export const restaurants = [
  restaurantPochlebna,
  restaurantMamaManousch,
  restaurantOsiemMisek,
  restaurantPodFredra,
  restaurantPodPapugami,
  restaurantPrzedwojenna,
  restaurantRestauracjaWroclawska,
];
