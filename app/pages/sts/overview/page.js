'use client'
import LeftSideBar from "@/app/component/common/LeftSideBar";
import RightSideBar from "@/app/component/common/RightSideBar";
import Overview from "@/app/component/sts/overview/Overview";



const page = () => {
    return (
        <div className="flex min-h-screen">
        <LeftSideBar />
        <div className=" flex-1 py-10  px-5 sm:px-10 ">
         <Overview />
        </div>
        <RightSideBar />
        </div>
    );
};

export default page;