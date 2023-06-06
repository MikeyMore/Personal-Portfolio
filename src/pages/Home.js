import React from 'react';
import { LinkedIn } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My name is Michael</h2>
            <div className='prompt'>
                <br></br>
                <p>
                    <br></br>
                             I am Michael O. Moreno Gierbolini, a devoted technology enthusiast. My journey into the world of coding began during high school, where I actively participated in a pre-engineering program. Since then, my thirst for knowledge has remained insatiable, driving me to continuously expand my understanding of various technologies. Intrigued by the inner workings of systems, I possess an unwavering passion for creating innovative solutions.
                </p>
                <Email />
                <GitHub />
                <LinkedIn />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Things I like:</h2>
                    <span>skateboarding, gaming, anime, netflix, bodyboarding and close-up magic</span>
                </li>
                <li className='item'>
                    <h2>Web Development </h2>
                    <span>NodeJS, MySQL, JSP, TomCat, HTML, CSS, ReactJS, NPM, Javascript</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span> Python, Java, , C++, VisualBasic</span>
                </li>
                <li className='item'>
                    <h2>Short term goals</h2>
                    <span> CCNA certification, CompTIA Network+, CompTIA Security+</span>
                </li>
            </ol>
        </div>
        
    </div>
  )
}

export default Home