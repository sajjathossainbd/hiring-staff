import PrimaryBtnBlue from "./PrimaryBtnBlue";

function TableRow() {
  return (
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
            <div className="text-sm opacity-50">3 years experience</div>
          </div>
        </div>
      </td>
      <td>26 October, 2024</td>
      <td>
        <PrimaryBtnBlue title={"View Details"} />
      </td>
      <td>
        <select className="select dark:bg-darkBlue select-bordered w-full">
          <option value="applied">Applied</option>
          <option value="shortlist">Shortlist</option>
        </select>
      </td>
    </tr>
  );
}

export default TableRow;
