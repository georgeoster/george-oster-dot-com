import osteroushHome from '../assets/osteroushHome.png'
import osteroushAddPlace from '../assets/osteroushAddPlace.png'
import osteroushMenu from '../assets/osteroushMenu.png'
import osteroushPlace from '../assets/osteroushPlace.png'
import osteroushSignIn from '../assets/osteroushSignIn.png'
import osteroushViewPlaces from '../assets/osteroushViewPlaces.png'
import brunchinatorImage from '../assets/brunchinator.png';

export const projects = [
  {
    name: "Osteroush",
    description: `Since our wedding on October 7th, 2017, my wife and I have celebrated the 7th of every month by visiting a restaurant neither of us has been to before. Osteroush.com captures our journey with custom posts, photos, and write-ups—whether the meal was amazing or awful.

The frontend is built with Angular and Tailwind, supported by a Node.js and Express backend. I used DynamoDB to store posts and Amazon S3 for image hosting. 

Each post includes a full photo carousel and a lightbox for immersive browsing. I designed the entire platform to feel simple, fast, and personal—balancing performance with a lightweight aesthetic that emphasizes the content.`,
    images: [osteroushHome, osteroushSignIn, osteroushMenu, osteroushViewPlaces, osteroushAddPlace, osteroushPlace],
    live: "https://osteroush.com",
    repos: {
      frontEnd: "https://github.com/georgeoster/osteroushFrontEnd",
      backEnd: "https://github.com/georgeoster/osteroushBackEnd"
    }

  },
  {
    name: "Brunchinator",
    description: "Restaurant rating app focused on brunch spots, ranking burgers and Bloody Marys.",
    images: [brunchinatorImage],
    live: "https://brunchinator.com",
    repos: {
      frontEnd: "https://github.com/georgeoster/brunchinatorAngular",
      backEnd: "https://github.com/georgeoster/brunchinatorBackEnd"
    }
  },
];
