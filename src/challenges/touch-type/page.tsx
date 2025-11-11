'use client';

import { Redo2, RemoveFormatting, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TouchType = () => {
    const [isDone, setIsDone] = useState(false);
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [paragraph, setParagraph] = useState('Loading...');
    const [userInput, setUserInput] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const uploadRef = useRef<HTMLInputElement>(null);

    const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        if (text.length > paragraph.length) return;
        setUserInput(text);
    }

    const handleUserInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(userInput.length < 1) return;
        if(inputRef.current) inputRef.current.disabled = true;
        setIsDone(true);
    }

    const handleUploadParagraphSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(paragraph.length < 10) return;
        if(inputRef.current) inputRef.current.focus();
        setIsUploadOpen(false);
    }

    const handleCloseResultClick = () => {
        setIsDone(false);
        setUserInput('');
        if(inputRef.current) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    }

    const handleContainerClick = () => {
        if (isUploadOpen) {
            uploadRef.current?.focus();
        } else {
            inputRef.current?.focus();
        }
    }

    const handleReloadParagraphClick = () => {
        setUserInput('');
        retrieveParagraph();
    }

    const handleUploadParagraphClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();

        handleClearUserInputClick();

        setIsUploadOpen(prev => {
            if(prev && inputRef.current) {
                inputRef.current.focus();
            } else if (uploadRef.current) {
                setParagraph('');
                uploadRef.current.focus();
            }
            return !prev;
        });
    }

    const handleClearUserInputClick = () => {
        setUserInput('');
    }
   
    const retrieveParagraph = async () => {
        setParagraph('Loading...');

        await fetch('https://api.api-ninjas.com/v1/loremipsum?paragraphs=1&start_with_lorem_ipsum=false', {
            headers: {'X-Api-Key': '4fe5mUnMeRElkxN7kxuvMQ==H0PkLgd3pZhYv0hw'}
        })
        .then(res => res.json())
        .then(data => setParagraph(data.text.trimEnd()))
        .catch(() => setParagraph(`Sorry, couldn't retrieve a new paragraph!`));
    }

    useEffect(() => {
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
            onClick={handleContainerClick}
        >
            <form
                onSubmit={handleUploadParagraphSubmit}
                className={`
                    ${isUploadOpen
                        ? 'opacity-100'
                        : 'opacity-0'
                    }
                `}
            >
                <input
                    ref={uploadRef}
                    type="text"
                    onChange={e => setParagraph(e.target.value)}
                    value={paragraph}
                    placeholder="Paste you custom paragraph here then press enter to submit (10ch minimum)"
                    className={`
                        w-100
                        h-30
                        text-sm placeholder:text-wrap
                        
                        transition-opacity duration-200 ease-in
                    `}
                />
            </form>
            <div
                className="
                    flex p-4 rounded-2xl gap-5 bg-gray-700
                    [&_*]:cursor-pointer [&_*]:hover:scale-90 [&_*]:active:opacity-50
                "
            >
                {/* Regenerate paragraph */}
                <Redo2 onClick={handleReloadParagraphClick} />
                {/* Upload new paragraph */}
                <Upload onClick={handleUploadParagraphClick} />
                {/* Clear user input */}
                <RemoveFormatting onClick={handleClearUserInputClick} />
            </div>
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
                    onSubmit={handleUserInputSubmit}
                >
                    <input
                        onPaste={e => e.preventDefault()}
                        ref={inputRef}
                        type="text"
                        onChange={handleUserInputChange}
                        value={userInput}
                    />
                </form>
            </div>
            {isDone &&
                <div className="relative w-3/4 bg-gray-700 p-4 rounded-2xl">
                    <X
                        className="
                            absolute top-2 right-2
                            bg-background rounded-full p-1
                            hover:opacity-80 cursor-pointer
                        "
                        onClick={handleCloseResultClick}
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