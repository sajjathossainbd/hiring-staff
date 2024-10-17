import { useEffect, useState } from "react";
import DesktopNavItems from "../../components/navbar/DesktopNavItems";
import MobileNavItems from "../../components/navbar/MobileNavItems";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
function SubNavbar() {
  const { user, logOut } = useAuth();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll direction
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
    { to: "/jobs-listing", label: "Jobs" },
    { to: "/recruiters-listing", label: "Recruiters" },
    { to: "/candidates-listing", label: "Candidates" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/pricing", label: "Pricing" },
    { to: "/blogs", label: "Blogs" },
  ];
  return (
    <motion.div
      initial={false}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 10,
      }}
      className={"fixed bg-white top-0 z-50 py-2 w-full px-20"}
    >
      <DesktopNavItems navLinks={navLinks} />
      <MobileNavItems navLinks={navLinks} user={user} logOut={logOut} />
    </motion.div>
  );
}

export default SubNavbar;
