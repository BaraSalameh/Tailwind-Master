'use client';

import { useCallback } from "react";

const SoundBoard = () => {

    const makeSound = useCallback((audioPath: string) => {
        const audio = new Audio(audioPath)
        audio.play().catch(err => {})
    }, []);

    const thresholds = [
        {label: 'applause', audio: '/sounds/applause.mp3'},
        {label: 'boo', audio: '/sounds/boo.mp3'},
        {label: 'gasp', audio: '/sounds/gasp.mp3'},
        {label: 'tada', audio: '/sounds/tada.mp3'},
        {label: 'victory', audio: '/sounds/victory.mp3'},
        {label: 'wrong', audio: '/sounds/wrong.mp3'}
    ]

    return(
        <div className="bg-[rgb(161,100,223)] h-screen flex justify-center content-center p-5 gap-10 flex-wrap">
            {thresholds.map((btn, idx) => 
                <button
                    key={idx}
                    className="bg-[rebeccapurple] hover:opacity-90 cursor-pointer outline-0 px-10 py-5 rounded-md text-foreground text-2xl"
                    onClick={() => makeSound(btn.audio)}
                >
                    {btn.label}
                </button>
            )}
        </div>
    )
}

export default SoundBoard;