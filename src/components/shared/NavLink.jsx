/* eslint-disable react/prop-types */


const NavLink = ({ navTitle }) => {
    return (

        <a className="cursor-pointer hover:text-darkBlue hover:translate-x-1 transition-all">{navTitle}</a>

    );
};

export default NavLink;