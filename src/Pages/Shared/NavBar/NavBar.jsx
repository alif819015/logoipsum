import logo from "../../../../public/logo.png";
import { BiChevronDown } from "react-icons/Bi";

const NavBar = () => {
  return (
    <div className="container">
      <div className="flex justify-between navbar z-10 absolute px-4 md:px-32">
          <div className="dropdown flex  justify-between items-center">
            <div className="flex justify-center items-center">
            <img className="w-[138px] h-[45px]" src={logo} alt="" />
              <div style={{ fontFamily: 'Poppins, sans-serif' }} className="hidden md:flex space-x-4 md:ml-8 font-bold text-black">
                <div className="relative group">
                  <a
                    href="#"
                    className="flex gap-1 justify-center items-center"
                  >
                    Solution
                    <BiChevronDown className="text-xl text-[#0076CE]"></BiChevronDown>
                  </a>

                  <div className="absolute hidden group-hover:block">
                    <a href="#" className="block p-2">
                      Solution 1
                    </a>
                    <a href="#" className="block p-2">
                      Solution 2
                    </a>
                  </div>
                </div>
                <div className="relative group">
                  <a
                    href="#"
                    className="flex gap-1 justify-center items-center"
                  >
                    Features
                    <BiChevronDown className="text-xl text-[#0076CE]"></BiChevronDown>
                  </a>

                  <div className="absolute hidden group-hover:block">
                    <a href="#" className="block p-2">
                      Solution 1
                    </a>
                    <a href="#" className="block p-2">
                      Solution 2
                    </a>
                  </div>
                </div>
                <a href="#" className="">
                  Blogs
                </a>
                <div className="relative group">
                  <a
                    href="#"
                    className="flex gap-1 justify-center items-center"
                  >
                    About
                    <BiChevronDown className="text-xl text-[#0076CE]"></BiChevronDown>
                  </a>

                  <div className="absolute hidden group-hover:block">
                    <a href="#" className="block p-2">
                      Solution 1
                    </a>
                    <a href="#" className="block p-2">
                      Solution 2
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:block ">
          <div className="flex gap-4">
            <button className="btn rounded-md text-base border-2 text-[#0076CE] border-[#0076CE] hover:bg-[#0076CE] hover:text-white">
              Login
            </button>
            <button className="btn rounded-md text-base border-2 text-[#0076CE] border-[#0076CE] hover:bg-[#0076CE] hover:text-white">
              Register
            </button>
          </div>
          </div>
          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
