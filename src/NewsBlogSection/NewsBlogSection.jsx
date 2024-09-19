import { useEffect, useState } from 'react';
// import NewsBlogCard from './NewsBlogCard';
// import newsData from './newsJob.json'; // Adjust the path if necessary

const NewsBlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/newsBlog.json')
            .then(response => response.json())
            .then(data => {
                setBlogs(data.slice(0, 3));
                // const defaultCategory = "Content Writer";
                // setActiveCategory(defaultCategory);
                // const filtered = data.filter(job => job.category === defaultCategory);
                // setFilteredJobs(filtered.slice(0, 8)); // Show first 8 jobs by default
                // // setFilteredJobs(data.slice(0, 8)); // Show all jobs by default
            });
    }, []);


    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900 border">
            <div className=" mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                <h1 className="text-4xl font-bold leading-none text-center">News and Blog</h1>
                <p className="text-[16px] font-medium text-center">Get the latest news, updates and tips</p>
                {/* button */}

                <div className="flex flex-wrap gap-4 justify-center">



                    {/* Job List */}
                    <div className="grid gap-4 lg:grid-cols-3">
                        {blogs.map((blog, id) => (

                            <div key={id} className="card bg-base-100 lg:w-96 shadow-xl hover:-translate-y-1 transition duration-300">
                                <figure className='p-3'>
                                    <img className='rounded-lg'
                                        src={blog.image}
                                        alt="Shoes" />
                                </figure>
                                <p className='ml-3 text-[14px] text-[#3C65F5] badge badge-outline rounded bg-[#E0E6F7]'>{blog.topic}</p>
                                <div className="card-body">

                                    {/* <button className='btn btn-sm justify-start'></button> */}
                                    <h2 className="card-title text-lg font-bold">
                                        {blog.title}
                                    </h2>
                                    <p className='text-sm font-medium'>{blog.description}</p>

                                    <div className='flex justify-between mt-4'>
                                        <div className='flex gap-2'>
                                            <img className='w-[35px] h-[35px] rounded-lg mt-2' src="https://secure.gravatar.com/avatar/bb00cf69a3ae5d10043a9e2d3db9b173?s=64&d=mm&r=g" alt="" />
                                            <div>
                                                <h5 className='text-sm'>{blog.writer_name}</h5>
                                                <p className='text-[12px]'>{blog.date}</p>
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

export default NewsBlogSection;