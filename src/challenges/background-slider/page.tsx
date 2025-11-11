'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft  } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const images = [
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
    'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
]

const BackgroundSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevNext = (flag: 'prev' | 'next') => {
        setCurrentImageIndex(prev => {
            if (flag === 'next') {
                return prev === images.length - 1
                ?   0
                :   prev + 1
            } else {
                return prev === 0
                ?   images.length - 1
                :   prev - 1
            }
        })
    }
    
    return (
        <div>
            <div
                className={`
                    h-screen bg-center bg-cover
                    transition-all duration-300 ease-in
                `}
                style={{backgroundImage: `url(${images[currentImageIndex]})`}}
            >
                <div className="size-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
                    <div
                        className={`
                            relative h-[70%] w-[70%] bg-center bg-cover bg-fixed
                            transition-all duration-300 ease-in
                            [&>div]:absolute [&>div]:top-1/2 [&>div]:-translate-y-1/2
                            [&>div]:border-y-2 [&>div]:border-yellow-500
                            [&>div]:py-5 [&>div]:px-3 [&>div]:cursor-pointer
                        `}
                        style={{backgroundImage: `url(${images[currentImageIndex]})`}}
                    >
                        <div
                            className="right-1/1 border-l-2"
                            onClick={() => handlePrevNext('prev')}
                        >
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                size="2x"
                            />
                        </div>
                        <div
                            className="left-1/1 border-r-2"
                            onClick={() => handlePrevNext('next')}    
                        >
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="2x"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundSlider;