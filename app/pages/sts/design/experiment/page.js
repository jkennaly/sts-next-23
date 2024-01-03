'use client'
import LeftSideBar from "@/app/component/common/LeftSideBar";
import RightSideBar from "@/app/component/common/RightSideBar";
import DesignExperiment from "@/app/component/sts/design/experiment/DesignExperiment";



const page = () => {
    return (
        <div className="flex min-h-screen">
        <LeftSideBar />
        <div className=" flex-1 py-10  px-5 sm:px-10 ">
         <DesignExperiment />
        </div>
        <RightSideBar />
        </div>
    );
};

export default page;