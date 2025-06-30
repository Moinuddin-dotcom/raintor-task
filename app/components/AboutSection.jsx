import assets from '@/assets/assets'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    return (
        <div className={`mx-[15px]  bg-[url('/hero-bg2.png')] bg-no-repeat bg-cover bg-center`} >
            <div className='max-w-[70vw] mx-auto py-5 lg:py-20 xl:py-[130px]'>
                <div className='flex justify-end items-center gap-2  px-4 py-4 rounded-full'>
                    <Image src={assets.downArrow} alt='down arrow' width={40} height={40} className='rounded-full border-2 border-black p-3' />
                    <Button className='border-2 border-black rounded-2xl px-4 py-2'>About</Button>
                </div>
                <div>
                    <h1 className='text-xl md:text-4xl xl:text-7xl font-bold text-black tracking-wide leading-[1.9] '>
                        I’ve been <span className='bg-black rounded-2xl text-white tracking-wide p-1'>Developing</span>
                        <br />
                        Websites since <span className='bg-black rounded-2xl text-white tracking-wide p-1'>2013</span>
                    </h1>
                    <p>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.</p>
                </div>
            </div>
            {/* buttons */}
            <div className='max-w-[70vw] mx-auto flex justify-between items-center gap-4 py-5 lg:py-10 xl:py-[90px]'>
                <p className='text-2xl font-bold' >PREVIOUSLY <br /> WORKED ON</p>
                <div>
                    <Image src={assets.group} alt='skills' width={804} height={304} className='object-contain' />
                </div>
            </div>
        </div>
    )
}
