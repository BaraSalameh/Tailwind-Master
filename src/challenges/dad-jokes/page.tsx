'use client';

import { useEffect, useState } from "react";

const DadJokes = () => {
    const [joke, setJoke] = useState<string>();

    const handleNewJojeRequest = async () => {
        await fetch("https://icanhazdadjoke.com", {headers: {Accept: 'application/json'}})
        .then(res => res.json())
        .then(data => setJoke(data.joke))
        .catch(() => {});
    }

    useEffect(() => {
       handleNewJojeRequest();
    }, []);
    
    return (
        <div className="h-screen bg-[#686de0] flex justify-center items-center p-5">
            <div className="bg-foreground flex flex-col items-center gap-11 py-15 px-5 w-2xl rounded-xl shadow-2xl shadow-[rgba(0,0,0,0.1)]">
                <h3 className="text-background text-xl font-bold capitalize opacity-50">{`don't laugh challenge`}</h3>
                <p className="text-3xl text-wrap text-background text-center">{joke || 'Joke goes here'}</p>
                <button
                    className="bg-[#9f68e0] text-lg py-2 cursor-pointer px-10 text-foreground rounded-xl capitalize active:scale-95"
                    onClick={handleNewJojeRequest}
                >
                    get another joke
                </button>
            </div>
        </div>
    )
}

export default DadJokes;