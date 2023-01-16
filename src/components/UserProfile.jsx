import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';

import { userProfileData } from '../data/dummy';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import me from '../data/me.jpg';

const UserProfile = () => {
    const { currentColor, setIsClicked, initialState } = useStateContext();
    return (
        <div className="nav-item w-96 absolute top-16 right-3 bg-white rounded-lg p-8 dark:bg-[#42464D]">
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
                <Button
                    icon={<MdOutlineCancel />}
                    bgHoverColor="light-gray"
                    color="rgb(153, 171, 180)"
                    size="2xl"
                    borderRadius="50%"
                    customFunc={() => setIsClicked(initialState)}
                />
            </div>
            <div className="mt-6 flex gap-5 items-center border-color border-b-1 pb-6">
                <img
                    src={me}
                    alt="user-profile"
                    className="w-24 h-24 rounded-full"
                />
                <div >
                    <p className="text-xl font-semibold dark:text-gray-200">Hasan Tanich</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Administrator</p>
                    <p className="text-sm text-gray-500 font-semibold dark:text-gray-400">hasantanich@gmail.com</p>
                </div>
            </div>
            <div>
                {userProfileData.map((item, index) => (
                    <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]">
                        <button
                            type="button"
                            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                            className="rounded-lg text-xl p-3 hover:bg-light-gray"
                        >
                            {item.icon}
                        </button>
                        <div>
                            <p className="text-lg font-semibold dark:text-gray-200">{item.title}</p>
                            <p className="text-sm dark:text-gray-400 text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <Button
                    color="white"
                    bgColor={currentColor}
                    text="Logout"
                    borderRadius="10px"
                    width="full"
                />
            </div>
        </div>
    );
};

export default UserProfile;