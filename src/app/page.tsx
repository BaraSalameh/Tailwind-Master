'use client';

import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();

    // Challenges source
    // https://github.com/bradtraversy/50projects50days/tree/master
    const challenges = [
        {name: 'Touch Type', path: 'touch-type'},
        {name: 'Expanding Cards', path: 'expanding-cards'},
        {name: 'Progress Steps', path: 'progress-steps'},
        {name: 'Rotating Navigation Animation', path: 'rotating-navigation-animation'},
        {name: 'Hidden Search Widget', path: 'hidden-search-widget'},
        {name: 'Blurry Loading', path: 'blurry-loading'},
        {name: 'Scroll Animation', path: 'scroll-animation'},
        {name: 'Split Landing Page', path: 'split-landing-page'},
        {name: 'Form Input Wave', path: 'form-input-wave'},
        {name: 'Sound Board', path: 'sound-board'},
        {name: 'Dad Jokes', path: 'dad-jokes'},
        {name: 'Event Keycodes', path: 'event-keycodes'},
        {name: 'FAQ Collapse', path: 'faq-collapse'},
        {name: 'Random Choice Picker', path: 'random-choice-picker'},
        {name: 'Animatied Navigation', path: 'animated-navigation'},
        {name: 'Incrementing Counter', path: 'incrementing-counter'},
        {name: 'Drink Water', path: 'drink-water'},
        {name: 'Movie App', path: 'movie-app'},
        {name: 'Background Slider', path: 'background-slider'},
        {name: 'Theme Clock', path: 'theme-clock'},
        {name: 'Button Ripple Effect', path: 'button-ripple-effect'},
        {name: 'Drag N Drop', path: 'drag-n-drop'}
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