import React, {useState} from 'react'

function SongList({likedSongs, setLikedSongs}){

    const [songs, setSongs] = useState([
        {name: 'Better Days', releaseDate: '24 September 2021'},
        {name: 'Outnumbered', releaseDate: '14 September 2019'},
        {name: 'Power Over Me', releaseDate: '16 October 2018' },
    ])

    const likeStatus = (songName) => {
        return likedSongs.includes(songName)
    }

    const handlingLike = (songName) => {
        const updatedSongs = songs.map((song)=> {
            if (song.name === songName){
                return {...song, liked: !likeStatus(songName)
                }
            }
            return song;
        })

        setSongs(updatedSongs)

        if (likeStatus(songName)){
            setLikedSongs(likedSongs.filter((song)=>song !==songName))
        } else {
            setLikedSongs([...likedSongs, songName]);
        }

    }

    // THIS IS WHERE I LEFT OFF CONTINUE HERE!!!
    
    return (
        <>
        <h1>Song Hits</h1>
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

export default SongList