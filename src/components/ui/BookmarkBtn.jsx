import { CiBookmark } from "react-icons/ci";

function BookmarkBtn() {
  return (
    <div className="hover:bg-bgDeepBlue p-2 rounded-md hover:text-blue text-gray cursor-pointer hover:font-bold">
      <CiBookmark className="text-2xl" />
    </div>
  );
}

export default BookmarkBtn;
