import brain from './brain.png'
import time from './time.png'
import hobbies from './hobbies.png'
import catalogue from './catalogo.png'
import home1 from './home1.png'
import home2 from './home2.png'
import catalogueFilter from './catalogoFiltro.png'
import detail from './detalle.png'

//Data for the About cards
export const cardsParams = [
  {
    img: brain,
    alt: 'Image of a brain created with Midjourney',
    title: 'Knowdledge',
    steps: [
      {
        fact: 'For the frontend my framework(library) of choice is React',
        id: 1,
      },
      {
        fact: 'For styling, I like using plain CSS, Tailwind or Bootstrap',
        id: 2,
      },
      { fact: 'For the backend I chose NodeJS with Express', id: 3 },
      {
        fact: 'For my relaional databases I like PostreSQL and for non relational MongoDB',
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

//Images for the project galery
export const imgsPF = [
  { src: catalogue, id: 1 },
  { src: home1, id: 2 },
  { src: home2, id: 3 },
  { src: detail, id: 4 },
  { src: catalogueFilter, id: 5 },
]

export const imgsPI = [
  { src: catalogue, id: 1 },
  { src: home1, id: 2 },
  { src: home2, id: 3 },
  { src: detail, id: 4 },
  { src: catalogueFilter, id: 5 },
]

export const imgsNotitas = [
  { src: catalogue, id: 1 },
  { src: home1, id: 2 },
  { src: home2, id: 3 },
  { src: detail, id: 4 },
  { src: catalogueFilter, id: 5 },
]

export const imgsPortfolio = [
  { src: catalogue, id: 1 },
  { src: home1, id: 2 },
  { src: home2, id: 3 },
  { src: detail, id: 4 },
  { src: catalogueFilter, id: 5 },
]


