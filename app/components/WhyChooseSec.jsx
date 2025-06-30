
import assets from '@/assets/assets'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { MoveDown, MoveLeft, MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function WhyChooseSec() {
    return (
        <div className='mx-[15px] rounded-2xl bg-[#000000] text-white py-[90px] px-5 md:px-[65px]'>
            <div className='flex justify-start items-center gap-2 py-4 md:px-4 rounded-full'>
                <div className='p-3 rounded-full border-2 border-white'>
                    <MoveDown size={15} />
                </div>
                <Button className='border-2 border-white bg-black text-white rounded-2xl px-4 py-2'>Why Choose me</Button>
            </div>
            <div className='grid md:grid-cols-2 gap-10 mt-10'>
                <div className='justify-self-center md:justify-self-start'>
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>My Extensive List of Skills</h1>
                </div>
                <div className='justify-self-center md:justify-self-end space-y-4'>
                    <p className='font-normal text-end'>Building the worlds best marketing Your <br /> trusted partner for strategy, design, and dev.</p>
                    <div className="breakdown h-0.5 bg-gray-400 rounded-full w-full"></div>
                    <div className='flex justify-end items-center gap-4'>
                        <div className='p-5 rounded-full border-2 border-white'>
                            <MoveLeft size={20} />
                        </div>

                        <div className='p-5 rounded-full border-2 border-white'>
                            <MoveRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                <Card
                    logoSrc={assets.cardLogo}
                    title='HTML & CSS'
                    description='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.'
                />
                <Card
                    logoSrc={assets.cardLogo}
                    title='Javascript'
                    description='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.'
                />
                <Card
                    logoSrc={assets.cardLogo}
                    title='Webflow'
                    description='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.'
                />
            </div>
        </div>
    )
}
