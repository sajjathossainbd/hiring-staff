import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import axiosInstance from "../../utils/axios";
import { PiLineVerticalThin } from "react-icons/pi";
import PrimaryBtn from "../ui/PrimaryBtn";

function RecruitersFiltering() {
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
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
            <input
              type="text"
              name="industry"
              onChange={handleFilterChange}
              list="industries-list"
              placeholder="Enter Industry"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="industries-list">
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </datalist>
          </div>

          <PiLineVerticalThin className="lg:block hidden" />

          {/* City Input */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <FaMapMarkerAlt className="text-blue" />
            <input
              type="text"
              name="city"
              onChange={handleFilterChange}
              placeholder="Enter City"
              list="cities-list"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="cities-list">
              {locations.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>

          <PiLineVerticalThin className="lg:block hidden" />
          {/* Team Size */}
          <div className="flex items-center space-x-2 rounded-lg px-3 py-2 w-full lg:w-auto bg-white">
            <input
              type="text"
              name="teamSize"
              onChange={handleFilterChange}
              placeholder="Enter Team Size"
              list="team-sizes-list"
              className="focus:outline-none w-full lg:w-auto bg-white text-gray"
            />
            <datalist id="team-sizes-list">
              {teamSizes.map((size) => (
                <option key={size} value={size} />
              ))}
            </datalist>
          </div>

          {/* Search Button */}
          <button
            onClick={applyFilters}
            className=" text-white font-medium w-full md:w-36"
          >
            <PrimaryBtn title={"Search"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruitersFiltering;
