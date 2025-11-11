'use client';

import { useState } from "react";

const DrinkWater = () => {
    const [liters, setLiters] = useState(0);
    const [cupIndex, setCupIndex] = useState(-1);
    
    const handleCupClick = (idx: number) => {
        setCupIndex(prev => {
            const index = prev === 0 && idx === 0 ? -1 : idx;
            setLiters((index + 1) * (1 / 4));
            return index;
        });
    }

    return(
        <div
            className="
                bg-[#3494e4] min-h-screen
                flex flex-col items-center p-5 gap-10
            "
        >
            <div
                className="
                    text-foreground
                    flex flex-col items-center gap-3
                "
            >
                <h1 className="text-4xl font-bold">Drink Water</h1>
                <span className="text-xl">Goal: 2 Liters</span>
            </div>
            <div
                className={`
                    border-4 border-[#144fc6] rounded-b-4xl
                    h-100 w-40 overflow-hidden
                    [&>div]:text-[#144FC6]
                    [&>div]:content-center [&>div]:text-center [&>div]:overflow-hidden
                    [&>div]:transition-all [&>div]:duration-300 [&>div]:ease-in
                    [&>div_h1]:font-semibold
                `}
            >
                <div
                    className="bg-foreground"
                    style={{height: `${100 - ((liters / 2) * 100)}%`}}
                >
                    <h1 className="text-xl">{`${2 - liters}L`}</h1>
                    <small>Remained</small>
                </div>
                <div
                    className="bg-[#6ab3f8]"
                    style={{height: `${(liters / 2) * 100}%`}}
                >
                    <h1 className="text-4xl">{`${(liters / 2) * 100}%`}</h1>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p>Select how many glasses of water that you have drank</p>
                <div className="grid grid-cols-4 gap-3 [&>div]:m-auto">
                    {Array.from({length: 8})
                    .map((_, idx) =>
                        <div
                            key={idx}
                            className={`
                                border-3 border-[#144fc6] rounded-b-2xl
                                h-25 w-15 overflow-hidden
                                transition-all duration-300 ease-in
                                ${idx <= cupIndex
                                    ? 'bg-[#6ab3f8] text-foreground'
                                    : 'bg-foreground text-[#144FC6]'
                                }
                                text-center content-center
                                cursor-pointer
                                [&>small]:block
                            `}
                            onClick={() => handleCupClick(idx)}
                        >
                            <small>250</small>
                            <small>ml</small>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DrinkWater;