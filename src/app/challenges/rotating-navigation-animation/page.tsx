'use client';

import { Expand, HomeIcon, Image, ListEndIcon, X} from "lucide-react";
import { Fragment, useState } from "react";

const RotatingNavigationAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCircleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleAnchor = (to: string) => {
        setIsOpen(false);
        document.getElementById(to)?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <Fragment>
            <div className="fixed -top-[100px] -left-[100px] z-1">
                <div className={`relative w-[200px] h-[200px] rounded-full bg-[#ff7979] transition-transform duration-1000 ease-in ${isOpen && '-rotate-90'}`}>
                    <button
                        onClick={handleCircleClick}
                        className={`absolute top-[75%] left-[25%] -translate-y-[75%] bg-transparent border-0 text-foreground text-lg cursor-pointer`}
                    >
                        <X />
                    </button>
                    <button
                        onClick={handleCircleClick}
                        className={`absolute top-[75%] right-[25%] -translate-y-[75%] bg-transparent border-0 text-foreground text-lg cursor-pointer`}
                    >
                        <Expand />
                    </button>
                </div>
            </div>
            <div className={`relative origin-top-left bg-[#f1f1f1] text-background flex flex-col p-[100px] gap-4 transition-transform duration-1000 ease-in ${isOpen && '-rotate-[20deg]'}`}>
                <nav className={`sticky w-0 h-0 top-[70%] -translate-x-[100px] z-1 text-foreground transition-[left, transform] duration-1000 ease-in`}>
                    <ul className="absolute px-4 top-0 right-0 flex flex-col items-start gap-8">
                        <li className="uppercase flex gap-2 cursor-pointer" onClick={() => handleAnchor('home')}><HomeIcon />Home</li>
                        <li className="uppercase flex gap-2 cursor-pointer" onClick={() => handleAnchor('image')}><Image />Image</li>
                        <li className="uppercase flex gap-2 cursor-pointer" onClick={() => handleAnchor('conclusion')}><ListEndIcon />Conclusion</li>
                    </ul>
                </nav>
                <div>
                    <h1 id="home">Amazing Article</h1>
                    <small className="opacity-[.5]">Florin Pop</small>
                </div>
                <p>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.`}</p>
                <h4>My Dog</h4>
                <img
                    id="image"
                    src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="doggy"
                    className="w-full h-auto"
                />
                <p id="conclusion">{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?`}</p>
            </div>
        </Fragment>
    )
}

export default RotatingNavigationAnimation;