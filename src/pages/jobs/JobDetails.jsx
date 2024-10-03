import { useParams } from "react-router-dom";

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

  const { image, position, type, posted, company } = job || {};
  console.log(job);

  useEffect(() => {
    dispatch(fetchJobDetails(id));
  }, [dispatch, id]);

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !job?.id) {
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
    </div>
  );
};

export default JobDetails;
