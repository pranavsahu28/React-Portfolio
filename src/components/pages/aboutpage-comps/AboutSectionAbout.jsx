import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const AboutSectionAbout = () => {
    return (
        <section name="About" className='relative w-full h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                <div className='flex mt-8 md:mt-0'>
                    <img src="/images/me1.jpg" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} />
                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>

                    <div className='flex items-center bg-primary-color/20 rounded-md py-2 px-4'>
                        <img className='h-[30px] w-auto mr-2' src="/icons/india.png" alt="" />
                        <h2 className='text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white'>Indian - 24 years old</h2>
                    </div>
                    
                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>As a Frontend Developer with a postgraduate degree from C-DAC, I bring over 1 years of hands-on experience in crafting user-centric web applications. Proficient in React.js, JavaScript, MySQL, and HTML5, my journey includes a valuable year at Amantya Technologies, Inc., where I actively contributed to diverse web projects.</p>

                    <p className='text-md md:text-lg text-gray-300 max-x-md text-justify'>Apart from my Professional Tech Career, I am a State volleyball player Represented State in Volleyball ChampionShip, I am A Tabla and Harmonium(Musical instruments) Player also having 1 year of proficiency.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutSectionAbout
