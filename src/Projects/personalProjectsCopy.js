import osteroushHome from '../assets/osteroush/osteroushHome.png'
import osteroushAddPlace from '../assets/osteroush/osteroushAddPlace.png'
import osteroushMenu from '../assets/osteroush/osteroushMenu.png'
import osteroushPlace from '../assets/osteroush/osteroushPlace.png'
import osteroushSignIn from '../assets/osteroush/osteroushSignIn.png'
import osteroushViewPlaces from '../assets/osteroush/osteroushViewPlaces.png'
import brunchinatorHome from '../assets/brunchinator/home.png';
import brunchinatorSignIn from '../assets/brunchinator/signIn.png';
import brunchinatorFindPlace from '../assets/brunchinator/findPlace.png';
import brunchinatorReviewPlace from '../assets/brunchinator/reviewPlace.png';
import brunchinatorViewPlaces from '../assets/brunchinator/viewPlaces.png';
import brunchinatorProfile from '../assets/brunchinator/profile.png';

import { FaAngular, FaAws } from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs } from "react-icons/si";

export const projects = [
  {
    name: "Osteroush",
    description: `Every month, my wife and I visit a restaurant neither of us has been to before. Sometimes it's a hidden gem, sometimes it's awful. 
    
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

    I have recreated this app several times in different frameworks. The current version features an Angular and Tailwind frontend with a Node.js and Express backend. It integrates with multiple Google APIs to retrieve place data, addresses, and photos.`,
    images: [brunchinatorHome, brunchinatorSignIn, brunchinatorFindPlace, brunchinatorReviewPlace, brunchinatorViewPlaces, brunchinatorProfile],
    live: "https://brunchinator.com",
    repos: {
      frontEnd: "https://github.com/georgeoster/brunchinatorAngular",
      backEnd: "https://github.com/georgeoster/brunchinatorBackEnd"
    },
    tagline: "Burgers and Bloody Marys.",
    icons: [FaAngular, SiTailwindcss, FaAws, SiNodedotjs]
  },
];
