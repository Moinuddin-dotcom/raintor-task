import React from 'react';
import Image from 'next/image';
import { Button } from './Button';
import { MoveRight } from 'lucide-react';

export function ColorWideCard({ title, read, description, className = '' }) {
    return (
        <div className={`bg-[#C5FF41] rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
            <div className='flex justify-between items-center w-full mb-4'>
                <Button className='px-4 py-2 text-white text-base rounded-full bg-black'>{title}</Button>
                <Button className='px-4 py-2 text-black text-base underline underline-offset-2 flex items-center gap-1'><MoveRight /> {read}</Button>
            </div>
            <p className="text-sm sm:text-base text-start text-black mt-10 mb-5">{description}</p>
        </div>
    );
}