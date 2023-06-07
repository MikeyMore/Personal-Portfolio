import Arduino from '../assets/arduinoProject.jpg';
import calc from '../assets/calculatorWebapp.png';
import RamdMeme from '../assets/RandomMeme.png';

export const ProjectList = [
    {
        name: "Arduino Video Game Project",
        image: Arduino,
        gitrepo:"https://github.com/MikeyMore/arduino-project",
        description:"This is my microprocessors project, its a videogame inspired by flappy bird. This game uses an LCD screen, a joystick and other electronics like resistors and potentiometers. The code used in this project uses the Liquid Crystal Display library.",
        skills: "Arduino, C++ and Electronics"
    },
    {
        name: "Calculator Web Application",
        image: calc,
        gitrepo: "https://github.com/MikeyMore/web-calculator",
        description: "This is a personal project I started to reinforce what I learned in my computer science degree.",
        skills: "Javascript, HTML and CSS"
    },
    {
        name: "Random meme Web App",
        image: RamdMeme,
        gitrepo: "https://github.com/MikeyMore/Random-Meme_Webapp",
        description: "This is a side project I started to kill boredom. Also this helped me understand a few CSS and JavaScript concepts.",
        skills: "Javascript, HTML and CSS"
    }
]