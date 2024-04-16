import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
            {/* Seccion izquierda */}
            <section className='grid gap-10'>
                <div>
                    <h3 className='text-sm text-gray-400'><b>Education</b></h3>
                    <h2 className='text-3xl font-semibold mt-2'>Some of my Academics</h2>
                </div>

                <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/cs2016.jpg" alt="reel-diego" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>B.Tech - (2017-2021)</h4>
                        <p className='text-gray-400 text-md mt-2'>Pursued My Bachelors Degree from Chhattisgarh Swamivivekand Technical University(CSVTU) with 74.78%</p>
                        
                    </section>
                </article>

               
            </section>

            {/* Seccion derecha */}
            <section className='grid gap-10'>
            <article className='bg-gray-d relative border-[1px] border-primary-color/30 rounded-lg overflow-hidden'>
                    <div>
                        <img src="/images/videosImages/C-DAC.jpg" alt="macroeconomics" loading='lazy' />
                    </div>
                    <section className='p-6'>
                        <h4>CDAC - Center for development in advance computing.(2021-2022)</h4>
                        <p className='text-gray-400 text-md mt-2'>Completed my Postgraduation Diploma From CDAC Indore with 60%. Learned many Skills like HTML, CSS, javascript, Reactjs, Java, C-programming, Dot net.</p>
                        
                    </section>
                </article>


                
            </section>
        </section>
    )
}

export default Edition
