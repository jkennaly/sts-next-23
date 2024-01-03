'use client'
import { useEffect, useState } from "react";
import localforage from "localforage";
import LeftSideBar from "../../component/common/LeftSideBar";
import RightSideBar from "../../component/common/RightSideBar";
import MainMenu from "../../component/sts/main-menu/MainMenu";



const page = () => {
    const [loadedState, setLoadedState] = useState({})
    const [stateLoaded, setStateLoaded] = useState(false)
    useEffect(() => {
        //load gameState asynchronously from localForage
        const gameState = async () => {
            const savedState = await localforage.getItem('gamestate')
            if(savedState) setLoadedState(savedState)
            setStateLoaded(true)
        }
        gameState()
        
    }, [])
    if(!stateLoaded) return <div>Loading...</div>
    return (
        <div className="flex min-h-screen">
        <LeftSideBar />
        <div className=" flex-1 py-10  px-5 sm:px-10 ">
         <MainMenu />
        </div>
        <RightSideBar />
        </div>
    );
};

export default page;