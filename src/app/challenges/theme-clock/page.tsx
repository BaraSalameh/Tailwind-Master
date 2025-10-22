'use client';

import { useEffect, useState } from "react";

const ThemeClock = () => {
    const date = new Date();
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [seconds, setSeconds] = useState(new Date().getSeconds());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [hours, setHours] = useState(new Date().getHours());
    const [calender, setCalender] = useState<Record<'weekday' | 'month' | 'day', string>>({
        weekday: date.toLocaleDateString('en-US', {weekday: 'long'}),
        month: date.toLocaleDateString('en-US', {month: 'short'}),
        day: date.toLocaleDateString('en-US', {day: 'numeric'})
    });


    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            setSeconds(date.getSeconds());
            setMinutes(date.getMinutes());
            setHours(date.getHours());
            setCalender({
                weekday: date.toLocaleDateString('en-US', {weekday: 'long'}),
                month: date.toLocaleDateString('en-US', {month: 'short'}),
                day: date.toLocaleDateString('en-US', {day: 'numeric'})
            })
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`
                h-screen flex flex-col justify-center items-center gap-5
                ${theme === 'light'
                    ? 'bg-foreground'
                    : 'bg-background'
                }
                transition-colors duration-500 ease-in
            `}
        >
            <button
                className={`
                    ${theme === 'light'
                        ?  'bg-background text-foreground'
                        : 'bg-foreground text-background'
                    }
                    text-sm px-4 py-2 rounded-md cursor-pointer
                `}
                onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
            >
                {(theme === 'light' ? 'Dark' : 'Light') + ' mode'}
            </button>
            <div
                className={`
                    relative h-50 w-50
                    [&>div]:absolute
                    [&>div]:top-1/2 [&>div]:-translate-y-1/1
                    [&>div]:left-1/2 [&>div]:-translate-x-1/2
                    [&>div]:origin-bottom [&>div]:not-first:h-1/2 [&>div]:w-[2px]
                    [&>div]:transition-transform [&>div]:duration-1000 [&>div]:ease-linear
                    ${theme === 'light'
                        ? '[&>div]:not-last:bg-background'
                        : '[&>div]:not-last:bg-foreground'
                    }
                `}
            >
                <div className="h-1/4" style={{transform: `rotate(${hours*15}deg)`}} />
                <div style={{transform: `rotate(${minutes*6}deg)`}} />
                <div
                    className={`
                        bg-red-500
                        before:absolute before:content-['']
                        before:bottom-0 before:translate-y-1/2
                        before:left-1/2 before:-translate-x-1/2 
                        before:w-2 before:h-2
                        before:rounded-full before:border-2 before:border-red-500
                        ${theme === 'light'
                            ? 'before:bg-background'
                            : 'before:bg-foreground'
                        }
                    `}
                    style={{transform: `rotate(${seconds*6}deg)`}}
                />
            </div>
            <div>
                <h3
                    className={`
                        text-5xl
                        ${theme === 'light'
                            ? 'text-background'
                            : 'text-foreground'
                        }
                    `}
                >
                    {`${hours > 12 ? hours - 12 : hours}:${minutes.toString().padStart(2, '0')} ${hours > 12 ? 'PM' : 'AM'}`}
                </h3>
            </div>
            <div
                className={`
                    ${theme === 'light'
                            ? 'text-background'
                            : 'text-foreground'
                        }
                        [&>span]:mx-[2px] [&>span]:not-last:opacity-50
                `}
            >
                <span>{calender?.weekday},</span>
                <span>{calender?.month}</span>
                <span
                    className={`
                        rounded-full p-1
                        ${theme === 'light'
                            ?  'bg-background text-foreground'
                            : 'bg-foreground text-background'
                        }
                    `}
                >{calender?.day}</span>
            </div>
        </div>
    )
}

export default ThemeClock;