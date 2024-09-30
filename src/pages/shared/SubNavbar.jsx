import DesktopNavItems from "../../components/navbar/DesktopNavItems";
import MobileNavItems from "../../components/navbar/MobileNavItems";
import useAuth from "../../hooks/useAuth";

function SubNavbar() {
  const { user, logOut } = useAuth();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs-listing", label: "Jobs" },
    { to: "/recruiters-listing", label: "Recruiters" },
    { to: "/candidates-listing", label: "Candidates" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blogs" },
  ];
  return (
    <div className="container py-3">
      <DesktopNavItems navLinks={navLinks} />
      <MobileNavItems navLinks={navLinks} user={user} logOut={logOut} />
    </div>
  );
}

export default SubNavbar;
