
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import NavLists from '../../NavLists/NavLists';
import { Button, Drawer } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const Search = styled('div')(({ theme }) => ({

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));





const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [navList, setNavList] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const [state, setState] = React.useState(null);

    const toggleDrawer = () => {

        setState(!state);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            className='mt-20'
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={2} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 0 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={0} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );




    return (
        <div >
            <Box sx={{ flexGrow: 1 }} className='w-full'>
                <AppBar sx={
                    {
                        color: 'black',
                        background: 'white',
                    }}
                    position="fixed">
                    <div className='container mx-auto '>
                        <Toolbar>


                            {/* logo  */}
                            <Link to='/' className='py-2'>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ display: { xs: 'block', sm: 'block' } }}
                                >
                                    <img src={logo} className='lg:w-52 w-40' alt="" />
                                </Typography>
                            </Link>

                            {/* serch button  */}
                            <Search className='order-2' sx={{ border: 1, display: { xs: 'none', xl: 'block', lg: 'block', sm: 'block', md: 'block' } }} >
                                <SearchIconWrapper  >
                                    <SearchIcon />
                                </SearchIconWrapper >
                                <StyledInputBase

                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={2} color="error">
                                        <MailIcon sx={{ fontSize: 30 }} />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 2 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={2} color="error">
                                        <NotificationsIcon sx={{ fontSize: 30 }} />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle sx={{ fontSize: 30 }} />
                                </IconButton>
                            </Box>


                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

                                {/* toggle button  */}

                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    sx={{ display: { xs: 'block', xl: 'none', lg: 'none', sm: 'block', md: 'none' } }}
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={toggleDrawer}
                                // onClick={handleMobileMenuOpen}
                                >
                                    <MenuIcon  />
                                </IconButton>

                            </Box>

                        </Toolbar>
                        {/* serch button  */}
                        <Search sx={{ borderBottom: 1, borderRadius: 0, display: { xs: 'block', xl: 'none', lg: 'none', sm: 'none', md: 'none' } }} >
                            <SearchIconWrapper  >
                                <SearchIcon />
                            </SearchIconWrapper >
                            <StyledInputBase

                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>

            <Drawer
                open={state}
                onClose={toggleDrawer}

            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                >

                    <div className='mt-5 mx-1 flex justify-between items-center '>
                        <div>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={2} color="error">
                                    <MailIcon sx={{ fontSize: 30 }}  />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 2 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={2} color="error">
                                    <NotificationsIcon sx={{ fontSize: 30 }}  />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                
                            >
                                <AccountCircle sx={{ fontSize: 30 }} />
                            </IconButton>
                        </div>
                        <div>
                            <Button onClick={toggleDrawer}><ArrowBackIosIcon/> </Button>
                        </div>
                    </div>

                    <NavLists />

                </Box>
            </Drawer>
        </div>
    );
}

























// import { Icon } from "@iconify/react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import NavLists from "../../NavLists/NavLists";
// import logo from '../../../assets/logo.png'

// const Navbar = () => {
//     const [navList, setNavList] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [searchSuggestions, setSearchSuggestions] = useState('');

//     useEffect(() => {
//         fetch('categoryList.json')
//             .then((res) => res.json())
//             .then((data) => {
//                 // Map data to category names and store in searchSuggestions
//                 setSearchSuggestions(data.map((item) => item.categoryName));
//             });
//     }, []);

//     const handleNavList = () => {
//         setNavList(!navList);
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         // Implement your search logic here
//         console.log("Searching for:", searchQuery);
//         setShowSuggestions(false);
//     };

//     const handleSearchInputChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         if (query) {
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };

//     const handleSuggestionClick = (suggestion) => {
//         setSearchQuery(suggestion);
//         setShowSuggestions(false);
//     };

//     return (
//         <div>
//             <div className="container mx-auto my-5">
//                 <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center w-full mt-4 lg:mt-0">
//                     <div className="flex lg:flex-row md:flex-row flex-col items-center space-y-6 md:space-y-0 space-x-6">
//                         {/* Logo */}
//                         <Link to="/" className="w-52">
//                             {/* <h3 className="text-4xl font-semibold text-primary">Lumana BD</h3> */}
//                             <img src={logo} className="w-full" alt="" />
//                         </Link>
//                         {/* Search Bar */}
//                         <form
//                             className="relative lg:w-96 md:w-full w-full mx-auto"
//                             onSubmit={handleSearch}
//                         >
//                             <div className="relative w-full">
//                                 <input
//                                     type="text"
//                                     className="bg-gray-200 border border-transparent text-gray-900 text-sm rounded-lg pl-4 pr-8 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent block w-full dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-2 dark:border-transparent dark:focus:ring-blue-500"
//                                     placeholder="Search for products..."
//                                     required
//                                     value={searchQuery}
//                                     onChange={handleSearchInputChange}
//                                 />
//                                 <button
//                                     type="submit"
//                                     className="absolute inset-y-0 right-0 flex items-center pr-3"
//                                 >
//                                     <Icon icon="mdi:arrow-right" className="w-5 h-5 text-primary" />
//                                 </button>
//                             </div>
//                             {showSuggestions && (
//                                 <ul className="absolute z-40 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg">
//                                     {searchSuggestions.map((suggestion, index) => (
//                                         <li
//                                             key={index}
//                                             className="p-2 cursor-pointer hover:bg-lightGray"
//                                             onClick={() => handleSuggestionClick(suggestion)}
//                                         >
//                                             {suggestion}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </form>
//                     </div>
//                     <div className="flex items-center space-x-4 lg:mt-0 mt-5 order-last">
//                         {/* User Login Icon */}
//                         <Link
//                             to="/login"
//                             className="hover:text-primary-100 transition-all duration-200"
//                         >
//                             <Icon icon="mdi:account" className="text-3xl" />
//                         </Link>
//                         {/* Cart Icon */}
//                         <Link
//                             to="/cart"
//                             className="hover:text-primary-100 transition-all duration-200"
//                         >
//                             <Icon icon="mdi:cart" className="text-3xl" />
//                         </Link>
//                         {/* Toggle Icon */}
//                         <Icon
//                             onClick={handleNavList}
//                             icon="ph:list-bold"
//                             className="text-3xl lg:hidden cursor-pointer hover:text-primary-100 transition-all duration-200"
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className={`lg:hidden ${navList ? "block" : "hidden"}`}>
//                 <NavLists />
//             </div>
//         </div>
//     );
// };

// export default Navbar;
