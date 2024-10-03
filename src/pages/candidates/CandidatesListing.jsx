import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCandidatesListing } from "../../features/candidates/candidatesListing/candidatesListingSlice";
import Loading from "../../components/ui/Loading";
import NoFoundData from "../../components/ui/NoFoundData";
import CandidateCard from "../../components/candidate/CandidateCard";
import SectionTitle from "../../components/shared/SectionTitle";

function CandidatesListing() {
  const dispatch = useDispatch();

  const {
    candidatesListing: candidates,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.candidatesListing);

  useEffect(() => {
    dispatch(fetchCandidatesListing());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && candidates?.length === 0) {
    content = <NoFoundData title="No Candidates Found!" />;
  }

  if (!isLoading && !isError && candidates?.length > 0) {
    content = (
      <div>
        {/* alfabetical filltering */}
        <div className="bg-bgLightBlue dark:bg-darkBlue p-4 md:px-24 md:py-8 space-y-6">
          <SectionTitle
            title={"Browse Candidates"}
            subTitle={
              "Browse top-rated professionals across various skills and locations, tailored to meet your project needs"
            }
          />
          <div className="bg-bgLightWhite dark:bg-darkBlue rounded-md p-1 md:p-3 flex flex-wrap justify-center">
            {/* {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`m-1 w-8 h-8 text-18 rounded-full hover:bg-softLightBlue ${
                selectedLetter === letter
                  ? "bg-bgLightBlue text-blue dark:bg-blue dark:text-white"
                  : " text-lightGray bg-white"
              }`}
            >
              {letter}
            </button>
          ))} */}
          </div>
        </div>

        {/* candidate card */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-10">
          {candidates.map((candidate) => (
            <CandidateCard key={candidate._id} candidate={candidate} />
          ))}
        </div>
      </div>
    );
  }

  // console.log(candidates);

  return (
    <div className="container">
      <Helmet>
        <title>Hiring Staff - Candidates</title>
      </Helmet>
      <div className="">
        {/* Candidate Card */}
        {content}
      </div>
    </div>
  );
}

export default CandidatesListing;
