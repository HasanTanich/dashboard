import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
    const { setThemeSettings, currentColor, setCurrentColor, setCurrentMode, currentMode } = useStateContext();
    console.log(currentColor);
    return (
        <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484b52] w-400">
                <div className="flex justify-between items-center ml-4 p-4">
                    <p className="text-xl font-semibold">Settings</p>
                    <button
                        type="button"
                        onClick={() => setThemeSettings(false)}
                        style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
                        className="hover:drop-shadow-xl hover:bg-light-gray p-3 text-2xl"
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Theme Options</p>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={() => {
                                setCurrentMode('Light');
                                localStorage.setItem('mode', 'Light');
                            }}
                            checked={currentMode === 'Light'} />
                        <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
                    </div>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="Dark"
                            className="cursor-pointer"
                            onChange={() => {
                                setCurrentMode('Dark');
                                localStorage.setItem('mode', 'Dark');
                            }}
                            checked={currentMode === 'Dark'} />
                        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
                    </div>
                </div>
                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className="font-semibold text-lg">Theme Colors</p>
                    <div className="flex gap-3">
                        {themeColors.map((item, index) => (
                            <TooltipComponent position="TopCenter" key={index} content={item.name}>
                                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                                    <button
                                        type="button"
                                        className="h-10 w-10 rounded-full cursor-pointer"
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => {
                                            setCurrentColor(item.color);
                                            localStorage.setItem('currentColor', item.color);
                                        }}
                                    >
                                        <BsCheck className={`ml-2 text-2xl text-white ${currentColor === item.color ? 'block' : 'hidden'}`} />
                                    </button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSettings