import Link from 'next/link';
import ComingSoon from "../icons/ComingSoon";
import Community from "../icons/Community";
import Friends from "../icons/Friends";
import Home from "../icons/Home";
import Logout from "../icons/Logout";
import MakeMovie from "../icons/MakeMovie";
import Media from "../icons/Media";
import MovieLogo from "../icons/MovieLogo";
import Profile from "../icons/Profile";
import Settings from "../icons/Settings";

const LiftSideBar = () => {
  return (
    <aside className=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
      <Link href="/">
          <div className="tracking-wide dark:text-white">
            Science That Shit
          </div>
      </Link>

      <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
        <div className="text-gray-400/70  font-medium uppercase">Menu</div>
        <Link 
          href="/"
          className="flex items-center space-x-2 py-1 dark:text-white  font-semibold  border-r-4 border-r-red-600 pr-20 "
        >
          <Home />
          <span>Home</span>
        </Link>

<Link 
  href="/pages/science-that-shit"
  className="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
>
 <MakeMovie />
  <span>Science That Shit</span>
</Link>

      </div>
    </aside>
  );
};

export default LiftSideBar;
