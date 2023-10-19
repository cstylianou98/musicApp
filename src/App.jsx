import React from "react"
import Nav from './Nav'
import { ArtistInfo, SongList, Paragraph} from './components'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from './action-creators'
import { bindActionCreators} from 'redux'






function App(){

    const [likedSongs, setLikedSongs] = useState([]) //initiated with empty array as we are gonna store songs in empty array

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Nav/>}>
                    <Route index element={<ArtistInfo/>} />
                    <Route path='about' element={<Paragraph/>} />
                    <Route path='hits' element={<SongList likedSongs={likedSongs} setLikedSongs={setLikedSongs}/>}/>
                    <Route path='*' element={<h1>Page Not Found</h1>}/>
                </Route>
            </Routes>
            
        </div>
    )

}

export default App