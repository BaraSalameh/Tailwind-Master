'use client';

import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type SocialMedia = 'twitter' | 'youtube' | 'facebook';
type FollowerAtts = 'current' | 'target';
type SocialMediaFollowers = Record<SocialMedia, Record<FollowerAtts, number>>;

const IncrementingCounter = () => {

    const [followers, setFollowers] = useState<SocialMediaFollowers>({
        twitter: {current: 0, target: 12000},
        youtube: {current: 0, target: 5000},
        facebook: {current: 0, target: 7500}
    });

    useEffect(() => {
    const updateFollowers = () => {
        let isDone = false;

        setFollowers(prev => Object.fromEntries(
            Object.entries(prev).map(([key, { current, target }]) => {
                const increment = target / 200;
                const next =
                    current < target
                        ? Math.ceil(current + increment)
                        : target;

                if (next >= target) isDone = true;

                return [key, { current: next, target }];
            })
        ) as SocialMediaFollowers);

        if (!isDone) setTimeout(updateFollowers, 1);
    };

    updateFollowers();
}, []);


    return (
        <div
            className="
                bg-[#8e44ad] text-foreground font-mono
                h-screen p-5
                flex flex-col sm:flex-row justify-center items-center gap-10
                [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-4
                [&>div_*]:first:pb-3 text-5xl
                [&>div_div]:text-5xl 
                [&>div_span]:text-lg
            "
        >
            <div>
                <FontAwesomeIcon icon={faTwitter} />
                <div>{followers.twitter.current}</div>
                <span>Twitter Followers</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faYoutube} />
                <div>{followers.youtube.current}</div>
                <span>YouTube Subscribers</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faFacebook} />
                <div>{followers.facebook.current}</div>
                <span>Facebook Fans</span>
            </div> 
        </div>
    )
}

export default IncrementingCounter;