import React from "react";
import { BsFacebook } from 'react-icons/bs'
const SocialIcons = ({ Icons }) => {
    return (
        <div className="text-teal-500">
            <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
                <BsFacebook />
            </span>
            <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
                <BsFacebook />
            </span>
            <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
                <BsFacebook />
            </span>
            <span className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
            >
                <BsFacebook />
            </span>
            {/* {Icons.map((icon, i) => (
                <span
                    key={i}
                    className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
                >
                    <ion-icon name={icon.name}></ion-icon>
                </span>
            ))} */}
        </div>
    );
};

export default SocialIcons;