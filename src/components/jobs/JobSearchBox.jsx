import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import PrimaryBtn from "../ui/PrimaryBtn";
import { Trans, useTranslation } from "react-i18next";
import { setJobTitle } from "../../features/jobs/jobsFilter/filterSlice";
import { useState } from "react";

function JobSearchBox() {
  const [input, setInput] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const match = useMatch("/jobs-listing");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;
    dispatch(setJobTitle(input));
    if (!match) {
      navigate("/jobs-listing");
    }
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden md:flex lg:flex relative flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-md lg:w-6/12 md:w-5/12"
    >
      <CiSearch className="size-8 text-blue ml-6" />

      <input
        type="text"
        placeholder={t("fixedNavbarPlaceholder")}
        className="w-full xl:py-[18px] py-2 rounded-md focus:outline-none dark:bg-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit" className="w-auto mr-2 py-1">
        {" "}
        <PrimaryBtn title={<Trans i18nKey={"Search"} />} />
      </button>
    </form>
  );
}

export default JobSearchBox;
