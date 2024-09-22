// import bannerPrice from '../../assets/pricing/pricing-page-banner.png'

import { Helmet } from "react-helmet-async"
import TinnyBanner from "../../components/shared/TinnyBanner"
import { useEffect, useState } from "react";


function BlogsPage() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/newsBlog.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setContents(data.slice(5, 8));
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Hiring Staff - About Us</title>
      </Helmet>
      <TinnyBanner
        title={"Blog"}
        subTitle={"Get the latest news, updates and tips"}
        currentPath={"Blog"}
      />
      <div className="container gap-24 grid lg:grid-cols-3">
        {
          contents.map((content, id) => (
            <div
              key={id}
              className="h-[611px] w-[450px] bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: `url(${content.big_photo})`
              }}
            >
              {/* <h1>{content.title}</h1> */}
            </div>

            // <div key={id} className="h-[611px] w-[450px] rounded-2xl overflow-hidden">
            //   <img
            //     src={content.big_photo}
            //     alt="Blog Image"
            //     className="h-full w-full object-cover"
            //   />
            // </div>

            // <div
            //   key={id}
            //   className="h-[611px] w-[450px] bg-contain bg-center rounded-2xl bg-no-repeat"
            //   style={{
            //     backgroundImage: `url(${content.big_photo})`,
            //   }}
            // >

            // </div>

          ))
        }
      </div>
    </div>
  )
}

export default BlogsPage