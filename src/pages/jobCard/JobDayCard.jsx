import { useState } from "react";
// import JobButton from "./JobButton";
import { useEffect } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
// import { MdOutlineWorkOutline } from "react-icons/md";
import { WiTime7 } from "react-icons/wi";
// import { SiLibreofficewriter } from "react-icons/si";
// import { TfiHeadphoneAlt } from "react-icons/tfi";

const JobDayCard = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        "Content Writer",
        "Finance",
        "Human Resource",
        "Management",
        "Market Research",
        "Marketing & Sale",
        "Retail & Products",
        "Software"
    ];

    // SVG mapping for each category
    const categorySVGs = {
        "Content Writer": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/content-writer.svg",
        "Finance": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/finance.svg",
        "Human Resource": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/customer-service.svg",
        "Management": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/management.svg",
        "Market Research": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/research.svg",
        "Marketing & Sale": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/sale.svg",
        "Retail & Products": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/retail.svg",
        "Software": "https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/marketing.svg"
    };




    // content writer : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/content-writer.svg
    // Finance : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/finance.svg 
    // Human Resource : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/customer-service.svg
    // Management : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/management.svg
    // Market Research : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/research.svg
    // Marketing & Sale : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/sale.svg
    // Retail & Products : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/retail.svg
    // Software : https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/marketing.svg

    // Icon mapping for each category
    // const categoryIcons = {
    //     "Content Writer": <SiLibreofficewriter />,
    //     "Finance": <MdAttachMoney />,
    //     "Human Resource": <TfiHeadphoneAlt />,
    //     "Management": <FaBriefcase />,
    //     "Market Research": <FaSearch />,
    //     "Marketing & Sale": <FaBullhorn />,
    //     "Retail & Products": <FaShoppingCart />,
    //     "Software": <FaCode />
    // };


    // Fetch data from the jobCard.json file
    useEffect(() => {
        fetch('/jobCard.json')
            .then(response => response.json())
            .then(data => {
                // setJobs(data);
                // setFilteredJobs(data.slice(0, 8)); // Show all jobs by default
                setJobs(data);
                const defaultCategory = "Content Writer";
                setActiveCategory(defaultCategory);
                const filtered = data.filter(job => job.category === defaultCategory);
                setFilteredJobs(filtered.slice(0, 8)); // Show first 8 jobs by default
            });
    }, []);

    // Filter jobs by category
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        const filtered = jobs.filter(job => job.category === category);
        setFilteredJobs(filtered.slice(0, 8));
    };

    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900 border">
            <div className=" mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                <h1 className="text-4xl font-bold leading-none text-center">Jobs of the day</h1>
                <p className="text-[16px] font-medium text-center">Search and connect with the right candidates faster</p>
                {/* button */}

                <div className="flex flex-wrap gap-4 justify-center">
                    <div className="flex flex-wrap gap-2 mb-5">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(category)}

                                // className="rounded-2xl border border-solid border-blue bg-white px-6 py-3 font-bold text-xs uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"

                                className={`rounded-2xl border border-solid px-6 py-3 font-bold text-xs uppercase transition-all duration-300 
                                    ${activeCategory === category
                                        ? 'text-white  bg-[#F8FAFF] border-blue'
                                        : 'bg-white text-black border-[#B4C0E0] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black]'
                                    }`}
                            >
                                <img
                                    src={categorySVGs[category]}
                                    alt={`${category} icon`}
                                    className="inline-block w-6 h-6 mr-2"
                                />
                                {category}
                            </button>
                        ))}
                    </div>


                    {/* Job List */}
                    <div className="grid gap-4 lg:grid-cols-4">
                        {filteredJobs.map((job, index) => (
                            <div key={index} className="card h-[340px] w-[310px] border border-[#B4C0E0] hover:-translate-y-1 hover:bg-[white] transition duration-300 bg-[#F8FAFF]">
                                {/* <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />                                    
                                </figure> */}
                                <div className="card-body">
                                    <h3 className="text-lg font-bold">{job.job_title}</h3>
                                    <p className="card-title text-xs">
                                        <IoBriefcaseOutline /> {job.job_type}
                                        <div className="card-title text-xs"><WiTime7 />{job.job_post_time}</div>
                                    </p>
                                    <p className="text-[14px]">{job.job_description}</p>
                                    <div className="">
                                        <div className="badge  rounded mr-3 p-1 bg-[#EFF3FC]">App</div>
                                        <div className="badge  rounded p-1 bg-[#EFF3FC]">Figma</div>
                                        {/* <div className="badge badge-outline rounded">Products</div> */}
                                        {/* <button className="btn btn-sm">Small</button>
                                        <button className="btn btn-sm">Small</button>
                                        <button className="btn btn-sm">Small</button> */}
                                    </div>
                                    <div className="card-actions ">
                                        <button className="ml-auto btn btn-sm text-[12px] font-semibold bg-[#E0E6F7] hover:bg-blue hover:text-[white]">Apply Now</button>
                                    </div>
                                </div>
                            </div>

                            // <div key={index} className="border p-4 rounded shadow-md">
                            //     <h3 className="text-lg font-bold">{job.job_title}</h3>
                            //     <p className="text-sm text-gray-500">{job.job_type} - {job.job_post_time}</p>
                            //     <p className="mt-2">{job.job_description}</p>
                            // </div>
                        ))}
                    </div>


                </div>

            </div>
        </section>
    );
};

export default JobDayCard;