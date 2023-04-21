import React from 'react'
import { Routes, Route } from "react-router-dom"

import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Feed />} />
            <Route path='/Video/:id' element={<VideoDetail />} />
            <Route path='/Channel/:id' element={<ChannelDetail />} />
            <Route path='/Search/:SearchTerm' element={<SearchFeed />} />
        </Routes>
    )
}

export default MainRoutes