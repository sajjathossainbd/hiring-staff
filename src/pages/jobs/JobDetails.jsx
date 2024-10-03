import { useParams } from "react-router-dom";
import bannerImage from "/src/assets/gallery/pexels-goumbik-590016.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobDetails } from "../../features/jobs/jobsDetails/jobDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";

const JobDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    jobDetails: job,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobDetails);

  const { job_title, description, job_category, job_type, date_posted } =
    job || {};
  console.log(job);

  useEffect(() => {
    dispatch(fetchJobDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !job?._id) {
    content = <NoFoundData title={"No Job Found!"} />;
  }

  if (!isLoading && !isError && job?.id) {
    content = (
      <div>
        <h1>Jobs</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {content}

      {/* update dynamic date */}
      <div>
        <img
          className="lg:h-[400px] rounded-3xl object-cover w-full mb-10 overflow-hidden"
          src={bannerImage}
          alt={job_category}
        />
        <div className="flex lg:flex-row flex-col gap-10 dark:text-white">
          <div className="lg:w-8/12 w-full">
            <h3 className="pt-4 pb-2">{job_title}</h3>
            <div className="flex gap-16 text-sm">
              <p>Type: {job_type}</p>
              <p>Posted: {date_posted}</p>
            </div>
            <hr className="border-0 h-px bg-lightGray mt-3 mb-12" />
            <p>
              {description}
              <strong className="text-16 dark:text-white">
                {job_title}
              </strong>{" "}
              who embodies creativity and a passion for illustrative design and
              typography.
            </p>
            <h4 className="pt-4 pb-2">Ideal Candidate Profile</h4>
            <ul>
              <li>
                Portfolio showcasing polished end-to-end customer journeys.
              </li>
              <li>
                5+ years of industry experience in interactive and/or visual
                design.
              </li>
              <li>
                Excellent interpersonal skills and a collaborative spirit.
              </li>
              <li>
                Aware of trends in mobile, communications, and collaboration.
              </li>
              <li>
                Ability to produce highly polished design prototypes, mockups,
                and communication artifacts.
              </li>
              <li>
                Proficiency in scoping, estimating efforts, and prioritizing
                tasks independently.
              </li>
              <li>
                Proven history of influencing product delivery and user
                experiences.
              </li>
              <li>
                A Bachelor&apos;s Degree in Design (or a related field) or
                equivalent professional experience.
              </li>
              <li>
                Proficiency in design tools such as Figma, Photoshop,
                Illustrator, and Sketch.
              </li>
            </ul>
            <h4 className="pt-4 pb-2">Preferred Experience</h4>
            <ul>
              <li>
                Designing user experiences for enterprise software/services.
              </li>
              <li>
                Applying established design principles and interaction patterns.
              </li>
              <li>
                Influencing design thinking across diverse teams and
                geographies.
              </li>
            </ul>
            <h4 className="pt-4 pb-2">Key Responsibilities</h4>
            <ul>
              <li>
                <h6 className="inline-block">Product Knowledge:</h6> Gain a deep
                understanding of the technology and features relevant to your
                assigned product area.
              </li>
              <li>
                <h6 className="inline-block">Research:</h6> Provide insights
                that demonstrate human and business impact for our products.
              </li>
              <li>
                <h6 className="inline-block">Deliverables:</h6> Create essential
                deliverables (competitive analyses, user flows, low-fidelity
                wireframes, high-fidelity mockups, prototypes, etc.) that
                effectively solve user problems.
              </li>
              <li>
                <h6 className="inline-block">Communication:</h6> Clearly convey
                the results of UX activities to the design team and
                cross-functional partners, simplifying complex concepts.
              </li>
            </ul>
            <p>
              Join us in shaping the future of digital design and enhancing user
              experiences at Jthemes!
            </p>
          </div>
          <div className="lg:w-4/12 flex flex-col gap-10 w-full">
            {/* Map Componet */}
            {/* Similar Jobs */}
            <div className="border border-lightGray p-6 rounded-xl">
              <h4 className="pb-7">Similar Jobs</h4>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
