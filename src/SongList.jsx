import React, {useState} from 'react'

export default function SongList(){
    const [likedSongs, setLikedSongs] = useState([]) //initiated with empty array as we are gonna store songs in empty array

    const handlingLike = (songName) => {
        if (likedSongs.includes(songName)) { // if its already liked, an array that contains everything except the liked song is created effectively removing the liked one.
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
                Better Days - 24 September 2021 - <button  onClick={() => handlingLike ('Better Days')}> Like Song </button>  
            </li>
            <li>
                Outnumbered - 14 September 2019 - <button  onClick={() => handlingLike ('Outnumbered')}> Like Song </button>  
            </li>
        </ul>
        </>
    )
}