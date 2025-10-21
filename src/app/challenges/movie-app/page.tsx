'use client';

import { useEffect, useState } from "react";

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const MovieApp = () => {
    const [movies, setMovies] = useState<Record<string, boolean | string | number | number[]>[]>([]);
    const [searchStr, setSearchStr] = useState('');

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        if (searchStr.trim() !== '') {
            e.preventDefault();

            await fetch(SEARCH_API + searchStr)
                .then(res => res.json())
                .then(data => setMovies(data.results));
            setSearchStr('');
        }
    }

    useEffect(() => {
        const getMovies = async () => {
            await fetch(API_URL)
                .then(res => res.json())
                .then(data => setMovies(data.results));
        }
        
        getMovies();
    }, []);

    return (
        <div
            className="bg-[#22254b] min-h-screen"
        >
            <header className="bg-[#373b69] flex justify-end p-4">
                <form onSubmit={handleSearch}>
                    <input
                        className="
                            border-2 border-[#22254b] rounded-full py-2 px-4
                            placeholder:text-md placeholder:text-[#7378c5]
                            focus:bg-[#22254b] focus:outline-0
                        "
                        placeholder="Search"
                        onChange={e => setSearchStr(e.target.value)}
                        value={searchStr}
                    />
                </form>
            </header>
            <main className="flex flex-wrap">
                {movies.map((movie, idx) => {
                    const { title, poster_path, vote_average, overview } = movie;
                    return (
                        <div
                            key={idx}
                            className="
                                group relative overflow-hidden
                                bg-[#373b69] flex flex-col m-4
                                w-1/1 sm:w-[calc(50%-2rem)] md:w-[calc(33.3%-2rem)] lg:w-[calc(25%-2rem)]
                            "
                        >
                            <img
                                alt={`movie-${idx}`}
                                src={`${IMG_PATH + poster_path}`}
                            />
                            <section className="flex justify-between p-4 text-lg font-bold">
                                <h3>{title}</h3>
                                <div className="px-2 py-1 bg-[#22254b] text-orange-400">
                                    <span>{vote_average}</span>
                                </div>
                            </section>
                            <footer
                                className="
                                    absolute bottom-0 flex flex-col gap-5 p-8
                                    bg-foreground text-background
                                    translate-y-1/1 group-hover:translate-y-0 group-hover:max-h-1/1
                                    group-hover:transition-all group-hover:duration-300 group-hover:ease-in
                                "
                            >
                                <h3 className="text-xl font-bold">Overview</h3>
                                <p>{overview}</p>
                            </footer>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default MovieApp;