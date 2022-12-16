import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light')

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    useEffect(() => {
        console.log(currentColor);
        console.log(currentMode);
        let color = localStorage.getItem('currentColor');
        let mode = localStorage.getItem('mode');
        if (color && mode) {
            setCurrentColor(color);
            setCurrentMode(mode);
        }
    }, [])

    return (
        <StateContext.Provider value={
            {
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                themeSettings, setThemeSettings,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
            }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);