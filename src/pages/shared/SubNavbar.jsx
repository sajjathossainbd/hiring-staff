/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import DesktopNavItems from "../../components/navbar/DesktopNavItems";
import MobileNavItems from "../../components/navbar/MobileNavItems";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import useCurrentCandidate from "../../hooks/useCurrentCandidate";
import useCurrentRecruiter from "../../hooks/useCurrentRecruiter";

function SubNavbar() {
  const { t } = useTranslation();
  const { user, logOut } = useAuth();
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
    { to: "/", label: <Trans i18nKey={"home"} /> },
    { to: "/jobs-listing", label: <Trans i18nKey={"jobs"} /> },
    { to: "/recruiters-listing", label: <Trans i18nKey={"recruiters"} /> },
    { to: "/candidates-listing", label: <Trans i18nKey={"candidates"} /> },
    { to: "/about", label: <Trans i18nKey={"about"} /> },
    { to: "/contact", label: <Trans i18nKey={"contact"} /> },
    { to: "/pricing", label: <Trans i18nKey={"pricing"} /> },
    { to: "/blogs", label: <Trans i18nKey={"blogs"} /> },
  ];

  const { currentCandidate } = useCurrentCandidate()
  const { currentRecruiter } = useCurrentRecruiter()

  // Filter nav links based on user role
  const filteredNavLinks = navLinks.filter((link) => {
    if (currentCandidate && link.label === "Candidates") {
      return false;
    }
    if (currentRecruiter && link.label === "Recruiters") {
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
        <MobileNavItems
          navLinks={filteredNavLinks}
          user={user}
          logOut={logOut}
        />
      </div>
    </motion.div>
  );
}

export default SubNavbar;
