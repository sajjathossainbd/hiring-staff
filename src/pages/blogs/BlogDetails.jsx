// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/newsBlog.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedBlog = data.find((blog) => blog.id === parseInt(id));
        setDetails(selectedBlog);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching blog details:", err));
    setLoading(false);
  }, [id]);

  // loading
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!details) {
    return <p>No blog found for this ID.</p>;
  }

  return (
    <div className="container pt-0">
      <div>
        <img src={details.big_photo} alt="" />
      </div>
      <div className="mt-14 mx-auto space-y-4 container">
        <div className="flex flex-wrap px-4 gap-2 mt-2">
          {details.topics.map((topic, index) => (
            <p
              key={index}
              className="text-blue font-bold text-14 px-2 py-3 badge badge-outline border-none rounded bg-[#E0E6F7] dark:bg-blue dark:text-white space-y-3 m-auto"
            >
              {topic}
            </p>
          ))}
        </div>
        <h3 className="lg:ml-36">{details.title}</h3>
        <div className="flex space-x-5 justify-center">
          <div className="flex">
            <img
              className="w-12 h-12 rounded-full"
              src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
              alt=""
            />
            <h5 className="text-14 mt-4 ml-2">{details.writer_name}</h5>
          </div>
          <p className="text-12 mt-4">{details.date}</p>
          <p className="lg:mt-4 mt-4 text-xs">{details.time_since_read}</p>
        </div>
        <p className="border-b-2 border-lightGray pb-8">
          {details.description_two}
        </p>
      </div>
      <div className="container bg-red-0">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <div className=" mx-auto p-4 space-y-3">
              {/* <p className="text-16 text-blue">Contact Us</p> */}
              <h2>Leave a Comment</h2>
              <p className="text-16">
                Your email address will not be published. Required fields are
                marked *{" "}
              </p>
            </div>
            <div>
              <form className=" mx-auto p-4">
                {/* Name and Company fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company (optional)"
                      className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                    />
                  </div>
                </div>

                {/* Email and Phone fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-sm"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="mb-4">
                  <textarea
                    placeholder="Tell us about yourself"
                    rows="10"
                    className="w-full px-4 py-4 border border-lightGray text-14 focus:outline-none rounded-md"
                  ></textarea>
                </div>

                {/* Checkbox and Submit Button */}
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-16 ">
                      By clicking contact us button, you agree to our terms and
                      policy
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-4 text-16 font-bold tracking-wider bg-blue text-white rounded-md hover:bg-darkBlue"
                  >
                    {/* <span className="mr-2">
                      <img src={box} alt="box" />
                    </span> */}
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="lg:col-span-1 flex items-center justify-center">
            <img src={GetInTouchImg} alt="image" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
