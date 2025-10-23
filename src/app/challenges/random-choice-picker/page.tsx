'use client';

import { KeyboardEvent, useEffect, useRef, useState } from "react";

const RandomChoicePicker = () => {
    const choicesRef = useRef<HTMLParagraphElement[]>([]);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [choices, setChoices] = useState<string | undefined>(undefined);

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            if (inputRef.current) inputRef.current.value = '';
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        const interval = setInterval(() => {
            if (inputRef.current) inputRef.current.disabled = true;
            const randomIndex = Math.floor(Math.random() * choicesRef.current.length);
            choicesRef.current.forEach((p, idx) => {
                if (idx === randomIndex) {
                    p.classList.remove('bg-[#f0932b]')
                    p.classList.add('bg-[#273c75]')
                } else {
                    p.classList.remove('bg-[#273c75]')
                    p.classList.add('bg-[#f0932b]')
                }
            });
        }, 100)

        const timeout = setTimeout(() => {
            clearInterval(interval);
            clearTimeout(timeout);
            if (inputRef.current) inputRef.current.disabled = false;
        }, 5000);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div className="bg-[#2b88f0] flex items-center justify-center h-screen text-foreground">
            <div className="flex flex-col w-2/3 sm:w-1/2">
                <h1 className="text-xl text-center">
                    {`Enter all of the choices divided by a comma (','). Press enter when you're done`}
                </h1>
                <textarea
                    ref={inputRef}
                    className="
                        bg-foreground text-background focus:outline-0 rounded-lg
                        placeholder:text-background placeholder:opacity-60
                        p-2 w-full
                    "
                    placeholder="Enter choices here..."
                    rows={4}
                    onChange={e => setChoices(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                {choices &&
                    <div className="flex flex-wrap gap-1.5">
                        {choices.split(',').filter(Boolean).map((word, idx) => 
                            word.trim()
                            ?   <p
                                    key={idx}
                                    ref={p => { if(p) choicesRef.current[idx] = p}}
                                    className="py-2 px-4 bg-[#f0932b] rounded-full"
                                >
                                    {word}
                                </p>
                            :   null
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default RandomChoicePicker;