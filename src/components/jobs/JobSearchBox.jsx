import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/jobs/jobsFilter/jobsFilterSlice";
import PrimaryBtn from "../ui/PrimaryBtn";

function JobSearchBox() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.jobsFilter);
  const [input, setInput] = useState(search);

  const match = useMatch("/jobs-listing");
  const navigate = useNavigate();

  const handeSubmit = (event) => {
    event.preventDefault();
    dispatch(searched(input));

    if (!match) {
      navigate("/jobs-listing");
    }
  };
  return (
    <form
      onSubmit={handeSubmit}
      className="hidden md:flex lg:flex relative flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-md lg:w-6/12 md:w-5/12"
    >
      <CiSearch className="size-8 text-blue ml-6" />

      <input
        type="text"
        placeholder="Job Title, Keywords"
        className="w-full py-[18px] rounded-md focus:outline-none dark:bg-white"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <div className="absolute right-1">
        <PrimaryBtn title={"Search"} />
      </div>
    </form>
  );
}

export default JobSearchBox;
