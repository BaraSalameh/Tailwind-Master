'use client';

import { useEffect, useRef } from "react";

const FormInputWave = () => {

    const labels = useRef<HTMLLabelElement[]>([]);

    const twClasses = {
        input: "peer outline-0 py-1 w-full border-b-2  valid:border-[lightblue] focus:border-[lightblue]",
        label: "text-lg hover:cursor-text absolute left-0 top-1/2 -translate-y-1/2 peer-focus:text-[lightblue] peer-focus:[&_*]:-translate-y-1/1 peer-valid:text-[lightblue] peer-valid:[&_*]:-translate-y-1/1",
        span: "inline-block duration-300 ease-[cubic-bezier(0.68,0.55,0.265,0.55)]"
    }

    useEffect(() => {
        labels.current.forEach(label => {
            label.innerHTML = label?.innerText
                .split('').map((letter, idx) => 
                    `<span style="transition-delay:${idx*50}ms" key=${idx} class="${twClasses.span}">${letter}</span>`
                ).join('');
        })
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-[steelblue]">
            <form className="min-w-1/4 max-w-3/4 rounded-md bg-[rgba(0,0,0,0.4)] p-10 flex flex-col gap-10 text-foreground">
                <h3 className="text-3xl capitalize text-center font-bold">please login</h3>
                <div className={`relative`}>
                    <input
                        type="text"
                        required
                        className={twClasses.input}
                    />
                    <label
                        ref={(el) => {if(el) labels.current[0] = el}}
                        className={twClasses.label}
                    >
                        Email
                    </label>
                </div>
                <div className={`relative`}>
                    <input
                        type="password"
                        required
                        className={twClasses.input}
                    />
                    <label
                        ref={(el) => {if(el) labels.current[1] = el}}
                        className={twClasses.label}
                    >
                        Password
                    </label>
                </div>
                <button type="submit" className="w-full py-3 cursor-pointer text-background rounded-md bg-[lightblue]">Login</button>
                <p>Don't have an account? <a href="#" className="text-[lightblue]">Register</a></p>
            </form>
        </div>
    )
}

export default FormInputWave;