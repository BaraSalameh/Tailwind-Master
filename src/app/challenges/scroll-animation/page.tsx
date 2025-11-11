'use client';

import { useEffect, useRef } from "react";

const ScrollAnimation = () => {

    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('even:[&>div]:-translate-x-[150%]', 'odd:[&>div]:translate-x-[150%]')
                    } else if(!entry.isIntersecting) {
                        entry.target.classList.add('even:[&>div]:-translate-x-[150%]', 'odd:[&>div]:translate-x-[150%]')
                    }
                });
            }, { threshold: 0.1 }
        );

        itemsRef.current.forEach(el => { if(el) observer.observe(el)})

        return () => {
            itemsRef.current.forEach(el => { if(el) observer.unobserve(el)})
        };
    }, []);

  const renderContent = () =>
    Array.from({ length: 13 }, (_, i) => (
        <div className="flex items-center justify-center overflow-hidden w-full h-50 even:[&>div]:-translate-x-[150%] odd:[&>div]:translate-x-[150%]"
            ref={el => {itemsRef.current[i] = el}}
            key={i}
        >
            <div
                className={`
                    element
                    w-[60%] h-full
                    rounded-xl
                    flex items-center justify-center
                    bg-[steelblue] text-5xl
                    transition-all duration-500 ease-in
                `}
            >
                Content
            </div>
        </div>
    ));

    return (
        <div
            className="
                bg-foreground
                w-screen py-2
                flex flex-col items-center gap-4 
                font-bold
            "
        >
            <h1 className="text-background text-3xl">Scroll to see the animation</h1>
            {renderContent()}
        </div>
    );
};

export default ScrollAnimation;
