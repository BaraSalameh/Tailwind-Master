'use client';

import { useState } from "react";

const ButtonRippleEffect = () => {
    
    const [circlePosition, setCirclePosition] = useState({x: 0, y: 0})
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCirclePosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })

        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 500);
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <button
                onClick={handleClick}
                className={`
                    relative bg-[purple] outline-0 py-[20px] px-[30px] cursor-pointer text-sm font-sans
                    overflow-hidden
                    [&>div]:-translate-1/2
                `}
            >
                <div
                    className={`
                        absolute rounded-full bg-white
                        ${isAnimating ? 'animate-flow' : ''}
                    `}
                    style={{
                        top: circlePosition.y,
                        left: circlePosition.x
                    }}
                />
                CLICK ME
            </button>
        </div>
    )
}

export default ButtonRippleEffect;