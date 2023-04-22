import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { FetchData } from "../Utilities/FetchData";
import { Videos } from "../Components/Index"

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const { SearchTerm } = useParams();

    useEffect(() => {
        FetchData(`search?part=snippet&q=${SearchTerm}`)
            .then((data) => setVideos(data.items))
    }, [SearchTerm]);

    return (
        <Box p={2} minHeight="95vh">
            <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
                Search Results for <span style={{ color: "#ebedf0" }}>{SearchTerm}</span> videos
            </Typography>
            <Box display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                {<Videos videos={videos} />}
            </Box>
        </Box>
    )
}

export default SearchFeed