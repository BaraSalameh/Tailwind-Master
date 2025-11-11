'use client';

import { KeyboardEvent, useCallback, useState } from "react";

interface KeyCodes {
    "event.key": string;
    "event.keyCode": number;
    "event.code": string;
}

const EventKeycodes = () => {
    const [keyCodes, setKeyCodes] = useState<KeyCodes>();

    const handleKeydown = useCallback((k: KeyboardEvent<HTMLDivElement>) => {
        setKeyCodes({"event.key": k.key === ' ' ? 'Space' : k.key, "event.keyCode": k.keyCode, "event.code": k.code})
    }, [])

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeydown}
            className="bg-[#e1e1e1] h-screen flex justify-center items-center"
        >
            {keyCodes
            ?   <table className="text-background text-center w-130 table-fixed border-separate border-spacing-x-5">
                    <thead>
                        <tr>
                            {Object.keys(keyCodes).map((key, idx) => <th className="opacity-60" key={idx}>{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.values(keyCodes).map((value, idx) =>
                                <td className="bg-foreground text-xl font-bold border border-gray-400 p-5 flex-1" key={idx}>
                                    {value}
                                </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            :   <div className="bg-foreground text-background text-xl font-bold border p-5">
                    Press any key to get the keyCode
                </div>
            }
        </div>
    )
}

export default EventKeycodes;