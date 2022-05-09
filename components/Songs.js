import React from 'react'

function Songs(props) {
    
    const playlist = props.playlist;

    return (
        <div>
            {playlist?.tracks.items.map(track => <div>{track.track.name}</div>)}
        </div>
  )
}

export default Songs;

