
import assets from '@/assets/assets'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ColorWideCard } from '@/components/ui/ColorWideCard'
import { WideCard } from '@/components/ui/WideCard'
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
                <Button className='border-2 border-white bg-black text-white rounded-2xl px-4 py-2'>Work Process</Button>
            </div>
            {/* <div className='grid md:grid-cols-2 gap-10 mt-10'>
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
            </div> */}
            {/* Cards */}
            <div className='grid md:grid-cols-2 gap-10 mt-10'>
                <WideCard
                    title='Discovery'
                    read='Read More'
                    description='We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.'
                />
                <ColorWideCard
                    title='Strategy'
                    read='Read More'
                    description="Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success. "
                />
                <WideCard
                    title='Design'
                    read='Read More'
                    description="After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval."
                />

                <WideCard
                    title='Build'
                    read='Read More'
                    description="Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project."
                />
            </div>
        </div>
    )
}
