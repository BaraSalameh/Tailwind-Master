'use client';

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TouchType = () => {
    const [isDone, setIsDone] = useState(false);
    const [paragraph, setParagraph] = useState<string[]>([]);
    const [userInput, setUserInput] = useState<string[]>(['']);
    const [result, setResult] = useState({});
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(userInput.length < 1) return;
        if(inputRef.current) inputRef.current.disabled = true;

        setIsDone(true);
        setResult(
            Object.fromEntries(
                Array.from({length: userInput.length}).map((_, idx) => 
                    [paragraph[idx], paragraph[idx] === userInput[idx]]
                )
            )
        )
    }

    const handleClose = () => {
        setIsDone(false);
        setUserInput(['']);
        setResult({});
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
            .then(data => {
                setParagraph(data.text.trimEnd().split(" "))}
            )
            .catch(() => setParagraph([]));
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
                        transform: `translateX(calc(30% - ${userInput.join(" ").length}ch))`
                    }}
                >
                    {paragraph.map((word, idx) =>
                        <span
                            key={idx}
                            className={`
                                inline-block
                                ${idx % 2 !== 0 && 'mx-[1ch]'}
                                ${idx >= userInput.length
                                    ? 'text-gray-700'
                                    : userInput.length - 1 > idx
                                        ? userInput[idx] === word
                                            ? 'text-green-700'
                                            : 'text-red-700'
                                        : ''
                                }
                            `}
                        >
                            {word}
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
                        onChange={e => setUserInput(e.target.value.split(" "))}
                        value={userInput.join(" ")}
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
                        {Object.entries(result).map(([key, value], idx) =>
                            <span
                                key={idx}
                                className={`m-[0.5ch] ${value ? 'text-green-700' : 'text-red-700'}`}
                            >
                                {key}
                            </span>
                        )}
                    </p>
                </div>
            }
        </div>
    )
}

export default TouchType;