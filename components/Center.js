import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import Songs from './Songs';

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
    const playlistId = useRecoilValue(playlistIdState);
    const  [playlist, setPlaylist] = useRecoilState(playlistState);
    
    const spotifyApi = useSpotify();

    useEffect( () => {
        setColor(shuffle(colors.filter(Color => Color != color)).pop());
    }, [playlistId]);

    useEffect( () => {
        spotifyApi
            .getPlaylist(playlistId)
            .then( (data) => {
            setPlaylist(data.body);
            })
            .catch(error => console.log("Something went wrong", error));
    }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow">
        <header className="absolute top-5 right-8">
            <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p1 pr-2">
                <img src={session?.user?.image} alt="profile picture" className="rounded-full w-10 h-10"></img>
                <h2>{session?.user.name}</h2>
                <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
            </div>
        </header>

        <section className={`flex items-end text-white space-x-7 bg-gradient-to-b to-black ${color} h-80 p-8 `}>
            <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url}></img>
            <div>
                <p>PLAYLIST</p>
                <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">{playlist?.name}</h1>
            </div>
        </section>

        
        <Songs playlist={playlist} ></Songs>
       

    </div>
  )
}

export default Center