import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Button, List, ListItem, Paper, Rating, Stack, TextField, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ReactImageMagnify from "react-image-magnify";


const ProductSinglePage = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('/public/featureProducts.json')
            .then((res) => res.json())
            .then((data) => setProduct(data?.find((produc) => produc?._id == _id)))
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [_id]);

    // tabs 
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // product features 

    const productFeatures = [
        { featureName: 'Weight', value: '1.25 Kg' },
        { featureName: 'Dimensions', value: '90x60x90 Cm' },
        { featureName: 'Size', value: 'One Size Fits All' },
        { featureName: 'Color', value: 'Merun Light' },
        { featureName: 'Guarantee', value: '1 Years' },
        { featureName: 'SKU', value: '54687621' },
    ];

    // client review 
    const initialReviews = [
        {
            clientName: 'John Doe',
            rating: 4.5,
            comment: 'Great service! Highly recommended.'
        },
        {
            clientName: 'Jane Smith',
            rating: 5,
            comment: 'I love their products. Excellent quality.'
        },
    ];


    const [reviews, setReviews] = useState(initialReviews);
    const [newReview, setNewReview] = useState({ clientName: '', rating: 0, comment: '' });

    const addReview = () => {
        if (newReview.clientName && newReview.comment) {
            setReviews([...reviews, { ...newReview }]);
            setNewReview({ clientName: '', rating: 0, comment: '' });
        }
    };

    const reviewContainerStyle = {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div className="container mx-auto min-h-screen  py-10">
            {product ? (
                <>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="lg:w-1/3 relative z-30">


                                <div className="">
                                    <ReactImageMagnify
                                        {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: product.image,
                                            },
                                            largeImage: {
                                                src: product.image,
                                                width: 1000,
                                                height: 1000,
                                            },
                                            enlargedImageContainerDimensions: {
                                                width: '180%',
                                                height: '100%',

                                            },
                                            enlargedImageContainerStyle: { background: '#fff' },
                                            isHintEnabled: true,
                                        }}
                                    />
                                </div>


                            </div>
                            <div className="w-full lg:w-2/3 space-y-5">
                                <h2 className="text-3xl font-semibold">{product?.productName}</h2>
                                <h4 className="text-green-600 text-2xl font-bold">৳ {product?.price}</h4>
                                <div className="flex gap-2 items-center">
                                    <Rating name="read-only" value={value} readOnly />
                                    <span>( {initialReviews.length} Customer Review )</span>
                                </div>

                                <p className="text-gray-700 mt-2">Quantity: 0</p>
                                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2">
                                    <Link to='/' className="w-full md:w-auto">
                                        <Button variant="outlined" style={{ width: '100%' }}>
                                            Add to Cart
                                        </Button>
                                    </Link>
                                    <Link to='/' className="w-full md:w-auto">
                                        <Button variant="contained bg-primary" style={{ width: '100%', color: '#fff', backgroundColor: '#59B210' }}>
                                            Order Now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <div className="flex justify-start">
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Description" value="1" />
                                        <Tab label="Features" value="2" />
                                        <Tab label="Review" value="3" />
                                    </TabList>
                                </div>
                            </Box>
                            <TabPanel value="1">


                                <p className="text-gray-600 mt-2">Product Description: {product?.description}</p>

                            </TabPanel>
                            <TabPanel value="2">
                                <List>
                                    {productFeatures.map((feature, index) => (
                                        <ListItem key={index} className="flex justify-between mb-3">
                                            <div>
                                                <span className="font-bold mr-2">{feature.featureName}:</span>
                                                <span>{feature.value}</span>
                                            </div>
                                        </ListItem>
                                    ))}
                                </List>
                            </TabPanel>
                            <TabPanel value="3">

                                <div className="grid lg:grid-cols-2 gap-10">
                                    <div className="w-full">
                                        {reviews.map((review, index) => (
                                            <Paper key={index} style={reviewContainerStyle}>
                                                <Typography variant="h6" className="mb-2">{review.clientName}</Typography>
                                                <Rating value={review.rating} readOnly precision={0.5} />
                                                <Typography variant="body1" className="mt-2">{review.comment}</Typography>
                                            </Paper>
                                        ))}
                                    </div>
                                    <div className="w-full">
                                        <div className="flex gap-5 flex-col">
                                            <div className="flex lg:flex-row flex-col-reverse gap-5 w-full" >
                                                <TextField
                                                    className="w-full"
                                                    label="Your Name"
                                                    variant="outlined"
                                                    value={newReview.clientName}
                                                    onChange={(e) => setNewReview({ ...newReview, clientName: e.target.value })}
                                                />
                                                <div className="border border-gray  rounded-md px-5 lg:py-0 py-4 flex gap-3 items-center">
                                                    <span className="text-gray">Rating:</span>
                                                    <Stack spacing={1}>
                                                        <Rating
                                                            name="half-rating"
                                                            defaultValue={5}
                                                            precision={0.5}
                                                            value={newReview.rating}
                                                            onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                                                        />
                                                    </Stack>
                                                </div>
                                            </div>
                                            <TextField
                                                className="w-full"
                                                id="outlined-multiline-flexible"
                                                label="Your Review"
                                                value={newReview.comment}
                                                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                                multiline
                                                minRows={1}
                                                maxRows={4}
                                            />
                                        </div>
                                        <div className="flex justify-end mt-5">
                                            <Button variant="contained" onClick={addReview} style={{ width: '100%', color: '#fff', backgroundColor: '#59B210' }}>
                                                Submit Review
                                            </Button>
                                        </div>
                                    </div>
                                </div>


                            </TabPanel>
                        </TabContext>
                    </div>
                </>
            ) : (
                <div className="flex justify-center mt-20">
                    <Icon icon="eos-icons:loading" className="text-5xl" />
                </div>


            )}

        </div>
    );
};

export default ProductSinglePage;
