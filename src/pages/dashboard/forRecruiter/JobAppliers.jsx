import PrimaryBtnBlue from "../../../components/ui/PrimaryBtnBlue";
import TinnyHeading from "../shared/TinnyHeading";
function JobAppliers() {
  return (
    <div>
      <TinnyHeading
        title={"Manage Posted Jobs"}
        path={"job-appliers"}
        pathName={"Posted Jobs List"}
      />

      <div className="p-6 bg-gray-50">
        {/* All Candidates List */}
        <div className="overflow-x-auto">
          <table className="table w-full border-separate border-spacing-y-4">
            {/* head */}
            <thead>
              <tr className="bg-white text-16 rounded-sm">
                <th className="rounded-l-md">Name</th>
                <th>Date</th>
                <th>Details</th>
                <th className="rounded-r-md">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white rounded-md shadow-sm">
                <td className="rounded-l-md">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Jane Doe</div>
                      <div className="text-sm opacity-50">
                        3 years experience
                      </div>
                    </div>
                  </div>
                </td>
                <td>26 October, 2024</td>
                <td>
                  <button>
                    {" "}
                    <PrimaryBtnBlue title={"View Details"} />
                  </button>
                </td>
                <td>
                  <select className="select dark:bg-darkBlue select-bordered w-full">
                    <option value="applied">Applied</option>
                    <option value="shortlist">Shortlist</option>
                    <option value="shortlist">Pending</option>
                    <option value="shortlist">Reject</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobAppliers;
