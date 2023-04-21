import React from 'react'
import { Routes, Route } from "react-router-dom"

import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    )
}

export default MainRoutes