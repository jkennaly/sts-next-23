import Link from "next/link";
import MovieLogo from "./component/icons/MovieLogo";

const Header = () => {
    return (
        <div className="flex justify-around items-center bg-gray-700 dark:bg-red-600 p-4 pb-2">
        
        <Link href="/">
        <div className=" font-bold text-lg flex items-center gap-x-3 hidden md:flex">
                <div className="tracking-wide text-blue-200 dark:text-white">Science That Shit</div>
            </div>
        </Link>
        
      </div>
    );
};

export default Header;