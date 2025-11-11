'use client';

import { useEffect, useState } from "react";

const ProgressSteps = () => {

    const [activeCircle, setActiveCircle] = useState(0);
    const [disabled, setDisabled] = useState({next: false, prev: true});
    const btnClass = `bg-[#3498db] text-[#ffffff] border-0 rounded-md cursor-pointer px-8 py-2 m-1 text-sm active:scale-[.98] focus:outline-0 border-red-500 disabled:bg-[#383838] disabled:cursor-not-allowed`;

    const thresholds = [1, 2, 3, 4];

    useEffect(() => {
        if(activeCircle === 0) {
            setDisabled({prev: true, next: false});
        } else if (activeCircle === thresholds.length - 1) {
            setDisabled({prev: false, next: true});
        } else {
            setDisabled({prev: false, next: false});
        }
    }, [activeCircle])

    return (
        // container
        <div className="bg-foreground flex flex-col items-center gap-5 justify-center h-screen overflow-hidden">
            {/* progress-container  */}
            <div className="
                relative flex justify-between gap-10
                before:content-[''] before:bg-[#272424] before:absolute before:top-[50%]
                before:left-0 before:-translate-y-[50%] before:h-1 before:w-full"
            >
                {/* progress */}
                <div
                    className={`absolute bg-[#3498db] top-[50%] left-0 -translate-y-[50%] h-1 transition duration-400 ease-in`}
                    style={{
                        width: activeCircle / (thresholds.length - 1) * 100 + '%'
                    }}
                />
                {/* circle */}
                {thresholds.map((circle, idx) =>
                    <div
                        key={idx}
                        className={`
                            relative bg-foreground text-background rounded-full h-8 w-8 flex items-center justify-center
                            border-3 transition duration-400 ease-in
                            ${idx <= activeCircle ? 'border-[#3498db]' : 'border-[#bebaba]'}
                        `}
                    >
                        {circle}
                    </div>
                )}
            </div>
            <div>
                <button
                    className={btnClass}
                    onClick={() => setActiveCircle(activeCircle - 1)}
                    disabled={disabled.prev}
                >
                    Prev
                </button>
                <button
                    className={btnClass}
                    onClick={() => setActiveCircle(activeCircle + 1)}
                    disabled={disabled.next}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default ProgressSteps;