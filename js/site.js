/* JS object is named "events".  In form:
{
    event: {
        map: "URL",
        photo: ["URL", "Alt text"],
        description: "Description text"
    },
    event: {
        map: "URL",
        photo: ["URL", "Alt text"],
        year: "Year: ",
        organization: "Organization: ",
        description: "Description text"
    }
    ...
} 
*/
const events = {
    "Birth": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52117.556456484366!2d-120.7054052967784!3d35.2724910045703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ece6be7b6cc227%3A0xbc0290c2ceef0f46!2sSan%20Luis%20Obispo%2C%20CA!5e0!3m2!1sen!2sus!4v1646236272588!5m2!1sen!2sus",
        photo: ["img/chris_born_400.jpg", "New child card"],
        year: "Year: 1991",
        organization: "Organization: Sierra Vista Hospital",
        description: "Description: My parents already had one child and only intended to have one more.  Then twins happened.  At least they had a sense of humor about it."
    },
    "Cute Phase": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52086.05756623592!2d-120.876269032794!3d35.32141890146574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ece48c9abb53f5%3A0x5364c9d9ee768e7e!2sBaywood-Los%20Osos%2C%20CA%2093402!5e0!3m2!1sen!2sus!4v1646250439314!5m2!1sen!2sus",
        photo: ["img/chris_cute_400.jpg", "Chris as toddler holding shovel"],
        year: "Years: 1992-2003",
        organization: "Organization: Monarch Grove Elementary and Los Osos Middle School",
        description: "Description: After humans stop looking like little old men aliens we become cute children.  I was no exception."
    },
    "Awkward Phase": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104099.08957789103!2d-120.94187558780224!3d35.378061291222046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ece10bb9b5aa93%3A0xaa1be219c181970c!2sMorro%20Bay%2C%20CA!5e0!3m2!1sen!2sus!4v1646348611496!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2004-2009",
        organization: "Organization: Morro Bay High School",
        description: "Description: The cute phase is followed by an awkward phase chock full of puberty and poor choices that lasts through high school.  I was no exception."
    },
    "College": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96582.59373716332!2d-124.1234347149432!3d40.84539961658875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d1570e67b9e801%3A0x7d8ad78fa1858786!2sArcata%2C%20CA!5e0!3m2!1sen!2sus!4v1646348862956!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2009-2013",
        organization: "Organization: Cal Poly Humboldt",
        description: "Description: I went to Cal Poly Humboldt, graduating with a BS in Biology.  During this 4 year time period I was a botany supplemental course instructor, Cell Biology Club vice president, Surfrider volunteer, farm intern, camp counselor, cashier, dish washer, and aquarium docent.  You caught me, we lumped a few life events together."
   },
    "Ski Lift Operator": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24733.900771124976!2d-120.23756775363627!3d39.20341083313435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809bd9eb8ed78e61%3A0x84b9b4fc9269314f!2sOlympic%20Valley%2C%20CA%2096146!5e0!3m2!1sen!2sus!4v1646348900999!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2013-2014",
        organization: "Organization: Squaw Valley Ski Resort",
        description: "Description: Safely and efficiently operated chair lifts while ensuring positive guest experiences.  Also learned how to ski."
    },
    "Washington Conservation Corps": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87009.49835705137!2d-122.9640791886539!3d47.039311995351326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491c9c1ae285569%3A0x4f146197e2881b83!2sOlympia%2C%20WA!5e0!3m2!1sen!2sus!4v1646348926583!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Year: 2014",
        organization: "Organization: Washington Department of Fish and Wildlife",
        description: 'Description: Surveyed forage fish habitat in the southern Puget Sound.  "One fish.."'
    },
    "Watershed Stewards Program (northern California)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23976.65394049337!2d-123.55720950122156!3d41.307085316863706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d1a2dfb774e19b%3A0x82ccc483db5b6bf5!2sOrleans%2C%20CA!5e0!3m2!1sen!2sus!4v1646348946135!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2014-2015",
        organization: "Organization: USFS Orleans Fisheries Department",
        description: 'Description: As an Americorps Watershed Stewards Program member we monitored salmonid populations and performed environmental education.  "...two fish..."'
    },
    "Watershed Stewards Program (central California)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50998.73374151554!2d-122.08258507263494!3d36.975886232341395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e441b7c36d549%3A0x52ca104b2ad7f985!2sSanta%20Cruz%2C%20CA!5e0!3m2!1sen!2sus!4v1646348964596!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2015-2016",
        organization: "Organization: NOAA National Marine Fisheries Service",
        description: 'Description: As an Americorps Watershed Stewards Program member we monitored salmonid populations and performed environmental education. "...red..."'
    },
    "Raft Guide (California)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12437.39403802288!2d-120.91732630747579!3d38.80156712176475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809aff9b410ad30d%3A0x8185f6a2a6fb29e8!2sLotus%2C%20Coloma%2C%20CA%2095651!5e0!3m2!1sen!2sus!4v1646348992859!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Year: 2016",
        organization: "Organization: All-Outdoors Rafting Company",
        description: 'Description: Safely guided guests down the South Fork of the American River. "Lean in!"'
    },
    "Fisheries Technician (California)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24648.7000505682!2d-123.81919795336454!3d39.44475413090528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80803553c502486f%3A0xd285848a37ac9cdf!2sFort%20Bragg%2C%20CA%2095437!5e0!3m2!1sen!2sus!4v1646349010789!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2016-2017",
        organization: "Organization: California Department of Fish and Wildlife",
        description: 'Description: Monitored juvenile and adult populations of coho, Chinook, and steelhead. "...fish..."'
    },
    "Raft Guide (Colorado)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24863.089113794882!2d-106.15664790404834!3d38.83506838671653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87152e524b4cf5ad%3A0x7d84a1e7aae75537!2sBuena%20Vista%2C%20CO%2081211!5e0!3m2!1sen!2sus!4v1646349606743!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Year: 2017",
        organization: "Organization: Good Times Rafting Company",
        description: 'Description: Safely guided guests down the Arkansas River.  "Get down!"'
    },
    "Fisheries Technician (northern Washington)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10597.065459266145!2d-122.50522830456067!3d48.393827666284665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548565a4ff91ed53%3A0x408042f63e48924e!2sLa%20Conner%2C%20WA%2098257!5e0!3m2!1sen!2sus!4v1646349081149!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Year: 2017",
        organization: "Organization: Washington Department of Fish and Wildlife",
        description: 'Description: Monitored Chinook, coho, pink, and chum salmon populations. "...blue..."'
    },
    "Raft Guide (Tennessee)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13067.284409112375!2d-84.39548770847419!3d35.0362051340514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885fac574eb1e8af%3A0x8f22f0dbdc27df07!2sDucktown%2C%20TN!5e0!3m2!1sen!2sus!4v1646349097690!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Year: 2018",
        organization: "Organization: Wildwater Rafting Company",
        description: 'Description: Safely guided guests down the Ocoee, Chatooga, Pigeon, and Nantahala rivers. "Hold on!"'
    },
    "Fisheries Technician (southern Washington)": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44498.23619221253!2d-122.7387289806846!3d45.80845927494196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54944d7312b9e551%3A0x95775af003e68f8!2sRidgefield%2C%20WA%2098642!5e0!3m2!1sen!2sus!4v1646349125488!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Year: 2018",
        organization: "Organization: Washington Department of Fish and Wildlife",
        description: 'Description: Assessed abundance and distribution of adult salmon through spawning ground surveys. "...fish."'
    },
    "Environmental Health Specialist": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46325.33326546375!2d-110.81070249246179!3d43.47451363041903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53531a58fccf7f4b%3A0x3d1c01cbb13a835c!2sJackson%2C%20WY!5e0!3m2!1sen!2sus!4v1646349198606!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2018-2021",
        organization: "Organization: Teton County (WY)",
        description: 'Description: Performed food and recreational water health inspections at business establishments within county.  Tested for presence of bacteria in drinking water in EPA-certified water lab.  Our office Halloween theme was "bugs".  I had to explain my costume to everyone, which is the mark of a great costume.'
    },
    "Getting Geeky": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52086.05758215339!2d-120.87635462966522!3d35.321418876755686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ece48c9abb53f5%3A0x5364c9d9ee768e7e!2sBaywood-Los%20Osos%2C%20CA%2093402!5e0!3m2!1sen!2sus!4v1646349226729!5m2!1sen!2sus",
        photo: ["IMG", "AT"],
        year: "Years: 2021-Present",
        organization: "Organization: Computer Screen",
        description: "Description: As I approached the ripe old age of 30, I decided it was time to learn more about those newfangled computers everybody keeps talking about.  In other words, get geeky.  The first step?  Start playing Dungeons and Dragons. Second?  Build a personal computer.  Third?  Learn.  I've taken online courses on Python, SQL + relational databases, R + data science + statistics, GIS, and front end web design (HTML + CSS + JS).  It turns out there is a lot to learn and always more to explore."
    }
}; 

function displayEvent(eventButtonElement) {
    /*Change event heading
    Change description
    Change map location 
    Change photo URL and alt-text
    */
   const event = eventButtonElement.id;
   document.getElementById("event").innerHTML = event;
   document.getElementById("year").innerHTML = events[event]["year"];
   document.getElementById("organization").innerHTML = events[event]["organization"];
   document.getElementById("description").innerHTML = events[event]["description"];
   document.getElementById("map").src = events[event]["map"];
   document.getElementById("photo").src = events[event]["photo"][0];
   document.getElementById("photo").alt = events[event]["photo"][1];
}