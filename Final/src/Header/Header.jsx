import {Link, NavLink, Outlet} from 'react-router-dom'
import './Header.css';
import '../index.css'
import logo from '../assets/mintlogo.jpg'
import React,{Component, useState} from 'react';

import Footer from '../Footer/Footer';
export default function  Header(){ 
    const [clicked,setClicked]=useState(false)
    const handleClick=()=>{
        setClicked(
            !clicked
        )
    }
   
     
    
    return(

        <div>
        <header className='header'> 
        <div className="logo">
        <img src={logo} alt="" /> 
         <h3>Ministry Of Innovation And Technology</h3>  
        </div>
            <nav className='navbar'>
                <ul id='navbar' className={clicked ? "#navbar active" : "#navbar" } >
                     <li>
                        <Link to='/'>Home</Link>
                    </li>
                   
                    <li>
                    <Link to='feedback'>Feedback</Link>
                    </li>
                    <li>
                    <Link to='compliant'>Compliant</Link>
                    </li>
                    <li>
                    <Link to='login'>Login</Link>
                    </li>
                    <li>
                    <Link to='about'>About</Link>
                    </li>
                    
                </ul>
                <div id='mobile' onClick={handleClick}>
                    <i id='bars' className={clicked ? "fas fa-times":"fas fa-bars"}></i>
                    
                </div>
                
            </nav>
           
            
        </header>
         <main>
              <Outlet/> 
              <Footer/>
         </main>
         </div>
    )
}