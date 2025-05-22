import osteroushHome from '../assets/osteroushHome.png'
import osteroushAddPlace from '../assets/osteroushAddPlace.png'
import osteroushMenu from '../assets/osteroushMenu.png'
import osteroushPlace from '../assets/osteroushPlace.png'
import osteroushSignIn from '../assets/osteroushSignIn.png'
import osteroushViewPlaces from '../assets/osteroushViewPlaces.png'
import brunchinatorImage from '../assets/brunchinator.png';

import { FaAngular, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs } from "react-icons/si";

export const projects = [
  {
    name: "Osteroush",
    description: `Every month, my wife and I visit a restaurant neither of us has been to before. Sometimes it's a hidden gem, sometimes it's a total bust — but it's always an adventure. 
    
    Osteroush.com captures our journey with write-ups, a photo carousel, and a lightbox for immersive browsing.

    The frontend is built with Angular and Tailwind, supported by a Node.js and Express backend. I used DynamoDB to store posts and Amazon S3 for image hosting.`,
    images: [osteroushHome, osteroushSignIn, osteroushMenu, osteroushViewPlaces, osteroushAddPlace, osteroushPlace],
    live: "https://osteroush.com",
    repos: {
      frontEnd: "https://github.com/georgeoster/osteroushFrontEnd",
      backEnd: "https://github.com/georgeoster/osteroushBackEnd"
    },
    tagline: "A personalized monthly dining journal.",
    icons: [FaAngular, SiTailwindcss, FaAws, SiNodedotjs]
  },
  {
    name: "Brunchinator",
    description: `It began as a personal tool to track which brunch spots served the best Bloody Mary. Over time, it evolved into a full-featured app for rating brunch destinations based on burgers, bloodys, and atmosphere.

    The current version features an Angular and Tailwind frontend with a Node.js and Express backend. It integrates with multiple Google APIs to retrieve place data, addresses, and photos.`,
    images: [brunchinatorImage],
    live: "https://brunchinator.com",
    repos: {
      frontEnd: "https://github.com/georgeoster/brunchinatorAngular",
      backEnd: "https://github.com/georgeoster/brunchinatorBackEnd"
    },
    tagline: "Burgers and Bloody Marys.",
    icons: [FaAngular, SiTailwindcss, FaAws, SiNodedotjs]
  },
];
