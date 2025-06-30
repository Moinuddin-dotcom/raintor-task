import assets from '@/assets/assets'
import { Button } from '@/components/ui/Button'
import { Mail, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ContactSection() {
    return (
        <div className={`px-5 grid md:grid-cols-3 mt-10 bg-[url('/hero-bg3.png')] bg-no-repeat bg-cover bg-center`}>
            <div className='col-span-2 text-black flex flex-col gap-4 my-10 px-4 py-6'>
                <div className='flex justify-start items-center gap-2  px-4 py-4 rounded-full'>
                    <Image src={assets.downArrow} alt='down arrow' width={40} height={40} className='rounded-full border-2 border-black p-3' />
                    <Button className='border-2 border-black rounded-2xl px-4 py-2'>About</Button>
                </div>
                <h1 className='text-xl md:text-4xl  font-bold text-black tracking-wide leading-[1.9] '>
                    Interested in
                    <br />
                    <span className='bg-black rounded-2xl text-white tracking-wide p-1'>work</span> together?
                </h1>
                <p className='wrap-anywhere'>We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.</p>
                <Button className='flex justify-center items-center gap-2 pr-4 py-2 md:py-4 border border-black rounded-full w-70 '>
                    <div className='flex justify-center items-center gap-2 border border-black rounded-full p-2 md:p-4'>
                        <Image src={assets.call} alt='right arrow' width={25} height={25} />
                    </div>
                    <span className='font-semibold'>Schedule a Call</span></Button>
            </div>

            <div className='col-span-1 justify-self-center '>
                <form action="" className='bg-black text-white flex flex-col gap-10  my-10 px-0 md:px-4 py-6 border border-black rounded-lg'>
                    <input type="text" placeholder='Enter your name' className='text-white border-b hover:border-b hover:border-white border-gray-400 p-1 rounded-lg' />
                    <input type="email" placeholder='Enter your email' className='text-white border-b hover:border-b hover:border-white border-gray-400 p-1 rounded-lg' />
                    <textarea name="" id="" cols="30" rows="2" placeholder='Enter your message' className='text-white border-b hover:border-b hover:border-white border-gray-400 p-1 rounded-lg'></textarea>
                    <div className='flex justify-start items-center gap-4'>
                        <Button className='border-2 border-black rounded-2xl px-4 py-2 bg-black text-white flex items-center'><Send /> Send </Button>
                        Or
                        <Button className='border-2 border-black rounded-2xl px-4 py-2 bg-black text-white flex items-center'><Mail /> Send </Button>

                    </div>
                    <div className='flex gap-5 justify-start'>
                        <span className=''>@williamrey</span>
                        <ul className='flex gap-5 justify-start'>
                            <li>
                                <Image src={assets.lineWhite} width={25} height={5} alt='line' />
                            </li>
                            <li>
                                <Image src={assets.fbWhite} width={25} height={25} alt='facebook' />
                            </li>
                            <li>
                                <Image src={assets.instaWhite} width={25} height={25} alt='instragram' />
                            </li>
                            <li>
                                <Image src={assets.twitWhite} width={25} height={25} alt='twitter' />
                            </li>

                        </ul>
                    </div>
                </form>
            </div>
        </div>
    )
}
