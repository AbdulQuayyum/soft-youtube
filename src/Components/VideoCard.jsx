import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { MdCheckCircle } from "react-icons/md"

import { DemoChannelTitle, DemoChannelUrl, DemoThumbnailUrl, DemoVideoTitle, DemoVideoUrl } from '../Utilities/Constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/Video/${videoId}` : `/Video/cV2gBU6hKfY`}>
                <CardMedia image={snippet?.thumbnails?.high?.url || DemoThumbnailUrl} alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
                <Link to={videoId ? `/Video/${videoId}` : DemoVideoUrl} >
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                        {snippet?.title.slice(0, 60) || DemoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/Channel/${snippet?.channelId}` : DemoChannelUrl} >
                    <Typography variant="subtitle2" color="gray">
                        {snippet?.channelTitle || DemoChannelTitle}
                        <MdCheckCircle fontSize="12px" color='gray' style={{ marginLeft: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard