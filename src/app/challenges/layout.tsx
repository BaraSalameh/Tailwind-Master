'use client';

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

const ChallengesLayout = ({ children, }: Readonly<{children: React.ReactNode;}>) => {
    const router = useRouter();

    return (
        <Fragment>
            <div
                className="fixed top-5 right-5 z-1"
            >
                <Home
                    className="bg-component h-full w-full rounded-full text-foreground p-2 cursor-pointer hover:opacity-[.5] hover:shadow-[10px_10px_16px_-10px_var(--background)] transition-[opacity, shadow] duration-500"
                    onClick={() => router.push('/')}
                />
            </div>
            {children}
        </Fragment>
    )
}

export default ChallengesLayout;