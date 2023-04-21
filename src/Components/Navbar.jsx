import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { Logo } from "../Utilities/Constants"
import { SearchBar } from "./Index"

const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: 'rgba(255, 255, 255, 0.2)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', top: 0, justifyContent: "space-between" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                <img src={Logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar