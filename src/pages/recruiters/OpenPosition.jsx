/* eslint-disable react/display-name */
import { forwardRef } from "react"; // Import forwardRef
import RecruiterJobsCard from "./RecruiterJobsCard";

const OpenPosition = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container">
      {" "}
      <div>
        <h4 className="mb-10">Open Position (20)</h4>
      </div>
      {/* Open position list */}
      <div className="flex flex-col gap-6">
        <RecruiterJobsCard
          recruiterImage={
            "https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery"
          }
          position="PHP DEVELOPER"
          jobType="half time"
          locations="Denmark"
          salary="$3000 - 5000"
          dates="20-11-2022"
        />
        <RecruiterJobsCard
          recruiterImage={
            "https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery"
          }
          position="PHP DEVELOPER"
          jobType="half time"
          locations="Denmark"
          salary="$3000 - 5000"
          dates="20-11-2022"
        />
      </div>
    </div>
  );
});

export default OpenPosition;
