import React from 'react'
import Song from './Song';

function Songs({playlist}) {
    
    return (
        <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
            {playlist?.tracks.items.map((track,i) => (
                <Song key={track.track.id} track={track} order={i}>{track.track.name}</Song>
            ))}
        </div>
  )
}

export default Songs;

