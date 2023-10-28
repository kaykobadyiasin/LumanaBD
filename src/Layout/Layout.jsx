import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Icon } from "@iconify/react";
import 'animate.css';
import { Box, Button, ButtonGroup, Drawer } from "@mui/material";
import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Layout = () => {


    const [state, setState] = React.useState(null);

    const toggleDrawer = () => {

        setState(!state);
    };


    return (
        <div className="relative">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="relative">
                <Drawer
                    open={state}
                    onClose={toggleDrawer}
                    anchor="right"
                >
                    <Box
                        sx={{ width: 300 }}
                        variant="persistent"

                    >

                        <div className='order-first flex pr-5 justify-between items-center bg-gray-700 text-white'>
                            <div>
                                <Button onClick={toggleDrawer} >< CancelIcon /></Button>
                            </div>
                            <div>
                                <ShoppingCartIcon />(10)
                            </div>
                        </div>

                    </Box>
                    <div className="absolute bottom-0 w-full">
                        <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ width: '100%' }}>
                            <Button style={{ width: '100%', height: '50px', fontSize: '18px' }}>Cart  <span className="ml-2">৳1000</span></Button>
                            <Link style={{ width: '100%' }}><Button style={{ width: '100%', height: '50px', background: '#59B210', color: 'white' }}>Checkout  <ShoppingCartIcon className="ml-2" /></Button></Link>
                        </ButtonGroup>
                    </div>
                </Drawer>
                <div className="xl:pt-20 lg:pt-20 md:pt-14 pt-24">
                    <Outlet />
                </div>
                <hr className="opacity-52" />
                <Footer />
            </div>
            <button onClick={toggleDrawer} >
                <div className="fixed z-40 top-96 right-0 bg-white flex flex-col shadow-lg border border-primary">
                    <div className="lg:px-7 lg:py-3 px-4 py-2">
                        <Icon icon="bi:cart4" className="text-3xl animate__animated animate__tada animate__delay-1s animate__infinite infinite" />
                        <h4 className="text-center mt-3"><span className="text-2xl">৳</span> 0</h4>
                    </div>
                    <span className="text-center bg-[#59B210] text-white px-2">0 items</span>
                </div>
            </button>
        </div>
    );
};

export default Layout;