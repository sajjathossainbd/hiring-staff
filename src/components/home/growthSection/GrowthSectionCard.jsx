import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function GrowthSectionCard(data) {
  const { title, targetCount } = data;
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
      className=""
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-blue mt-4 mb-2">
        {isVisible ? <CountUp end={targetCount} duration={2} /> : "0"}+
      </h3>
      <h5 className="text-16 font-bold text-darkBlue">{title}</h5>
    </motion.div>
  );
}

export default GrowthSectionCard;
