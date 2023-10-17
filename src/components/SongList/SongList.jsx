import React, {useState} from 'react'

export default function SongList({likedSongs, setLikedSongs}){

    const likeStatus = (songName) => {
        return likedSongs.includes(songName)
    }

    const handlingLike = (songName) => {
        if (likeStatus(songName)) { // if its already liked, an array that contains everything except the liked song is created effectively removing the liked one.
            setLikedSongs(likedSongs.filter((song)=> song !==songName))
         } else { // if its not already liked it adds it to the array (likedSongs is an array)
            setLikedSongs([...likedSongs, songName])
        } 
    }

    
    return (
        <>
        <h2>Songs</h2>
        <ul>
            <li>
                Better Days - 24 September 2021 - 
                <button  onClick={() => handlingLike ('Better Days')}> {likeStatus('Better Days') ? 'Unlike Song' : 'Like Song'} </button>  
            </li>
            <li>
                Outnumbered - 14 September 2019 - 
                <button  onClick={() => handlingLike ('Outnumbered')}> {likeStatus('Outnumbered') ? 'Unlike Song' : 'Like Song'} </button>  
            </li>
            <li>
                Power Over Me - 16 October 2018 - 
                <button  onClick={() => handlingLike ('Power Over Me')}> {likeStatus('Power Over Me') ? 'Unlike Song' : 'Like Song'} </button>  
            </li>

        </ul>
        </>
    )
}