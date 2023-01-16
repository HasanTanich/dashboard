import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { Button } from '.';
import { cartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Cart = () => {
    const { currentColor, setIsClicked, initialState } = useStateContext();

    let totalPrice = 0;
    totalPrice = cartData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, totalPrice);

    return (
        <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div className="bg-white float-right h-screen dark:text-gray-200 transition-all duration-1000 p-8 dark:bg-[#484b52] md:w-400">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold ">Shopping Cart</p>
                    <Button
                        icon={<MdOutlineCancel />}
                        bgHoverColor="light-gray"
                        color="rgb(153, 171, 180)"
                        size="2xl"
                        borderRadius="50%"
                        customFunc={() => setIsClicked(initialState)}
                    />
                </div>
                {cartData.map((item, index) => (
                    <div key={index} className="flex gap-5 items-center border-b-1 border-color dark:border-gray-600 hover:bg-light-gray dark:hover:bg-[#484b52] leading-8 p-4">
                        <img src={item.image} alt={item.name} className="w-24 h-80 rounded-lg" />
                        <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">{item.category}</p>
                            <div className="flex gap-4 items-center mt-2">
                                <p className="text-lg font-semibold">{'$' + item.price}</p>
                                <div className="flex items-center border-1 border-color rounded">
                                    <Button
                                        icon={<AiOutlineMinus />}
                                        color="red"
                                        bgHoverColor="light-gray"
                                        size="xl"
                                    />
                                    <p className="border-x-1 border-color text-green-600 p-2 dark:border-gray-600">0</p>
                                    <Button
                                        icon={<AiOutlinePlus />}
                                        color="green"
                                        bgHoverColor="light-gray"
                                        size="xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="mt-3">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400">Sub Total</p>
                        <p className="font-semibold">{'$' + totalPrice}</p>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                        <p className="text-gray-400">Total</p>
                        <p className="font-semibold">{'$' + totalPrice}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <Button
                        text="Place Order"
                        color="white"
                        bgColor={currentColor}
                        borderRadius="10px"
                        width="full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Cart;
