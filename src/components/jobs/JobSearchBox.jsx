import { CiSearch } from "react-icons/ci";
import PrimaryButton from "../shared/PrimaryButton";

function JobSearchBox() {
  return (
    <form className="flex relative flex-col sm:flex-row items-center justify-center gap-4 bg-white rounded-md w-6/12">
      <CiSearch className="size-8 text-blue ml-6" />

      <input
        type="text"
        placeholder="Job Title, Keywords"
        className="pl-3 md:pl-0 w-full py-5 md:py-6 rounded-md focus:outline-none dark:bg-white"
      />

      <div className="absolute right-2 md:right-4">
        <PrimaryButton title={"Search"} />
      </div>
    </form>
  );
}

export default JobSearchBox;
