import React, { useEffect, useState } from 'react';
// import logo 
import logoDark from "../assets/img/logo-dark.svg"
import logoLight from "../assets/img/logo-white.svg"
// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";

// import girl image
import girlImg from "../assets/img/girl.png"
const Hero = () => {
  //  theme state
  const [theme, setTheme] = useState("light");
  // if local storage is empty save theme as light
  useEffect(()=>{
    if(localStorage.getItem("theme")===null){
      localStorage.setItem("theme", "light");
    }
  },[])

  useEffect(()=>{
    const html =document.querySelector("html");
    if(localStorage.getItem("theme")==='dark'){
      html.classList.add('dark');
      setTheme("dark");
    }else{
      html.classList.remove('dark');
      setTheme("light");
    }

  },[theme])

  // handle switch theme
  const handleSwitchTheme =()=>{
    if(localStorage.getItem("theme")==='light'){
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }else{
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  } 
  return(
  <section className='min-h-[740px] w-full bg-heroLight bg-cover 
  bg-no-repeat overflow-hidden dark:bg-heroDark'>
    <div className='container mx-auto px-4 lg:px-0'>
      {/* header  */}
      <header className='flex items-center justify-between py-8'>
        {/* logo  */}
        <div>
          <a href="#">
            {theme === "light" ? (<img src ={logoDark}/>) :(<img src ={logoLight}/>)}
          </a>
        </div>
        <button>

        </button>
      </header>
    </div>
    <button onClick={handleSwitchTheme} className='p-4 bg-accent
     text-white rounded-full w-12 h-12 '>
      {
        theme === 'light' ?<BsMoonFill/> : <BsFillSunFill/>
      }
    </button>
  </section>
  );
};

export default Hero;
