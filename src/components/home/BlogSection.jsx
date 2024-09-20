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
      <div>
        <SectionTitle
          title={"News and Blog"}
          subTitle={"Get the latest news, updates and tips"}
        />

        <div className="flex flex-wrap gap-4 justify-center mt-14">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="card bg-base-100 border border-[#D2D4D7] shadow-xl hover:-translate-y-1 transition duration-300 pb-5"
              >
                <figure className="p-4">
                  <img className="rounded-lg" src={blog.image} alt="Blog" />
                </figure>

                <div className="flex flex-wrap px-5">
                  {blog.topics.map((topic, index) => (
                    <p
                      key={index}
                      className="text-blue font-bold text-14 px-2 py-3 badge badge-outline border-none rounded bg-[#E0E6F7]"
                    >
                      {topic}
                    </p>
                  ))}
                </div>

                <div className="card-body p-4 gap-1">
                  <h2 className="card-title text-lg font-bold">{blog.title}</h2>
                  <p className="text-sm font-medium">{blog.description}</p>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center gap-4 pt-2">
                      <img
                        className="w-12 h-12 rounded-lg"
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
