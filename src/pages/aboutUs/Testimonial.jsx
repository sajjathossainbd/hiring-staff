import Rating from "../../components/shared/Rating";
import arrow from "../../assets/About-us/arrow.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/shared/SectionTitle";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Jacob Johns",
      role: "Businessman",
      rating: 4,
      description:
        "Jacob Johns provided exceptional business consultancy. His insights helped streamline our operations and increase profitability.",
      image:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      context: "company",
    },
    {
      name: "Emily Smith",
      role: "Software Engineer",
      rating: 5,
      description:
        "Emily Smith’s software development skills are outstanding. She delivered high-quality code and met all project deadlines.",
      image:
        "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg",
      context: "candidate",
    },
    {
      name: "Michael Brown",
      role: "Designer",
      rating: 5,
      description:
        "Michael Brown’s design work exceeded our expectations. His creativity and attention to detail were crucial to our project’s success.",
      image:
        "https://www.verywellmind.com/thmb/c3eqPSs3v_VgoD0xSIyZYHLJ3OE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1311372339-af583a5aa2ab46a1b884b961daca5232.jpg",
      context: "company",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Specialist",
      rating: 3,
      description:
        "Sarah Johnson’s marketing strategies significantly improved our brand visibility and engagement. Her expertise is invaluable.",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c7c30767980b31affc87b09/1602396079712-4JS2RJYHTAP5OXOUQ1SB/image-asset.jpeg",
      context: "company", // Indicates that this testimonial is for a company
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      rating: 4,
      description:
        "James Wilson demonstrated exceptional project management skills. His leadership ensured that our projects were completed on time and within budget Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem fugit.",
      image:
        "https://pbs.twimg.com/profile_images/1701342738216550400/nSJtOyum_400x400.jpg",
      context: "job", // Indicates that this testimonial is for a job
    },
    {
      name: "Olivia Martinez",
      role: "HR Specialist",
      rating: 4.3,
      description:
        "Olivia Martinez’s expertise in HR helped us build a stronger, more cohesive team. Her support and guidance were crucial for our growth.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgfTvKmQZl3ojuF0C4gijNXjYZPGvmmpsxSg&s",
      context: "job", // Indicates that this testimonial is for a job
    },
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <div className="w-1/2 mx-auto text-center pb-12">
        <SectionTitle
          title="Our Happy Customer"
          subTitle="
When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number."
        />
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper min-h-[26rem] lg:min-h-96"
        // Add responsive breakpoints
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens (mobile)
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens (tablet)
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens (desktop)
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border rounded-md border-[#EBEFFA] p-6 relative min-h-72 lg:min-h-52">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center">
                  <h5>{testimonial.context}</h5>
                  <span> - </span>
                  <Rating rating={testimonial.rating} />
                </div>
                <p className="select-none">
                  {testimonial.description.split(" ").length > 25
                    ? testimonial.description
                        .split(" ")
                        .slice(0, 25)
                        .join(" ") + "..."
                    : testimonial.description}
                </p>
              </div>
              {/* arrow png */}
              <img
                className="absolute top-[99%] left-10 bg-white"
                src={arrow}
                alt=""
              />
            </div>

            {/* name with image and role */}
            <div className="flex gap-4 items-center pt-8 relative left-7">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="flex flex-col gap-1">
                <h5>{testimonial.name}</h5>
                <span className="text-sm">{testimonial.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
