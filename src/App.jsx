import React, {useState} from 'react'
import ArtistInfo from './ArtistInfo'
import SongList from './SongList'

export default function App(){
    return (
        <div>
        <h1>My Favourite Artist</h1>
        <ArtistInfo/>
        <SongList/>
        </div>
    )

}