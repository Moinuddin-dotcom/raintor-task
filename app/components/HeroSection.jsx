import assets from '@/assets/assets'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div className={`px-[15px] py-[100px] md:py-[209px] tracking-wide bg-[url('/hero-bg.png')] bg-no-repeat bg-cover bg-center`}>
            <div className=' md:px-[50px]'>
                <div>
                    <h1 className='text-xl md:text-4xl xl:text-7xl font-bold text-black tracking-wide leading-[1.9] '>
                        Trusted <span className='bg-black rounded-2xl text-white tracking-wide p-1'>Partner</span> for
                        <br />
                        Your Website <span className='bg-black rounded-2xl text-white tracking-wide p-1'>Develop.</span>
                    </h1>
                </div>
                <div className='grid grid-cols-12 gap-10 mt-10'>
                    <div className='images col-span-3 w-48 hidden lg:flex'>
                        <div className='flex gap-5 justify-start'>
                            {/* -rotate-90 w-40 */}
                            <span className='rotate-90 mr-10 text-end'>@williamrey</span>
                            <ul className=' '>
                                <li>
                                    <Image src={assets.facebook} width={25} height={25} alt='facebook' />
                                </li>
                                <li>
                                    <Image src={assets.insta} width={25} height={25} alt='instragram' />
                                </li>
                                <li>
                                    <Image src={assets.twit} width={25} height={25} alt='twitter' />
                                </li>
                                <li>
                                    <Image src={assets.line} width={5} height={2} alt='line' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='des col-span-9 w-full'>
                        <p className='font-normal leading-[1.9]'>Building the worlds best marketing websites for over a decade.
                            <br /> Your trusted partner for strategy, design, and dev.</p>
                        <Button className='flex justify-center items-center gap-2 pr-4 py-2 md:py-4 border border-black rounded-full '>
                            <div className='flex justify-center items-center gap-2 border border-black rounded-full p-2 md:p-4'>
                                <Image src={assets.call} alt='right arrow' width={25} height={25} />
                            </div>
                            <span className='font-semibold'>Start Project</span></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
