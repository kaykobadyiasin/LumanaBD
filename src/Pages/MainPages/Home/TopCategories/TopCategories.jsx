import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categoryList.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className="bg-white rounded-md py-4">
            <h3 className="text-2xl font-semibold py-3 px-4 text-center">Top Categories</h3>
            <div className="mb-5 border-y py-3">
                <Marquee  pauseOnClick={true} gradientWidth={50}  gradient={true}>
                    {categories.map((category) => (
                        <div key={category._id} className="flex items-center justify-center p-4">
                            <Link to={`/category/${category.slug}`} className="text-center">
                                <div className="shadow-md rounded-md p-4">
                                    <div className="w-24 h-24 mx-auto">
                                        <img src={category.Image} className="w-full h-full object-cover rounded-full" alt={category.categoryName} />
                                    </div>
                                    <h4 className="text-sm mt-3 font-semibold text-center">{category.categoryName}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopCategories;
