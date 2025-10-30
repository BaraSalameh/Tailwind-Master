'use client';

import { Redo2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TouchType = () => {
    const [isDone, setIsDone] = useState(false);
    const [paragraph, setParagraph] = useState('');
    const [userInput, setUserInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(userInput.length < 1) return;
        if(inputRef.current) inputRef.current.disabled = true;
        setIsDone(true);
    }

    const handleClose = () => {
        setIsDone(false);
        setUserInput('');
        if(inputRef.current) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    }

    
    useEffect(() => {
        const retrieveParagraph = async () => {
            await fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1&start_with_lorem_ipsum=false', {
                headers: {'X-Api-Key': '4fe5mUnMeRElkxN7kxuvMQ==H0PkLgd3pZhYv0hw'}
            })
            .then(res => res.json())
            .then(data => setParagraph(data.text.trimEnd()))
            .catch(() => setParagraph(''));
        }
        
        retrieveParagraph();
        inputRef.current?.focus();
    }, []);

    return (
        <div
            className="
                h-screen overflow-x-hidden
                flex flex-col justify-center items-center gap-5
                text-2xl font-mono
            "
            onClick={() => inputRef.current?.focus()}
        >
            <div className="relative w-3/4 overflow-hidden">
                <p
                    className="text-nowrap "
                    style={{
                        transform: `translateX(calc(30% - ${userInput.length}ch))`
                    }}
                >
                    {paragraph.split('').map((char, idx) =>
                        <span
                            key={idx}
                            className={`
                                whitespace-pre
                                ${userInput.length <= idx
                                    ? userInput.length === idx
                                        ? 'text-foreground'
                                        : 'text-gray-700'
                                    : userInput[idx] === char
                                        ? 'text-green-700'
                                        : char === ' '
                                            ? 'bg-red-700 scale-80 translate-x-1/10'
                                            : 'text-red-700'
                                }
                            `}
                        >
                            {char}
                        </span>
                    )}
                </p>
                <form
                    className="absolute -top-2/1"
                    onSubmit={handleSubmit}
                >
                    <input
                        onPaste={e => e.preventDefault()}
                        ref={inputRef}
                        type="text"
                        onChange={e => setUserInput(e.target.value)}
                        value={userInput}
                    />
                </form>
            </div>
            {isDone &&
                <div
                    className="relative w-3/4 bg-gray-700 p-4 rounded-2xl"
                >
                    <X
                        className="
                            absolute top-2 right-2
                            bg-background rounded-full p-1
                            hover:opacity-80 cursor-pointer
                        "
                        onClick={handleClose}
                    />
                    <p className="flex flex-wrap text-lg">
                        {userInput.split('').map((char, idx) => 
                             <span
                                key={idx}
                                className={`
                                    whitespace-pre
                                    ${char === paragraph[idx]
                                        ?   'text-green-700'
                                        :   'text-red-700'
                                    }    
                                `}
                            >
                                {char}
                            </span>
                        )}
                    </p>
                </div>
            }
        </div>
    )
}

export default TouchType;