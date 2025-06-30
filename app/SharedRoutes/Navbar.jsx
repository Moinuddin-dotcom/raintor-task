// "use client";

// import React, { useRef } from 'react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/Button';
// import assets from '@/assets/assets';
// import { Menu, X } from 'lucide-react';


// export default function Navbar() {
//     const sideMenuRef = useRef()

//     const openMenu = () => {
//         sideMenuRef.current.style.transform = 'translateX(-16rem)'
//     }
//     const closeMenu = () => {
//         sideMenuRef.current.style.transform = 'translateX(16rem)'
//     }


//     return (
//         <div className='px-[15px]'>
//             <div className='fixed top-0 w-[282px] lg:w-[1490px] -z-10 px-[50px] py-7 border-2 border-black rounded-b-4xl flex justify-between items-center p-4 bg-white text-black'>
//                 <h1 className='font-bold text-base text-black'>DEVLOP.ME</h1>
//                 <div className='flex items-center space-x-4'>
//                     <ul className='hidden md:flex gap-20 text-sm font-semibold pr-10  '>
//                         <li className='cursor-pointer font-normal'><a href="#top"></a>  Home</li>
//                         <li className='cursor-pointer font-normal'><a href="#about"></a>  About</li>
//                         <li className='cursor-pointer font-normal'><a href="#skills"></a>  portfolio</li>
//                         <li className='cursor-pointer font-normal'><a href="#work"></a>  Blog</li>
//                     </ul>
//                     <Button className='hidden md:flex justify-center items-center gap-2 pr-4 py-2 border border-black rounded-full '>
//                         <div className='flex justify-center items-center gap-2 border border-black rounded-full p-2'>
//                             <Image src={assets.rightArrow} alt='right arrow' width={20} height={5} />
//                         </div>
//                         <span className='font-semibold'>Start Project</span></Button>

//                     <Button onClick={openMenu} className='block md:hidden ml-3'>
//                         <Menu />
//                     </Button>
//                 </div>
//             </div>
//             {/* Mobile Menu */}
//             <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-[#2a004a] transition duration-500'>

//                 <div onClick={closeMenu} className='absolute right-6 top-6'>
//                     {/* <Image src={assets.close_black} alt='Close' width={20} height={20} className='cursor-pointer' /> */}
//                     <X />
//                 </div>

//                 <li><a onClick={closeMenu} href="#top">Home</a></li>
//                 <li><a onClick={closeMenu} href="#about">About Me</a></li>
//                 <li><a onClick={closeMenu} href="#portfolio">Portfolio</a></li>
//                 <li><a onClick={closeMenu} href="#work">Blog</a></li>
//             </ul>
//         </div>
//     )
// }


"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import assets from '@/assets/assets';

export default function Navbar() {
    const sideMenuRef = useRef();

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(-16rem)';
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)';
        }
    };

    return (
       <div className="px-2 sm:px-4 lg:px-6 overflow-x-hidden">
            <nav className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-full sm:max-w-screen-md lg:max-w-screen-xl bg-white text-black border-2 border-black rounded-b-2xl py-3 sm:py-4 px-3 sm:px-4 flex justify-between items-center">
                <h1 className="font-bold text-base sm:text-lg lg:text-xl text-black">DEVLOP.ME</h1>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <ul className="hidden md:flex gap-3 lg:gap-6 text-xs sm:text-sm font-semibold">
                        <li className="cursor-pointer font-normal">
                            <a href="#top" className="hover:underline">Home</a>
                        </li>
                        <li className="cursor-pointer font-normal">
                            <a href="#about" className="hover:underline">About</a>
                        </li>
                        <li className="cursor-pointer font-normal">
                            <a href="#skills" className="hover:underline">Portfolio</a>
                        </li>
                        <li className="cursor-pointer font-normal">
                            <a href="#work" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                    <Button className="hidden md:flex justify-center items-center gap-1 sm:gap-2 py-1 sm:py-2 px-2 sm:px-3 border border-black rounded-full text-xs sm:text-sm">
                        <div className="flex justify-center items-center border border-black rounded-full p-1 sm:p-2">
                            <Image src={assets.rightArrow} alt="right arrow" width={16} height={4} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="font-semibold">Start Project</span>
                    </Button>
                    <Button
                        onClick={openMenu}
                        className="block md:hidden p-1"
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </Button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <ul
                ref={sideMenuRef}
                className="flex md:hidden flex-col gap-4 py-16 px-4 fixed right-0 top-0 bottom-0 w-4/5 max-w-[280px] z-50 h-screen bg-white transition-transform duration-300 translate-x-full"
            >
                <div
                    onClick={closeMenu}
                    className="absolute right-3 top-3 cursor-pointer"
                    aria-label="Close menu"
                >
                    <X size={20} />
                </div>
                <li>
                    <a onClick={closeMenu} href="#top" className="text-base hover:underline">Home</a>
                </li>
                <li>
                    <a onClick={closeMenu} href="#about" className="text-base hover:underline">About Me</a>
                </li>
                <li>
                    <a onClick={closeMenu} href="#portfolio" className="text-base hover:underline">Portfolio</a>
                </li>
                <li>
                    <a onClick={closeMenu} href="#work" className="text-base hover:underline">Blog</a>
                </li>
            </ul>
        </div>
    );
}