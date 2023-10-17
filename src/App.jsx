import React, {useState} from 'react'

import { ArtistInfo, SongList } from './components'

export default function App(){
    const [likedSongs, setLikedSongs] = useState([]) //initiated with empty array as we are gonna store songs in empty array
    return (
        <div>
        <h1>My Favourite Artist</h1>
        <ArtistInfo />
        <SongList
        likedSongs={likedSongs}
        setLikedSongs={setLikedSongs}
        />
        </div>
    )

}