import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
// import { useState } from "react";
import { Link } from "react-router-dom";


const SingleCard = ({ feature }) => {



    return (
        <div>
            <div className="bg-white shadow-md hover:shadow-[inset_0px_2px_10px_2px_#00000024] transition-all duration-300 rounded-lg my-6 mx-2 card">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"
                        className="w-full hover:scale-105 transition-all duration-500 rounded-lg"
                        alt=""
                    />
                    <div className="cardButton hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7/12">
                        {/* <div>
                            <Link to='/'>
                                <button className="bg-white hover:text-primary transition-all duration-200 font-semibold shadow-lg w-full py-2 uppercase mt-3 rounded-md text-sm">Add to Cart</button>
                            </Link>
                            <Link to='/'>
                                <button className="bg-white hover:text-primary transition-all duration-200 font-semibold shadow-lg w-full py-2 uppercase mt-3 rounded-md text-sm">Order now</button>
                            </Link>
                        </div> */}

                    </div>

                    <div className="cardButton hidden absolute top-0 right-0">
                        <Link to='/'>
                            <button className="hover:text-primary transition-all duration-200 w-full py-2 px-3  mt-3"><Icon icon="fa6-solid:cart-plus" className="text-3xl" /></button>
                        </Link>
                    </div>
                </div>
                <div className="py-2 px-4 mt-2 space-y-3">
                    <div>
                        <h1 className="font-semibold ">{feature?.productName}</h1>
                        <span className="text-sm text-gray">sony</span>
                    </div>
                    <p className="text-red font-semibold text-primary">৳ {feature?.price}</p>
                    <div className="flex flex-col  gap-2">
                        <Link to='/' className="w-full">
                            <Button variant="outlined" className="w-full" color="success">
                            Add to Cart
                            </Button>
                        </Link>
                        <Link to='/' className="w-full">
                            <Button variant="contained" className="w-full" color="success">
                                Order Now
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;