'use client';

import { useState } from "react";

const DragNDrop = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [dropIndex, setDropIndex] = useState(-1);

    return (
        <div
            className={`
                bg-[steelblue] h-screen
                flex flex-col md:flex-row justify-center items-center
            `}
        >
            {Array.from({length: 5}).map((_, idx) =>
                <div
                    key={idx}
                    draggable={currentIdx === idx}
                    onDragEnter={() => setDropIndex(idx)}
                    onDragLeave={() => setDropIndex(-1)}
                    onDragOver={e => e.preventDefault()}
                    onDrop={() => {
                        setCurrentIdx(idx);
                        setDropIndex(-1)
                    }}
                    className={`
                        border-3 m-2.5
                        drop-shadow-xl
                        size-[150px]
                        ${currentIdx === idx
                            && `cursor-pointer`
                        }
                        ${dropIndex === idx
                            ? 'bg-background border-dashed border-foreground'
                            : 'bg-foreground border-background'
                        }
                    `}
                />
            )}
        </div>
    )
}

export default DragNDrop;