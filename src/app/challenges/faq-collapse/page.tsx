'use client';

import { ChevronDownIcon, X } from "lucide-react";
import { useState } from "react";

interface FAQ {
    question: string;
    answer: string;
}

const faqThresholds: FAQ[] = [
    {question: "Why shouldn't we trust atoms?", answer: "They make up everything"},
    {question: "What do you call someone with no body and no nose?", answer: "Nobody knows."},
    {question: "What's the object-oriented way to become wealthy?", answer: "Inheritance."},
    {question: "How many tickles does it take to tickle an octopus?", answer: "Ten-tickles"},
    {question: "What is: 1 + 1?", answer: "Depends on who are you asking."},
]

const FAQCollapse = () => {
    const [isOpenArray, setIsOpenArray] = useState<boolean[]>([true, ...faqThresholds.slice(1).map(() => false)]);

    const handleToggle = (idx: number) => {
        setIsOpenArray(prev => prev.map((value, i) => i === idx ? !value : value))
    }

    return (
        <div className="min-h-screen bg-[#F0F0F0] text-background flex flex-col py-5 px-10 items-center gap-6">
            <h1 className="text-3xl font-bold pt-7">Frequently Asked Questions</h1>
            {faqThresholds.map(({question, answer}, idx) => 
                <div
                    key={idx}
                    className={`border ${isOpenArray[idx] ? 'h-30 bg-white shadow-2xl' : 'h-20'} px-5 rounded-lg w-150 flex flex-col`}
                >
                    <div className={`flex items-center h-20 justify-between`}>
                        <h3 className="text-xl font-bold">{question}</h3>
                        {isOpenArray[idx]
                        ?   <X className="bg-gray-400 rounded-full text-foreground p-1 cursor-pointer" onClick={() => handleToggle(idx)} />   
                        :   <ChevronDownIcon onClick={() => handleToggle(idx)} className="cursor-pointer" />
                        }
                    </div>
                    <div className={`${isOpenArray[idx] ? 'block' : 'hidden'}`}>
                        <p className="block">{answer}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FAQCollapse;