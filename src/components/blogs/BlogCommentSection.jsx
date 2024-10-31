const BlogCommentSection = () => {
  return (
    <div className="container bg-red-0">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className=" mx-auto p-4 space-y-3">
            <h2>Leave a Comment</h2>
          </div>
          <div>
            <form className=" mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 border dark:bg-blue dark:text-white dark:placeholder:text-bgDeepBlue border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    className="w-full px-4 py-4 border dark:bg-blue dark:text-white dark:placeholder:text-bgDeepBlue border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-4 border dark:bg-blue dark:text-white dark:placeholder:text-bgDeepBlue border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full px-4 py-4 border dark:bg-blue dark:text-white dark:placeholder:text-bgDeepBlue border-lightGray text-14 focus:outline-none rounded-sm"
                  />
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Tell us about yourself"
                  rows="10"
                  className="w-full px-4 py-4 border dark:bg-blue dark:text-white dark:placeholder:text-bgDeepBlue border-lightGray text-14 focus:outline-none rounded-md"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-16 dark:text-white">
                    By clicking contact us button, you agree to our terms and
                    policy
                  </span>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-4 text-16 font-bold tracking-wider bg-blue text-white rounded-md hover:bg-darkBlue"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCommentSection;
