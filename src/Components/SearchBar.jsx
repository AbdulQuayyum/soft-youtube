import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import { MdSearch } from "react-icons/md"

const SearchBar = () => {
    const [SearchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (SearchTerm) {
            navigate(`/Search/${SearchTerm}`);

            setSearchTerm('');
        }
    };

    return (
        <Paper
            component='form'
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: '#000' }} aria-label='search'>
                <MdSearch />
            </IconButton>
        </Paper>
    );
}

export default SearchBar