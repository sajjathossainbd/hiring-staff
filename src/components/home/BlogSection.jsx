import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/newsBlog.json")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.slice(0, 3));
      });
  }, []);

  return (
    <section className="container">
      <div className=" ">
        <SectionTitle
          title={"News and Blog"}
          subTitle={"Get the latest news, updates and tips"}
        />

        <div className="flex flex-wrap gap-4 justify-center mt-14">
          {/* Job List */}
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {blogs.map((blog, id) => (
              <div
                key={id}
                className="card bg-base-100 lg:w-96 shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <figure className="p-3">
                  <img className="rounded-lg" src={blog.image} alt="Shoes" />
                </figure>
                <p className="ml-3 text-[14px] text-[#3C65F5] badge badge-outline rounded bg-[#E0E6F7]">
                  {blog.topic}
                </p>
                <div className="card-body">
                  <h2 className="card-title text-lg font-bold">{blog.title}</h2>
                  <p className="text-sm font-medium">{blog.description}</p>

                  <div className="flex justify-between mt-4">
                    <div className="flex gap-2">
                      <img
                        className="w-[35px] h-[35px] rounded-lg mt-2"
                        src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
                        alt=""
                      />
                      <div>
                        <h5 className="text-sm">{blog.writer_name}</h5>
                        <p className="text-[12px]">{blog.date}</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="">{blog.time_since_read}</div>
                      {/* <div className="badge badge-outline">Products</div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
