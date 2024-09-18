import  { useState, useEffect } from "react";

const CounterSection = () => {
  // Data array for title and target values
  const data = [
    { title: "Completed Cases", targetCount: 25000, duration: 2000 }, // 5 seconds
    { title: "Our Offices", targetCount: 17, duration: 2000 }, // 3 seconds
    { title: "Skilled People", targetCount: 86, duration: 2000 }, // 4 seconds
    { title: "Happy Clients", targetCount: 28, duration: 2000 }, // 2 seconds
  ];

  // Array to store all the counts
  const [counts, setCounts] = useState(data.map(() => 0));

  useEffect(() => {
    const countUp = (target, index, duration) => {
      const startTime = performance.now(); // Record the start time

      const step = (currentTime) => {
        const elapsed = currentTime - startTime; // Calculate elapsed time
        const progress = Math.min(elapsed / duration, 1); // Calculate progress ratio
        const newCount = Math.floor(progress * target); // Calculate the new count

        setCounts((prevCounts) =>
          prevCounts.map((count, idx) => (idx === index ? newCount : count))
        );

        if (progress < 1) {
          requestAnimationFrame(step); // Continue updating until target is reached
        }
      };

      requestAnimationFrame(step); // Start the animation
    };

    // Start all counters
    data.forEach((item, index) => {
      countUp(item.targetCount, index, item.duration);
    });
  }, []);

  // Function to format the count with 'K' if the count is 1000 or more
  const formatCount = (count) => {
    if (count >= 1000) {
      return `${Math.floor(count / 1000)}K`;
    }
    return count;
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <p className="font-medium text-gray-500 mb-2">
              We always provide people a complete solution upon focus of any business
            </p>
            <h3 className="text-xl font-bold text-darkBlue mb-4">
              {item.title}
            </h3>
            <h1 className="text-6xl font-bold text-blue">
              {formatCount(counts[index])}+
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
