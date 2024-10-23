import { useEffect, useState } from "react";
import DesktopNavItems from "../../components/navbar/DesktopNavItems";
import MobileNavItems from "../../components/navbar/MobileNavItems";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import useCurrentUser from "../../hooks/useCurrentUser";

function SubNavbar() {
  const { user, logOut } = useAuth();
  const { currentUser } = useCurrentUser();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs-listing", label: "Find Jobs" },
    { to: "/recruiters-listing", label: "Recruiters" },
    { to: "/candidates-listing", label: "Candidates" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blogs" },
  ];

  // Filter nav links based on user role
  const filteredNavLinks = navLinks.filter(link => {
    if (currentUser?.role === "candidate" && link.label === "Candidates") {
      return false;
    }
    if (currentUser?.role === "recruiter" && link.label === "Recruiters") {
      return false;
    }
    return true;
  });

  return (
    <motion.div
      initial={false}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 10,
      }}
      className={"fixed bg-white top-0 z-50 py-2 w-full "}
    >
      <div className="container py-0">
        <DesktopNavItems navLinks={filteredNavLinks} />
        <MobileNavItems navLinks={filteredNavLinks} user={user} logOut={logOut} />
      </div>
    </motion.div>
  );
}

export default SubNavbar;
