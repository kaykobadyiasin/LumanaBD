import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/MainPages/Home/Home/Home";
import ProductSinglePage from "../Components/ProductSinglePage/ProductSinglePage";
import Slide from "../Components/Slide/Slide";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/productSingle/:_id',
                element: <ProductSinglePage />
            },
            {
                path: '/slide',
                element: <Slide />
            },
        ]
    },
]);

export default Router;