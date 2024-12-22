'use client'

import React from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

type SubType = {
    subtype: string;
};

type SubTypeHeadingProps = {
    subtypes: SubType[];
};

const SubTypeHeading = ({ subtypes }: SubTypeHeadingProps) => {
    const router = useRouter();
    const pathname = usePathname(); // Get the current pathname
    const searchParams = useSearchParams(); // Get the current search params

    const selectedSubType = searchParams.get('subtype'); // Get the selected subtype from URL

    const handleSubTypeChange = (subtype: string) => {
        // Update the URL with the selected subtype, keeping the current type
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('subtype', subtype); // Set the subtype query parameter
        router.push(currentUrl.toString()); // Update the URL without reloading the page
    };

    return (
        <div className="subtype my-3 w-full h-[30px] flex justify-center items-center m-0 p-0 mt-2">
            {subtypes.map((sub, index) => (
                <button
                    key={index}
                    className={`mx-3 text-lg font-semibold generic-viridian ${selectedSubType === sub.subtype ? 'border-b-4 b-generic-viridian' : ''}`}
                    onClick={() => handleSubTypeChange(sub.subtype)} // Pass selected subtype to URL
                >
                    {sub.subtype}
                </button>
            ))}
        </div>
    );
};

export default SubTypeHeading;
