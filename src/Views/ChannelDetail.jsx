import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { ChannelCard, Videos } from "../Components/Index"
import { FetchData } from "../Utilities/FetchData";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            const data = await FetchData(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await FetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    height: '370px',
                    minWidth: "100%",
                    objectFit: "cover",
                    backgroundImage: `url(${"https://source.unsplash.com/2400x900/?nature,photography,cats,moon"})`,
                    zIndex: 10,
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail