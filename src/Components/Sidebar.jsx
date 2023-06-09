import React from 'react'
import { Stack } from "@mui/material";

import { Categories } from '../Utilities/Constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {Categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && "#ebedf0",
                        color: category.name === selectedCategory ? "#000" : "white",
                    }}
                    key={category.name}
                >
                    <span style={{ color: category.name === selectedCategory ? "#000" : "white", marginRight: "15px" }}>
                        {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar