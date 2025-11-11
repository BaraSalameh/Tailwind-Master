'use client';

import { useCallback, useRef } from "react";

const soundData = [
    {label: 'applause', audio: '/sounds/applause.mp3'},
    {label: 'boo', audio: '/sounds/boo.mp3'},
    {label: 'gasp', audio: '/sounds/gasp.mp3'},
    {label: 'tada', audio: '/sounds/tada.mp3'},
    {label: 'victory', audio: '/sounds/victory.mp3'},
    {label: 'wrong', audio: '/sounds/wrong.mp3'}
]

const SoundBoard = () => {
    const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

    const playSound = useCallback((label: string) => {
        Object.values(audioRefs.current).forEach(audio => {
            if(audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        })

        const sound = audioRefs.current[label];
        if(sound){
            sound.play().catch(() => {});
        }
    }, []);

    return(
        <div className="bg-[rgb(161,100,223)] h-screen flex justify-center content-center p-5 gap-10 flex-wrap">
            {soundData.map(({label, audio}) =>
                <button
                    key={label}
                    className="bg-[rebeccapurple] hover:opacity-90 cursor-pointer outline-0 px-10 py-5 rounded-md text-foreground text-2xl"
                    onClick={() => playSound(label)}
                >
                    
                    {label}    
                    <audio
                        ref={el => {if(el) audioRefs.current[label] = el}}
                        src={audio}
                    >
                    </audio>
                </button>
            )}
        </div>
    )
}

export default SoundBoard;