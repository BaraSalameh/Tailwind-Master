'use client';

import { useEffect, useState } from "react";

const BlurryLoading = () => {
    const [counter, setCounter] = useState(0);

    const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

    useEffect(() => {
        const loading = setInterval(() => {
            setCounter(prev => {
                console.log(`opacity scale: ${scale(prev, 0, 100, 30, 0)}px`);
                if(prev >= 100) {
                    clearInterval(loading);
                    return 100;
                }
                return prev + 1
            })
        }, 30);
    }, []);

    return(
        <div
            className={`
                bg-[url('https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80')]
                bg-cover bg-center
                h-screen w-screen
            `}
        >
            <div className={`h-full w-full flex items-center justify-center text-5xl font-bold`}
                style={{
                    opacity: scale(counter, 0, 100, 1, 0),
                    backdropFilter: `blur(${scale(counter, 0, 100, 30, 0)}px)`
                }}
            >
                {counter}%
            </div>
        </div>
    )
}

export default BlurryLoading;