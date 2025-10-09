'use client';

import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    // Challenges source
    // https://github.com/bradtraversy/50projects50days/tree/master
    const challenges = [
        {name: 'Expanding Cards', path: 'expanding-cards'},
        {name: 'Rotating Navigation Animation', path: 'rotating-navigation-animation'}
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
            {challenges.map((challenge, idx) =>
                <div
                    key={idx}
                    className="bg-component flex justify-center items-center hover:opacity-[.5] hover:shadow-[10px_10px_16px_-10px_var(--foreground)] cursor-pointer border-2 rounded-2xl p-8 transition-[opacity, shadow] duration-500"
                    onClick={() => router.push(`/challenges/${challenge.path}`)}
                >
                    {challenge.name}
                </div>
            )}
        </div>
    )
}

export default Home;