import { useEffect, useState } from "react";
import DesktopNavItems from "../../components/navbar/DesktopNavItems";
import MobileNavItems from "../../components/navbar/MobileNavItems";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { BiGroup, BiHomeAlt2 } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaCitySolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";

function SubNavbar() {
  const { t } = useTranslation();
  const { user, logOut } = useAuth();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280); // xl screens start at 1280px in Tailwind CSS
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    { to: "/", label: <Trans i18nKey={"home"} />, icon: <BiHomeAlt2 /> },
    {
      to: "/jobs-listing",
      label: <Trans i18nKey={"jobs"} />,
      icon: <IoBriefcaseOutline />,
    },
    {
      to: "/recruiters-listing",
      label: <Trans i18nKey={"recruiters"} />,
      icon: <LiaCitySolid />,
    },
    {
      to: "/candidates-listing",
      label: <Trans i18nKey={"candidates"} />,
      icon: <BiGroup />,
    },
    {
      to: "/pricing",
      label: <Trans i18nKey={"pricing"} />,
      icon: <TbMoneybag />,
    },
  ];

  const animatedNavbar = (
    <motion.div
      initial={false}
      animate={{ y: scrollDirection === "" ? 0 : 0 }}
      transition={{
        type: "spring",
        damping: 20,
        duration: 10,
      }}
      className={
        "bg-white dark:bg-darkBlue dark:text-white top-0 z-50 py-2 w-full "
      }
    >
      <div className="container py-0">
        <DesktopNavItems navLinks={navLinks} />
        <MobileNavItems navLinks={navLinks} user={user} logOut={logOut} />
      </div>
    </motion.div>
  );

  return isXL ? (
    animatedNavbar
  ) : (
    <div className="fixed bg-white dark:bg-darkBlue dark:text-white top-0 z-50 py-2 w-full ">
      <div className="container py-0">
        <DesktopNavItems navLinks={navLinks} />
        <MobileNavItems navLinks={navLinks} user={user} logOut={logOut} />
      </div>
    </div>
  );
}

export default SubNavbar;
