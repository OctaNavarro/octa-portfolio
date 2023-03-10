import brain from './brain.png'
import time from './time.png'
import hobbies from './hobbies.png'

import catalogueSM from './catalogo.png'
import home1SM from './home1.png'
import home2SM from './home2.png'
import catalogueFilterSM from './catalogoFiltro.png'
import detailSM from './detalle.png'
import createVG from './createVG.png'
import detailVG from './detailVG.png'
import homeVG from './homeVG.png'
import homeNT from './homeNT.png'
import editNT from './editNT.png'
import noteNT from './noteNT.png'
import newNoteNT from './newNoteNT.png'
import homePTF from './homePTF.png'
import projectsPTF from './ProjectsPTF.png'
import aboutPTF from './AboutPTF.png'

import Bootstrap from './logos/Bootstrap.svg'
import Express from './logos/Express.svg'
import Git from './logos/Git.svg'
import Mongo from './logos/Mongo1.svg'
import Node from './logos/Node.svg'
import Postgresql from './logos/Postgresql.svg'
import ReactLogo from './logos/React.svg'
import Tailwind from './logos/Tailwind.svg'
import TS from './logos/TS.svg'
import stack from './logos/HTML-CSS-JS.png'
import IoT from './logos/IoT.svg'
import Next from './logos/Next.svg'

//Data for the About cards
export const cardsParams = [
  {
    img: brain,
    alt: 'Image of a brain created with Midjourney',
    title: 'Knowdledge',
    steps: [
      {
        fact: 'For the frontend my framework(library) of choice is React and for styling, I like using plain CSS, Tailwind or Bootstrap',
        id: 1,
      },
      {
        fact: 'For the backend I chose NodeJS with Express',
        id: 2,
      },
      { fact: 'For my relational databases I like PostreSQL and for non relational MongoDB', id: 3 },
      {
        fact: 'I´m a team player and have experience with agile methodolgies as SCRUM, I´m a fast learner',
        id: 4,
      },
    ],
    id: 1,
  },
  {
    img: time,
    alt: 'Image of an hourglass and a notebook created with Midjourney',
    title: 'The future',
    steps: [
      {
        fact: 'I´ll be focusing more on the frontend and how to design better UI',
        id: 1,
      },
      { fact: 'I´ll master typescript, and learn NextJS 13', id: 2 },
      {
        fact: 'Just for fun I´ll be learning Python, It will become handly eventually',
        id: 3,
      },
      {
        fact: 'I´m willing to relocate if that is required by the empoyer',
        id: 4,
      },
    ],
    id: 2,
  },
  {
    img: hobbies,
    alt: 'Image of a brain created with Midjourney',
    title: 'Hobbies',
    steps: [
      {
        fact: 'I climb mountains to conquer fear, and play futbol to make friends',
        id: 1,
      },
      {
        fact: 'I love playing music, because that´s where I can find myself',
        id: 2,
      },
      {
        fact: 'Traveling is the way I want to know other cultures and become a better person',
        id: 3,
      },
      {
        fact: 'I enjoy using AI to create things, like the images used in the headers of these cards',
        id: 4,
      },
    ],
    id: 3,
  },
]

//Data for the project cards
export const projectsData = [
  {
    name: 'scaneaMe',
    description:
      'E-commerce SPA to sell clothing, every piece of clothing comes with a QR code that redirects you to the owners profile page to showcase their socials',
    imgs: [
      { src: catalogueSM, id: 1 },
      { src: home1SM, id: 2 },
      { src: home2SM, id: 3 },
      { src: detailSM, id: 4 },
      { src: catalogueFilterSM, id: 5 },
    ],
    deploy: 'https://scaneame.vercel.app',
    github: 'https://github.com/OctaNavarro/scaneaMe',
    id: '#item1',
  },

  {
    name: 'Videogames',
    description:
      'Development of a SPA, in which you could fetch information from a videogame API, filter the video game titles obtained, order them, search for a specific video game and get its information or create your own video game in a database',
    imgs: [
      { src: createVG, id: 1 },
      { src: homeVG, id: 2 },
      { src: detailVG, id: 3 },
    ],
    deploy: 'https://octa-pi.vercel.app',
    github: 'https://github.com/OctaNavarro/PI-Videojuegos',
    id: '#item2',
  },

  {
    name: 'Notitas',
    description:
      'Note taking app, with markdown support, categories and filtering deveolped using TypeScript, React and Bootstrap',
    imgs: [
      { src: homeNT, id: 1 },
      { src: editNT, id: 2 },
      { src: noteNT, id: 3 },
      { src: newNoteNT, id: 4 },
    ],
    deploy: 'https://octa-notitas.vercel.app',
    github: 'https://github.com/OctaNavarro/Notitas',
    id: '#item3',
  },

  {
    name: 'Portfolio',
    description:
      'A portfolio website to showcase some of my projects and share with the world a litle bit of who I am, developed with React and Tailwind',
    imgs: [
      { src: aboutPTF, id: 1 },
      { src: homePTF, id: 2 },
      { src: projectsPTF, id: 3 },
    ],
    deploy: 'https://octa-portfolio.vercel.app',
    github: 'https://github.com/OctaNavarro/octa-portfolio',
    id: '#item4',
  },
]

//Data for the stack cards
export const techs = [
  {
    id: 1,
    src: stack,
    title: 'HTML CSS JS',
    style: 'shadow-lblue',
  },
  {
    id: 2,
    src: TS,
    title: 'TypeScript',
    style: 'shadow-lblue',
  },
  {
    id: 3,
    src: IoT,
    title: 'Internet of Things',
    style: 'shadow-lblue',
  },
  {
    id: 4,
    src: Git,
    title: 'Git',
    style: 'shadow-lblue',
  },
  {
    id: 5,
    src: ReactLogo,
    title: 'React',
    style: 'shadow-orange',
  },
  {
    id: 6,
    src: Next,
    title: 'Next JS',
    style: 'shadow-orange',
  },
  {
    id: 7,
    src: Bootstrap,
    title: 'Bootstrap',
    style: 'shadow-orange',
  },
  {
    id: 8,
    src: Tailwind,
    title: 'Tailwind',
    style: 'shadow-orange',
  },
  {
    id: 9,
    src: Node,
    title: 'Node JS',
    style: 'shadow-lbgray',
  },
  {
    id: 10,
    src: Express,
    title: 'Express',
    style: 'shadow-lbgray',
  },
  {
    id: 11,
    src: Mongo,
    title: 'Mongo DB',
    style: 'shadow-lbgray',
  },
  {
    id: 12,
    src: Postgresql,
    title: 'PostgreSQL',
    style: 'shadow-lbgray',
  },
]
