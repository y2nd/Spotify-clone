import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { shuffle } from "lodash";
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom';

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
];




function Center() {

    const { data:session } = useSession();
    const [color, setColor] = useState(null);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

    
    useEffect( () => {
        setColor(shuffle(colors).pop());
    }, [playlistId]);

  return (
    <div className="flex-grow text-white">
        <header className="absolute top-5 right-8">
            <div className="flex items-center bg-indigo-500 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p1 pr-2">
                <img src={session?.user?.image} alt="profile picture" className="rounded-full w-10 h-10"></img>
                <h2>{session?.user.name}</h2>
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </div>
        </header>

        <section className={`flex items-end text-white space-x-7 bg-gradient-to-b to-black ${color} h-80 padding-8 `}>
            {/* <img></img> */}
            <h1>This is a test</h1>
        </section>
    </div>
  )
}

export default Center