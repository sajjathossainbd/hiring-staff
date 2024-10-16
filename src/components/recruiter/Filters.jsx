import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchRecruitersListing } from "../../features/recruiters/recruitersListing/recruitersListingSlice";
import axiosInstance from "../../utils/axios";
import { PiLineVerticalThin } from "react-icons/pi";

function RecruitersFiltering() {
  const dispatch = useDispatch();

  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [teamSizes, setTeamSizes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialFilters = {
    industry: "",
    location: "",
    country: "",
    city: "",
    teamSize: "",
  };
  const [filters, setFilters] = useState(initialFilters);
  // const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch unique industries, locations, and team sizes from the API
  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const { data } = await axiosInstance.get("/recruiters/unique");
        console.log("Full API Response:", data);
        setIndustries(data.uniqueData.industries || []);
        setLocations(data.uniqueData.cities || []);
        setTeamSizes(data.uniqueData.teamSizes || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching filter data", error);
        setIsLoading(false);
      }
    };

    fetchFilterData();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = () => {
    console.log("Filters before applying:", filters);
    dispatch(fetchRecruitersListing(filters));
  };

  // Render Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="relative bg-white md:p-2 p-5 rounded-2xl w-full">
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
              placeholder="Select or Enter Industry"
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

          <button
            onClick={applyFilters}
            className="btn btn-primary border-none bg-blue text-white font-medium w-full md:w-36"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruitersFiltering;
