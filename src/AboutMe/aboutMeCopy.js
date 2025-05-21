import charcoalImage from '../assets/charcoal.jpg';
import meatTowerImage from '../assets/meatTower.jpg';
import brindleSleepImage from '../assets/brindleSleep.jpg';
import jojoSmileImage from '../assets/jojoSmile.jpg';
import baby from '../assets/brindle/baby.png'
import sheds from '../assets/brindle/sheds.jpg'
import smile from '../assets/brindle/smile.jpg'
import backyard from '../assets/brindle/backyardwithjojo.jpg'
import watchful from '../assets/brindle/watchful.jpg'
import kisses from '../assets/brindle/kisses.jpg'
import goodsleep from '../assets/brindle/goodsleep.jpg'
import xmasbone from '../assets/brindle/xmasbone.jpg'
import xmassleep from '../assets/brindle/xmassleep.jpg'
import iamcute from '../assets/brindle/iamcute.jpg'
import bigsmile from '../assets/jojo/bigsmile.jpg'
import blanketsleep from '../assets/jojo/blanketsleep.jpg'
import happypant from '../assets/jojo/happypant.jpg'
import happysit from '../assets/jojo/happysit.jpg'
import hoodiesleep from '../assets/jojo/hoodiesleep.jpg'
import innocencetwo from '../assets/jojo/innocencetwo.jpg'
import meandjojo from '../assets/jojo/meandjo.jpg'
import sillyroach from '../assets/jojo/sillyroach.jpg'
import sleeplikeaperson from '../assets/jojo/sleeplikeaperson.jpg'
import snuggly from '../assets/jojo/snuggly.jpg'
import sonoble from '../assets/jojo/sonoble.jpg'
import weirdsleep from '../assets/jojo/weirdsleep.jpg'
import xmasbonejojo from '../assets/jojo/xmasbone.jpg'
import charcoaldump from '../assets/charcoal/charcoaldump.jpg'
import chuckcooked from '../assets/charcoal/chuckcooked.jpg'
import chuckraw from '../assets/charcoal/chuckraw.jpg'
import closeupcookedribsinrack from '../assets/charcoal/closeupcookedribsinrack.jpg'
import cookedsaucedribs from '../assets/charcoal/cookedsaucedribs.jpg'
import fajitas from '../assets/charcoal/fajitas.jpg'
import rawsmokeyribs from '../assets/charcoal/rawsmokeyribs.jpg'
import saucetheribs from '../assets/charcoal/saucetheribs.jpg'
import almostdone from '../assets/meattower/almostdone.jpg'
import finishedinside from '../assets/meattower/finishedinside.jpg'
import rawinside from '../assets/meattower/rawinside.jpg'
import rawstart from '../assets/meattower/rawstart.jpg'
import sliced from '../assets/meattower/sliced.jpg'
import snake from '../assets/meattower/snake.jpg'

export const charcoal = {
  title: "Charcoal Only",
  tagline: "Electric is convenient and pellets are reliable, but flavor favors the brave!",
  image: charcoalImage,
  wrapperClass: "order-1 lg:order-1",
  photos: [
    { image: charcoaldump, caption: 'Charcoal or Nothin!' },
    { image: rawsmokeyribs, caption: 'I love this rib holder' },
    { image: closeupcookedribsinrack, caption: 'caption' },
    { image: saucetheribs, caption: 'Sauce the Ribs' },
    { image: cookedsaucedribs, caption: 'Arguably what I am best at' },
    { image: chuckraw, caption: 'Chuck Roast with smokey ketchup' },
    { image: chuckcooked, caption: 'Came out pretty good' },
    { image: fajitas, caption: 'Fun Fact: Fajitas can be smoked' },
  ]
};

export const brindle = {
  title: "Life of a Dog",
  tagline: "Brindle spends most of her time recharging for her next walk.",
  image: brindleSleepImage,
  wrapperClass: "order-2 lg:order-2",
  photos: [
    { image: baby, caption: "She used to be so young" },
    { image: sheds, caption: "When she sheds, she SHEDS" },
    { image: smile, caption: "That smile though!" },
    { image: backyard, caption: "She pretends to not care about JoJo" },
    { image: watchful, caption: "But she aint foolin no one" },
    { image: kisses, caption: "She has been known to sneaky kiss" },
    { image: goodsleep, caption: "But mostly she just likes to sleep" },
    { image: xmasbone, caption: "She gets a bone for Christmas every year" },
    { image: xmassleep, caption: "Which just leads to more sleep time" },
    { image: iamcute, caption: "I feel like she knows how cute she is" }
  ]
};  

export const meatTower = {
  title: "Meat Tower",
  tagline: "No spit to rotate your shawarma? No problem! Just rotate the fire instead.",
  image: meatTowerImage,
  wrapperClass: "order-3 lg:order-4",
  photos: [
    { image: snake, caption: 'Rotate the fire around the meat' },
    { image: rawinside, caption: 'Season Heavily' },
    { image: rawstart, caption: 'and so it begins' },
    { image: almostdone, caption: 'i can taste this picture' },
    { image: finishedinside, caption: '...i mean ...' },
    { image: sliced, caption: 'caption' },
  ]
};  

export const jojoSmile = {
  title: "The Smiles of JoJo",
  tagline: "I have never known a happier dog.",
  image: jojoSmileImage,
  wrapperClass: "order-4 lg:order-3",
  photos: [
    { image: bigsmile, caption: 'Always smiling'},
    { image: blanketsleep, caption: 'Sometimes she is sleepy'},
    { image: happypant, caption: 'She loves her sunshine'},
    { image: happysit, caption: 'Sit like a person!'},
    { image: hoodiesleep, caption: 'Stealer of hoodies!'},
    { image: innocencetwo, caption: 'Full on puppy dog eyes'},
    { image: meandjojo, caption: 'Any excuse to cuddle'},
    { image: sillyroach, caption: 'Belly to the sky!'},
    { image: sleeplikeaperson, caption: 'This how dad sleeps! I am person!'},
    { image: snuggly, caption: 'She LOVES to be swaddled'},
    { image: sonoble, caption: 'caption'},
    { image: weirdsleep, caption: 'Occasionally she becomes a Non-Newtonian solid'},
    { image: xmasbonejojo, caption: 'Christmas means marrow bones'},
  ]
}; 