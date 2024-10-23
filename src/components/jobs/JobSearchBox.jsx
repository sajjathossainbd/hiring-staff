import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { searched } from "../../features/jobs/jobsFilter/jobsFilterSlice";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans, useTranslation } from "react-i18next";
function JobSearchBox() {
  const { t } = useTranslation();
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
        placeholder={t("fixedNavbarPlaceholder")}
        className="w-full py-[18px] rounded-md focus:outline-none dark:bg-white"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button className="absolute right-2">
        <PrimaryBtn title={<Trans i18nKey={"search"} />} />
      </button>
    </form>
  );
}

export default JobSearchBox;
