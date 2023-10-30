import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavLists = () => {
    const [categories, setCategories] = useState([]);
    const [menuData, setMenuData] = useState([
        {
            category: "houseHold",
            subCategories: [],
        },
        {
            category: "kids&Mom",
            subCategories: [],
        },
        {
            category: "electronics",
            subCategories: [],
        },
        {
            category: "lifestyles",
            subCategories: ['bag'],
        },
        {
            category: "foods",
            subCategories: [],
        },
        {
            category: "kitchen",
            subCategories: ['bag'],
        },
        {
            category: "cosmetics",
            subCategories: [],
        },
        {
            category: "health",
            subCategories: ['bag'],
        },
        {
            category: "clothing",
            subCategories: [],
        },
        {
            category: "education",
            subCategories: ['bag'],
        },
        {
            category: "service",
            subCategories: [],
        },
        {
            category: "hotOffer",
            subCategories: [],
        },
    ]);

    useEffect(() => {
        fetch('categoryList.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    // Merge JSON data into menuData
    categories.forEach((category, index) => {
        menuData[index].categoryName = category.categoryName;
        menuData[index].Image = category.Image;
    });

    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <div>
            <div className="bg-white pt-3 rounded-l-md relative">
                <ul className="flex flex-col gap-3 text-sm ">
                    {menuData.map((item, index) => (
                        <li key={index} className="border-b pb-2 px-5">
                            {item.subCategories ? (
                                <>
                                    {/* <Link to={`/${item.category}`}> */}
                                    <div
                                        className="flex justify-between items-center"
                                        onClick={() => handleMenuClick(index)}
                                    >
                                        <h3 className="capitalize">{item.category}</h3>
                                        <ArrowForwardIosIcon fontSize="small" />
                                    </div>
                                    {/* </Link> */}


                                    <div
                                        className={
                                            openMenu === index
                                                ? "z-50 block absolute 2xl:left-64 xl:left-52 lg:right-0 lg:left-40 -right-10 top-0 bg-white shadow w-52 h-full"
                                                : "hidden"
                                        }
                                    >
                                        <div

                                        >
                                            <ul className="py-2 text-sm">
                                                {item.subCategories.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to={`${item.category}/${subItem}`} className="block px-4 py-2 border-b hover:bg-gray-100">
                                                            {subItem}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link to={item.url}>{item.title}</Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavLists;
