'use client';

const SplitLandingPage = () => {
    const twClasses = {
        container: `bg-cover bg-left hover:flex-3 flex-1 transition-all duration-1000 ease-in-out`,
        cover: `h-full w-full flex flex-col items-center justify-center gap-10`,
        button: `text-xl uppercase border-1 px-10 py-5 cursor-pointer hover:border-0`
    }

    return(
        <div className="flex h-screen overflow-hidden">
            <div className={`bg-[url('/play-station-5.jpg')] ${twClasses.container}`}>
                <div className={`bg-[rgba(87,84,236,0.7)] ${twClasses.cover}`}>
                    <h1 className="capitalize text-5xl">playstation 5</h1>
                    <button className={`hover:bg-[rgba(87,84,236,1)] ${twClasses.button}`}>
                        buy now
                    </button>
                </div>
            </div>
            <div className={`bg-[url('/x-box-series-x.jpg')] ${twClasses.container}`}>
                <div className={`bg-[rgba(42,41,42,0.8)] ${twClasses.cover}`}>
                    <h1 className="capitalize text-5xl">xBox series x</h1>
                    <button className={`hover:bg-[rgba(28,122,28,1)] ${twClasses.button}`}>
                        buy now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SplitLandingPage;