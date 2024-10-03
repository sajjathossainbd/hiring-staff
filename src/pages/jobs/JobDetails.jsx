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

  // Destructure relevant job details
  const { job_title, description, job_category, job_type, date_posted } =
    job || {};

  useEffect(() => {
    dispatch(fetchJobDetails(id));
  }, [dispatch, id]);

  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="text-red-500 text-center">{error}</div>;
  } else if (!isLoading && !isError && !job?._id) {
    content = <NoFoundData title={"No Job Found!"} />;
  } else if (!isLoading && !isError && job?._id) {
    content = (
      <div className="space-y-8">
        {/* Job Header */}
        <div className="flex justify-center">
          <img
            className="lg:h-[400px] rounded-3xl object-cover w-full mb-10 overflow-hidden"
            src={bannerImage}
            alt={job_category}
          />
        </div>

        {/* Job Details */}
        <div className="flex lg:flex-row flex-col gap-10 dark:text-white">
          {/* Job Description */}
          <div className="lg:w-8/12 w-full">
            <h3 className="pt-4 pb-2 text-2xl font-semibold">{job_title}</h3>
            <div className="flex gap-16 text-sm text-gray-600 dark:text-gray-300">
              <p>Type: {job_type}</p>
              <p>Posted: {new Date(date_posted).toLocaleDateString()}</p>
            </div>
            <hr className="border-0 h-px bg-lightGray mt-3 mb-12" />
            <p className="text-gray-700 dark:text-gray-200">
              {description}
              <strong className="text-lg dark:text-white">
                {job_title}
              </strong>{" "}
              who embodies creativity and a passion for illustrative design and
              typography.
            </p>

            {/* Ideal Candidate Profile */}
            <h4 className="pt-4 pb-2 text-xl font-semibold">
              Ideal Candidate Profile
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
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

            {/* Preferred Experience */}
            <h4 className="pt-4 pb-2 text-xl font-semibold">
              Preferred Experience
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
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

            {/* Key Responsibilities */}
            <h4 className="pt-4 pb-2 text-xl font-semibold">
              Key Responsibilities
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
              <li>
                <strong>Product Knowledge:</strong> Gain a deep understanding of
                the technology and features relevant to your assigned product
                area.
              </li>
              <li>
                <strong>Research:</strong> Provide insights that demonstrate
                human and business impact for our products.
              </li>
              <li>
                <strong>Deliverables:</strong> Create essential deliverables
                (competitive analyses, user flows, low-fidelity wireframes,
                high-fidelity mockups, prototypes, etc.) that effectively solve
                user problems.
              </li>
              <li>
                <strong>Communication:</strong> Clearly convey the results of UX
                activities to the design team and cross-functional partners,
                simplifying complex concepts.
              </li>
            </ul>

            <p className="mt-6 text-gray-700 dark:text-gray-200">
              Join us in shaping the future of digital design and enhancing user
              experiences at Jthemes!
            </p>
          </div>

          {/* Sidebar: Similar Jobs */}
          <div className="lg:w-4/12 flex flex-col gap-10 w-full">
            {/* Similar Jobs */}
            <div className="border border-lightGray p-6 rounded-xl">
              <h4 className="pb-4 text-xl font-semibold">Similar Jobs</h4>
              {/* Implement Similar Jobs listing here */}
              {/* Example Placeholder */}
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Frontend Developer at TechCorp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    UI/UX Designer at DesignPro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Backend Engineer at Innovate LLC
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container">{content}</div>;
};

export default JobDetails;
