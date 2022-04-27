const top = {
  name: 'TAOUIL OMAR',
  description:
    "Dynamique et motivé. Je suis élève ingénieur en systèmes électroniques embarqués et commande des systèmes, à la recherche d'un stage projet de fin d'étude pour une durée de minimum quatre mois.",
  contacts: [
    [
      {
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD8/PzY2Nj4+Pjk5OTv7+8pKSn09PTs7OxZWVlSUlKvr6/29vbPz8+CgoJpaWnGxsaOjo7e3t6lpaW7u7t5eXk0NDRfX1/FxcWUlJRBQUG/v7+rq6vNzc2Hh4efn58uLi4aGhp7e3siIiIODg5mZmZJSUk8PDwVFRVwcHA4ODidjhA6AAANUklEQVR4nO1d61ryvBKVQinSyqkclIMUBXnF+7+/LRsVkKw1kzRt/Z6n6y+0yTTJHNZMkru7GjVq1KhRo0aNGjVq1PjPoNVcrsb9Q/wRRdvGEdso2seH/jhZNh+q7lw+tMPJ/DBrcMwGo1XaDqruqzWCdNKPBdku8THIevdVd1qPcPIWWUh3FrP/1Km67zKC3nrnIt03olHvL8/Y1tPrex7xvnBYtquWxIxm32lumvD+NvlzIxmMJaVpid1rWrVMlwj7fsU7YZa0qhbsC8+PRch3xMvoL5iQJxu7Z49pWLF8w49C5TtiUKWMzWLH7xv9quZqOChFviOySozHujT5PhENS5dvWaZ8RzyW6+iEhRkIglWJAq4qkO8Tj2VpnHY5GtSESSkCTiqT7xOvxSvVoBAXVI9/Rc/U8J9jz6J/b9PRFwZv+xyRSLF2Y2jdn208T4ZGv6vTnCT9/Yu9iOMCBcysehI9zhX00v1z9mbp3L4WJuDBohfduQUZGoTJdGvx8kMx8gULdQ/ixJ40C9K5XshuAfLd3Wvbn42dmex0vlE2svcf/qdKlTDt5WunpwxY9n7EumhY164P1uF+rmrK80TVCTj3NHUClc72qm5UAo48Lo0gUzDnHo1GU/NFPXtTbYV36M3038ttfeTULyaksnXy5MC1ZS2a+WnpN+Tl6IWG64ifcl8Y3Rfuhab/+QimxHB35KERCInu8qBtxAVfwAq8hBRvL/M2IDEy+8KztqngLebU4c+CgMXFMWe0eND9luvlHUGNZl5EkNDiqiAXOyVomcSXDBI4O5vDlxLsUe5FrgcVcer8WsEbLVFAIfpuur6V82HlkLPfeGAa1TVW5Ma2zBE84p4FG25fm8/RIhk9M5jhmjk5b9RQrF3e2Gmnn3Cu0mN6z0WrUyohtnxZL1nH0Xe51O59cVi5+Hpd0iP7t4VMwJmFBWr15mY92B3bpjzZUrTPLVLGS1+t1KNE7+DZrlPEC48s5bt7YgJqJ32wEtM48aUpazfNODv3xPA/WUq4Ib1Sclw6wqxxOM/4V/CXM1fRxu+xtIkJ6dJWpQsDdSJ896N0kCa5eC35anaFfsy6qtZOzyab9KUlUCCzvfxwG/gWKwPG5pfGzQ2mFvI1vnkQpL6vYlA8u3YWAj6QQt8XhaHoWddBr1nnrxUbVl4WfiRbQgoPUJd2uH0t8oOvFxi2GAO1gAEpZl6ITz8wzwMjvLtDzOEvzYa9SbWETJGKkVhok8q9wKcfCH75nWPCM0zNgJM+iqZQmYQz4DkFP/zWkQF8RV8pIItSJJtjX6rxgxgtsBsFAhncjVJC4hlJ3GGuainEU9ykDNBga7MYLKgQ3iCRq07Y3BYFwGSGzl6McGOCOnZfgwyGZDY0RyrSrUVMBV+FNKJ0x/y2JThNFxqXmQwED+zZp8kDkwmAJKAmpiYeJXdniqo5Na19uJIUxCk2NkLU5OKqafBiagyqNAUDSOrTDQtC0eZ1d7v9df9RXzzWQJkl9G+FzSe1ecxUtBS+2uvyJyxJ5+pFa2aYUIChCPRxU/RhsWhx+3tLyEQpo9nXhGtCFJAUzjC6Tpyj69uoUllNbW4QOk+ihERfsGSyNEfNPJjGx9san8SMlOi3YSXwjzwlkGpb1CylLE8AqgOqfMlvI6Qy0cNCyVSEaxnGooRobSDXVKK+iUNDhh/RnKKAUva6gR1F1KYkIV6GYD0cwYfwnTpSYsUc+jyop1J8hz8peZJbCiHHRCKZI6ArjJgWgYToYJ2IUxV8GKRZ88AlhD4KWk9C2o90Fi9DmguXK5U5dwydfRSqCUQGdko3kAfmgyBXZHFnAUakSEIhyYYVDa6sogkYRRquxZLpW7itAdk1QUI8Y3CBJSsAZV7CD97IC/CqagOVYQy2zsD1MzDfhHmvhpIYYoEl/rABym3xxnBTMHZmekaXs2QLEed1YTUTbQvH99hss1WkyzuzWYAVVctJQhw6zdAjjEAkbtAl2iSVRx5DMTBtC0czcMWzRaSt/8Cr/5E8hTQcbQorfsi0ssBQWy2DIzYSz6BZyicODvMy8AQjgdX5SkxDkmwZ0jTcHmJaATlPLEpX17dgCQl9iSTkJhhHFsiwkbDiRV3DD5v9IA+hWco9b+yeoBCIlJTodwfCMWSxHvLamHK6u8P8HjD4bBnqyyGhhIzARk1zShhLCNQis4b6rVBQQpbqQhJyWh9LCHwLxrGpBYS2e8fMDfKE+NTBRBt4gESvfD1cAmblqNJARCTX4Li/4AFSOZOpJYQMJk3oounDk7i2ErJ0jH5zJ/SGaboS2W7elq2EpNhT7bIR4ptmO0EJ83t5Eurr8ZHz/sJegVwawQrjMMb8f2IsVPzFCaignL4ChbLCdlZba0EKoPR7AmEoS7ldRAwIfoatxScVftoKM8LRUtuNAj3Bz9jADpsfJBLqNz/Dl1AaC0xtyd3HYYzZ8yYujV5C6DVQMhk8I/kZmLk0ewqEwtDv+4KvYA8hG0rLRe5YHtA8Y8gYqiWEXCItRkYtS5upcI/NpBJZh2oJYQxNhwM46y/S2UaYiTJvZSASStPlG5iiZT4bCixEdx+zLuZHiYTa3R34ozK9jxSAuI8A+yjmRUFKKbS7q/HmCbKtAzL6oquI/UwzR0f4eOU2K/yNPkhvUZpTEZPiHhvnTH7PG5PBzO1DjJki1YXTLMZIpkMkVB3HQehWMs3RYtopviomTI0ebWuDe6ii2sgXIo4tGniNL4xLP8yflNT7aHZhskoj3F048Jr9h1h3mzUHqy6UpwzdfQINKjxtRcV9kdpLY/zENkiJXs093e8PxxB66qo8CVGORlXDjnGLpEHktdBIQmhfdDuCAmyAjbOGHnMmBFBCzR6YcziPoNxeiXNJZnqWbjV04cp+YN4Y0IE0hHZTF6n3NLZI60OJp9+RT3Q3acYHnB3TZisJe2akePl5irBULFQchWpYFu0N/Lf6nA5SF2G2iPzuoxdzgKDbqX/zGCu80R8yRGq4jP+XdsoYQuehdFDgF34NYofVJumpPUZMGBkCcb/a4jpmaydK+RrXX6ed0dliceINWYjmnLOiw2/jZRp2wvApGdkdxL6YnBZymgiKyerQD/was2os+haBmeKj2B1mRuyUkSMgTkJZmNmdrU3GxJqsKQmWh7W1yKvM4UlBW0fVsD4Di0xTs65RbO2hWITCjgQOLW95Bpt1Zh8l5506zVyX1jic6d0mJ6+Yv5fipGiCcS59rC/5uADbAmPWWnmUzTTXJ3I7eJ65f2DS21x7cY3TGDhcU/J/6A+kuQapIQFlSoHjiS2N+LSyHe/mcT62lHnTwMV1nGfxlz9JtzRA2GvRbzCiFyVMNAfv3+DMa7vcwZfndFG22QqFmg6nflzMB/s5sMh1DDydNCiDZX3ux5UvYmsw8h4DTwkmVM/V0Ud+n9j+cgGt7lJc5L5Hlzpi2Iuw6OXhxj3SP7z1cUkgHQ68xHsbXR/fTa+Q93WfkHm5CYUfaEUyZ6pujsykQ1NhVXeJr6vzaFxLE7zZRuhjH9ctCXfL7GwPdGXgyp9TW8MDZo26K1qX1ckgabE9TPzeQ8pDIiHqfHgemVbyYSVnhoOmga56H2RN71d0CY6U4iTndLJaP8ab2Wz20T3Mk6HFPRjNJJt2u7NN3B30x5PezdJrz3xc+yJ4w1VeJH08mtFD+x2+6rfV3XnePPZs5qF9Ia7dlHv/8BlfDh4ruNFC8MJeqhnFH9rKg4iSLx1VMIrBRQ2sE0dzDek87qh0dZNeWRJXEuMC0nm5O9e7QRzxWzXkvx6QFa6dUOY9JcEt4ZX/tjD5hvhCbyS7Qs+UPshyv1ZmwbqF39l1Aogf88eKisDdo8MP0YSUau51orj7sNF3vhxXiQ6r8ct9yaOGRIts75awQ8K/cu67+1Q02KE469+UDgPd5ealdBdxzH3RC9cINWRxbv9Rl1aIvFEoZ4SqWyTi/OqcHeV0gY0Pmu8CIT+u8EdAH+G/+rqDzJ9aTZXfNfYzdZStfaKfe90f0Zpoj5b2dgG5XsTGXkE4caRrdUJy4G/xW+V5u4n72kjnFrVhXq9BtUzULrLU/vMGy7VVxts9SWqEzi5eYHfImmpPIAif1rb3t3i/BlWOpW7xvh+snlM+Z8PeZN21uR/q69UFxN+p9S1H34jiaZZMhs/34UkLtcMwfH6aJNkh3vA6Y4hirlruFHU9gD0syoLtUNQFAZbYFXgL6tB5pnpEt1AiU7FXomh49n9vMal2GLslkO33LhU+nvBSEoGZ4+aqfOh7z5RCVKJUu14CFy1C95pLR8S5OSdbpG73ADriIzdt6IKmVaVXHsRl8M5G9CxCY3ccSk5yXSO1vFXVGrN5dTUDX2iPXQu1FTjcFptUgmExrtw+BxviHe3Ed2TVTSqfnb8RZt6E3L4u/5x4J3QSDy7rPivVdbFHcxW77r9obB6TSg2DGq3m8rVryb8sBvPnPz52v9G5H2ajWI4ld/v+fBK2/4ZRcEKnt1yN+9N4v42i07hGn4i7r6NxstQTqjVq1KhRo0aNGjVq1KhRGf4HUZ/FnrSRvXMAAAAASUVORK5CYII=',
        value: 'omartaouil.tl@gmail.com',
      },
      {
        image: 'https://pngimg.com/uploads/phone/phone_PNG48972.png',
        value: '+212 698 671 170',
      },
    ],
    [
      {
        image:
          'https://icon-library.com/images/position-icon/position-icon-20.jpg',
        value: 'Settat, Hay Lagnanet, Rue Mouaouiya, N 20',
      },
    ],
    [
      {
        image:
          'https://icon-library.com/images/linked-in-icon-png/linked-in-icon-png-7.jpg',
        value: 'www.linkedin.com/in/omar-taouil-5841a0206',
      },
    ],
  ],
};

const formation = [
  {
    niveau: "Cycle d'ingénieur",
    ecole: 'Ecole Nationale des Sciences Appliquées de Marrakech',
    periode: '2018 - Present',
    description:
      'Génie électrique, systèmes électroniques embarqués et commande des systèmes.',
  },
  {
    niveau: 'Classes préparatoires intégrées',
    ecole: 'Ecole Nationale des Sciences Appliquées de Marrakech',
    periode: '2016 - 2018',
  },
  {
    niveau: 'Baccalaureat Sciences Mathematiques',
    ecole: 'Groupe Scolaire Azzaitoune - Settat',
    periode: '2015 - 2016',
  },
];

const projets = {
  'Le diagnostic et la commande tolérante aux défauts de la machine asynchrone.':
    [
      'Matlab / Simulink',
      'Commande vectorielle',
      'Onduleur',
      "MLI (Modulation de largeur d'impulsion)",
      'Fuzzy logic',
    ],
  "Conception d'un microprocesseur 16-bits sur FPGA.": ['VHDL', 'Quartus II'],
  "Etude et simulation d'une fonction d'ADAS: CC.": [
    'Matlab / Simulink / Stateflow',
    'Cruise Control',
  ],
};

const langues = [
  'Arabe (langue maternelle)',
  'Français (courant)',
  'Anglais (intermédiaire)',
];

const interet = ['Littérature', 'Automobile', 'Voyages'];

const competences = {
  'Langages de programmation': [
    'C, C++',
    'C embarqué',
    'Python',
    'VHDL',
    'Assembleur',
    'LaTeX',
  ],
  'Systèmes embarqués et dispositifs programmables': [
    'FPGA',
    'Microcontrôleurs PIC16Fxx',
    'Microprocesseur MIPS',
    'Nios II',
  ],
  'Test et vérification des systèmes embarqués': [
    'Cycle en V',
    'Test unitaire',
    'Test en boite noire/blanche',
    'Couverture de lignes',
    'Couverture de branches',
    'Couverture de conditions-decisions',
    'Couverture MC-DC',
  ],
  Logiciels: [
    'Matlab / Simulink',
    'MikroC',
    'ISIS Proteus',
    'Modelsim',
    'Quartus II',
    'Eclipse',
    'MPLAB',
    'Code Blocks',
  ],
  'Bus et protocoles de communication': ['CAN', 'LIN', 'SPI', 'I2C', 'UART'],
  'Automatique et Automatique avancée': [
    'Identification',
    'Régulation industrielle',
    "Grandeur d'état",
    'Modélisation des systèmes',
  ],
  'Notion de base': ['AUTOSAR'],
  'Electrotechnique et électronique de puissance': [
    'Modélisation et commande des machines tournantes: à courant continue, asynchrone, synchrone, brushless sur Matlab/Simulink',
  ],
  'Compétences personnelles': ['Travail en équipe et initiative'],
};

const experiences = [
  {
    type: "Stage d'observation | Leoni Wiring System",
    periode: '15 juillet - 15 août 2020',
    description: [
      "Description physique d'un faisceau électrique pour l'automobile.",
      'Processus de fabrication des faisceaux.',
    ],
  },
  {
    type: "Stage d'application | ONEE",
    periode: '15 juillet - 15 septembre 2021',
    sujet: 'Protection du réseau électrique :',
    description: [
      'Généralités et constitution du réseau électrique.',
      'Découvrir les différents types de protection (principe de fonctionnement, avantages et inconvénients).',
    ],
  },
];

export { top, formation, projets, langues, interet, competences, experiences };
