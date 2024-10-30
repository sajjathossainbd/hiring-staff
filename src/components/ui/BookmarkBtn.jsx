// components/ui/BookmarkBtn.js

import { CiBookmark } from "react-icons/ci";

function BookmarkBtn() {
  return (
    <div
      className={
        "hover:bg-bgDeepBlue rounded-md font-bold p-4 text-gray cursor-pointer"
      }
    >
      <CiBookmark className="text-2xl" />
    </div>
  );
}

export default BookmarkBtn;
