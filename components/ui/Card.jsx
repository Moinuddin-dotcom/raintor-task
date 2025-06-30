import React from 'react';
import Image from 'next/image';

export function Card({ logoSrc, title, description, className = '' }) {
    return (
        <div className={`bg-[#FFFFFF14] rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
            {logoSrc && (
                <div className="mb-4">
                    <Image
                        src={logoSrc}
                        alt={`${title} logo`}
                        width={104}
                        height={104}
                        className="object-contain"
                    />
                </div>
            )}
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h2>
            <p className="text-sm sm:text-base text-white">{description}</p>
        </div>
    );
}