const name = {
  firstName: 'Brahim',
  lastName: 'SADIK',
  title: "Ingénieur d'état en industriel et logistique.",
};

const about = {
  aboutMe:
    "Je suis SADIK Brahim, ingénieur d'état en génie industriel et logistique, je suis lauréat de l'Ecole Nationale des Sciences Appliquées de Marrakech (ENSAM).",
  need: "Je suis à la recherche d'un premier emploie.",
};

const details = [
  {
    imageUrl:
      'https://i.pinimg.com/564x/4e/dc/b4/4edcb460a940ff726549077935f57168.jpg',
    info: 'Quartier ifechtalene, Demnate',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/31/31370.png',
    info: Math.floor(
      (Date.now() - new Date('may 21 1998').getTime()) /
        (1000 * 60 * 60 * 24 * 365)
    ),
  },
  {
    imageUrl:
      'https://www.pngitem.com/pimgs/m/191-1918903_download-free-png-phone-transparent-background-icon-phone.png',
    info: '06-68-42-46-37',
  },
  {
    imageUrl: 'http://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png',
    info: 'brahimsadik98@gmail.com',
  },
  {
    imageUrl:
      'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png',
    info: 'LinkedIn',
  },
];

const languages = [
  {
    name: 'Arabe',
    level: '100%',
  },
  {
    name: 'Français',
    level: '70%',
  },
  {
    name: 'Anglais',
    level: '80%',
  },
];

const hobbies = [
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/05/20/22/06/sport-2329919_1280.png',
    name: 'Sport',
  },
  {
    imageUrl:
      'https://pngpress.com/wp-content/uploads/2020/08/uploads_book_book_PNG51090.png',
    name: 'Lecture',
  },
  {
    imageUrl:
      'https://www.kindpng.com/picc/m/7-77504_music-notes-png-transparent-music-note-clipart-png.png',
    name: 'Music',
  },
  {
    imageUrl:
      'https://www.kindpng.com/picc/m/216-2166753_image-writing-hand-drawing-png-transparent-png.png',
    name: 'Dessin',
  },
];

const formation = [
  {
    name: 'Ecole Nationale des Sciences Appliquées - Marrakech',
    year: '2016 - 2021',
    description:
      'Deux années préparatoires et 3 ans de cycle ingénieur en génie industriel et logistique.',
  },
  {
    name: 'Baccalauréat - Lycée Demnate',
    year: '2015 - 2016',
    description: 'Baccalauréat Sciences Mathématiques (A), a Lycée Demnate.',
  },
];

const experiences = [
  {
    name: "Stage d'observation | SOFT",
    year: '15 juillet - 15 aout 2019',
    description:
      'Service logistique, gestion des stocks et participation dans la réorganisation des zones de stockage et leurs traçages.',
  },
  {
    name: 'Stage | NABC',
    year: '01 mars - 15 juin 2020 en alternance',
    description:
      "Amélioration d'une ligne de production PET selon le concept de l'industrie 4.0",
  },
  {
    name: 'Stage PFE | AIC METALLURGIE',
    year: '01 avril - 01 aout 2021',
    description:
      "Etude du procédé de soudage et les méthodes de contrôle utilisé au sein de la société et utilisation des concept de l'industrie 4.0 afin de proposer une méthode non destructive pour faire le contrôle des soudures en temps réel.",
  },
];

const projects = [
  "Conception d'un actuateur de ralenti sur CATIA.",
  "Conception d'un banc d'essai pour contrôler les défauts dans les machines tournantes par analyse vibratoire.",
];

const skills = [
  'Dessin assisté par ordinateur (CATIA).',
  'Gestion de la production.',
  'Les systèmes de management QHSE.',
  'Gestion et management des projets.',
  'Gestion des stocks et approvisionnement.',
  'Les procédés et la fabrication industriel.',
  'La maintenance industrielle.',
  'Management de la chaine logistique.',
  'Sûreté de fonctionnement et gestion des risques industriels.',
  'Innovation, Environnement et Développement durable.',
  'Les outils de la qualité: Six Sigma, 5M, 5S, AMDEC, QQOQCCP, 8D, Brainstorming, diagramme Pareto, ABC ...',
];

const informatique = {
  'Language de programmation': [
    'C',
    'C++',
    'VBA',
    'MySQL',
    'Oracle',
    'HTML',
    'CSS',
    'Javascript',
    'Python',
  ],
  Logiciels: ['Matlab', 'Arena'],
  ERP: ['Sage'],
};

export {
  name,
  about,
  details,
  languages,
  hobbies,
  formation,
  experiences,
  projects,
  skills,
  informatique,
};
