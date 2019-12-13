
import flashplays from './images/flashplays.png'
import jamclash2 from './images/jamclash2.jpg';
import ryde from './images/Ryde.png';
import mealcrave from './images/mealcravenew.png';
import mario from './images/mario.png';
import rpg from './images/RPG.png';
// import hangman from './images/Hangman.jpg';


export default 
[   {
        'key': '1',
        'title': 'Flash Plays Live',
        'description': 'WordPress Site Build for a client',
        'description2': 'Fully responsive site built with general specifications set by Flash Plays Live app designer. The site allows users to quickly navigate to section they are interested in, view privacy policy, contact the company, download the app, or apply to be a brand rep.',
        'builtWith': 'Built using: HTML, CSS, JavaScript, Wordpress, and plugins to handle security and contact portals',
        'howTo': 'How to use: Navigate the home page by scrolling or clicking the various tabs in the menu at the top of the screen',
        "image": flashplays,
        "link": "some Link",
        "url": "https://www.flashplayslive.com//"
    },
    {
        'key': '2',
        'title': 'Jam Clash',
        'description': 'AWS based social site for musicians',
        'description2': 'Full stack social media app for musicians built with a team. When a user creates an account their location is saved along with their desired musician related information. The user can then search for other musicians with a variety of paramaters that make AJAX calls to an AWS database of users to find people to jam with.',
        'builtWith': 'Built using: HTML, CSS, JQuery, materialize, node.js, APIs, express, sequelize, mongoDB, firebase, passport, nodemailer, and AWS.',
        'howTo': 'How to use: Log in using the user name test@email.com and the password test. When searching set the slider bar to "100" to search at any distance to get the most results wherever you are.',
        "image": jamclash2,
        "link": "some Link",
        "url": "https://jamclash.herokuapp.com/"
    },
    {
        'key': '3',
        'title': 'Ryde or Drive',
        'description': "Ride sharing comparison using API's",
        'description2': "A ride sharing app built with a team. Uses various APIs and scripts to output drive distance, compare the cost of Uber and Lyft, and give the user an estimated cost of driving their own vehicle instead.",
        'builtWith': 'Built using: HTML, CSS, JavaScript/JQuery, Google, Uber, and Lyft APIs.',
        'howTo': "Check the box to use your browser's location services or manually enter a starting location. Enter your destination and vehicle's MPG, or use the dropdowns, and click Submit",
        "image": ryde,
        "link": "some Link",
        "url": "https://jonathan-boesel.github.io/Ryde-or-Dryve/"
    },
    {
        'key': '4',
        'title': 'mealCrave',
        'description': 'View potential meals submitted by users in MySql and Amazon S3',
        'description2': "A full stack food app built with a team prioritizing dishes the user is craving over a specific restaurant. The goal of the app is to eliminate bias in food searches by only displaying restaurant information after a picture is clicked. Once a meal has been selected the restaurant name can be clicked to find the dish nearest you.",
        'builtWith': 'Build using: HTML, CSS, Handlebars.js, Google APIs, express, sequelize, bulma, multer, Amazon S3, and MySql.',
        'howTo': 'How to use:  Try searching for pasta or chicken, the database is seeded with a variety of dishes. Sign in with user: stephen and password: password to test out the dashboard.',
        "image": mealcrave,
        "link": "some Link",
        "url": "https://meal-crave.herokuapp.com/"
    },
    {
        'key': '5',
        'title': 'Trivia Game',
        'description': 'Small trivia game exploring click events and timeouts',
        'description2': 'This trivia game has a “Super Smash Bros. 64” theme from the Nintendo 64 era and presents the user with a series of timed questions that display GIFs upon answering. The number of correct and incorrect answers are saved to a variable and displayed at the end.',
        'builtWith': 'Built using: HTML, CSS, and Javascript.',
        'howTo': 'How to use: Hover over and click the “Press Start” area on the screen and begin to answer the questions. See how many you can get right!',
        "image": mario,
        "link": "some Link",
        "url": "https://jonathan-boesel.github.io/Triviagame/"
    },
    {
        'key': '6',
        'title': 'Click RPG Game',
        'description': 'Interactive click game testing object oriented programming',
        'description2': 'A small RPG game employing Object Oriented Programming to construct the various available characters. Each character has a set amount of health and attack points. The user’s selected character increases in strength with each attack.',
        'builtWith': 'Built using: HTML, CSS, and Javascript.',
        'howTo': 'How to use: Select a character and your first enemy and click “Attack”. Your opponent will lose health then attack you. It is possible to win with each character!',
        "image": rpg,
        "link": "some Link",
        "url": "https://jonathan-boesel.github.io/week-4-game/"
    },
    // {
    //     'key': '6',
    //     'title': 'Hangman Game',
    //     'description': 'Compare your input to an array of correct keywords',
    //     'description2': 'In this Internet themed hangman game various keywords are saved to an array along with the corresponding blank spaces to display to the user. User keystrokes are checked against the current keyword and any blanks are replaced with the correct letter. After a word is guessed correctly or the available guesses reach zero, a new word is randomly selected.',
    //     'builtWith': 'Built using: HTML, CSS, and Javascript.',
    //     'howTo': 'How to use: Click anywhere in the frame to switch your browser’s focus and start guessing letters by pressing your keyboard.',
    //     "image": hangman,
    //     "link": "some Link",
    //     "url": "https://jonathan-boesel.github.io/Hangman/"
    // },
]
