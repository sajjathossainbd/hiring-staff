import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function GrowthSectionCard(data) {
  const { title, subTitle, targetCount } = data;
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const ref = useRef(null); // Reference for the component

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Set to true when the card is in view
        observer.disconnect(); // Stop observing after it's visible
      }
    });

    if (ref.current) {
      observer.observe(ref.current); // Observe the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer on unmount
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="px-4 py-8 rounded-lg h-full border border-bgDeepBlue"
      initial={{ opacity: 0, scale: 0.8 }} // Initial state for the animation
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }} // Animate to full opacity and scale
      transition={{ duration: 0.5 }} // Duration of the entrance animation
    >
      {/* <p className="font-medium text-gray-500 mb-2">{subTitle}</p> */}
      <h3 className="text-xl font-bold text-darkBlue">{title}</h3>
      <h1 className="text-blue mt-4">
        {isVisible ? <CountUp end={targetCount} duration={2} /> : "0"}+
      </h1>
    </motion.div>
  );
}

export default GrowthSectionCard;
