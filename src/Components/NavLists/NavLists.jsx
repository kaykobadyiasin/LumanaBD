import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavLists = () => {
    const [categories, setCategories] = useState([]);
    const [menuData, setMenuData] = useState([
        {
            title: "HouseHold",
            url: "/household",
        },
        {
            title: "Kids & Mom",
            url: "/kids-mom",
        },
        {
            title: "Electronics",
            url: "/electronics",
        },
        {
            title: "Lifestyles",
            subMenu: [
                {
                    title: "Bag",
                    url: "https://www.youtube.com/watch?v=WAaIkw2fYCI&list=WL",
                },
            ],
        },
        {
            title: "Foods",
            url: "/foods",
        },
        {
            title: "Kitchen",
            subMenu: [
                {
                    title: "Blender & Mixer",
                    url: "https://www.youtube.com/watch?v=WAaIkw2fYCI&list=WL",
                },
                {
                    title: "Plate",
                    url: "https://www.youtube.com/watch?v=WAaIkw2fYCI&list=WL",
                },
                {
                    title: "Gas Solution",
                    url: "https://www.youtube.com/watch?v=WAaIkw2fYCI&list=WL",
                },
            ],
        },
        {
            title: "Cosmetics",
            url: "/cosmetics",
        },
        {
            title: "Health",
            url: "/health",
        },
        {
            title: "Clothing",
            url: "/clothing",
        },
        {
            title: "Education",
            url: "/education",
        },
        {
            title: "Service",
            url: "/service",
        },
        {
            title: "Hot Offer",
            url: "/hot-offer",
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
            <div className="bg-white pt-3 rounded-l-md">
                <ul className="flex flex-col gap-3 text-sm">
                    {menuData.map((item, index) => (
                        <li key={index} className="border-b pb-2 px-5">
                            {item.subMenu ? (
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => handleMenuClick(index)}
                                >
                                    {item.title}
                                    <div className="relative">
                                        <svg
                                            className="w-2.5 h-2.5 ml-2.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path stroke="currentColor" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <div
                                            className={
                                                openMenu === index
                                                    ? "z-40 block absolute lg:left-10 right-0 -top-6 bg-white rounded-r-lg shadow w-48"
                                                    : "hidden"
                                            }
                                        >
                                            <ul className="py-2 text-sm">
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link to={subItem.url} className="block px-4 py-2 hover:bg-gray-100">
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
