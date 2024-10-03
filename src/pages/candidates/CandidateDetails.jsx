/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCandidateDetails } from "../../features/candidates/candidateDetails/candidateDetailsSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import { CiLocationOn } from "react-icons/ci";
import StarRatings from "react-star-ratings";
import { FaDownload } from "react-icons/fa";
import Overview from "../../components/candidate/OverView";

function CandidateDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    candidateDetails: candidate,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.candidateDetails);

  // data destructuring
  const {
    _id,
    first_name,
    last_name,
    email,
    phone_number,
    location,
    photo_url,
    date_applied,
    job_email_applied_to,
    certifications,
    cover_letter,
    resume,
    education,
    experience,
    skills,
  } = candidate || {};

  useEffect(() => {
    dispatch(fetchCandidateDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !candidate?._id) {
    content = <NoFoundData title={"No Candidate Found!"} />;
  }

  if (!isLoading && !isError && candidate?._id) {
    content = (
      <div>
        {/* Header */}
        <div className="relative w-full h-48 md:h-64">
          <img
            src="https://img.freepik.com/premium-photo/abstract-shadowy-textures-subtle-highlights-luminescence-seep-through-dark-background_764067-9315.jpg"
            alt="Background"
            className="w-full h-full rounded-lg object-cover"
          />
          <div className="absolute -bottom-9 left-0 p-4">
            <div className="flex items-center space-x-4">
              <img
                src={photo_url}
                alt="Profile"
                className="w-20 h-20 border border-white rounded-full "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
          <div className="space-y-2">
            <div className="flex gap-6">
              <h3 className="">
                {first_name} {last_name}
              </h3>
              <p className="flex text-18 items-center gap-2">
                <CiLocationOn /> <span className="">{location?.city}</span>
              </p>
            </div>
            <h5 className="text-lightGray">Javascript</h5>
            <div className="mt-1 flex gap-[1px] text-14 items-center">
              <StarRatings
                rating={4}
                starRatedColor="#ffd250"
                numberOfStars={5}
                name="rating"
                starDimension="16px"
                starSpacing="1px"
              />
              <p className="ml-2">{"4"}</p>
            </div>
          </div>
          <div>
            <button className="bg-blue text-white text-18 px-4 md:px-6 py-3 md:py-5 rounded flex items-center space-x-2">
              <FaDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        <hr className="text-lightGray mt-4" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1     mt-6">
          <div className="flex flex-col gap-8 lg:pr-5">
            {/* education */}
            <div>
              <h4 className=" text-gray mb-4">Education</h4>
              <p>
                <span className="font-bold">Degree: </span>{" "}
                {education?.[0]?.degree}
              </p>
              <p>
                <span className="font-bold">Graduation Year: </span>{" "}
                {education?.[0]?.graduation_year}
              </p>
              <p>
                <span className="font-bold">Institution: </span>{" "}
                {education?.[0]?.institution}
              </p>
            </div>
            {/* experience */}
            <div>
              <h4 className="text-gray mb-4">Experience</h4>
              <div className="ml-3 ">
                {experience?.map((exp, idx) => (
                  <div key={exp.idx} className="   mt-3">
                    <h4>{idx + 1}.</h4>
                    <p>
                      <span className="font-bold">Title: </span> {exp.job_title}
                    </p>
                    <p>
                      <span className="font-bold">Company: </span> {exp.company}
                    </p>
                    <p>
                      <span className="font-bold">Duration: </span>
                      {exp.duration}
                    </p>
                    <p>
                      <span className="font-bold">Responsibilities: </span>
                      {exp.responsibilities.map((res, idx) => (
                        <li key={idx} className="ml-3">
                          {res}
                        </li>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-3 md:mt-0 lg:pl-5">
            {/* skill */}
            <div>
              <h4 className=" text-gray mb-4">Skills</h4>
              <div className="flex gap-2 flex-wrap ml-3">
                {skills?.map((skill) => (
                  <button
                    key={skill}
                    className="bg-lightText py-2 px-3 rounded-full text-lightBlue hover:bg-lightBlue hover:text-white"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
            {/* certification */}
            <div>
              <h4 className=" text-gray mb-4">Certifications</h4>
              {certifications.map((c, idx) => (
                <div key={idx} className="flex items-center gap-2 ml-3">
                  <h5>{idx + 1}.</h5>
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </div>
          {/* overview */}
          <div className="lg:col-span-1 md:col-span-2 sm:col-span-1  mt-6 lg:mt-0 lg:pl-5">
            <Overview candidate={candidate} />
          </div>
        </div>
      </div>
    );
  }

  // console.log(candidate);

  return (
    <div className="container">
      {/* Candidate Details Content */}
      {content}
    </div>
  );
}

export default CandidateDetails;
