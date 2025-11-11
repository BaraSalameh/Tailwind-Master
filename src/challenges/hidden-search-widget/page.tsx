'use client';

import { Search } from "lucide-react";
import { useState } from "react";

const HiddenSearchWidget = () => {
    const [active, setActive] = useState(false);
     
    return(
        <div className="flex h-screen bg-linear-90 from-[#7d5fff] to-[#7158e2] justify-center items-center">
            <div className="bg-foreground text-background flex items-center px-2.5 py-2.5">
                <input
                    className={`${active ? 'w-50' : 'w-0'} text-lg outline-0 transition-all duration-500 ease-in`}
                    placeholder="Search..."
                />
                <Search
                    className="cursor-pointer"
                    size={30}
                    onClick={() => setActive(!active)}
                />
            </div>
        </div>
    )
}

export default HiddenSearchWidget;