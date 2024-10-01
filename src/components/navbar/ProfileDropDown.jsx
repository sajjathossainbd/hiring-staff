function ProfileDropDown() {
  return (
    <div className="hidden md:hidden lg:hidden xl:flex items-center lg:gap-5 md:gap-3">
      {user ? (
        <div ref={dropDownRef} className="relative mr-5 w-fit text-black">
          <button onClick={() => setOpen((prev) => !prev)}>
            <img
              width={40}
              height={40}
              className="w-12 border-2 border-blue dark:border-white rounded-full lightGray object-cover transition-transform duration-300 hover:scale-105 hover:opacity-80"
              src={currentUser?.photo}
              alt="avatar"
            />
          </button>
          <ul
            className={`${
              open
                ? "visible opacity-100 transition-opacity duration-300"
                : "invisible opacity-0"
            } absolute right-0 top-12 z-50 w-60 rounded-sm bg-bgLightWhite dark:bg-darkBlue dark:text-white`}
          >
            <li className="rounded-sm px-6 py-2 flex justify-center">
              <img
                className="rounded-full object-cover"
                src={currentUser?.photo}
                alt=""
              />
            </li>
            <li className="rounded-sm px-6 py-2 text-center">
              {currentUser?.name} <br />
              <strong className="text-[11px] text-blue dark:text-white">
                {user?.email}
              </strong>
            </li>
            <li className="hover:bg-slate-300 inter rounded-sm px-6 py-2">
              <Link to="/dashboard/dashboard-main">Dashboard</Link>
            </li>
            <li
              className="text-red-500 hover:bg-red-600 hover:text-white rounded-sm px-6 py-2 cursor-pointer font-semibold"
              onClick={logOut}
            >
              Logout
            </li>
          </ul>
        </div>
      ) : (
        <Link to={"sign-in"}>
          <div className="mr-5">
            <PrimaryButton title={"Sign in"} />
          </div>
        </Link>
      )}

      {/* Dark Mode Toggle */}
      <label className="swap swap-rotate text-darkBlue flex items-center">
        <input type="checkbox" onChange={handleDarkModeToggle} />
        {/* Sun Icon */}
        <svg
          className="swap-on -ml-8 lg:h-10 lg:w-10 md:h-10 md:w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        {/* Moon Icon */}
        <svg
          className="swap-off -ml-8 lg:h-10 lg:w-10 md:h-10 md:w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
}

export default ProfileDropDown;
