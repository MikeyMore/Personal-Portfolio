import React from 'react';
import "../styles/Home.css";
import { Javascript, LinkedIn, Email, GitHub, Skateboarding, Surfing, AutoFixHigh, OndemandVideo, Gamepad} from '@mui/icons-material';
import Programmer from '../assets/PngItem_1127587.png';
import { useEffect, useState } from 'react';

function Home() {

    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

  return (
    <div className='home'>
        <div className='about'>
            <h2> Hi, My name is Michael</h2>
            <br></br>
            <br></br>
            
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
            <br></br><img className='programmer' style={width > 700 ? {height: '500px', width: '650px'} : {height: '200px', width: '350px'}} src={Programmer} />
            <ol className='list'>
                <li className='item'>
                    <h2>Things I like:</h2>
                    <span><Skateboarding /> Skateboarding 
                    <br></br> <Gamepad /> Gaming 
                    <br></br> <OndemandVideo /> Anime
                    <br></br> <OndemandVideo /> Netflix
                    <br></br> <Surfing /> Bodyboarding 
                    <br></br> <AutoFixHigh /> Close-up magic</span>
                </li>
                <li className='item'>
                    <h2>Web Development </h2>
                    <span>NodeJS
                    <br></br> MySQL
                    <br></br> JSP (Java Server Page)
                    <br></br> TomCat
                    <br></br> HTML
                    <br></br> CSS
                    <br></br> ReactJS
                    <br></br> NPM </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span> Python
                    <br></br> Java
                    <br></br> Javascript
                    <br></br> C++
                    <br></br> VisualBasic</span>
                </li>
                <li className='item'>
                    <h2>Other</h2>
                    <span> Kali Linux
                    <br></br> Cisco Packet tracer
                    <br></br> MatLab
                    <br></br> Octave</span>
                </li>
                <li className='item'>
                    <h2>Short term goals</h2>
                    <span> CCNA certification
                    <br></br> CompTIA Network+
                    <br></br> CompTIA Security+</span>
                </li>
            </ol>
            
        </div>
        <h2 className='coffeePlz'>CoffeePlz</h2>
            <a href='https://www.buymeacoffee.com/michaelmore'>
                <div className='coffee' ></div>
            </a>
    </div>
  )
}

export default Home