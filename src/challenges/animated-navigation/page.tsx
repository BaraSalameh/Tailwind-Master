'use client';

import { useState } from "react";

const AnimatedNavigation = () => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div
            className="
                relative h-screen
                bg-[linear-gradient(to_bottom,_#eafbff_0%,_#eafbff_50%,_#5290f9_50%,_#5290f9_100%)]
            "
        >
            <div className={`
                    absolute left-1/2 top-1/2 -translate-1/2 bg-foreground
                    flex shadow-md shadow-background
                    ${isActive ? 'w-100' : 'w-20'}
                    transition-all duration-1000 ease-in
                `}
            >
                <ul
                    className={`
                        text-background
                        flex gap-7 py-5
                        [&>li]:cursor-pointer [&>li]:transition-all [&>li]:duration-1000 [&>li]:ease-in
                        ${isActive ? 'opacity-100 [&>li]:scale-x-100 w-80 px-10' : 'opacity-0 [&>li]:-scale-x-[1] w-0 px-0'}
                        transition-all duration-1000 ease-in
                    `}
                >
                    <li>Home</li>
                    <li>Works</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button
                    className={`
                        relative cursor-pointer w-full
                        [&>div]:absolute [&>div]:left-1/2 [&>div]:top-1/2 [&>div]:-translate-1/2
                        [&>div]:bg-[#5290f9] [&>div]:h-5 [&>div]:w-[2px]
                        [&>div]:transition-transform [&>div]:duration-1000 [&>div]:ease-in
                        ${isActive
                            ? '[&>div]:first-of-type:rotate-45 [&>div]:last-of-type:-rotate-45'
                            : '[&>div]:first-of-type:rotate-810 [&>div]:last-of-type:-rotate-810 [&>div]:first-of-type:top-[40%] [&>div]:first-of-type:-translate-y-[40%] [&>div]:last-of-type:top-[60%] [&>div]:last-of-type:-translate-y-[60%'}
                    `}
                    onClick={() => setIsActive(prev => !prev)}
                >
                    <div/>
                    <div/>
                </button>
            </div>
        </div>
    )
}

export default AnimatedNavigation;