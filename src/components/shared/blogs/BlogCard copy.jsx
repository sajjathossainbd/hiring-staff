/* eslint-disable no-unused-vars */
function BlogCard(blog) {
  const { image, topics, description, writer_name, date, time_since_read } =
    blog;
  return (
    <div className="border-[.5px] border-lightGray hover:border-blue rounded-lg px-1 py-3">
      <figure className="p-4">
        <img className="rounded-lg w-full" src={blog.image} alt="Blog" />
      </figure>

      <div className="flex flex-wrap px-4 gap-2 mt-2">
        {blog.topics.map((topic, index) => (
          <p
            key={index}
            className="text-blue dark:text-blue font-bold text-14 px-2 py-3 badge badge-outline border-none rounded bg-[#E0E6F7]"
          >
            {topic}
          </p>
        ))}
      </div>

      <div className="card-body p-4 gap-1 mt-3">
        <h4 className="hover:text-blue">{blog.title}</h4>
        <p className="mt-1 text-14">{blog.description}</p>

        <div className="flex justify-between items-end mt-6">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
              alt=""
            />
            <div>
              <h5 className="text-14">{blog.writer_name}</h5>
              <p className="text-12 mt-1">{blog.date}</p>
            </div>
          </div>
          <div className="text-12 mb-2">
            <div className="">{blog.time_since_read}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
