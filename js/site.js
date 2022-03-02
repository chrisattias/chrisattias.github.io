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
        description: "Description text"
    }
    ...
} 
*/
const events = {
    "Birth": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52117.556456484366!2d-120.7054052967784!3d35.2724910045703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ece6be7b6cc227%3A0xbc0290c2ceef0f46!2sSan%20Luis%20Obispo%2C%20CA!5e0!3m2!1sen!2sus!4v1646236272588!5m2!1sen!2sus",
        photo: ["../img/chris_born_400.jpg", "New child card"],
        description: "Year: 1991.  My parents never intended to have twins, but at least they had a sense of humor about it."
    },
    "Cute Phase": {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52086.05756623592!2d-120.876269032794!3d35.32141890146574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ece48c9abb53f5%3A0x5364c9d9ee768e7e!2sBaywood-Los%20Osos%2C%20CA%2093402!5e0!3m2!1sen!2sus!4v1646250439314!5m2!1sen!2sus",
        photo: ["img/chris_cute_400.jpg", "Chris as toddler holding shovel"],
        description: "Years: 1992-2002. After humans stop looking like little old men aliens we become cute children."
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
   document.getElementById("description").innerHTML = events[event]["description"];
   document.getElementById("map").src = events[event]["map"];
   document.getElementById("photo").src = events[event]["photo"][0];
   document.getElementById("photo").alt = events[event]["photo"][1];
}