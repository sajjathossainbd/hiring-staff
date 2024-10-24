import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import axiosInstance from "../../utils/axios";
import { PiLineVerticalThin } from "react-icons/pi";
import PrimaryBtn from "../ui/PrimaryBtn";
import Dropdown from "../shared/DropdownCandidate";
import { Trans, useTranslation } from "react-i18next";

function RecruitersFiltering() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teamSizes, setTeamSizes] = useState([]);

  const initialFilters = {
    industry: "",
    city: "",
    teamSize: "",
  };
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const { data } = await axiosInstance.get("/recruiters/unique");
        setIndustries(data.industries || []);
        setLocations(data.cities || []);
        setTeamSizes(data.teamSizes || []);
      } catch (error) {
        console.error("Error fetching filter data", error);
      }
    };

    fetchFilterData();
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    dispatch(fetchRecruitersListing(filters));
  };

  return (
    <div>
      <div className="relative bg-white shadow-md border border-bgLightBlue md:p-2 p-5 rounded-lg w-full">
        {/* Search Bar */}
        <div className="flex items-center md:flex-row flex-col md:gap-2 gap-3 justify-center">
          {/* Industry */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaLayerGroup className="text-blue" />
            <Dropdown
              options={industries}
              placeholder="Select a industry"
              onChange={(option) => handleFilterChange("industry", option)}
            />
          </div>

          <PiLineVerticalThin className="lg:block hidden" />

          {/* City Input */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaMapMarkerAlt className="text-blue" />
            <Dropdown
              options={locations}
              placeholder="Select a location"
              onChange={(option) => handleFilterChange("city", option)}
            />
          </div>

          <PiLineVerticalThin className="lg:block hidden" />
          {/* Team Size */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <Dropdown
              options={teamSizes}
              placeholder="Select a number"
              onChange={(option) => handleFilterChange("teamSize", option)}
            />
          </div>

          {/* Search Button */}
          <button
            onClick={applyFilters}
            className=" text-white font-medium w-full md:w-36"
          >
            <PrimaryBtn title={<Trans i18nKey={"search"} />} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruitersFiltering;
