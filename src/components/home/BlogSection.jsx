import SectionTitle from "../shared/SectionTitle";
import Blogs from "../shared/blogs/Blogs";

const BlogSection = () => {
  return (
    <section className="container">
      <div>
        <SectionTitle
          title={"News and Blog"}
          subTitle={"Get the latest news, updates and tips"}
        />

        {/* All Blogs */}
        <Blogs />
      </div>
    </section>
  );
};

export default BlogSection;
