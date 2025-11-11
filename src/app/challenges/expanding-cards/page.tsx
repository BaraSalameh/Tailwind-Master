'use client';

import { useState } from "react";

const ExpandingCards = () => {
    const [activePanel, setActivePanel] = useState(0);

    const panelClass = `bg-cover bg-center bg-no-repeat h-[80vh] rounded-3xl text-foreground cursor-pointer m-3 relative transition-all duration-700 ease-in nth-[4]:hidden nth-[5]:hidden sm:nth-[5]:hidden sm:nth-[4]:block md:nth-[5]:block`;
    const panelH3Class = `text-2xl absolute bottom-5 left-5 text-nowrap transition-opacity duration-300 ease-in delay-400`;

    const thresolds = [
        {title: 'Explore The World', path: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {title: 'Wild Forest', path: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {title: 'Sunny Beach', path: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'},
        {title: 'City on Winter', path: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'},
        {title: 'Mountains - Clouds', path: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}
    ]

    return (
        <div className="min-h-screen bg-foreground flex items-center">
            {thresolds.map((panel, idx) => {
                const isActivePanel = activePanel === idx;

                return (
                    <div
                        key={idx}
                        className={`${panelClass} ${isActivePanel ? 'flex-5' : 'flex-[.5]'}`}
                        style={{
                            backgroundImage: `url(${panel.path})`
                        }}
                        onClick={() => setActivePanel(idx)}
                    >
                        <h3
                            className={`${panelH3Class} ${isActivePanel ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {panel.title}
                        </h3>
                    </div>
                )
            }
            )}
    </div>
    )
}

export default ExpandingCards;