import React, { useEffect, useState } from 'react';
import useSpotify from './useSpotify';
import {useRecoilState} from 'recoil';
import {currentTrackIdState} from '../atoms/songAtom';

function useSongInfo() {
    const spotifyApi = useSpotify();
    // const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState); 
    const [songInfo, setSongInfo] = useState(null);
    
    useEffect( () => {
        const fetchSongInfo = async () => {
            if(currentTrackId) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                    {
                        headers : {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                        }
                    }
                ).then(res => res.json());

                setSongInfo(trackInfo);
            }   
        }

    }, [/* currentTrackId, */ spotifyApi]);

  return songInfo;
}

export default useSongInfo