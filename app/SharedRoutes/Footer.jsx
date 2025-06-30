import React from 'react'

export default function Footer() {
    return (
        // <div>
        //     <h1 className="font-bold text-base sm:text-lg lg:text-xl text-[#C5FF41]">DEVLOP.ME</h1>
        //     This is the footer of the application.
        //     <p>© 2023 Raintor Task. All rights reserved.</p>
        // </div>
        <div className='mx-[15px] rounded-2xl bg-[#000000] text-white pt-[90px] px-5 md:px-[65px]'>
            <div className='grid md:grid-cols-2 gap-10 mt-10'>
                <h1 className="font-bold text-base sm:text-lg lg:text-xl text-[#C5FF41]">DEVLOP.ME</h1>
                <div>
                    <h1 className='text-6xl text-white'>As You Can</h1>
                </div>
            </div>
            <div className='grid md:grid-cols-6 gap-10 mt-10'>
                <h1 className="col-span-2 font-bold text-base sm:text-lg lg:text-xl text-black">DEVLOP.ME</h1>
                <div className=' col-span-4'>
                    <div className='grid md:grid-cols-3 gap-10 mt-10'>
                        <div >
                            <ul className='text-base space-y-2'>
                                <li className='text-gray-600 mb-10 '>Say hello</li>
                                <li>HELLO@DEVLOP.ME.COM</li>
                                <li>MAHBUBUL@ME.COM</li>
                            </ul>
                            <ul className='text-base space-y-2'>
                                <li className='text-gray-600 my-10 '>Call</li>
                                <li>+784549 4981 00</li>
                                <li>+8845 0100 211</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-base space-y-2'>
                                <li className='text-gray-600 mb-10 '>Menu</li>
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>PORTFOLIO</li>
                                <li>BLOG</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-base space-y-2'>
                                <li className='text-gray-600 mb-10 '>Social</li>
                                <li>TWITTER</li>
                                <li>INSTAGRAM</li>
                                <li>FACEBOOK</li>
                                <li>BEHANCE</li>
                                <li>DRIBBBLE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20 py-20'>
                <ul className='flex justify-between'>
                    <li>BESNIK</li>
                    <li>© devlop.me 2022</li>
                    <li>PRIVACY - TERMS</li>
                </ul>
            </div>
        </div>
    )
}
