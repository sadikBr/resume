const top = {
  name: 'SADIK Brahim',
  description:
    "Dynamique et motivé. Je suis ingénieur d'état en génie industriel et logistique, lauréat de l'Ecole Nationale des Sciences Appliquées de Marrakech (ENSAM). Je suis à la recherche d'un premier emploie.",
  contacts: [
    [
      {
        image:
          'data:image/png;base64,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',
        value: 'brahimsadik98@gmail.com',
      },
      {
        image:
          'https://cdn.icon-icons.com/icons2/2248/PNG/512/phone_icon_136322.png',
        value: '+212 668 42 46 37',
      },
    ],
    [
      {
        image:
          'https://icon-library.com/images/position-icon/position-icon-20.jpg',
        value: 'Quartier Ifechtalene, Demnate',
      },
    ],
    [
      {
        image:
          'https://icon-library.com/images/linked-in-icon-png/linked-in-icon-png-7.jpg',
        value: 'www.linkedin.com/in/brahim-sadik-ab4364201',
      },
    ],
  ],
};

const formation = [
  {
    niveau: "Cycle d'ingénieur - Genie Industriel et Logistique",
    ecole: 'Ecole Nationale des Sciences Appliquées de Marrakech',
    periode: '2018 - 2021',
    description: 'Formation en génie industriel et logistique',
  },
  {
    niveau: 'Classes préparatoires intégrées',
    ecole: 'Ecole Nationale des Sciences Appliquées de Marrakech',
    periode: '2016 - 2018',
    description:
      "Etude de plusieurs concepts mathématiques et physiques et des sciences de l'ingénieur",
  },
  {
    niveau: 'Baccalaureat Sciences Mathematiques (A)',
    ecole: 'Lycée Demnate',
    periode: '2015 - 2016',
  },
];

const projets = {
  "Conception d'un actuateur de ralenti sur CATIA": [
    'CATIA v5',
    'Dessin industriel',
    "Dessin d'ensemble",
    'Dessin de définition',
  ],
  "Conception d'un banc d'essai pour contrôler les défauts dans les machines tournantes par analyse vibratoire.":
    [
      'CATIA v5',
      'Dessin industriel',
      'Etude théorique sur les différents défauts dans les machines tournantes',
    ],
};

const langues = [
  'Arabe (langue maternelle)',
  'Français (courant)',
  'Anglais (intermédiaire)',
];

const interet = ['Dessin', 'Littérature', 'Voyages'];

const competences = {
  'Les systèmes de management QHSE': [
    'ISO 9001 v2015',
    'ISO 14000 v2015',
    'ISO 45001',
    'Iso 22000',
  ],
  'Gestion de la production': [
    'MRP',
    'PIC',
    'PDP',
    'Planification',
    'OF',
    'OA',
  ],
  'Gestion et management des projets': ['GANTT', 'PERT'],
  'Gestion des stocks et approvisionnement': [
    'FIFO',
    'LIFO',
    'Point de Commande',
    'Drop Shipping',
  ],
  'Les procédés et la fabrication industriel': [
    'Tournage',
    'Fraisage',
    'Soudage',
  ],
  'La maintenance industrielle': ['Corrective', 'Predictive', 'MTTR', 'MTBF'],
  'Management de la chaine logistique': [
    "Flux d'information",
    'Flux physique',
    'Fournisseur',
    'Client',
    'Transport',
    'Stockage',
  ],
  'Sûreté de fonctionnement et gestion des risques industriels': [
    'Analyse Fonctionnelle',
    'Analyse Quantitative',
  ],
  'Les outils de la qualité': [
    'Brainstoming',
    'Six Sigma',
    'QQOQCCP',
    '5M',
    'AMDEC',
    'ABC',
  ],
  'Langages de programmation': ['C, C++', 'Python', 'VBA'],
  'Web Developpement': ['HTML', 'CSS', 'Javascript'],
  'Gestion des bases de données': ['Oracle', 'MySQL'],
  Logiciels: ['Matlab', 'Arena', 'ERP - Sage', 'CATIA v5'],
  'Compétences personnelles': [
    'Travail en équipe et initiative',
    'Dynamique',
    'Sérieux',
  ],
};

const experiences = [
  {
    type: "Stage d'observation | SOFT",
    periode: '15 juillet - 15 août 2019',
    description: [
      'Service logistique',
      'Aide a la gestion des stocks',
      'Participation dans la réorganisation des zones de stockage et leurs traçages',
    ],
  },
  {
    type: 'Stage | NABC Marrakech',
    periode: '01 mars - 15 juin 2020 en alternance',
    sujet:
      "Amélioration d'une ligne de production PET selon le concept de l'industrie 4.0",
    description: [
      "Généralités sur les concepts de l'industrie 4.0",
      'Etude de la ligne de production PET et des differentes machines qui la constitue',
      "Proposer des méthodes et des concepts d'amélioration",
    ],
  },
  {
    type: 'Stage PFE | AIC Métallurgie',
    periode: '01 avril - 01 aout 2021',
    sujet: 'Proposer une méthode de contrôle en temps réel des soudures',
    description: [
      'Etude du procédé de soudage et les méthodes de contrôle utilisé au sein de la société',
      'Etude des méthodes de contrôle en temps réel déja existantes',
      "Utilisation des concept de l'industrie 4.0 afin de proposer une méthode non destructive pour faire le contrôle en temps réel",
    ],
  },
];

export { top, formation, projets, langues, interet, competences, experiences };
