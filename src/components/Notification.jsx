import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';

import { chatData } from '../data/dummy';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
    const { currentColor, setIsClicked, initialState } = useStateContext();

    return (
        <div className="nav-item w-96 absolute top-16 right-5 md:right-44 bg-white rounded-lg p-8 dark:bg-[#42464D]">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <p className="text-lg font-semibold dark:text-gray-200">Notifications</p>
                    <button type="button" className="dark:text-gray-200 text-xs rounded p-1 px-2 bg-orange-theme">5 New</button>
                </div>
                <Button
                    icon={<MdOutlineCancel />}
                    bgHoverColor="light-gray"
                    color="rgb(153, 171, 180)"
                    size="2xl"
                    borderRadius="50%"
                    customFunc={() => setIsClicked(initialState)}
                />
            </div>
            <div>
                {chatData?.map((item, index) => (
                    <div key={index} className="mt-6 flex gap-5 leading-8 items-center border-b-1 border-color p-3  hover:bg-light-gray dark:hover:bg-[#42464D] cursor-pointer">
                        <img src={item.image} alt="avatar" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold dark:text-gray-200">{item.message}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <Button
                    color="white"
                    bgColor={currentColor}
                    text="See all notifications"
                    borderRadius="10px"
                    width="full"
                />
            </div>
        </div>
    );
};

export default Notification;