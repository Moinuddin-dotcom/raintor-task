import assets from '@/assets/assets'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    return (
        <div className='max-w-[60vw] mx-auto border-2 border-black' >
            <div className='flex justify-end items-center gap-2 py-4 px-4 rounded-full'>
                <Image src={assets.downArrow} alt='down arrow' width={40} height={40} className='rounded-full border-2 border-black p-3' />
                <Button className='border-2 border-black rounded-2xl px-4 py-2'>About</Button>
            </div>
        </div>
    )
}
