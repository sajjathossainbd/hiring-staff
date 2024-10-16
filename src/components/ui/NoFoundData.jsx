/* eslint-disable react/prop-types */
import NoData from "./../../assets/ui/no-data.svg";
function NoFoundData({ title }) {
  return (
    <div className="">
      <div className="boxBorderHoverBlue w-full flex flex-col items-center justify-center py-10">
        <img className="lg:w-2/12 md:w-2/12 sm:w-2/12 max-sm:w-2/12" src={NoData} alt="" />
        <h5 className="mt-6">{title}</h5>
      </div>
    </div>
  );
}

export default NoFoundData;
