import { ScrollRestoration, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobDetails } from "../../features/jobs/jobsDetails/jobDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { GoDotFill } from "react-icons/go";
import SimilarJobs from "../../components/jobs/SimilarJobs";
import { fetchRecruiterDetails } from "../../features/recruiters/recruiterDetails/recruiterDetailsSlice";
import ApplyJob from "../../components/jobs/ApplyJob";
import { CiLocationOn } from "react-icons/ci";
import PrimaryBtnBlue from "../../components/ui/PrimaryBtnBlue";
import { HiExternalLink } from "react-icons/hi";
import { fetchJobsListing } from "../../features/jobs/jobsListing/jobsListingSlice";
import MiniBtn from "../../components/ui/MiniBtn";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbCoinTaka } from "react-icons/tb";
import TitleIcon from "../../components/ui/TitleIcon";
import { PiNotepadThin } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import useCurrentUser from "../../hooks/useCurrentUser";
import axiosInstance from "../../utils/axios";
import { useQuery } from "@tanstack/react-query";

const Benefitemojis = ["🎉", "💼", "🚀", "🏆"];

function JobDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { currentCandidate } = useCurrentUser();
  const userId = currentCandidate?._id;

  const { data: appliedJobs = [], refetch } = useQuery({
    queryKey: ["appliedJobs", userId],
    queryFn: async () => {
      const res = await axiosInstance.get(`/jobs/applied-jobs/validate/${userId}`);
      return res.data;
    },
    enabled: !!userId,
  });

  const filteredAppliedJobs = appliedJobs?.appliedJobs?.filter(job => job.jobId === id) || [];

  const {
    jobDetails: job,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.jobDetails);

  const { jobsListing: jobsData } = useSelector((state) => state.jobsListing);
  const jobs = jobsData.jobs || [];
  const category = job.category || "";

  // Filter jobs by category
  const filteredJobsByCategory = jobs.filter(job => job.category === category);

  const { recruiterDetails: recruiter } = useSelector((state) => state.recruiterDetails);
  const {
    description,
    job_type,
    logo,
    job_location,
    requirements = [],
    responsibilities = [],
    benefits = [],
    education,
    jobTitle,
    recruiter_id: companyId,
    min_salary,
    max_salary,
    lastDateToApply,
    postedDate,
    name
  } = job || {};

  const { email } = recruiter || {};

  useEffect(() => {
    dispatch(fetchJobsListing());
    dispatch(fetchJobDetails(id));
    dispatch(fetchRecruiterDetails(companyId));
  }, [dispatch, id, companyId]);

  // Date formatting functions
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const formattedDate = formatDate(lastDateToApply);
  const formattedDatePost = formatDate(postedDate);

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !job?._id) content = <NoFoundData title={"No Job Found!"} />;

  if (!isLoading && !isError && job?._id) {
    content = (
      <>
        <div className="lg:flex gap-16 dark:text-white">
          <div className="lg:w-2/3 w-full">
            {/* Job details header */}
            <div className="bg-bgLightWhite dark:bg-darkBlue dark:border p-10 mt-5 rounded-md">
              <h3 className="mb-5">{jobTitle}</h3>
              <div className="flex lg:flex-row md:flex-row flex-col items-center gap-4 justify-between">
                <div className="flex items-center gap-4">
                  <img className="h-20 w-auto object-cover rounded-full" src={logo} alt={name} />
                  <div className="flex flex-col gap-2">
                    <div className="flex lg:flex-row flex-col items-center gap-x-2">
                      <div className="flex items-center gap-1">
                        <span className="text-blue font-medium">{name}</span>
                        <span className="p-1 rounded-full bg-white text-blue text-18">
                          <MdVerified />
                        </span>
                      </div>
                      <GoDotFill className="text-[8px] text-gray lg:block hidden" />
                    </div>
                    <div className="flex lg:justify-start justify-center gap-2">
                      <div className="flex items-center gap-x-2 text-14">
                        <span className="flex items-center gap-4">
                          <MiniBtn value={job_location} icon={<CiLocationOn />} style="bg-softGreen text-green" />
                          <MiniBtn value={job_type} icon={<IoBriefcaseOutline />} style="bg-softGreen text-orange" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply Now Button */}
                <div>
                  {filteredAppliedJobs.length > 0 ? (
                    <button disabled className="flex items-center justify-center bg-gradient-to-r from-blue to-greenLight hover:from-green-500 hover:to-darkBlue text-white px-4 py-3 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:px-6 lg:py-3 rounded-md font-medium transition-all duration-500 ease-in-out gap-2">
                      <p className="text-12 text-white">Already Applied</p>
                    </button>
                  ) : (
                    <button onClick={handleOpen}>
                      <PrimaryBtnBlue title={"Apply Now"} icon={<HiExternalLink />} />
                    </button>
                  )}

                  {isOpen && (
                    <dialog id="my_modal_3" className="modal" open>
                      <div className="modal-box max-w-xl mt-7 dark:bg-blue">
                        <form method="dialog">
                          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕</button>
                        </form>
                        <h3 className="font-bold text-lg">{jobTitle}</h3>
                        <ApplyJob refetch={refetch} job={job} onClose={handleClose} />
                      </div>
                    </dialog>
                  )}
                </div>
              </div>
            </div>

            {/* Job details information */}
            <div className="mt-10">
              <TitleIcon title={"Job Description"} icon={<PiNotepadThin />} />
            </div>
            <div className="mt-7">
              <h5 className="mb-2">🎯 𝐖𝐡𝐚𝐭 𝐖𝐞 𝐀𝐫𝐞 𝐋𝐨𝐨𝐤𝐢𝐧𝐠 𝐅𝐨𝐫</h5>
              {description}
            </div>
            <div className="mt-7">
              <h5 className="mb-2">🗒️ 𝐉𝐨𝐛 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧</h5>
              <ul className="ml-10 leading-7">
                {requirements.map((requirement, index) => <li key={index}>✅ {requirement}</li>)}
              </ul>
            </div>
            <div className="mt-7">
              <h5 className="mb-2">🌟 𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐛𝐢𝐥𝐢𝐭𝐲</h5>
              <ul className="ml-10 leading-7">
                {responsibilities.map((responsibility, index) => <li key={index}>📌 {responsibility}</li>)}
              </ul>
            </div>
            {/* Benefits */}
            <div className="mt-7">
              <h5 className="mb-2">🎁 𝐄𝐱𝐜𝐢𝐭𝐢𝐧𝐠 𝐩𝐚𝐫𝐤𝐬 𝐰𝐚𝐢𝐭𝐢𝐧𝐠 𝐲𝐨𝐮</h5>
              <ul className="ml-10 leading-7">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    {Benefitemojis[index % Benefitemojis.length]} {benefit}
                  </li>
                ))}
                <li>🌎 Team tours and remote meals</li>
                <li>🎂 Birthday surprise</li>
                <li>🎆 New Year&#39;s gift</li>
                <li>🍼 New parent surprise</li>
                <li>🌴 Unlimited leaves (honesty expected)</li>
              </ul>
            </div>
            {/* Education */}
            {education && (
              <div className="mt-7">
                <h5 className="mb-2">🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧</h5>
                <ul className="ml-10 leading-7">
                  <li>🏫 {education}</li>
                </ul>
              </div>
            )}
            {/* Salary */}
            <div className="mt-7">
              <h5 className="mb-2">💵 𝗦𝗮𝗹𝗮𝗿𝘆</h5>
              <ul className="ml-10 leading-7">
                <li className="flex items-center gap-2">
                  <TbCoinTaka className="text-xl" />
                  {min_salary} - {max_salary} BDT
                </li>
              </ul>
            </div>
            {/* Job Location */}
            <div className="mt-7">
              <h5 className="mb-2">🗺️ 𝐉𝐨𝐛 𝐋𝐨𝐜𝐚𝐭𝐢𝐨𝐧</h5>
              <ul className="ml-10 leading-7">
                <li className="flex items-center gap-2 capitalize">
                  📍 {job_location} (Discuss with HR to choose a location that best suits your preference)
                </li>
              </ul>
            </div>
            {/* Job Dates */}
            <div className="mt-7">
              <h5 className="mb-2">📅 𝐉𝐨𝐛 𝐃𝐚𝐭𝐞</h5>
              <ul className="ml-10 leading-7">
                <li className="flex items-center gap-2 capitalize">
                  ⏳ <span className="font-bold">Posted Date: </span>{formattedDatePost}
                </li>
                <li className="flex items-center gap-2 capitalize">
                  🕰️ <span className="font-bold">Deadline Date: </span>{formattedDate}
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div className="mt-7">
              <h5 className="mb-2">❓𝐇𝐚𝐯𝐞 𝐚 𝐪𝐮𝐞𝐫𝐲?</h5>
              <ul className="ml-10 leading-7">
                <li className="flex items-center gap-2 capitalize">
                  📝 Drop us a line at:{" "}
                  <div className="font-medium text-blue hover:border-b text-base">
                    {email}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex flex-col gap-5 mt-10 lg:mt-0">
            {filteredJobsByCategory.length === 0 ? "" : <h4>Similar Jobs Opening ({filteredJobsByCategory.length || 0})</h4>
            }

            {filteredJobsByCategory.length > 0 ? (
              filteredJobsByCategory.map((job, index) => <SimilarJobs key={index} job={job} />)
            ) : (
              <NoFoundData title="No similar jobs Found!" />
            )}
          </div>
        </div>
        <ScrollRestoration />
      </>
    );
  }

  return <div className="container">{content}</div>;
}

export default JobDetails;
