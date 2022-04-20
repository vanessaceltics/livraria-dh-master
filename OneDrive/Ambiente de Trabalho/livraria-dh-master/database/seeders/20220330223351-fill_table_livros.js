'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('livros', [
      {
        titulo: "Recess: School''s Out",
        quantidade_paginas: 99,
        autor: 'Cheryl Herculeson',
        ano_lancamento: 2005,
        estoque: 75
      },
      {
        titulo: 'Riding Alone for Thousands of Miles (Qian li zou dan qi)',
        quantidade_paginas: 402,
        autor: 'Cicely Plaide',
        ano_lancamento: 1993,
        estoque: 39
      },
      {
        titulo: 'Player, The',
        quantidade_paginas: 178,
        autor: 'Binny Tofpik',
        ano_lancamento: 2000,
        estoque: 64
      },
      {
        titulo: 'Needle, The (Igla)',
        quantidade_paginas: 274,
        autor: 'Charleen Gundrey',
        ano_lancamento: 1993,
        estoque: 56
      },
      {
        titulo: 'End of the Game (Der Richter und sein Henker)',
        quantidade_paginas: 269,
        autor: 'Peri Rigbye',
        ano_lancamento: 2008,
        estoque: 25
      },
      {
        titulo: 'Maid in Sweden',
        quantidade_paginas: 336,
        autor: 'Konstance Vautre',
        ano_lancamento: 2006,
        estoque: 42
      },
      {
        titulo: 'Why Stop Now',
        quantidade_paginas: 307,
        autor: 'Marice Rupprecht',
        ano_lancamento: 2009,
        estoque: 8
      },
      {
        titulo: 'Almost You',
        quantidade_paginas: 90,
        autor: 'Siana Mably',
        ano_lancamento: 1994,
        estoque: 44
      },
      {
        titulo: 'Prom Night III: The Last Kiss',
        quantidade_paginas: 497,
        autor: 'Parnell Corson',
        ano_lancamento: 2003,
        estoque: 96
      },
      {
        titulo: 'Bothersome Man, The (Brysomme mannen, Den)',
        quantidade_paginas: 283,
        autor: 'Sutherlan Newiss',
        ano_lancamento: 1991,
        estoque: 77
      },
      {
        titulo: 'Hustler, The',
        quantidade_paginas: 218,
        autor: 'Deeann Jochanany',
        ano_lancamento: 1996,
        estoque: 30
      },
      {
        titulo: 'Along Came Jones',
        quantidade_paginas: 333,
        autor: 'Alejandro Warters',
        ano_lancamento: 2008,
        estoque: 9
      },
      {
        titulo: 'Barbershop 2: Back in Business',
        quantidade_paginas: 52,
        autor: 'Carlie Shall',
        ano_lancamento: 2011,
        estoque: 58
      },
      {
        titulo: 'Bridge, The (Die Brücke)',
        quantidade_paginas: 309,
        autor: 'Amber Blevin',
        ano_lancamento: 1990,
        estoque: 35
      },
      {
        titulo: 'Telling You',
        quantidade_paginas: 252,
        autor: 'Ignace MacDiarmond',
        ano_lancamento: 1998,
        estoque: 64
      },
      {
        titulo: 'Blood of Redemption',
        quantidade_paginas: 428,
        autor: 'Ignacius Ridesdale',
        ano_lancamento: 1998,
        estoque: 20
      },
      {
        titulo: 'Carry on Spying (Agent Oooh!)',
        quantidade_paginas: 490,
        autor: 'Carlota Storm',
        ano_lancamento: 2000,
        estoque: 1
      },
      {
        titulo: 'Nomads',
        quantidade_paginas: 155,
        autor: 'Galvin Barroux',
        ano_lancamento: 1996,
        estoque: 54
      },
      {
        titulo: 'Life and Death of Colonel Blimp, The',
        quantidade_paginas: 500,
        autor: 'Augie Levin',
        ano_lancamento: 1992,
        estoque: 16
      },
      {
        titulo: 'Waterloo',
        quantidade_paginas: 284,
        autor: 'Judd Oxbrough',
        ano_lancamento: 1999,
        estoque: 79
      },
      {
        titulo: 'Heart Is Deceitful Above All Things, The',
        quantidade_paginas: 119,
        autor: 'Loleta Comazzo',
        ano_lancamento: 2011,
        estoque: 3
      },
      {
        titulo: 'Soldiers of Fortune',
        quantidade_paginas: 229,
        autor: 'Mikaela Flintoffe',
        ano_lancamento: 2008,
        estoque: 3
      },
      {
        titulo: 'Simply Irresistible',
        quantidade_paginas: 286,
        autor: 'Tina Coldbathe',
        ano_lancamento: 1998,
        estoque: 32
      },
      {
        titulo: 'Subject Two',
        quantidade_paginas: 109,
        autor: 'Osbourn Darbey',
        ano_lancamento: 2007,
        estoque: 4
      },
      {
        titulo: 'Go for Broke!',
        quantidade_paginas: 378,
        autor: 'Alanna Plaster',
        ano_lancamento: 2010,
        estoque: 93
      },
      {
        titulo: 'Archie To Riverdale and Back Again',
        quantidade_paginas: 417,
        autor: 'Meggi Beadles',
        ano_lancamento: 1988,
        estoque: 59
      },
      {
        titulo: 'Alla älskar Alice',
        quantidade_paginas: 225,
        autor: 'Jeffry Gibbeson',
        ano_lancamento: 2004,
        estoque: 56
      },
      {
        titulo: 'Surgeon, The',
        quantidade_paginas: 264,
        autor: 'Garvey Cleworth',
        ano_lancamento: 1992,
        estoque: 87
      },
      {
        titulo: 'Daughter of Dr. Jeckyll',
        quantidade_paginas: 165,
        autor: 'Edythe Maurice',
        ano_lancamento: 2002,
        estoque: 89
      },
      {
        titulo: 'Chambermaid on the Titanic, The (Femme de chambre du Titanic, La)',
        quantidade_paginas: 115,
        autor: 'Marnia Cubberley',
        ano_lancamento: 1998,
        estoque: 75
      },
      {
        titulo: 'The Hearts of Age',
        quantidade_paginas: 378,
        autor: 'Tymon Girodin',
        ano_lancamento: 2010,
        estoque: 68
      },
      {
        titulo: 'Mr. Kinky',
        quantidade_paginas: 117,
        autor: 'Russ Collocott',
        ano_lancamento: 2009,
        estoque: 66
      },
      {
        titulo: 'Play it to the Bone',
        quantidade_paginas: 376,
        autor: 'Haily Stilldale',
        ano_lancamento: 1976,
        estoque: 74
      },
      {
        titulo: 'Love Field',
        quantidade_paginas: 126,
        autor: 'Johna Burgin',
        ano_lancamento: 2012,
        estoque: 52
      },
      {
        titulo: 'Dirty Love',
        quantidade_paginas: 210,
        autor: 'Hort Restorick',
        ano_lancamento: 2012,
        estoque: 40
      },
      {
        titulo: 'The Beaver Trilogy',
        quantidade_paginas: 127,
        autor: 'Maurene Rickell',
        ano_lancamento: 1995,
        estoque: 0
      },
      {
        titulo: 'Doppelgänger Paul',
        quantidade_paginas: 51,
        autor: 'Marrissa Woolford',
        ano_lancamento: 1994,
        estoque: 70
      },
      {
        titulo: 'Annabelle',
        quantidade_paginas: 123,
        autor: 'John Osbourn',
        ano_lancamento: 2003,
        estoque: 80
      },
      {
        titulo: 'Wild Wild West Revisited, The',
        quantidade_paginas: 158,
        autor: 'Daveen Boak',
        ano_lancamento: 2007,
        estoque: 40
      },
      {
        titulo: 'Aristocats, The',
        quantidade_paginas: 77,
        autor: 'Jason Ratie',
        ano_lancamento: 2009,
        estoque: 55
      },
      {
        titulo: 'Lionheart',
        quantidade_paginas: 184,
        autor: 'Adolf Detloff',
        ano_lancamento: 2009,
        estoque: 39
      },
      {
        titulo: 'Sometime in August (Mitte Ende August)',
        quantidade_paginas: 480,
        autor: 'Kitti Punshon',
        ano_lancamento: 2007,
        estoque: 13
      },
      {
        titulo: 'Criss Cross',
        quantidade_paginas: 53,
        autor: 'Ronica Shildrick',
        ano_lancamento: 2008,
        estoque: 94
      },
      {
        titulo: 'That Awkward Moment',
        quantidade_paginas: 140,
        autor: 'Trip Riguard',
        ano_lancamento: 1983,
        estoque: 50
      },
      {
        titulo: 'Last Days, The (Últimos días, Los)',
        quantidade_paginas: 281,
        autor: 'Armando Doswell',
        ano_lancamento: 2006,
        estoque: 86
      },
      {
        titulo: 'Fled',
        quantidade_paginas: 134,
        autor: 'Kenon Yong',
        ano_lancamento: 1995,
        estoque: 56
      },
      {
        titulo: 'Hope Springs',
        quantidade_paginas: 65,
        autor: 'Arther Mercy',
        ano_lancamento: 2006,
        estoque: 48
      },
      {
        titulo: "Final Inquiry, The (Inquiry, The) (inchiesta, L'')",
        quantidade_paginas: 162,
        autor: 'Hannie Seres',
        ano_lancamento: 1994,
        estoque: 70
      },
      {
        titulo: 'Resurrecting the Champ',
        quantidade_paginas: 140,
        autor: 'Fraze Whickman',
        ano_lancamento: 1997,
        estoque: 75
      },
      {
        titulo: 'Given Word, The (O Pagador de Promessas)',
        quantidade_paginas: 121,
        autor: 'Xever Nelsen',
        ano_lancamento: 2005,
        estoque: 69
      },
      {
        titulo: 'Cave, The',
        quantidade_paginas: 448,
        autor: 'Prince Saladine',
        ano_lancamento: 1995,
        estoque: 79
      },
      {
        titulo: 'Treasure of the Yankee Zephyr (Race for the Yankee Zephyr)',
        quantidade_paginas: 470,
        autor: 'Fawne Wakeham',
        ano_lancamento: 2007,
        estoque: 45
      },
      {
        titulo: 'Lake Placid',
        quantidade_paginas: 183,
        autor: 'Genevieve Coe',
        ano_lancamento: 2007,
        estoque: 97
      },
      {
        titulo: 'Vivre sa vie: Film en douze tableaux (My Life to Live)',
        quantidade_paginas: 412,
        autor: 'Elle Patton',
        ano_lancamento: 1989,
        estoque: 34
      },
      {
        titulo: 'Kevin Hart: Let Me Explain',
        quantidade_paginas: 244,
        autor: 'Marwin Petrelluzzi',
        ano_lancamento: 1998,
        estoque: 52
      },
      {
        titulo: 'Return of the Secaucus 7',
        quantidade_paginas: 110,
        autor: 'Ervin Dowse',
        ano_lancamento: 1987,
        estoque: 76
      },
      {
        titulo: 'Flaming Star',
        quantidade_paginas: 248,
        autor: 'Jennee Warburton',
        ano_lancamento: 1997,
        estoque: 31
      },
      {
        titulo: 'Misunderstood',
        quantidade_paginas: 149,
        autor: 'Sarajane Kemball',
        ano_lancamento: 2008,
        estoque: 17
      },
      {
        titulo: 'Drones',
        quantidade_paginas: 423,
        autor: 'Kinsley Le Prevost',
        ano_lancamento: 2009,
        estoque: 67
      },
      {
        titulo: 'In Eagle Shadow Fist (Ding tian li di) (Fist of Anger)',
        quantidade_paginas: 269,
        autor: 'Johna Betteney',
        ano_lancamento: 1999,
        estoque: 6
      },
      {
        titulo: 'Istanbul',
        quantidade_paginas: 149,
        autor: 'Petra Clark',
        ano_lancamento: 2001,
        estoque: 87
      },
      {
        titulo: 'Anvil! The Story of Anvil',
        quantidade_paginas: 430,
        autor: 'Sallie Menloe',
        ano_lancamento: 1987,
        estoque: 6
      },
      {
        titulo: 'Thale',
        quantidade_paginas: 437,
        autor: 'Emelen Samples',
        ano_lancamento: 2001,
        estoque: 7
      },
      {
        titulo: 'Day of the Dolphin, The',
        quantidade_paginas: 283,
        autor: 'Rochella Alessandretti',
        ano_lancamento: 2007,
        estoque: 37
      },
      {
        titulo: 'Istanbul',
        quantidade_paginas: 65,
        autor: 'Don McKissack',
        ano_lancamento: 1999,
        estoque: 7
      },
      {
        titulo: 'HealtH',
        quantidade_paginas: 173,
        autor: 'Colette Lauga',
        ano_lancamento: 1995,
        estoque: 17
      },
      {
        titulo: 'Tales from the Script',
        quantidade_paginas: 334,
        autor: 'Malcolm Ionn',
        ano_lancamento: 2012,
        estoque: 10
      },
      {
        titulo: 'Desert Hearts',
        quantidade_paginas: 355,
        autor: 'Bernarr Rayne',
        ano_lancamento: 2005,
        estoque: 24
      },
      {
        titulo: "Golden Coach, The (Le carrosse d''or)",
        quantidade_paginas: 294,
        autor: 'Elsie Petroselli',
        ano_lancamento: 1995,
        estoque: 46
      },
      {
        titulo: 'Patsy',
        quantidade_paginas: 339,
        autor: 'Laney Van Daalen',
        ano_lancamento: 1988,
        estoque: 11
      },
      {
        titulo: 'Jeff, Who Lives at Home',
        quantidade_paginas: 281,
        autor: 'Shandy Godain',
        ano_lancamento: 1992,
        estoque: 13
      },
      {
        titulo: 'Two Deaths',
        quantidade_paginas: 385,
        autor: 'Tyrus Tesyro',
        ano_lancamento: 1992,
        estoque: 17
      },
      {
        titulo: "Thieves'' Highway",
        quantidade_paginas: 165,
        autor: 'Bren Cartmail',
        ano_lancamento: 2011,
        estoque: 2
      },
      {
        titulo: 'Foosball (Metegol)',
        quantidade_paginas: 265,
        autor: 'Brandais Verman',
        ano_lancamento: 1993,
        estoque: 66
      },
      {
        titulo: 'Aelita: The Queen of Mars (Aelita)',
        quantidade_paginas: 95,
        autor: 'Gabriel Stitcher',
        ano_lancamento: 2010,
        estoque: 53
      },
      {
        titulo: 'Belarmino',
        quantidade_paginas: 365,
        autor: 'Lucina Ganniclifft',
        ano_lancamento: 2011,
        estoque: 49
      },
      {
        titulo: 'Unknown Soldier, The (Tuntematon sotilas)',
        quantidade_paginas: 404,
        autor: 'Martha Kembrey',
        ano_lancamento: 1997,
        estoque: 50
      },
      {
        titulo: 'Dawn of the Dead',
        quantidade_paginas: 62,
        autor: 'Ron Wadie',
        ano_lancamento: 2012,
        estoque: 74
      },
      {
        titulo: 'Sicko',
        quantidade_paginas: 484,
        autor: 'Alejoa Slimming',
        ano_lancamento: 1998,
        estoque: 92
      },
      {
        titulo: 'Greetings',
        quantidade_paginas: 155,
        autor: 'Alessandro MacNulty',
        ano_lancamento: 1993,
        estoque: 84
      },
      {
        titulo: 'Sexy Beast',
        quantidade_paginas: 55,
        autor: 'Barnaby Martyntsev',
        ano_lancamento: 1998,
        estoque: 14
      },
      {
        titulo: 'Scarlet Street',
        quantidade_paginas: 423,
        autor: 'Valli Skitteral',
        ano_lancamento: 2006,
        estoque: 18
      },
      {
        titulo: 'Trois',
        quantidade_paginas: 489,
        autor: 'Rosanne Grelka',
        ano_lancamento: 1997,
        estoque: 0
      },
      {
        titulo: 'Kid With a Bike, The (Le gamin au vélo)',
        quantidade_paginas: 336,
        autor: 'Dynah Trott',
        ano_lancamento: 2005,
        estoque: 10
      },
      {
        titulo: 'Arsène Lupin',
        quantidade_paginas: 346,
        autor: 'Jacquenetta Worshall',
        ano_lancamento: 2000,
        estoque: 92
      },
      {
        titulo: 'Arn: The Knight Templar (Arn - Tempelriddaren)',
        quantidade_paginas: 75,
        autor: 'Sloan Turfes',
        ano_lancamento: 1993,
        estoque: 100
      },
      {
        titulo: 'Satan Bug, The',
        quantidade_paginas: 315,
        autor: 'Orson Endricci',
        ano_lancamento: 2012,
        estoque: 98
      },
      {
        titulo: 'Devils on the Doorstep (Guizi lai le)',
        quantidade_paginas: 436,
        autor: 'Val Fealey',
        ano_lancamento: 2011,
        estoque: 10
      },
      {
        titulo: 'Wicked Little Things',
        quantidade_paginas: 482,
        autor: 'Aguie Leatherland',
        ano_lancamento: 1998,
        estoque: 54
      },
      {
        titulo: 'Indie Game: The Movie',
        quantidade_paginas: 349,
        autor: 'Emmit Robotham',
        ano_lancamento: 2011,
        estoque: 89
      },
      {
        titulo: 'Eden',
        quantidade_paginas: 260,
        autor: 'Fons Grigorini',
        ano_lancamento: 1999,
        estoque: 15
      },
      {
        titulo: 'Notorious C.H.O.',
        quantidade_paginas: 404,
        autor: 'Teddie Bradly',
        ano_lancamento: 2005,
        estoque: 78
      },
      {
        titulo: 'Hands Across the Table',
        quantidade_paginas: 174,
        autor: 'Boote Wildber',
        ano_lancamento: 2013,
        estoque: 91
      },
      {
        titulo: 'Honey (Miele)',
        quantidade_paginas: 467,
        autor: 'Brigitta Parkman',
        ano_lancamento: 2001,
        estoque: 43
      },
      {
        titulo: 'From Beyond the Grave (Creatures)',
        quantidade_paginas: 170,
        autor: 'Beau Pizer',
        ano_lancamento: 1998,
        estoque: 23
      },
      {
        titulo: 'Hangar 18',
        quantidade_paginas: 236,
        autor: 'Rancell Wickliffe',
        ano_lancamento: 1985,
        estoque: 33
      },
      {
        titulo: 'Sons and Lovers',
        quantidade_paginas: 437,
        autor: 'Chantal Kid',
        ano_lancamento: 1985,
        estoque: 79
      },
      {
        titulo: 'Frost/Nixon',
        quantidade_paginas: 202,
        autor: 'Patrizia Fairbourne',
        ano_lancamento: 2009,
        estoque: 97
      },
      {
        titulo: 'Train of Shadows (Tren de sombras)',
        quantidade_paginas: 413,
        autor: 'Barry Briztman',
        ano_lancamento: 1986,
        estoque: 70
      }
], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('livros', null, {});
  }
};
