/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function BannerCountDownCard({ data }) {
  const { icon, title, number } = data || {};
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <motion.div
      ref={ref}
      className=" h-full boxBorderHoverBlue boxBorderHoverBlue px-4 py-5 flex items-center gap-3 transition-transform duration-500 group hover:-translate-y-1"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon */}
      <div className="text-5xl font-normal text-blue bg-bgDeepBlue p-4 rounded-md group-hover:bg-blue group-hover:text-white transition-all duration-800">
        {icon}
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-2 text-xl">
        {isVisible ? (
          <h3>
            <CountUp end={number} duration={2} />+
          </h3>
        ) : (
          <h4>0+</h4>
        )}
        <p>{title}</p>
      </div>
    </motion.div>
  );
}

export default BannerCountDownCard;
