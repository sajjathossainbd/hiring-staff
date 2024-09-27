// import bannerPrice from '../../assets/pricing/pricing-page-banner.png'

import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import galleryPic1 from "../../assets/gallery/gallery-1.png";
import galleryPic2 from "../../assets/gallery/gallery-2.png";
import galleryPic3 from "../../assets/gallery/gallery-3.png";
import galleryPic4 from "../../assets/gallery/gallery-4.png";
import galleryPic5 from "../../assets/gallery/gallery-5.png";
import galleryPic6 from "../../assets/gallery/gallery-6.png";
import galleryPic7 from "../../assets/gallery/gallery-7.png";
import galleryPic8 from "../../assets/gallery/gallery-8.png";
import galleryPic9 from "../../assets/gallery/gallery-9.png";
import hiring from "../../assets/home/hiring/bg-right-hiring.svg";
<<<<<<< HEAD
=======
// import BlogCard from "../../components/shared/blogs/BlogCard";
>>>>>>> c5ab41fe92c88429c4cbdecae435b3a4bfef5f9f

function BlogsPage() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/newsBlog.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setContents(data);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    // changed this line
    <div className="">
      {/* <div className=""> */}
      <Helmet>
        <title>Hiring Staff - Blogs</title>
      </Helmet>
      <TinnyBanner
        title={"Blog"}
        subTitle={"Get the latest news, updates and tips"}
        currentPath={"Blog"}
      />

<<<<<<< HEAD
      <div className="container">
        <div className=" gap-24 grid lg:grid-cols-3 ">
          {contents.slice(5, 8).map((content) => (
            <Link key={content.id} to={`/blog-details/${content.id}`}>
              <div
                // key={id}
                className="h-[611px] w-[450px] hover:-translate-y-1 transition duration-300 bg-cover bg-center rounded-2xl relative bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"
                style={{
                  backgroundImage: `url(${content.image})`,
                }}
              >
                <h4 className="text-white absolute bottom-20 left-6">
                  {content.title}
                </h4>
                <div className="flex justify-between items-end mt-6 absolute bottom-5 left-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
                      alt=""
                    />
                    <div className="flex gap-9">
                      <h5 className="text-14 text-white">
                        {content.writer_name}
                      </h5>
                      <p className="text-12 mt-1 text-white">{content.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Blog card */}
        <div className="grid grid-cols-3 border container border-yellow-500">
          <div className=" grid lg:grid-cols-2 col-span-2  gap-y-5">
            {contents.map((content, id) => (
              <Link
                to={`/blog-details/${content.id}`}
                key={id}
                className="border-[.5px] border-lightGray hover:border-blue rounded-lg px-1 py-3 h-[559px] w-[420px] hover:-translate-y-1 transition duration-300"
              >
                <figure className="p-4">
                  <img
                    className="rounded-lg w-full"
                    src={content.image}
                    alt="Blog"
                  />
                </figure>
=======
      {/* <div className="container grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "> */}
      {/* changed now */}
      <div className="mx-auto container p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {contents.slice(5, 8).map((content) => (
          <Link key={content.id} to={`/blog-details/${content.id}`}>
            <div
              // key={id}
              className="h-[400px] md:h-[500px] lg:h-[611px] w-full hover:-translate-y-1 transition duration-300 bg-cover bg-center rounded-2xl relative bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"
              style={{
                backgroundImage: `url(${content.image})`,
              }}
            >
              <h4 className="text-white absolute bottom-20 left-6">
                {content.title}
              </h4>
              <div className="flex justify-between items-end mt-6 absolute bottom-5 left-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
                    alt=""
                  />
                  <div className="flex gap-9">
                    <h5 className="text-14 text-white">
                      {content.writer_name}
                    </h5>
                    <p className="text-12 mt-1 text-white">{content.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Blog card */}
      {/* <div className="grid grid-cols-3 border container border-yellow-500"> */}
      <div className="flex flex-col lg:flex-row gap-6 container">
        {/* <div className="w-2/3 grid lg:grid-cols-2 col-span-2 gap-y-5"> */}
        {/* now changed */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contents.map((content, id) => (
            <Link
              to={`/blog-details/${content.id}`}
              key={id}
              className="border-[.5px] border-lightGray hover:border-blue rounded-lg px-1 py-3  hover:-translate-y-1 transition duration-300 h-[600px] md:h-[500px] lg:h-[611px] w-full"
            >
              <figure className="p-4">
                <img
                  className="rounded-lg w-full"
                  src={content.image}
                  alt="Blog"
                />
              </figure>
>>>>>>> c5ab41fe92c88429c4cbdecae435b3a4bfef5f9f

              <div className="flex flex-wrap px-4 gap-2 mt-2">
                {content.topics.map((topic, index) => (
                  <p
                    key={index}
                    className="text-blue font-bold text-14 px-2 py-3 badge badge-outline border-none rounded bg-[#E0E6F7] dark:bg-darkBlue"
                  >
                    {topic}
                  </p>
                ))}
              </div>

              <div className="card-body p-4 gap-1 mt-3">
                <h4 className="hover:text-blue">{content.title}</h4>
                <p className="mt-1 text-14">{content.description}</p>

                <div className="flex justify-between items-end mt-6">
                  <div className="flex items-center gap-4">
                    <img
                      className="lg:w-12 w-8 lg:h-12 h-8  rounded-full"
                      src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g"
                      alt=""
                    />
                    <div>
                      <h5 className="lg:text-14 text-xs">
                        {content.writer_name}
                      </h5>
                      <p className="lg:text-12 text-[11px] lg:mt-1">
                        {content.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-12 mb-2">
                    <div className="text-xs">{content.time_since_read}</div>
                  </div>
                </div>
<<<<<<< HEAD
              </Link>
              // end
            ))}
          </div>
          <div className="col-span-1 ">
            <div className="h-28 w-auto border border-lightGray rounded-lg relative">
              <input
                type="text"
                placeholder=""
                className="h-16 w-[345px] mt-6 ml-10 border border-lightGray rounded-lg "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 absolute top-12 right-12"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className=" h-[700px] w-auto border border-lightGray hover:border-blue  rounded-lg mt-10 shadow-sm">
              {/* start */}
              <div className=" items-end mt-1">
                <h4 className="mr-3 mb-5 mt-3 ml-4 pb-2 border-b-2 border-lightGray ">
                  Recent Posts
                </h4>
                {/* <p className="divide-y"></p> */}
                {contents.slice(3, 8).map((content, index) => (
                  // <div key={index} className="flex">
                  //   <img src={content.image} alt="" />
                  //   <h6>{content.title}</h6>
                  // </div>
                  <div
                    key={index}
                    className="h-24 flex gap-4 ml-4 card-side bg-base-100 mb-1 w-auto rounded-md"
                  >
                    <figure>
                      <img
                        className="h-20 w-20 mt-1 rounded-lg"
                        src={content.image}
                        alt="Movie"
                      />
                    </figure>
                    <div className="mt-2">
                      <Link to={`/blog-details/${content.id}`}>
                        <h2 className="card-title text-sm hover:text-blue">
                          {content.title}
                        </h2>
                      </Link>
                      <p>{content.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* start end */}
            </div>
            {/* HIRING Part */}
            <div className="h-[600px] border border-lightGray hover:border-blue rounded-lg mt-10 shadow-sm ">
              <div className="h-[550px] w-[400px] m-auto border rounded-lg mt-5 bg-[#F2F6FD] shadow-sm border-lightGray pl-10 space-y-4 relative">
                <h3 className="text-[#B4C0E0] text-2xl font-light  pt-9">
                  WE ARE <br />
                  <span className="text-4xl font-extrabold text-[#66789C]">
                    HIRING
                  </span>
                </h3>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae architecto
                </p>
                <button className=" border-solid  text-xs px-2 py-2 rounded-md text-white bg-[#66789C] hover:text-[#66789C] hover:bg-white">
                  Know More
                </button>
                <div className="absolute bottom-0 right-0 ">
                  <img className="h-52 " src={hiring} alt="" />
                </div>
              </div>
            </div>
            {/* Gallery part */}
            <div className=" h-[530px] border rounded-lg mt-10 shadow-sm border-lightGray hover:border-blue">
              <h4 className="mr-3 mb-5 mt-3 ml-4 pb-2 border-b-2 border-lightGray ">
                Gallery
              </h4>
              <div className="grid grid-cols-3 gap-3 pl-3 mt-2 pr-3">
                <img className="object-cover w-full" src={galleryPic1} alt="" />
                <img className="object-cover w-full" src={galleryPic2} alt="" />
                <img className="object-cover w-full" src={galleryPic3} alt="" />
                <img className="object-cover w-full" src={galleryPic4} alt="" />
                <img className="object-cover w-full" src={galleryPic5} alt="" />
                <img className="object-cover w-full" src={galleryPic6} alt="" />
                <img className="object-cover w-full" src={galleryPic7} alt="" />
                <img className="object-cover w-full" src={galleryPic8} alt="" />
                <img className="object-cover w-full" src={galleryPic9} alt="" />
              </div>
=======
              </div>
            </Link>
            // end
          ))}
        </div>
        {/* <div className="col-span-1 "> */}
        {/* <div className="w-1/3 "> */}
        {/* Now changed */}
        <div className="w-full lg:w-1/3 space-y-10">
          <div className="lg:h-28 h-20 w-auto border border-lightGray rounded-lg  dark:bg-blue">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Here"
                className="lg:h-16 h-14 lg:w-[345px] md:w-[650px] w-[230px] lg:mt-6 mt-3  lg:ml-10 ml-7 border border-lightGray dark:border-none dark:outline-none px-4 rounded-lg "
              />
              {/* <input type="text" placeholder="" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70 absolute top-1/2 lg:left-[80%] md:left-[90%] left-[78%]"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="border-lightGray hover:border-blue mt-10 border rounded-lg p-6 shadow-sm">
            {/* <div className=" h-[700px] w-auto border border-lightGray hover:border-blue  rounded-lg mt-10 shadow-sm"> */}
            {/* start */}
            <div className=" items-end mt-1">
              <h4 className="mr-3 mb-5 mt-3 ml-4 pb-2 border-b-2 border-lightGray ">
                Recent Posts
              </h4>
              {/* <p className="divide-y"></p> */}
              {contents.slice(3, 8).map((content, index) => (
                // <div key={index} className="flex">
                //   <img src={content.image} alt="" />
                //   <h6>{content.title}</h6>
                // </div>
                <div
                  key={index}
                  className="h-24 flex gap-4 ml-4 card-side bg-bgLightWhite dark:bg-darkBlue dark:text-white mb-1 w-auto rounded-md"
                >
                  <figure>
                    <img
                      className="h-20 w-20 mt-1 rounded-lg"
                      src={content.image}
                      alt="Movie"
                    />
                  </figure>
                  <div className="mt-2">
                    <Link to={`/blog-details/${content.id}`}>
                      <h2 className="card-title text-sm hover:text-blue">
                        {content.title}
                      </h2>
                    </Link>
                    <p>{content.date}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* start end */}
          </div>
          {/* HIRING Part */}
          {/* <div className="border rounded-lg p-6 bg-[#F2F6FD] relative h-[600px] mt-10"> */}
          <div className="lg:h-[600px]  border border-lightGray hover:border-blue rounded-lg mt-10 shadow-sm ">
            <div className="lg:h-[550px] h-[400px] lg:w-[400px] lg:m-auto m-5 lg:mt-5 border rounded-lg bg-[#F2F6FD] dark:bg-darkBlue dark:text-white shadow-sm dark:border-none border-lightGray lg:pl-10 p-3  space-y-4 relative">
              <h3 className="text-[#B4C0E0] text-2xl font-light  pt-9">
                WE ARE <br />
                <span className="text-4xl font-extrabold text-[#66789C]">
                  HIRING
                </span>
              </h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto
              </p>
              <button className=" border-solid  text-xs px-2 py-2 rounded-md text-white bg-[#66789C] hover:text-[#66789C] hover:bg-white">
                Know More
              </button>
              <div className="absolute bottom-0 right-0 ">
                <img className="h-52 " src={hiring} alt="" />
              </div>
            </div>
          </div>
          {/* Gallery part */}
          <div className=" lg:h-[530px] border rounded-lg mt-10 shadow-sm border-lightGray hover:border-blue">
            <h4 className="mr-3 mb-5 mt-3 ml-4 pb-2 border-b-2 border-lightGray ">
              Gallery
            </h4>
            <div className="grid grid-cols-3 gap-3 pl-3 mt-2 pr-3 lg:pb-3 pb-3">
              <img className="object-cover w-full" src={galleryPic1} alt="" />
              <img className="object-cover w-full" src={galleryPic2} alt="" />
              <img className="object-cover w-full" src={galleryPic3} alt="" />
              <img className="object-cover w-full" src={galleryPic4} alt="" />
              <img className="object-cover w-full" src={galleryPic5} alt="" />
              <img className="object-cover w-full" src={galleryPic6} alt="" />
              <img className="object-cover w-full" src={galleryPic7} alt="" />
              <img className="object-cover w-full" src={galleryPic8} alt="" />
              <img className="object-cover w-full" src={galleryPic9} alt="" />
>>>>>>> c5ab41fe92c88429c4cbdecae435b3a4bfef5f9f
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
